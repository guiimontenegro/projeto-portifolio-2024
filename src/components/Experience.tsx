import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ExperienceDetails from './ExperienceDetails'


export default function Experience(): JSX.Element {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-40'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center mini-tablet:text-6xl mini-mobile:text-4xl mini-tablet:mb-16'>Experience</h2>

      <div ref={ref} className='w-[75%] mx-auto relative tablet:w-[90%] mini-tablet:w-full'>

        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light mini-tablet:w-[2px] mini-tablet:left-[30px] mini-mobile:left-[20px]' />

        <ul className='flex flex-col items-start justify-between w-full ml-4 mini-mobile:ml-2'>
          <ExperienceDetails
            position='Software Engineer - Front End'
            company='T-SYSTEMS'
            time='2022 - Current'
            address='Blumenau, SC - Brazil'
            work='Development of Web applications. (React - TypeScript) Working as a senior software engineer, dealing daily with the development of large-scale web applications, with agile methodologies, project patterns, mentoring junior developers, seeking new technologies and implementation methods, with a focus on improving the code and optimization of applications. Developing API for communication with the back end, working with CI/CD, test automation and UI/UX verification to improve the code to be developed and working with corrections and code optimization' />

          <ExperienceDetails
            position='Software Developer - Front End'
            company="KTI TECHNOLOGY AND INNOVATION"
            time='2022'
            address='Itajaí, SC - Brazil'
            work='Development of mobile applications (Android and IOS) and Web applications (React Native and React) from the most diverse segments, working with code improvements and development of solutions with high performance in the market. Acting as Tech Lead in a team of 4 developers'
          />
          
          <ExperienceDetails
            position='Accessibility technologies researcher'
            company="UNIVALI"
            time='2022'
            address='Itajaí, SC - Brazil'
            work='Research and development of a mobile application (Android and IOS), to assist the visually impaired, using integration with an electronic cane, providing accessibility for using the software, with facilitated connections to maps and location through API consumption, project developed in React Native. Acting as Tech Lead of the project leading 3 researchers'
          />
        </ul>
      </div>
    </div>
  )
}
