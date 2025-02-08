import React from 'react'
import { Navbar } from '../components/navbar'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
