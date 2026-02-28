import { useState, createContext, useContext } from 'react';
import HomePage from './pages/HomePage.jsx';
import TestPage from './pages/TestPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';

export const ThemeContext = createContext({ theme: 'dark', toggle: () => { } });

export default function App() {
    const [theme, setTheme] = useState('dark');
    const [page, setPage] = useState('home'); // 'home' | 'test' | 'results'
    const [testConfig, setTestConfig] = useState(null);
    const [testResult, setTestResult] = useState(null);

    const toggleTheme = () => {
        setTheme(t => {
            const n = t === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', n);
            return n;
        });
    };

    const startTest = (config) => {
        setTestConfig(config);
        setPage('test');
        window.scrollTo(0, 0);
    };

    const finishTest = (result) => {
        setTestResult(result);
        setPage('results');
        window.scrollTo(0, 0);
    };

    const goHome = () => {
        setPage('home');
        setTestConfig(null);
        setTestResult(null);
        window.scrollTo(0, 0);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
            {page === 'home' && <HomePage onStart={startTest} />}
            {page === 'test' && <TestPage config={testConfig} onFinish={finishTest} onHome={goHome} />}
            {page === 'results' && <ResultsPage result={testResult} config={testConfig} onRetry={() => startTest(testConfig)} onHome={goHome} />}
        </ThemeContext.Provider>
    );
}
