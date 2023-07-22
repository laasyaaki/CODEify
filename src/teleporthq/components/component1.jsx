import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component1-image"
      />
      <h1 className="component1-text">{props.heading}</h1>
      <span className="component1-text1">{props.text}</span>
      <span className="component1-text2">{props.text1}</span>
    </div>
  )
}

Component1.defaultProps = {
  heading: 'Introduction to Python',
  text1:
    'Students will explore the beginnings of python, the most popular programming language in the world. This course will cover the basic fundamenta synatax, along with projects',
  image_alt: 'image',
  text: 'Grades: 6-8',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Component1.propTypes = {
  heading: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component1
