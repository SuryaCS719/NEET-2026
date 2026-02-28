import { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { MODULES, SUBJECTS, SUBJECT_COLORS } from '../data/index.js';
import { PAPERS_FOLDER } from '../data/pdfLinks.js';

export default function HomePage({ onStart }) {
    const { theme, toggle } = useContext(ThemeContext);

    const handleModuleClick = (mod) => {
        onStart({ moduleId: mod.id, year: mod.year, label: mod.label });
    };

    return (
        <>
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <div className="navbar-logo">🎯</div>
                    <span>NEET<span className="gradient-text"> 2026</span></span>
                </a>
                <button className="theme-toggle" onClick={toggle}>
                    {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                </button>
            </nav>

            <div className="home">
                <section className="hero">
                    <div className="hero-badge">✦ 2026 Exam Ready</div>
                    <h1>
                        <span className="gradient-text">NEET Mock Tests</span>
                        <br />
                        with PYQ Questions
                    </h1>
                    <p>
                        Practice with 7 years of previous year questions. Full 180-question mock tests
                        with detailed explanations and real-time performance analytics.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">1260+</span>
                            <span className="stat-label">Questions</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">7</span>
                            <span className="stat-label">Year Papers</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">8</span>
                            <span className="stat-label">Test Modules</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">720</span>
                            <span className="stat-label">Max Score</span>
                        </div>
                    </div>
                </section>

                <div className="container">
                    {/* Format info */}
                    <div className="glass format-info" style={{ marginBottom: 40 }}>
                        {[
                            { icon: '📝', label: 'Questions', value: '180 (45 × 4 subjects)' },
                            { icon: '⏱️', label: 'Duration', value: '200 minutes' },
                            { icon: '✅', label: 'Correct', value: '+4 marks' },
                            { icon: '❌', label: 'Wrong', value: '−1 mark' },
                            { icon: '🏆', label: 'Max Score', value: '720 marks' },
                        ].map(f => (
                            <div key={f.label} className="format-item">
                                <span className="format-icon">{f.icon}</span>
                                <div>
                                    <div className="format-label">{f.label}</div>
                                    <div className="format-value">{f.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="modules-section">
                        <h2>Choose a <span className="gradient-text">Test Module</span></h2>
                        <div className="modules-grid">
                            {MODULES.map((mod, i) => (
                                <div
                                    key={mod.id}
                                    className={`glass glass-hover module-card ${i === 0 ? 'featured' : ''}`}
                                    onClick={() => handleModuleClick(mod)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={e => e.key === 'Enter' && handleModuleClick(mod)}
                                    id={`module-${mod.id}`}
                                >
                                    <div className="module-icon">{mod.icon}</div>
                                    <div className="module-label">{mod.label}</div>
                                    <div className="module-desc">{mod.description}</div>
                                    <div className="module-meta">
                                        <span>180 Q</span>
                                        <span>•</span>
                                        <span>200 min</span>
                                        <span>•</span>
                                        <span>720 marks</span>
                                    </div>
                                    {mod.pdfUrl && (
                                        <a
                                            href={mod.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            id={`pdf-${mod.id}`}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 5,
                                                marginTop: 12,
                                                padding: '5px 12px',
                                                borderRadius: 99,
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                background: 'rgba(99,102,241,0.12)',
                                                border: '1px solid rgba(99,102,241,0.3)',
                                                color: '#a78bfa',
                                                textDecoration: 'none',
                                                transition: 'all 0.2s',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.22)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(99,102,241,0.12)'}
                                        >
                                            📄 View Paper
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Previous Year Papers Drive banner */}
                    <a
                        href={PAPERS_FOLDER}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="papers-folder-link"
                        style={{ display: 'block', textDecoration: 'none', marginTop: 40 }}
                    >
                        <div
                            className="glass"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '20px 28px',
                                border: '1px solid rgba(99,102,241,0.3)',
                                background: 'rgba(99,102,241,0.07)',
                                transition: 'all 0.2s',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.13)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(99,102,241,0.07)'}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                    width: 48, height: 48, borderRadius: 12,
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.5rem', flexShrink: 0,
                                    boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
                                }}>
                                    📁
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: 3 }}>
                                        Previous Year Question Papers
                                    </div>
                                    <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                                        Download original NEET papers (2019–2025) from Google Drive
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: 6,
                                padding: '8px 18px', borderRadius: 99,
                                background: 'rgba(99,102,241,0.15)',
                                border: '1px solid rgba(99,102,241,0.35)',
                                color: '#a78bfa', fontWeight: 600, fontSize: '0.85rem',
                                flexShrink: 0,
                            }}>
                                Open Folder ↗
                            </div>
                        </div>
                    </a>

                    {/* Subject chips */}
                    <div style={{ marginTop: 40, textAlign: 'center' }}>
                        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: 14 }}>Covering all 4 subjects</p>
                        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                            {SUBJECTS.map(s => (
                                <span
                                    key={s}
                                    className="badge"
                                    style={{
                                        background: `${SUBJECT_COLORS[s]}20`,
                                        color: SUBJECT_COLORS[s],
                                        border: `1px solid ${SUBJECT_COLORS[s]}40`,
                                        fontSize: '0.85rem',
                                        padding: '7px 18px',
                                    }}
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
