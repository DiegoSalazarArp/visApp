import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { IngresoVisacion } from '../../visacion/pages/IngresoVisacion'
import { JournalPage } from '../pages/JournalPage'

export const JournalRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<JournalPage/>}/>
    <Route path='/ingresoVisacion' element={<IngresoVisacion/>}/>
    <Route path='/*' element={<Navigate to="/"/>}/>
   </Routes>
  )
}
