'use client'

import NavBar from '@/src/NavBar'
import React from 'react'

function About() {
  return (
    <>
    <NavBar/>
    <main className='flex flex-col justify-center p-24 font-sans'>
      <h1 className='text-xl font-sans'>HOLA, MI NOMBRE ES TOBIAS NUÑEZ.</h1>
      <h1 className='text-5xl mt-2'>Soy desarrollador fullstack.</h1>
      <h1 className='text-2xl mt-8'>Estudiante autodidacta, entuciasta del desarrollo con TypeScript</h1>
      <h1 className='text-2xl mt-2'>Estudiante autodidacta, entuciasta del desarrollo con TypeScript</h1>
    </main>
    </>
  )
}

export default About