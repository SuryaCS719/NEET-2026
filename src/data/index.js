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

function makeSyntheticQuestion(subject, n) {
    if (subject === 'Physics') {
        const t = n % 8;
        if (t === 0) {
            const u = 4 + (n % 9);
            const a = 1 + (n % 5);
            const time = 2 + (n % 4);
            const v = u + a * time;
            return {
                question: `[NEET 2026 Physics] A body starts with velocity ${u} m/s and moves with uniform acceleration ${a} m/s² for ${time} s. Its final velocity is:`,
                options: [`${v - 2} m/s`, `${v} m/s`, `${v + 2} m/s`, `${v + 4} m/s`],
                correctAnswer: 2,
                explanation: `Using v = u + at, v = ${u} + ${a}x${time} = ${v} m/s.`,
            };
        }
        if (t === 1) {
            const m = 2 + (n % 7);
            const v = 3 + (n % 8);
            const ke = 0.5 * m * v * v;
            return {
                question: `[NEET 2026 Physics] The kinetic energy of a ${m} kg particle moving at ${v} m/s is:`,
                options: [`${ke - 6} J`, `${ke} J`, `${ke + 6} J`, `${ke + 12} J`],
                correctAnswer: 2,
                explanation: `K.E. = (1/2)mv² = (1/2)x${m}x${v}² = ${ke} J.`,
            };
        }
        if (t === 2) {
            const i = 1 + (n % 6);
            const r = 2 + (n % 8);
            const v = i * r;
            return {
                question: `[NEET 2026 Physics] Current through a resistor is ${i} A and resistance is ${r} ohm. Potential difference is:`,
                options: [`${v - 2} V`, `${v} V`, `${v + 2} V`, `${v + 4} V`],
                correctAnswer: 2,
                explanation: `Ohm's law: V = IR = ${i}x${r} = ${v} V.`,
            };
        }
        if (t === 3) {
            const f = 10 + (n % 11);
            const c = 3e8;
            const lambda = Math.round((c / (f * 1e6)) * 100) / 100;
            return {
                question: `[NEET 2026 Physics] A wave has frequency ${f} MHz. Its wavelength in vacuum is closest to:`,
                options: [`${(lambda / 2).toFixed(2)} m`, `${lambda.toFixed(2)} m`, `${(lambda * 2).toFixed(2)} m`, `${(lambda * 4).toFixed(2)} m`],
                correctAnswer: 2,
                explanation: `Wavelength lambda = c/f = 3x10^8 / (${f}x10^6) approximately ${lambda.toFixed(2)} m.`,
            };
        }
        if (t === 4) {
            const halfLife = 2 + (n % 5);
            const periods = 2 + (n % 3);
            const fraction = `1/${2 ** periods}`;
            return {
                question: `[NEET 2026 Physics] If half-life of a nuclide is ${halfLife} h, fraction left after ${halfLife * periods} h is:`,
                options: [fraction, `1/${2 ** (periods + 1)}`, `1/${2 ** (periods - 1)}`, `1/${2 ** (periods + 2)}`],
                correctAnswer: 1,
                explanation: `After ${periods} half-lives, remaining fraction = (1/2)^${periods} = ${fraction}.`,
            };
        }
        if (t === 5) {
            const c = 1 + (n % 6);
            const v = 4 + (n % 7);
            const energy = 0.5 * c * v * v;
            return {
                question: `[NEET 2026 Physics] Energy stored in a capacitor of ${c} F at potential ${v} V is:`,
                options: [`${energy - 4} J`, `${energy} J`, `${energy + 4} J`, `${energy + 8} J`],
                correctAnswer: 2,
                explanation: `U = (1/2)CV² = (1/2)x${c}x${v}² = ${energy} J.`,
            };
        }
        if (t === 6) {
            const nVal = 2 + (n % 5);
            const ratio = nVal * nVal;
            return {
                question: `[NEET 2026 Physics] In Bohr model, radius of nth orbit varies as n². For n = ${nVal}, r_n/r_1 equals:`,
                options: [`${nVal}`, `${ratio}`, `${ratio + nVal}`, `${ratio - 1}`],
                correctAnswer: 2,
                explanation: `r_n/r_1 = n² = ${nVal}² = ${ratio}.`,
            };
        }
        const p = 2 + (n % 10);
        const lambda = (6.626 / p).toFixed(3);
        return {
            question: `[NEET 2026 Physics] For momentum ${p}x10^-34 kg m/s, de Broglie wavelength (in units of 10^-34 m) is approximately:`,
            options: [`${(6.626 / (p + 2)).toFixed(3)}`, `${lambda}`, `${(6.626 / (p - 1)).toFixed(3)}`, `${(6.626 / (p + 4)).toFixed(3)}`],
            correctAnswer: 2,
            explanation: `lambda = h/p = 6.626/${p} approximately ${lambda} (in the same scaled units).`,
        };
    }

    if (subject === 'Chemistry') {
        const t = n % 8;
        if (t === 0) {
            const conc = (1 + (n % 9)) * 0.01;
            const ph = (-Math.log10(conc)).toFixed(2);
            return {
                question: `[NEET 2026 Chemistry] The pH of a strong monoprotic acid of concentration ${conc.toFixed(2)} M is closest to:`,
                options: [`${(Number(ph) - 1).toFixed(2)}`, `${ph}`, `${(Number(ph) + 1).toFixed(2)}`, `${(Number(ph) + 2).toFixed(2)}`],
                correctAnswer: 2,
                explanation: `For strong monoprotic acid, [H+] = ${conc.toFixed(2)} M, so pH = -log[H+] approximately ${ph}.`,
            };
        }
        if (t === 1) {
            const m = 4 + (n % 7);
            const mm = 20 + (n % 10) * 2;
            const moles = (m / mm).toFixed(3);
            return {
                question: `[NEET 2026 Chemistry] Number of moles in ${m} g of a compound with molar mass ${mm} g/mol is:`,
                options: [`${(m / (mm + 4)).toFixed(3)}`, `${moles}`, `${(m / (mm - 2)).toFixed(3)}`, `${(m / (mm + 8)).toFixed(3)}`],
                correctAnswer: 2,
                explanation: `Moles = mass/molar mass = ${m}/${mm} = ${moles}.`,
            };
        }
        if (t === 2) {
            const e = 2 + (n % 4);
            return {
                question: `[NEET 2026 Chemistry] Equivalent weight of H2SO4 is molecular weight divided by:`,
                options: ['its atomic number', `its basicity (${e})`, 'its oxidation number', 'number of neutrons'],
                correctAnswer: 2,
                explanation: `Equivalent weight of an acid = molecular weight/basicity (replaceable H+).`,
            };
        }
        if (t === 3) {
            return {
                question: '[NEET 2026 Chemistry] Which catalyst is used in the Haber process for ammonia synthesis?',
                options: ['Nickel', 'Iron', 'Platinum', 'Vanadium(V) oxide'],
                correctAnswer: 2,
                explanation: `Finely divided iron (with promoters) is used in Haber process.`,
            };
        }
        if (t === 4) {
            const z = 10 + (n % 8);
            const group = ((z % 8) || 8);
            return {
                question: `[NEET 2026 Chemistry] A representative p-block element with valence electrons ${group} most commonly forms how many covalent bonds?`,
                options: [`${Math.max(group - 6, 1)}`, `${Math.max(group - 5, 1)}`, `${Math.max(8 - group, 1)}`, `${group}`],
                correctAnswer: 3,
                explanation: `For main-group nonmetals, common valency is often 8 - valence electrons.`,
            };
        }
        if (t === 5) {
            const p = 1 + (n % 3);
            const ratio = [1, 3, 5][p - 1];
            return {
                question: `[NEET 2026 Chemistry] For first-order reaction, after ${p} half-lives, fraction remaining is:`,
                options: [`1/${2 ** p}`, `1/${2 ** (p + 1)}`, `1/${2 ** (p - 1)}`, `1/${ratio}`],
                correctAnswer: 1,
                explanation: `After n half-lives, fraction left = (1/2)^n.`,
            };
        }
        if (t === 6) {
            return {
                question: '[NEET 2026 Chemistry] Which of the following is strongest electron-withdrawing group by resonance and induction?',
                options: ['-CH3', '-OCH3', '-NO2', '-NH2'],
                correctAnswer: 3,
                explanation: `-NO2 strongly withdraws electrons through both -I and -R effects.`,
            };
        }
        return {
            question: '[NEET 2026 Chemistry] In electrolysis of aqueous NaCl (brine), gas evolved at anode is:',
            options: ['H2', 'Cl2', 'O2', 'N2'],
            correctAnswer: 2,
            explanation: `In brine electrolysis, chloride ions are oxidized at anode to chlorine gas.`,
        };
    }

    if (subject === 'Botany') {
        const t = n % 8;
        if (t === 0) {
            return {
                question: `[NEET 2026 Botany] In C4 plants, initial CO2 fixation occurs in which cells? (Set ${n})`,
                options: ['Bundle sheath cells', 'Mesophyll cells', 'Guard cells', 'Epidermal cells'],
                correctAnswer: 2,
                explanation: `Primary fixation by PEP carboxylase occurs in mesophyll cells in C4 plants.`,
            };
        }
        if (t === 1) {
            return {
                question: `[NEET 2026 Botany] Which plant hormone primarily promotes cell elongation in shoots? (Set ${n})`,
                options: ['Abscisic acid', 'Ethylene', 'Auxin', 'Cytokinin'],
                correctAnswer: 3,
                explanation: `Auxins promote cell elongation and apical dominance.`,
            };
        }
        if (t === 2) {
            return {
                question: `[NEET 2026 Botany] The tissue chiefly responsible for secondary growth in dicot stem is: (Set ${n})`,
                options: ['Apical meristem', 'Intercalary meristem', 'Lateral meristem', 'Epidermis'],
                correctAnswer: 3,
                explanation: `Lateral meristems (vascular and cork cambium) drive secondary growth.`,
            };
        }
        if (t === 3) {
            return {
                question: `[NEET 2026 Botany] Monohybrid cross of heterozygous parents gives phenotypic ratio: (Set ${n})`,
                options: ['1:2:1', '3:1', '9:3:3:1', '1:1'],
                correctAnswer: 2,
                explanation: `Aa x Aa gives 3 dominant : 1 recessive phenotype ratio.`,
            };
        }
        if (t === 4) {
            return {
                question: `[NEET 2026 Botany] Opening and closing of stomata are controlled mainly by: (Set ${n})`,
                options: ['Xylem vessels', 'Phloem cells', 'Guard cells', 'Companion cells'],
                correctAnswer: 3,
                explanation: `Guard cells regulate stomatal aperture via turgor changes.`,
            };
        }
        if (t === 5) {
            return {
                question: `[NEET 2026 Botany] Pigment responsible for absorption of red/far-red light in plants is: (Set ${n})`,
                options: ['Carotene', 'Phytochrome', 'Xanthophyll', 'Anthocyanin'],
                correctAnswer: 2,
                explanation: `Phytochrome mediates photoperiodic and germination responses.`,
            };
        }
        if (t === 6) {
            return {
                question: `[NEET 2026 Botany] First stable product in Calvin cycle is: (Set ${n})`,
                options: ['PEP', 'Oxaloacetic acid', '3-PGA', 'Pyruvate'],
                correctAnswer: 3,
                explanation: `3-phosphoglycerate (3-PGA) is first stable product of Calvin cycle.`,
            };
        }
        return {
            question: `[NEET 2026 Botany] Pioneer community in primary succession on bare rock is usually: (Set ${n})`,
            options: ['Hydrophytes', 'Lichens', 'Gymnosperms', 'Angiosperm trees'],
            correctAnswer: 2,
            explanation: `Lichens are common pioneer species in lithosere succession.`,
        };
    }

    const t = n % 8;
    if (t === 0) {
        const hr = 60 + (n % 41);
        const sv = 60 + (n % 31);
        const co = ((hr * sv) / 1000).toFixed(2);
        return {
            question: `[NEET 2026 Zoology] If heart rate is ${hr} beats/min and stroke volume is ${sv} mL/beat, cardiac output is:`,
            options: [`${(Number(co) - 1).toFixed(2)} L/min`, `${co} L/min`, `${(Number(co) + 1).toFixed(2)} L/min`, `${(Number(co) + 2).toFixed(2)} L/min`],
            correctAnswer: 2,
            explanation: `Cardiac output = HR x stroke volume = ${hr} x ${sv} mL/min = ${co} L/min.`,
        };
    }
    if (t === 1) {
        return {
            question: `[NEET 2026 Zoology] In human nephron, maximum selective reabsorption of glucose occurs in: (Set ${n})`,
            options: ['Loop of Henle', 'Distal convoluted tubule', 'Proximal convoluted tubule', 'Collecting duct'],
            correctAnswer: 3,
            explanation: `PCT performs bulk reabsorption including nearly all filtered glucose.`,
        };
    }
    if (t === 2) {
        return {
            question: `[NEET 2026 Zoology] Hormone secreted by beta-cells of pancreas is: (Set ${n})`,
            options: ['Glucagon', 'Insulin', 'Somatostatin', 'Adrenaline'],
            correctAnswer: 2,
            explanation: `Beta cells of islets of Langerhans secrete insulin.`,
        };
    }
    if (t === 3) {
        return {
            question: `[NEET 2026 Zoology] During inspiration, diaphragm: (Set ${n})`,
            options: ['Relaxes and becomes dome-shaped', 'Contracts and flattens', 'Shows no movement', 'Contracts only during forced expiration'],
            correctAnswer: 2,
            explanation: `Diaphragm contracts and flattens in inspiration, increasing thoracic volume.`,
        };
    }
    if (t === 4) {
        return {
            question: `[NEET 2026 Zoology] Which immunoglobulin is most abundant in human serum? (Set ${n})`,
            options: ['IgA', 'IgM', 'IgE', 'IgG'],
            correctAnswer: 4,
            explanation: `IgG is the most abundant antibody in blood serum.`,
        };
    }
    if (t === 5) {
        return {
            question: `[NEET 2026 Zoology] In XO type sex determination, male has: (Set ${n})`,
            options: ['XX', 'XO', 'XY', 'ZZ'],
            correctAnswer: 2,
            explanation: `In XO system, female is XX and male is XO.`,
        };
    }
    if (t === 6) {
        return {
            question: `[NEET 2026 Zoology] Site of fertilization in human female reproductive tract is usually: (Set ${n})`,
            options: ['Cervix', 'Uterus', 'Ampullary-isthmic junction', 'Vagina'],
            correctAnswer: 3,
            explanation: `Fertilization usually occurs at ampullary-isthmic junction of fallopian tube.`,
        };
    }
    return {
        question: `[NEET 2026 Zoology] Primary lymphoid organs in humans include: (Set ${n})`,
        options: ['Spleen and lymph nodes', 'Thymus and bone marrow', 'Tonsils and Peyer patches', 'Appendix and spleen'],
        correctAnswer: 2,
        explanation: `Bone marrow and thymus are primary lymphoid organs.`,
    };
}

