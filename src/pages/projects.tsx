import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import TextAnimation from '../components/TextAnimation'
import projImage1 from '../../public/images/project/App Tempo Local.jpeg'
import SpinLogo from '../components/SpinLogo'
import Project from '../components/Project'
import PageTransitionEffect from '@/components/PageTransitionEffect'

export default function projects() {
  return (
    <>
      <Head>
        <title>Guilherme Montenegro | Projects Page</title>
        <meta name='description' content='This is a projects page of the portfolio website made by Guilherme Montenegro using TypeScript, TailwindCSS, React, NextJS, ThreeJS, Framer Motion. This page showcases my significant projects that have source code links and link to the project itself. There is also animated "Hire Me" button.' />
      </Head>
      <PageTransitionEffect />
      <main className='flex flex-col items-center justify-center w-full mb-16 dark:text-light'>
        <Layout className='pt-16'>
          <TextAnimation text='My Projects' className='mb-16 tablet:!text-7xl mobile:mb-8 mobile:!text-6xl mini-mobile:!text-4xl' />

          <div className='grid grid-cols-12 gap-24 gap-y-28 laptop:gap-x-16 tablet:gap-x-8 mini-tablet:gap-y-24 mobile:gap-x-0'>
            <div className='col-span-12'>
              <Project
                title='App-Tempo-Local'
                img={projImage1}
                summary='Mobile application created in React Native for an interview project'
                link='https://github.com/guiimontenegro/App-Tempo-Local'
                github='https://github.com/guiimontenegro/App-Tempo-Local'
                tech='React Native, NodeJS'
              />
            </div>
          </div>
        </Layout>

        <SpinLogo />
      </main>
    </>
  )
}
