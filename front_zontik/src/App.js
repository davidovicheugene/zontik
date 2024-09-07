import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
import './static/styles/header.css'

import { NotFoundPage } from './pages/NotFound'
import { AboutPage } from './pages/About'
import { FinancesPage } from './pages/Finances'
import { OrganizerPage } from './pages/Organizer'
import { ToolsPage } from './pages/Tools'
import { AnalyticsPage } from './pages/Analytics'
import { Header } from './components/Header'

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={ <AboutPage/> }/>
                <Route path='/finances' element={ <FinancesPage/> }/>
                <Route path='/organizer' element={ <OrganizerPage/> }/>
                <Route path='/tools' element={ <ToolsPage/> }/>
                <Route path='/analytics' element={ <AnalyticsPage/> }/>
                <Route path='*' element={ <NotFoundPage/> }/>
            </Routes>
        </>
    )
}


export default App 


