import { Button } from '@mui/material'
import React from 'react'
import './portfolio.scss'
function Portfolio() {
  return (
    <div className='portfolio' id='work'>
      <h1><span>My Projects</span></h1>
      <div className='project1_container'>
        <div className='project1'>
        <div className='project2_inside'>
          <div style={{
            width:'70%'
          }}>
          <h1>Molla
          </h1>
          <p><span>Molla</span>  is a full-stack e-commerce website created on Mern stack technologies. We use the most recent technology and include Json web token (JWT) for authentication and authorization requests.</p>
          <p><span>Technologies</span>:  React ,Styled-components, Node-js , MongoDb , Express </p>
         <p> <span>Role</span> :   Lead Front-end Developer</p>
         <Button className='button' href='https://e-commerce-woad-zeta.vercel.app/' target="_blank" >Visit</Button>
          </div>
        </div>

        </div>
      </div>
      <div className='project2'>
        <div className='project2_inside'>
          <div className='text'>
          <h1>
            Find Trend
          </h1>
          <p><span>FindTrend</span> is a responsive landing page to see the week's and current date's most popular news. </p>
          <p><span>Technologies</span> Next-js , Tailwind css</p>
         <p> <span>Role</span>    Lead Front-end Developer</p>
         <Button className='button' href='https://next-jsportfolio.netlify.app/' target="_blank" >Visit</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio