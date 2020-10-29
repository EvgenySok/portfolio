import React from 'react'
import ScilsSlider from './skilsSlider'
import TextDiscription from './/textDiscription'

const About = () => {
  return (
    <div className="about">
      <div id="about" className="container">
        <TextDiscription />
        <ScilsSlider />
      </div>
    </div>
  )
}
export default About