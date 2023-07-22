import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
      <h1 className="component-text">{props.heading}</h1>
      <span className="component-text1">{props.text}</span>
      <span className="component-text2">{props.text1}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  heading: 'Introduction to Python',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Grades: 6-8',
  text1:
    'Students will explore the beginnings of python, the most popular programming language in the world. This course will cover the basic fundamenta synatax, along with projects',
  rootClassName: '',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
