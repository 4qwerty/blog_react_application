import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRotes } from '../../router/routes'

const AppRouter = () => {
    return (

        <Routes>
            {publicRotes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />}></Route>
            ))}
            <Route index element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default AppRouter
