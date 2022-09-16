import React from 'react'

type PropsType = {
  link: string
  icon: string
  label: string
}

export const SocialIcon = (props: PropsType) => {
  return (
    <a target='_blank' aria-label={props.label} rel='noopener noreferrer' href={props.link}>
      <i className={props.icon} aria-hidden='true' />
    </a>
  )
}
