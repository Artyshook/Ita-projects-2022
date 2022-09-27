import { Box } from '@mui/material'
import { Terminal } from './Terminal'
import { info } from '../info'
import { motion } from 'framer-motion'
import { theme } from '../../theme'
import CV from '../img/CV_Artem.pdf'
import React from 'react'
import styled from 'styled-components'

export const About = () => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={theme.animation}
      transition={theme.transition}
    >
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
        <Terminal text={AboutMeText()} />
        <Terminal text={SkillsText()} />
        <Terminal text={MiscText()} />
        <Terminal text={DownloadCV()} />
      </Box>
    </motion.div>
  )
}

const firstName = info.firstName.toLowerCase()

export const AboutMeText = () => {
  return (
    <>
      <p>
        <BaseColor_Span>
          {firstName}_{info.lastName.toLowerCase()} $
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

export const SkillsText = () => {
  return (
    <>
      <p>
        <BaseColor_Span>
          {firstName}_{info.lastName.toLowerCase()} $
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

export const MiscText = () => {
  return (
    <>
      <p>
        <BaseColor_Span>
          {firstName}_{info.lastName.toLowerCase()} $
        </BaseColor_Span>{' '}
        cd hobbies/interests
      </p>
      <p>
        <BaseColor_Span>
          hobbies/interests <Green_Span>(main)</Green_Span> $
        </BaseColor_Span>{' '}
        ls
      </p>
      <Skills_Ul>
        {info.hobbies.map((hobby, index) => (
          <li key={index}>
            <Box component={'span'} mr={'1rem'}>
              {hobby.emoji}
            </Box>
            {hobby.label}
          </li>
        ))}
      </Skills_Ul>
    </>
  )
}

export const DownloadCV = () => {
  return (
    <>
      <p>
        <BaseColor_Span>
          {firstName}_{info.lastName.toLowerCase()} $
        </BaseColor_Span>{' '}
        cd download/CV{' '}
      </p>
      <p>
        <BaseColor_Span>
          download/CV <Green_Span>(main)</Green_Span> ${' '}
        </BaseColor_Span>
        <a href={CV}>
          <Download>Download in PDF</Download>
        </a>
      </p>
    </>
  )
}

export const Download = styled.button`
background-color: ${theme.colors.backgroundColor.black};
  border: none;
  color: ${theme.colors.red};
  text-decoration: none;
  &:hover {
    color: ${theme.colors.white};
`
const Skills_Ul = styled.ul`
  columns: 1;
  ${theme.breakpoint.phone} {
    columns: 2;
  }
  li {
    margin: 0;
    line-height: 1.75;
    max-width: 300px;
  }
`

const Green_Span = styled.span`
  color: ${theme.colors.green};
`
const BaseColor_Span = styled.span`
  color: ${info.baseColor};
`
