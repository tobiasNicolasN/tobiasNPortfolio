'use client'

import Footer from '@/src/Footer'
import NavBar from '@/src/NavBar'
import React from 'react'

function About() {
  return (
    <>
    <NavBar/>
    <main className='flex flex-col justify-center p-24 font-sans'>
      <h1 className='text-4xl text-white'>Pagina about me</h1>
    </main>
    <Footer/>
    </>
  )
}

export default About