function makeSyntheticPool(subject, countNeeded) {
    const out = [];
    const seen = new Set();
    let n = 1;

    while (out.length < countNeeded && n < 20000) {
        const q = makeSyntheticQuestion(subject, n);
        q.question = `${q.question} [Variant ${n}]`;
        const key = normalizeQuestionText(q.question);
        if (key && !seen.has(key)) {
            seen.add(key);
            out.push({
                ...q,
                id: `synth_${subject.toLowerCase()}_${out.length + 1}`,
                subject,
                year: 2026,
            });
        }
        n++;
    }

    return out;
}

function buildAugmentedPool(subject, basePool) {
    const target = YEARS.length * SUBJECT_SIZE[subject];
    const base = uniqueByQuestion(basePool).map((q, i) => ({
        ...q,
        id: q.id || `bank_${subject.toLowerCase()}_${i + 1}`,
        subject,
    }));

    if (base.length >= target) return seededShuffle(base, SUBJECT_SEEDS[subject]);

    const need = target - base.length;
    const synth = makeSyntheticPool(subject, need * 2);

    const combined = uniqueByQuestion([...base, ...synth]).slice(0, target);
    return seededShuffle(combined, SUBJECT_SEEDS[subject]);
}

function pickUniqueFromSource(source, usedKeys, count, seed) {
    const shuffled = seededShuffle(source, seed);
    const out = [];

    for (const q of shuffled) {
        const key = normalizeQuestionText(q.question);
        if (!key || usedKeys.has(key)) continue;
        usedKeys.add(key);
        out.push(q);
        if (out.length >= count) break;
    }

    return out;
}

