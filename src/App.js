import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import { JobPage } from './pages/JobPage';

function App() {
    
    return (
        <Routes>
            <Route
                path='job/:id'
                element={<JobPage />}
            />
            <Route
                path=''
                element={<Home />}
            />
        </Routes>
    );
}

export default App;