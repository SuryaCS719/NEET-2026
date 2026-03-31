import { physicsByYear } from './physics_bank.js';
import { chemByYear } from './chem_bank.js';
import { bioByYear } from './bio_bank.js';
import { PDF_LINKS } from './pdfLinks.js';

const YEARS = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
const SUBJECTS = ['Physics', 'Chemistry', 'Botany', 'Zoology'];

const SUBJECT_SIZE = {
    Physics: 45,
    Chemistry: 45,
    Botany: 45,
    Zoology: 45,
};

const SUBJECT_SEEDS = {
    Physics: 11111,
    Chemistry: 22222,
    Botany: 33333,
    Zoology: 44444,
};

// Stable Fisher-Yates shuffle using a seed (same seed = same result every time)
function seededShuffle(arr, seed) {
    const a = [...arr];
    let s = seed >>> 0;
    for (let i = a.length - 1; i > 0; i--) {
        s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
        const j = s % (i + 1);
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function randomShuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function normalizeQuestionText(text) {
    return (text || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function uniqueByQuestion(questions) {
    const seen = new Set();
    const out = [];

    for (const q of questions || []) {
        const key = normalizeQuestionText(q.question);
        if (!key || seen.has(key)) continue;
        seen.add(key);
        out.push(q);
    }

    return out;
}

function collectBySubject(bank, subject) {
    return YEARS.flatMap((year) => {
        const list = bank[String(year)] || [];
        if (!subject) return list;
        return list.filter((q) => q.subject === subject);
    });
}

function getYearSubjectList(year, subject) {
    if (subject === 'Physics') return physicsByYear[String(year)] || [];
    if (subject === 'Chemistry') return chemByYear[String(year)] || [];
    if (subject === 'Botany' || subject === 'Zoology') {
        return (bioByYear[String(year)] || []).filter((q) => q.subject === subject);
    }
    return [];
}

function signatureForQuestions(questions, takeCount) {
    const keys = (questions || [])
        .map((q) => normalizeQuestionText(q.question))
        .filter(Boolean)
        .sort();
    return keys.slice(0, takeCount).join('||');
}

function buildDuplicateSignatureMap() {
    const map = {};

    for (const subject of SUBJECTS) {
        const seen = new Map();
        map[subject] = new Set();

        for (const year of YEARS) {
            const signature = signatureForQuestions(getYearSubjectList(year, subject), SUBJECT_SIZE[subject]);
            if (!signature) continue;

            if (seen.has(signature)) {
                map[subject].add(year);
            } else {
                seen.set(signature, year);
            }
        }
    }

    return map;
}

function signatureFromList(questions) {
    return signatureForQuestions(questions, questions.length);
}

function makeSeed(subject, year, attempt = 0) {
    return (SUBJECT_SEEDS[subject] + year * 131 + attempt * 104729) >>> 0;
}

const subjectPools = {
    Physics: seededShuffle(uniqueByQuestion(collectBySubject(physicsByYear)), SUBJECT_SEEDS.Physics),
    Chemistry: seededShuffle(uniqueByQuestion(collectBySubject(chemByYear)), SUBJECT_SEEDS.Chemistry),
    Botany: seededShuffle(uniqueByQuestion(collectBySubject(bioByYear, 'Botany')), SUBJECT_SEEDS.Botany),
    Zoology: seededShuffle(uniqueByQuestion(collectBySubject(bioByYear, 'Zoology')), SUBJECT_SEEDS.Zoology),
};

const duplicateYearSignatures = buildDuplicateSignatureMap();
const yearSubjectPicks = {};

function pickDistinctFromPool(subject, year, required, usedSignatures) {
    const pool = subjectPools[subject] || [];
    if (pool.length === 0) return [];

    for (let attempt = 0; attempt < 300; attempt++) {
        const candidate = seededShuffle(pool, makeSeed(subject, year, attempt)).slice(0, required);
        const sig = signatureFromList(candidate);
        if (!usedSignatures.has(sig)) return candidate;
    }

    // Extremely unlikely fallback: return deterministic candidate even if duplicated.
    return seededShuffle(pool, makeSeed(subject, year, 999)).slice(0, required);
}

function buildYearSubjectPicks() {
    for (const subject of SUBJECTS) {
        const required = SUBJECT_SIZE[subject];
        const usedSignatures = new Set();
        yearSubjectPicks[subject] = {};

        for (const year of YEARS) {
            const rawYearList = uniqueByQuestion(getYearSubjectList(year, subject));
            const shouldUseRaw = rawYearList.length >= required && !duplicateYearSignatures[subject].has(year);

            let chosen = shouldUseRaw
                ? seededShuffle(rawYearList, makeSeed(subject, year)).slice(0, required)
                : pickDistinctFromPool(subject, year, required, usedSignatures);

            let sig = signatureFromList(chosen);
            if (usedSignatures.has(sig)) {
                chosen = pickDistinctFromPool(subject, year, required, usedSignatures);
                sig = signatureFromList(chosen);
            }

            usedSignatures.add(sig);
            yearSubjectPicks[subject][year] = chosen;
        }
    }
}

buildYearSubjectPicks();

function pickSubjectQuestionsForYear(subject, year) {
    const required = SUBJECT_SIZE[subject];
    const planned = yearSubjectPicks[subject]?.[year] || [];
    const base = planned.length >= required ? planned : (subjectPools[subject] || []).slice(0, required);
    return randomShuffle(base);
}

function withMeta(questions, subject, startIndex, year = null) {
    return questions.map((q, i) => ({
        ...q,
        index: startIndex + i,
        subject,
        year: year ?? q.year ?? null,
    }));
}

/**
 * Return 180 questions for a specific year.
 * Uses that year's subject paper when unique; if duplicate paper is detected,
 * picks a deterministic distinct subject slice from the global pool.
 */
export function getQuestionsByYear(year) {
    const physics = withMeta(pickSubjectQuestionsForYear('Physics', year), 'Physics', 0, year);
    const chem = withMeta(pickSubjectQuestionsForYear('Chemistry', year), 'Chemistry', 45, year);
    const botany = withMeta(pickSubjectQuestionsForYear('Botany', year), 'Botany', 90, year);
    const zoology = withMeta(pickSubjectQuestionsForYear('Zoology', year), 'Zoology', 135, year);

    return [...physics, ...chem, ...botany, ...zoology];
}

/**
 * Return 180 fully random questions drawn from the deduplicated subject pools.
 */
export function getMixedQuestions() {
    const pick = (subject) => {
        const n = SUBJECT_SIZE[subject];
        const pool = subjectPools[subject] || [];
        if (pool.length >= n) return randomShuffle(pool).slice(0, n);

        if (pool.length === 0) return [];

        const out = [];
        while (out.length < n) {
            out.push(pool[out.length % pool.length]);
        }
        return randomShuffle(out);
    };

    const physics = withMeta(pick('Physics'), 'Physics', 0);
    const chem = withMeta(pick('Chemistry'), 'Chemistry', 45);
    const botany = withMeta(pick('Botany'), 'Botany', 90);
    const zoology = withMeta(pick('Zoology'), 'Zoology', 135);

    return [...physics, ...chem, ...botany, ...zoology];
}

export const MODULES = [
    { id: 'mixed', label: 'Full Mixed Mock', icon: '🔀', description: 'Fully shuffled · draws from all 7 years (2019–2025) · new mix every attempt', year: null, pdfUrl: null },
    { id: '2025', label: 'NEET 2025', icon: '📅', description: '45 × 4 from 2025 paper · randomized order', year: 2025, pdfUrl: PDF_LINKS[2025] },
    { id: '2024', label: 'NEET 2024', icon: '📅', description: '45 × 4 from 2024 paper · randomized order', year: 2024, pdfUrl: PDF_LINKS[2024] },
    { id: '2023', label: 'NEET 2023', icon: '📅', description: '45 × 4 from 2023 paper · randomized order', year: 2023, pdfUrl: PDF_LINKS[2023] },
    { id: '2022', label: 'NEET 2022', icon: '📅', description: '45 × 4 from 2022 paper · randomized order', year: 2022, pdfUrl: PDF_LINKS[2022] },
    { id: '2021', label: 'NEET 2021', icon: '📅', description: '45 × 4 from 2021 paper · randomized order', year: 2021, pdfUrl: PDF_LINKS[2021] },
    { id: '2020', label: 'NEET 2020', icon: '📅', description: '45 × 4 from 2020 paper · randomized order', year: 2020, pdfUrl: PDF_LINKS[2020] },
    { id: '2019', label: 'NEET 2019', icon: '📅', description: '45 × 4 from 2019 paper · randomized order', year: 2019, pdfUrl: PDF_LINKS[2019] },
];

export const SUBJECT_RANGES = {
    Physics: [0, 44],
    Chemistry: [45, 89],
    Botany: [90, 134],
    Zoology: [135, 179],
};

export const SUBJECT_COLORS = {
    Physics: '#6366f1',
    Chemistry: '#10b981',
    Botany: '#f59e0b',
    Zoology: '#ef4444',
};

export { YEARS, SUBJECTS };
