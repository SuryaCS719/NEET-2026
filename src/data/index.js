import { physicsByYear } from './physics_bank.js';
import { chemByYear } from './chem_bank.js';
import { bioByYear } from './bio_bank.js';
import { PDF_LINKS } from './pdfLinks.js';

const YEARS = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

// Build per-year question sets (45 per subject = 180 total)
export function getQuestionsByYear(year) {
    const y = String(year);
    const physics = (physicsByYear[y] || []).slice(0, 45).map((q, i) => ({
        ...q,
        index: i,
        subject: 'Physics',
        year,
    }));
    const chem = (chemByYear[y] || []).slice(0, 45).map((q, i) => ({
        ...q,
        index: 45 + i,
        subject: 'Chemistry',
        year,
    }));
    const bio = (bioByYear[y] || []).slice(0, 90).map((q, i) => ({
        ...q,
        index: 90 + i,
        subject: i < 45 ? 'Botany' : 'Zoology',
        year,
    }));
    return [...physics, ...chem, ...bio];
}

// Build mixed mock from random questions across all years
export function getMixedQuestions() {
    const allBySubject = { Physics: [], Chemistry: [], Botany: [], Zoology: [] };

    YEARS.forEach(year => {
        const y = String(year);
        (physicsByYear[y] || []).forEach(q => allBySubject.Physics.push({ ...q, year }));
        (chemByYear[y] || []).forEach(q => allBySubject.Chemistry.push({ ...q, year }));
        const bio = (bioByYear[y] || []);
        bio.slice(0, 45).forEach(q => allBySubject.Botany.push({ ...q, subject: 'Botany', year }));
        bio.slice(45, 90).forEach(q => allBySubject.Zoology.push({ ...q, subject: 'Zoology', year }));
    });

    // Shuffle and pick 45 from each
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const physics = shuffle(allBySubject.Physics).slice(0, 45).map((q, i) => ({ ...q, index: i }));
    const chem = shuffle(allBySubject.Chemistry).slice(0, 45).map((q, i) => ({ ...q, index: 45 + i }));
    const botany = shuffle(allBySubject.Botany).slice(0, 45).map((q, i) => ({ ...q, subject: 'Botany', index: 90 + i }));
    const zoology = shuffle(allBySubject.Zoology).slice(0, 45).map((q, i) => ({ ...q, subject: 'Zoology', index: 135 + i }));
    return [...physics, ...chem, ...botany, ...zoology];
}

// PDF links: in-repo for small files (2022–2025), external for larger ones (2019–2021)
const BASE = import.meta.env.BASE_URL;

export const MODULES = [
    { id: 'mixed', label: 'Full Mixed Mock', icon: '🔀', description: 'Randomized from all years 2019–2025', year: null, pdfUrl: null },
    { id: '2025', label: 'NEET 2025', icon: '📅', description: '45 × 4 questions from 2025 paper', year: 2025, pdfUrl: PDF_LINKS[2025] },
    { id: '2024', label: 'NEET 2024', icon: '📅', description: '45 × 4 questions from 2024 paper', year: 2024, pdfUrl: PDF_LINKS[2024] },
    { id: '2023', label: 'NEET 2023', icon: '📅', description: '45 × 4 questions from 2023 paper', year: 2023, pdfUrl: PDF_LINKS[2023] },
    { id: '2022', label: 'NEET 2022', icon: '📅', description: '45 × 4 questions from 2022 paper', year: 2022, pdfUrl: PDF_LINKS[2022] },
    { id: '2021', label: 'NEET 2021', icon: '📅', description: '45 × 4 questions from 2021 paper', year: 2021, pdfUrl: PDF_LINKS[2021] },
    { id: '2020', label: 'NEET 2020', icon: '📅', description: '45 × 4 questions from 2020 paper', year: 2020, pdfUrl: PDF_LINKS[2020] },
    { id: '2019', label: 'NEET 2019', icon: '📅', description: '45 × 4 questions from 2019 paper', year: 2019, pdfUrl: PDF_LINKS[2019] },
];

export const SUBJECTS = ['Physics', 'Chemistry', 'Botany', 'Zoology'];

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

export { YEARS };
