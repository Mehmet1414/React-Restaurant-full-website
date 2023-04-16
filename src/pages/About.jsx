import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className="aboutBottum">
            <h1>Aboutb Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur rerum ipsum, veritatis quod aliquam enim eius eveniet inventore voluptas in voluptatum hic ullam repudiandae obcaecati. Blanditiis officiis similique sapiente eos?</p>
        </div>
    </div>
  )
}

export default About