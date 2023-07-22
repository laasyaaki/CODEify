import React from 'react'

import PropTypes from 'prop-types'

import './slideshow.css'

const Slideshow = (props) => {
  return (
    <div className={`slideshow-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className="slideshow-image"
      />
      <h1 className="slideshow-text">{props.heading}</h1>
      <span className="slideshow-text1">{props.text1}</span>
      <span className="slideshow-text2">{props.text2}</span>
    </div>
  )
}

Slideshow.defaultProps = {
  image_src11:
    'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxwZXJzb258ZW58MHx8fHwxNjg5OTczOTU2fDA&ixlib=rb-4.0.3&w=200',
  image_src2:
    'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixid=M3w5MTMyMXwxfDF8YWxsfDE0fHx8fHx8Mnx8MTY4OTk3Mzk1NHw&ixlib=rb-4.0.3&w=1500',
  image_src13:
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHBlcnNvbnxlbnwwfHx8fDE2ODk5NzM5NTZ8MA&ixlib=rb-4.0.3&w=200',
  image_alt1: 'image',
  text1: 'Grades: 5-8',
  button: 'Course Outline',
  image_src12:
    'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxwZXJzb258ZW58MHx8fHwxNjg5OTczOTU2fDA&ixlib=rb-4.0.3&w=200',
  image_src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBlcnNvbnxlbnwwfHx8fDE2ODk5NzM5NTZ8MA&ixlib=rb-4.0.3&w=200',
  image_alt12: 'image',
  image_alt2: 'image',
  text2:
    'Students will discover the foundations of Python, the most popular programming language in the world! In this introduction class, this will cover hands on projects, lectures, and the basics that a student will need to have a strong foundation for a great future',
  image_alt: 'image',
  text: 'Text',
  image_alt13: 'image',
  rootClassName: '',
  heading: 'Introduction to Python',
  image_alt11: 'image',
  image_src1:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHBlcnNvbnxlbnwwfHx8fDE2ODk5NzM5NTZ8MA&ixlib=rb-4.0.3&w=200',
}

Slideshow.propTypes = {
  image_src11: PropTypes.string,
  image_src2: PropTypes.string,
  image_src13: PropTypes.string,
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  image_src12: PropTypes.string,
  image_src: PropTypes.string,
  image_alt12: PropTypes.string,
  image_alt2: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_alt13: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Slideshow
