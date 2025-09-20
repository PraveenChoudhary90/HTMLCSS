
import React from 'react'
import img1 from "../assets/h3.avif";
import img2 from "../assets/h4.avif";
function About() {
  return (
    <>
    <h1>About page</h1>
    <img src={img1} alt="frist image" width="900" height="600px" />
        <br />
        <hr size="6" color="red" />

        <img src={img2} alt="frist image" width="900" height="600px" />
    </>
  )
}

export default About