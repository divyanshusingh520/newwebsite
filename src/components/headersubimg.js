import React from 'react'
import contacthomeimg from './Images/contacthomeimg.svg'
import arrow from './Images/arrow.svg'
import Button from 'react-bootstrap/Button';
import './styles/headersubsection.css'


function Headersubimg() {
  return (
    <div className='row subsection mt-4'>
        <div className='col-sm-12 col-md-6 contents'>
              <img src={contacthomeimg}/>
          </div>

        <div className='col-sm-12 col-md-6 contentsection'>
         <h1>Who We are</h1>
         <p>The Indian real estate sector is resilient despite global headwinds. Returns<br/> are impressive and the sector is expected to reach US$ 1 trillion in market <br/> size by 2030 (Niti Aayog report, 2021). However, the whole real estate <br/> purchase journey is very tedious and takes more than 2 years on average.<br/> Further, as the ticket size of this investment is large, security and trust<br/> become quite critical. Problems compound when you are currently away <br/> from your purchase destination. If you are experiencing difficulties in the<br/> real estate purchase journey, we are here to make it fast and transparent.</p>
         <Button className='buttonsnow'>
            <span>Contact now</span>
            <span className='pl-2'><img src={arrow} /></span>
            </Button>
    </div> 

    </div>
    

  )
}

export default Headersubimg