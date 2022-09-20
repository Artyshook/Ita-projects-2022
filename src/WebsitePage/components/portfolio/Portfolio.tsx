import { Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { info } from '../info'
import { motion } from 'framer-motion'
import { theme } from '../../theme'
import React from 'react'
import styled from 'styled-components'

export const Portfolio = () => {
  return (
    <>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={theme.animation}
        transition={theme.transition}
      >
        <Box>
          <Wrapper>
            {' '}
            <Grid sx={{ maxWidth: '1440px' }} container>
              {info.portfolio.map((project, index) => (
                <Grid item sx={{}} xs={12} md={6} key={index}>
                  <PortfolioBlock
                    image={project.image}
                    live={project.live}
                    source={project.source}
                    title={project.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Wrapper>
        </Box>
      </motion.div>
    </>
  )
}

type PortfolioBlockType = {
  title: string
  source: string
  live: string
  image: string
}
export const PortfolioBlock = (props: PortfolioBlockType) => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box component={'img'} src={props.image} alt={'mockup'} width={'100%'} />
      <h1 style={{ fontSize: '2rem' }}>{props.title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={props.live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box>
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink2 link={props.source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  )
}

type IconLinkProps = {
  link: string
  title: string
  icon: string
}
export const IconLink = (props: IconLinkProps) => {
  return (
    <Link to={props.link} rel='noopener noreferrer'>
      <i className={props.icon} /> {props.title}
    </Link>
  )
}

export const IconLink2 = (props: IconLinkProps) => {
  return (
    <a href={props.link} rel='noopener noreferrer'>
      <i className={props.icon} /> {props.title}
    </a>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  flex-flow: row wrap;
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`
