'use client'

import { useLang } from '@/context/LanguageContext';
import Footer from '@/src/Footer'
import NavBar from '@/src/NavBar'
import React from 'react'

function About() {
  const { language } = useLang();
  const lang = language === 'spanish';
  
  return (
    <>
    <NavBar/>
    <main className='flex flex-col items-center justify-center min-h-screen font-sans'>
      <h1 className='text-4xl text-white'>Pagina about me</h1>
    </main>
    <Footer/>
    </>
  )
}

export default About