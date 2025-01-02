import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const AltLayout = () => {
  return (
    <>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AltLayout
