import { Box, Grid } from '@mui/material'
import { info } from '../info'
import React from 'react'
import styled from 'styled-components'

export function Portfolio() {
  return (
    <Box>
      <Wrapper id={'ddddd'}>
        {' '}
        <Grid container display={'flex'} justifyContent={'center'} width={'100%'}>
          {info.portfolio.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
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
  )
}

type PortfolioBlockType = {
  title: string
  source: string
  live: string
  image: string
}
export function PortfolioBlock({ image, live, source, title }: PortfolioBlockType) {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box component={'img'} src={image} alt={'mockup'} />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
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
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box>
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  )
}

type IconLink = {
  link: string
  title: string
  icon: string
}
export function IconLink({ link, title, icon }: IconLink) {
  return (
    <a href={link} target={'_blank'} rel='noopener noreferrer'>
      <i className={icon} /> {title}
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
