import React from "react";
import { ReactComponent as facebook } from '../assets/images/icons-svg/facebook.svg'
import { ReactComponent as twitter } from '../assets/images/icons-svg/twitter.svg'
import { ReactComponent as gmail } from '../assets/images/icons-svg/gmail.svg'
import { ReactComponent as instagram } from '../assets/images/icons-svg/instagram.svg'
import { ReactComponent as linkedin } from '../assets/images/icons-svg/linkedin.svg'
import { ReactComponent as github } from '../assets/images/icons-svg/github.svg'
import { ReactComponent as stackOverflow } from '../assets/images/icons-svg/stack-overflow.svg'


const social = [
  { svg: facebook, href: '/#' },
  { svg: twitter, href: '/#' },
  { svg: gmail, href: '/#' },
  { svg: instagram, href: '/#' },
  { svg: linkedin, href: '/#' },
  { svg: github, href: '/#' },
  { svg: stackOverflow, href: '/#' },
]

const SocialBloc = () => {
  return (
    <span className="social-list">
      {social.map(it => {
        return (
          <a href={it.href}>
            <it.svg />
          </a>
        )
      })}
    </span>
  )
}

export default SocialBloc