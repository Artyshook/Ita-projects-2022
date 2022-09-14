import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import React from 'react'

type PropsType = {
  link: string
  icon: string
  label: string
}

function SocialIcon({ link, icon, label }: PropsType) {
  return (
    <a target='_blank' aria-label={label} rel='noopener noreferrer' href={link}>
      <i className={icon} aria-hidden='true' />
    </a>
  )
}

export default SocialIcon
