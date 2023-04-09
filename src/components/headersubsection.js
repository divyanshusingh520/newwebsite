import React from 'react'
import './styles/headersubsection.css'
import background from "./Images/background.svg"


const headersubsection = () => {
  return (
    <div className='row'>
  <div className='col-sm-12 mainsection' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    <div className="houseimage">
      <img src={background} alt=''/> 
      <div className='contentss'>
        <p style={{color: 'red'}}>
          <span style={{ display: 'block', color: 'white' }}>Making your <span style={{color:"yellow"}}>real</span></span>
          <span style={{ display: 'block',color: 'white' }}><span style={{color:"yellow"}}>estate</span> purchase</span>
          <span style={{ display: 'block',color: 'white' }}>journey faster and</span>
          <span style={{ display: 'block',color: 'white' }}>transparent</span>
        </p>
      </div>
    </div>
  </div>
</div>


  
  )
}

export default headersubsection