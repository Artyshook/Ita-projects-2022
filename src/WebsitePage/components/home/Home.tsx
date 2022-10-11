import { Box } from '@mui/material'
import { EmojiBullet } from './EmojiBullet'
import { SocialIcon } from './SocialIcon'
import { info } from '../info'
import { motion } from 'framer-motion'
import { theme } from '../../theme'
import React from 'react'
import me from '../img/self.png'
import styled, { keyframes } from 'styled-components'

export const Home = () => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={theme.animation}
      transition={theme.transition}
    >
      <Box_Wrapper
        component={'main'}
        flexDirection={{ xs: 'column', md: 'row' }}
        minHeight={'calc(100vh - 175px)'}
      >
        <Box
          alt={'image of developer'}
          style={{ background: info.gradient }}
          component={'img'}
          src={me}
          width={{ xs: '35vh', md: '40vh' }}
          height={{ xs: '35vh', md: '40vh' }}
          borderRadius={'50%'}
          p={'0.5rem'}
          mb={{ xs: '1rem', sm: 0 }}
          mr={{ xs: 0, md: '2rem' }}
          boxShadow={theme.colors.boxShadow2}
        />
        <Box>
          <H1>
            Hi, I&apos;m{' '}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {info.firstName}
            </span>
            <Hand>🤚</Hand>
          </H1>
          <H2>I&apos;m {info.position}.</H2>
          <Box component={'ul'} p={'0.8rem'}>
            {info.miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>
          <Box
            display={'flex'}
            gap={'1.5rem'}
            justifyContent={'center'}
            fontSize={{ xs: '2rem', md: '2.5rem' }}
          >
            {info.socials.map((social, index) => (
              <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
            ))}
          </Box>
        </Box>
      </Box_Wrapper>
    </motion.div>
  )
}

const Box_Wrapper = styled(Box)`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;

  i:hover {
    color: ${info.baseColor};
  }
`

const H1 = styled.h1`
  font-size: 3rem;
  text-align: left;
  ${theme.breakpoint.phone} {
    font-size: 3rem;
    text-align: left;
  }
  text-decoration: none;
`

const H2 = styled.h2`
  font-size: 1.5rem;
  text-align: left;
  ${theme.breakpoint.phone} {
    font-size: 2rem;
    text-align: left;
  }
`

export const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const Hand = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`
