import React from 'react'
import ScilsSlider from './skilsSlider'
import TextDiscription from './/textDiscription'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <TextDiscription />
        <ScilsSlider />
      </div>
    </div>
  )
}
export default About