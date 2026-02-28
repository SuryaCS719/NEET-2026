import { useState, useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { getQuestionsByYear, getMixedQuestions, SUBJECTS, SUBJECT_COLORS, SUBJECT_RANGES } from '../data/index.js';

const TOTAL_TIME = 200 * 60; // 200 minutes in seconds

function formatTime(secs) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function TestPage({ config, onFinish, onHome }) {
    const { theme, toggle } = useContext(ThemeContext);
    const [questions] = useState(() =>
        config.year ? getQuestionsByYear(config.year) : getMixedQuestions()
    );
    const [answers, setAnswers] = useState({}); // index -> 1-4
    const [marked, setMarked] = useState(new Set());
    const [current, setCurrent] = useState(0);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [activeSubject, setActiveSubject] = useState('Physics');
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Timer
    useEffect(() => {
        if (submitted) return;
        const id = setInterval(() => {
            setTimeLeft(t => {
                if (t <= 1) { handleSubmit(); return 0; }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(id);
    }, [submitted]);

    const subjectQuestions = useCallback((subj) => {
        return questions.filter(q => q.subject === subj);
    }, [questions]);

    const getSubjectProgress = (subj) => {
        const qs = subjectQuestions(subj);
        const answered = qs.filter(q => answers[q.index] !== undefined).length;
        return { answered, total: qs.length };
    };

    const handleAnswer = (optionIndex) => {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [questions[current].index]: optionIndex }));
    };

    const handleClear = () => {
        if (submitted) return;
        setAnswers(prev => {
            const n = { ...prev };
            delete n[questions[current].index];
            return n;
        });
    };

    const toggleMark = () => {
        setMarked(prev => {
            const n = new Set(prev);
            if (n.has(current)) n.delete(current); else n.add(current);
            return n;
        });
    };

    const handleSubmit = useCallback(() => {
        setSubmitted(true);
        setShowSubmitModal(false);

        let correct = 0, wrong = 0, unattempted = 0;
        const subjectScores = {};
        SUBJECTS.forEach(s => { subjectScores[s] = { correct: 0, wrong: 0, unattempted: 0, score: 0 }; });

        questions.forEach(q => {
            const ans = answers[q.index];
            const subj = q.subject;
            if (ans === undefined) {
                unattempted++;
                subjectScores[subj].unattempted++;
            } else if (ans === q.correctAnswer) {
                correct++;
                subjectScores[subj].correct++;
                subjectScores[subj].score += 4;
            } else {
                wrong++;
                subjectScores[subj].wrong++;
                subjectScores[subj].score -= 1;
            }
        });

        const totalScore = correct * 4 - wrong;
        onFinish({ questions, answers, correct, wrong, unattempted, totalScore, subjectScores, timeTaken: TOTAL_TIME - timeLeft });
    }, [questions, answers, timeLeft, onFinish]);

    const currentQ = questions[current];
    const timerClass = timeLeft < 300 ? 'critical' : timeLeft < 600 ? 'warning' : '';

    // Filter questions to current subject tab
    const subjectQs = subjectQuestions(activeSubject);
    const subjectStart = questions.findIndex(q => q.subject === activeSubject);

    const goToSubjectQ = (subj, idx) => {
        const absIdx = questions.findIndex(q => q.subject === subj && q.index === idx);
        if (absIdx !== -1) setCurrent(absIdx);
        setActiveSubject(subj);
    };

    const OPTION_LABELS = ['A', 'B', 'C', 'D'];

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-logo">🎯</div>
                    <div>
                        <div className="test-title">{config.label}</div>
                        <div className="test-subtitle">NEET 2026 Format • 180Q • 720 Marks</div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <button className="theme-toggle" onClick={toggle}>
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    {!submitted && (
                        <button className="btn btn-danger" id="submit-test-btn" onClick={() => setShowSubmitModal(true)}>
                            Submit Test
                        </button>
                    )}
                </div>
            </nav>

            <div className="test-layout">
                {/* Main content */}
                <div className="test-main">
                    {/* Subject tabs */}
                    <div className="subject-tabs">
                        {SUBJECTS.map(subj => {
                            const prog = getSubjectProgress(subj);
                            return (
                                <button
                                    key={subj}
                                    className={`subject-tab ${activeSubject === subj ? 'active' : ''}`}
                                    style={activeSubject === subj ? { background: SUBJECT_COLORS[subj], borderColor: SUBJECT_COLORS[subj] } : {}}
                                    onClick={() => {
                                        setActiveSubject(subj);
                                        const first = questions.findIndex(q => q.subject === subj);
                                        if (first !== -1) setCurrent(first);
                                    }}
                                    id={`tab-${subj.toLowerCase()}`}
                                >
                                    {subj}
                                    <span className="tab-count">{prog.answered}/{prog.total}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Subject mini navigator */}
                    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 20 }}>
                        {subjectQs.map((q, i) => {
                            const qIdx = questions.indexOf(q);
                            const isAnswered = answers[q.index] !== undefined;
                            const isMarked = marked.has(qIdx);
                            const isCurrent = qIdx === current;
                            return (
                                <button
                                    key={q.id}
                                    onClick={() => setCurrent(qIdx)}
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 8,
                                        border: isCurrent ? `2px solid ${SUBJECT_COLORS[activeSubject]}` : '1px solid var(--border)',
                                        background: isMarked ? 'var(--warning)' : isAnswered ? SUBJECT_COLORS[activeSubject] : 'var(--bg3)',
                                        color: (isMarked || isAnswered) ? '#fff' : 'var(--muted)',
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        fontFamily: 'Inter, sans-serif',
                                        transition: 'all 0.15s',
                                        opacity: isCurrent ? 1 : 0.85,
                                    }}
                                    id={`qnav-${q.id}`}
                                >
                                    {i + 1}
                                </button>
                            );
                        })}
                    </div>

                    {/* Question card */}
                    {currentQ && (
                        <div className="glass question-card" key={current}>
                            <div className="q-meta">
                                <span className="q-num">Q{subjectQs.indexOf(currentQ) + 1} of {subjectQs.length}</span>
                                <div className="q-subject-dot" style={{ background: SUBJECT_COLORS[currentQ.subject] }} />
                                <span className="badge" style={{
                                    background: `${SUBJECT_COLORS[currentQ.subject]}18`,
                                    color: SUBJECT_COLORS[currentQ.subject],
                                    fontSize: '0.72rem',
                                }}>
                                    {currentQ.subject}
                                </span>
                                {marked.has(current) && (
                                    <span className="badge" style={{ background: 'rgba(245,158,11,0.15)', color: 'var(--warning)' }}>
                                        🔖 Marked
                                    </span>
                                )}
                            </div>

                            <p className="question-text">{currentQ.question}</p>

                            <div className="options-grid">
                                {(currentQ.options || []).map((opt, i) => {
                                    const optNum = i + 1;
                                    const selected = answers[currentQ.index] === optNum;
                                    const isCorrect = submitted && optNum === currentQ.correctAnswer;
                                    const isWrong = submitted && selected && optNum !== currentQ.correctAnswer;
                                    return (
                                        <button
                                            key={i}
                                            className={`option-btn ${selected && !submitted ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                                            onClick={() => handleAnswer(optNum)}
                                            disabled={submitted}
                                            id={`option-${currentQ.id}-${optNum}`}
                                        >
                                            <span className="option-label">{OPTION_LABELS[i]}</span>
                                            <span>{opt}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {!submitted && (
                                <div className="q-actions">
                                    <button
                                        className={`btn-review ${marked.has(current) ? 'marked' : ''}`}
                                        onClick={toggleMark}
                                    >
                                        🔖 {marked.has(current) ? 'Unmark' : 'Mark for Review'}
                                    </button>
                                    {answers[currentQ.index] !== undefined && (
                                        <button className="btn-clear" onClick={handleClear}>Clear Response</button>
                                    )}
                                </div>
                            )}

                            {/* Show explanation after submit */}
                            {submitted && currentQ.explanation && (
                                <div className="explanation-box" style={{ marginTop: 16 }}>
                                    <div className="exp-title">💡 Explanation</div>
                                    {currentQ.explanation}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="q-nav">
                        <button
                            className="btn btn-ghost"
                            onClick={() => {
                                const prev = questions.slice(0, current).map((_, i) => i).reverse().find(i => questions[i].subject === activeSubject);
                                if (prev !== undefined) setCurrent(prev);
                                else if (current > 0) setCurrent(current - 1);
                            }}
                            disabled={current === 0}
                        >
                            ← Previous
                        </button>
                        <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>
                            {current + 1} / {questions.length}
                        </span>
                        <button
                            className="btn btn-ghost"
                            onClick={() => {
                                const nextIdx = questions.findIndex((q, i) => i > current && q.subject === activeSubject);
                                if (nextIdx !== -1) setCurrent(nextIdx);
                                else if (current < questions.length - 1) setCurrent(current + 1);
                            }}
                            disabled={current === questions.length - 1}
                        >
                            Next →
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="test-sidebar">
                    {/* Timer */}
                    <div className="timer-block">
                        <div className="timer-label">Time Remaining</div>
                        <div className={`timer-display ${timerClass}`} id="timer-display">
                            {formatTime(timeLeft)}
                        </div>
                    </div>

                    {/* Summary */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        {[
                            { label: 'Answered', val: Object.keys(answers).length, color: 'var(--success)' },
                            { label: 'Unanswered', val: questions.length - Object.keys(answers).length, color: 'var(--muted)' },
                            { label: 'Marked', val: marked.size, color: 'var(--warning)' },
                            { label: 'Total', val: questions.length, color: 'var(--accent)' },
                        ].map(item => (
                            <div key={item.label} className="glass" style={{ padding: '10px 12px', textAlign: 'center' }}>
                                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: item.color }}>{item.val}</div>
                                <div style={{ fontSize: '0.68rem', color: 'var(--muted)', fontWeight: 600 }}>{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Subject legend */}
                    <div>
                        <div className="nav-section-title">By Subject</div>
                        {SUBJECTS.map(subj => {
                            const { answered, total } = getSubjectProgress(subj);
                            return (
                                <div key={subj} style={{ marginBottom: 10 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: 4 }}>
                                        <span style={{ color: SUBJECT_COLORS[subj], fontWeight: 600 }}>{subj}</span>
                                        <span style={{ color: 'var(--muted)' }}>{answered}/{total}</span>
                                    </div>
                                    <div className="progress-seg">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${(answered / total) * 100}%`, background: SUBJECT_COLORS[subj] }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Legend */}
                    <div>
                        <div className="nav-section-title">Legend</div>
                        <div className="nav-legend">
                            <div className="legend-item">
                                <div className="legend-dot" style={{ background: 'var(--success)' }} />
                                Answered
                            </div>
                            <div className="legend-item">
                                <div className="legend-dot" style={{ background: 'var(--warning)' }} />
                                Marked
                            </div>
                            <div className="legend-item">
                                <div className="legend-dot" style={{ background: 'var(--bg3)' }} />
                                Unanswered
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    {!submitted && (
                        <div className="sidebar-submit">
                            <button className="btn btn-danger" style={{ width: '100%' }} onClick={() => setShowSubmitModal(true)} id="sidebar-submit-btn">
                                Submit Test
                            </button>
                        </div>
                    )}

                    {submitted && (
                        <div className="sidebar-submit">
                            <button className="btn btn-primary" style={{ width: '100%' }} onClick={onHome}>
                                ← Back to Home
                            </button>
                        </div>
                    )}
                </aside>
            </div>

            {/* Submit Modal */}
            {showSubmitModal && (
                <div className="modal-overlay" onClick={() => setShowSubmitModal(false)}>
                    <div className="modal-box" onClick={e => e.stopPropagation()} id="submit-modal">
                        <h2>Submit Test?</h2>
                        <p>
                            You have answered <strong>{Object.keys(answers).length}</strong> out of <strong>{questions.length}</strong> questions.
                        </p>
                        <p style={{ marginTop: 6 }}>
                            Unanswered: {questions.length - Object.keys(answers).length} •
                            Marked for review: {marked.size}
                        </p>
                        <p style={{ marginTop: 12 }}>Once submitted, you cannot change your answers.</p>
                        <div className="modal-actions">
                            <button className="btn btn-ghost" id="cancel-submit-btn" onClick={() => setShowSubmitModal(false)}>
                                Continue Test
                            </button>
                            <button className="btn btn-danger" id="confirm-submit-btn" onClick={handleSubmit}>
                                Submit Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
