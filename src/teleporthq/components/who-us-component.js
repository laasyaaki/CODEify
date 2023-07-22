import React from 'react'

import PropTypes from 'prop-types'

import './who-us-component.css'

const WhoUsComponent = (props) => {
  return (
    <div className={`who-us-component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="who-us-component-image"
      />
      <div className="who-us-component-container1">
        <h1 className="who-us-component-text">{props.heading}</h1>
        <span className="who-us-component-text1">{props.text}</span>
        <span className="who-us-component-text2">{props.text1}</span>
      </div>
    </div>
  )
}

WhoUsComponent.defaultProps = {
  image_alt: 'image',
  heading: 'Heading',
  text: 'Text',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxQZXJzb258ZW58MHx8fHwxNjg5OTgxNDA0fDA&ixlib=rb-4.0.3&h=1500',
  text1: 'Text',
}

WhoUsComponent.propTypes = {
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
}

export default WhoUsComponent