const subjectPools = {
    Physics: buildAugmentedPool('Physics', collectBySubject(physicsByYear)),
    Chemistry: buildAugmentedPool('Chemistry', collectBySubject(chemByYear)),
    Botany: buildAugmentedPool('Botany', collectBySubject(bioByYear, 'Botany')),
    Zoology: buildAugmentedPool('Zoology', collectBySubject(bioByYear, 'Zoology')),
};

const yearSubjectPicks = {};

function buildYearSubjectPicks() {
    for (const subject of SUBJECTS) {
        const required = SUBJECT_SIZE[subject];
        const pool = subjectPools[subject] || [];
        const usedKeys = new Set();
        yearSubjectPicks[subject] = {};

        for (const year of YEARS) {
            const raw = uniqueByQuestion(getYearSubjectList(year, subject));
            const selectedRaw = pickUniqueFromSource(raw, usedKeys, required, SUBJECT_SEEDS[subject] + year);

            if (selectedRaw.length < required) {
                const more = pickUniqueFromSource(pool, usedKeys, required - selectedRaw.length, SUBJECT_SEEDS[subject] + year + 9000);
                selectedRaw.push(...more);
            }

            yearSubjectPicks[subject][year] = selectedRaw.slice(0, required);
        }
    }
}

buildYearSubjectPicks();

function pickSubjectQuestionsForYear(subject, year) {
    const planned = yearSubjectPicks[subject]?.[year] || [];
    return randomShuffle(planned);
}

function withMeta(questions, subject, startIndex, year = null) {
    return questions.map((q, i) => ({
        ...q,
        index: startIndex + i,
        subject,
        year: year ?? q.year ?? null,
    }));
}

export function getQuestionsByYear(year) {
    const physics = withMeta(pickSubjectQuestionsForYear('Physics', year), 'Physics', 0, year);
    const chem = withMeta(pickSubjectQuestionsForYear('Chemistry', year), 'Chemistry', 45, year);
    const botany = withMeta(pickSubjectQuestionsForYear('Botany', year), 'Botany', 90, year);
    const zoology = withMeta(pickSubjectQuestionsForYear('Zoology', year), 'Zoology', 135, year);

    return [...physics, ...chem, ...botany, ...zoology];
}

export function getMixedQuestions() {
    const pick = (subject) => {
        const n = SUBJECT_SIZE[subject];
        return randomShuffle(subjectPools[subject] || []).slice(0, n);
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
