import React from 'react'
import Timezone from './timezone'

const Footer = (props) => (
  <>
    <ul className="footer-list">
      <li>By:</li>
      <li>
          Samuel Vasconcelos
      </li>
      <li>
        Source:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SamuelVasconc/lembrete-diario-M-web"
        >
          Github
        </a>
      </li>
      <li>
        Timezone:{' '}
        <Timezone onChange={props.changeTimeZone} timezone={props.timezone} />
      </li>
    </ul>
  </>
)

export default Footer
