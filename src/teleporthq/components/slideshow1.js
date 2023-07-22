import React from 'react'

import PropTypes from 'prop-types'

import Slideshow2 from './slideshow2'
import './slideshow1.css'

const Slideshow1 = (props) => {
  return (
    <div className="slideshow1-container">
      <Slideshow2 rootClassName="slideshow2-root-class-name"></Slideshow2>
      <button type="button" className="button slideshow1-button">
        {props.button1}
      </button>
      <button type="button" className="slideshow1-button1 button">
        {props.button}
      </button>
      <Slideshow2 rootClassName="slideshow2-root-class-name1"></Slideshow2>
    </div>
  )
}

Slideshow1.defaultProps = {
  button: 'Button',
  button1: 'Button',
}

Slideshow1.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Slideshow1
