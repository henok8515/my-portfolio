import { Button } from '@mui/material'
import React from 'react'
import './portfolio.scss'
function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>My Projects</h1>
      <div className='project1_container'>
        <div className='project1'>
        <div className='project2_inside'>
          <div style={{
            width:'70%'

          }}>
          <h1 style={{
            fontSize:'50px'
          }}>Molla
          </h1>
          <p><span>Molla</span>  is a full-stack ecommerce website created on Mern stack technologies. We use the most recent technology and include Json web token (JWT) for authentication and authorisation requests.</p>
          <p><span>Tecnlogies</span> React ,Styled-components, Node-js , MongoDb , Express </p>
         <p> <span>Role</span>    Lead Front-end Developer</p>
         <Button href='https://next-jsportfolio.netlify.app/' target="_blank" style={{
          backgroundColor:"white",
          color:"black",
          padding:"10px 40px",
          marginTop:"20px"
         }}>Check Out</Button>
          </div>
        </div>

        </div>
      </div>
      <div className='project2'>
        <div className='project2_inside'>
          <div style={{
            width:'50%'

          }}>
          <h1 style={{
            fontSize:'50px'
          }}>
            Find Trend
          </h1>
          <p><span>FindTrend</span> is a responsive landing page to see the week's and current date's most popular news. </p>
          <p><span>Tecnlogies</span> Next-js , Tailwind css</p>
         <p> <span>Role</span>    Lead Front-end Developer</p>
         <Button href='https://next-jsportfolio.netlify.app/' target="_blank" style={{
          backgroundColor:"white",
          color:"black",
          padding:"10px 40px",
          marginTop:"20px"
         }}>Check Out</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio