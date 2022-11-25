import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import Projects from './components/projects/projects'
import Tasks from './components/tasks/tasks'

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="projects" element={<Projects/>}/>
                <Route path="tasks" element={<Tasks/>}/>
                <Route path="*" element={<Navigate to="/projects"/>}/>
            </Routes>
        </>
    )
}

export default App
