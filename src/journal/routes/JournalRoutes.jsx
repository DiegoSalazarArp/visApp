import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { IngresoPage,ObjetadasPage, ReportePage, SeguimientoPage } from '../../visacion/pages/'


import { JournalPage } from '../pages/JournalPage'

export const JournalRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<JournalPage/>}/>
    <Route path='/ingresoVisacion' element={<IngresoPage />}/>
    <Route path='/seguimientoVisacion' element={<SeguimientoPage />}/>
    <Route path='/objetadasVisacion' element={<ObjetadasPage />}/>
    <Route path='/reporteVisacion' element={<ReportePage />}/>
    <Route path='/*' element={<Navigate to="/"/>}/>
   </Routes>
  )
}
