import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, Routes } from "react-router-dom"
import { routes } from './roots/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes}/>
)
