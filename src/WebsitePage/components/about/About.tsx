import { Box } from '@mui/material'
import { Terminal } from './Terminal'
import { info } from '../info'
import { motion } from 'framer-motion'
import { theme } from '../../theme'
import React from 'react'
import styled from 'styled-components'

export const About = () => {
  const firstName = info.firstName.toLowerCase()

  const aboutMeText = () => {
    return (
      <>
        <p>
          <BaseColor_Span>
            {firstName}
            {info.lastName.toLowerCase()} $
          </BaseColor_Span>{' '}
          cat about{firstName}{' '}
        </p>
        <p>
          <BaseColor_Span>
            about{firstName} <Green_Span>(main)</Green_Span> ${' '}
          </BaseColor_Span>
          {info.bio}
        </p>
      </>
    )
  }

  const skillsText = () => {
    return (
      <>
        <p>
          <BaseColor_Span>
            {firstName}
            {info.lastName.toLowerCase()} $
          </BaseColor_Span>{' '}
          cd skills/tools
        </p>
        <p>
          <BaseColor_Span>
            skills/tools <Green_Span>(main)</Green_Span> $
          </BaseColor_Span>{' '}
          ls
        </p>
        <BaseColor_Span> Proficient With</BaseColor_Span>
        <Skills_Ul>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </Skills_Ul>
        <BaseColor_Span> Exposed To</BaseColor_Span>
        <Skills_Ul>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </Skills_Ul>
      </>
    )
  }

  const miscText = () => {
    return (
      <>
        <p>
          <BaseColor_Span>
            {firstName}
            {info.lastName.toLowerCase()} $
          </BaseColor_Span>{' '}
          cd hobbies/interests
        </p>
        <p>
          <BaseColor_Span>
            hobbies/interests <Green_Span>(main)</Green_Span> $
          </BaseColor_Span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={theme.animation}
      transition={theme.transition}
    >
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
        <Terminal text={aboutMeText()} />
        <Terminal text={skillsText()} />
        <Terminal text={miscText()} />
      </Box>
    </motion.div>
  )
}

const Skills_Ul = styled.ul`
  columns: 1;
  ${theme.breakpoint.minWidth} {
    columns: 2;
  }
  li {
    margin: 0;
    line-height: 1.75;
  }
`

const Green_Span = styled.span`
  color: ${theme.colors.green};
`
const BaseColor_Span = styled.span`
  color: ${info.baseColor};
`
