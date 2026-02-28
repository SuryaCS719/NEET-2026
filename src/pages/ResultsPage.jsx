import { useState, useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { SUBJECTS, SUBJECT_COLORS } from '../data/index.js';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

function formatTime(secs) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h}h ${m}m ${s}s`;
}

export default function ResultsPage({ result, config, onRetry, onHome }) {
    const { theme, toggle } = useContext(ThemeContext);
    const [filter, setFilter] = useState('all'); // 'all' | 'wrong' | 'correct' | 'unattempted'
    const [expandedSubj, setExpandedSubj] = useState(null);

    const { questions, answers, correct, wrong, unattempted, totalScore, subjectScores, timeTaken } = result;
    const maxScore = 720;
    const pct = Math.max(0, Math.min(100, Math.round((totalScore / maxScore) * 100)));

    const getRank = () => {
        if (pct >= 90) return { label: 'Exceptional', color: 'var(--success)' };
        if (pct >= 75) return { label: 'Excellent', color: '#34d399' };
        if (pct >= 60) return { label: 'Good', color: 'var(--warning)' };
        if (pct >= 45) return { label: 'Average', color: '#fb923c' };
        return { label: 'Needs Work', color: 'var(--danger)' };
    };
    const rank = getRank();

    const filteredQs = questions.filter(q => {
        const ans = answers[q.index];
        if (filter === 'correct') return ans === q.correctAnswer;
        if (filter === 'wrong') return ans !== undefined && ans !== q.correctAnswer;
        if (filter === 'unattempted') return ans === undefined;
        return true;
    });

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-logo">🏆</div>
                    <span>Test Results</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <button className="theme-toggle" onClick={toggle}>
                        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                    </button>
                    <button className="btn btn-ghost" id="retry-btn" onClick={onRetry}>Retry</button>
                    <button className="btn btn-primary" id="home-btn" onClick={onHome}>← Home</button>
                </div>
            </nav>

            <div className="results-page">
                <div className="results-header">
                    <div className="hero-badge" style={{ marginBottom: 16 }}>
                        {config.label}
                    </div>
                    <h1>
                        <span className="gradient-text">{rank.label}</span> Performance
                    </h1>
                    <p>Completed in {formatTime(timeTaken)} • {pct}% of max score</p>
                </div>

                {/* Score circle */}
                <div className="score-circle-wrapper">
                    <div
                        className="score-circle"
                        id="score-circle"
                        style={{ '--pct': pct }}
                    >
                        <div className="score-circle-inner">
                            <div className="score-main" style={{ color: rank.color }}>{totalScore}</div>
                            <div className="score-max">/ {maxScore}</div>
                        </div>
                    </div>
                </div>

                {/* Stats row */}
                <div className="stats-row">
                    {[
                        { val: correct, lbl: 'Correct', color: 'var(--success)' },
                        { val: wrong, lbl: 'Wrong', color: 'var(--danger)' },
                        { val: unattempted, lbl: 'Unattempted', color: 'var(--muted)' },
                        { val: `+${correct * 4}`, lbl: 'Marks Gained', color: 'var(--success)' },
                        { val: `-${wrong}`, lbl: 'Marks Lost', color: 'var(--danger)' },
                    ].map(s => (
                        <div key={s.lbl} className="glass stat-card" id={`stat-${s.lbl.toLowerCase().replace(/ /g, '-')}`}>
                            <div className="val" style={{ color: s.color }}>{s.val}</div>
                            <div className="lbl">{s.lbl}</div>
                        </div>
                    ))}
                </div>

                {/* Subject breakdown */}
                <h2 style={{ marginBottom: 16 }}>Subject Breakdown</h2>
                <div className="subject-cards">
                    {SUBJECTS.map(subj => {
                        const s = subjectScores[subj] || {};
                        const subjMax = 180;
                        const subjPct = Math.max(0, Math.min(100, Math.round(((s.score || 0) / subjMax) * 100)));
                        return (
                            <div key={subj} className="glass subject-result-card" id={`result-${subj.toLowerCase()}`} style={{ borderTop: `3px solid ${SUBJECT_COLORS[subj]}` }}>
                                <div className="subj-name">
                                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: SUBJECT_COLORS[subj], display: 'inline-block', flexShrink: 0 }} />
                                    {subj}
                                </div>
                                <div>
                                    <span className="subj-score" style={{ color: SUBJECT_COLORS[subj] }}>{s.score || 0}</span>
                                    <span className="subj-max"> / {subjMax}</span>
                                </div>
                                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: 6, display: 'flex', gap: 12 }}>
                                    <span>✅ {s.correct || 0}</span>
                                    <span>❌ {s.wrong || 0}</span>
                                    <span>⬜ {s.unattempted || 0}</span>
                                </div>
                                <div className="subj-bar">
                                    <div className="subj-fill" style={{ width: `${subjPct}%`, background: SUBJECT_COLORS[subj] }} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Answer review */}
                <div className="review-section">
                    <h2>Answer Review</h2>

                    <div className="review-filters">
                        {[
                            { id: 'all', label: `All (${questions.length})` },
                            { id: 'correct', label: `✅ Correct (${correct})` },
                            { id: 'wrong', label: `❌ Wrong (${wrong})` },
                            { id: 'unattempted', label: `⬜ Unattempted (${unattempted})` },
                        ].map(f => (
                            <button
                                key={f.id}
                                className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                                id={`filter-${f.id}`}
                                onClick={() => setFilter(f.id)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {filteredQs.map((q, i) => {
                        const ans = answers[q.index];
                        const isCorrect = ans === q.correctAnswer;
                        const isWrong = ans !== undefined && !isCorrect;
                        const isUnattempted = ans === undefined;
                        const statusKey = isCorrect ? 'correct' : isWrong ? 'wrong' : 'unattempted';

                        return (
                            <div key={q.id} className={`review-item ${statusKey}`} id={`review-q-${q.id}`}>
                                <div className="review-q-header">
                                    <span className={`status-badge ${statusKey}`}>
                                        {isCorrect ? '✅ Correct' : isWrong ? '❌ Wrong' : '⬜ Skipped'}
                                    </span>
                                    <span className="badge" style={{
                                        background: `${SUBJECT_COLORS[q.subject]}15`,
                                        color: SUBJECT_COLORS[q.subject],
                                        fontSize: '0.72rem',
                                    }}>
                                        {q.subject}
                                    </span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: 'auto' }}>
                                        {isCorrect ? '+4' : isWrong ? '-1' : '0'} marks
                                    </span>
                                </div>

                                <p className="review-question">{i + 1}. {q.question}</p>

                                {/* Show options only for wrong answers */}
                                {(isWrong || isUnattempted) && (
                                    <div style={{ marginBottom: 10 }}>
                                        {(q.options || []).map((opt, oi) => {
                                            const optNum = oi + 1;
                                            const isUserChoice = ans === optNum;
                                            const isCorrectOpt = q.correctAnswer === optNum;
                                            const highlight = isUserChoice && isWrong ? 'user-wrong' : isCorrectOpt ? 'correct-ans' : null;
                                            if (!highlight) return null;
                                            return (
                                                <div key={oi} className="review-answer-row">
                                                    <span className={`answer-tag ${highlight}`}>
                                                        {OPTION_LABELS[oi]}. {opt}
                                                        {isUserChoice && ' (Your answer)'}
                                                        {isCorrectOpt && ' ✓ Correct'}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                        {isUnattempted && (
                                            <div className="review-answer-row">
                                                <span className="answer-tag correct-ans">
                                                    Correct: {OPTION_LABELS[q.correctAnswer - 1]}. {q.options[q.correctAnswer - 1]}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Explanation for wrong + unattempted */}
                                {(isWrong || isUnattempted) && q.explanation && (
                                    <div className="explanation-box">
                                        <div className="exp-title">💡 Explanation</div>
                                        {q.explanation}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {filteredQs.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
                            No questions in this category.
                        </div>
                    )}
                </div>

                {/* Bottom actions */}
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40 }}>
                    <button className="btn btn-ghost" onClick={onRetry}>🔄 Retake Test</button>
                    <button className="btn btn-primary" onClick={onHome}>🏠 Choose Another Module</button>
                </div>
            </div>
        </>
    );
}
