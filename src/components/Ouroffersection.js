import './styles/headersubsection.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import backgroundveri from './Images/background-veri.svg'
import virtual from "./Images/virtual.svg"
import title from "./Images/title.svg"
import arrow from './Images/arrow.svg'
import './styles/headersubsection.css'



import React from 'react'

function Ouroffersection() {
  return (
    <div className='offer-section-header pt-4 pb-4'>
        <div className='offer-section-content text-center'>
<div className='offerings'>Our Offerings</div>
<p className='details'>This whole purchase journey can be divided into three stages. For more details, <a>Click Here</a></p>
</div>

<div class="row g-3">
  <div class="col-sm-4   ">
    <div className='pre-booking d-flex justify-content-center align-items-center '>
    <span class="p-2 number1">1</span>
    <span class="p-2">Pre-booking</span>
    </div>
  </div>
  <div class="col-sm-4  ">
    <div className='pre-registration d-flex justify-content-center align-items-center '>
    <span class="p-2 number2">2</span>
    <span class="p-2">Post-booking &amp; <br/> Pre-Registration</span>
    </div>
  </div>
  <div class="col-sm-4   ">
    <div className='post-registration d-flex justify-content-center align-items-center '>
    <span class="p-2 number3">3</span>
    <span class="p-2">Post-Registration</span>
    </div>
    </div>
 


</div>
<div className='row pt-4'>
    <div className='col-sm-4 '> <Card >
      <Card.Img className='p-3' style={{width:"100%"}} variant="top" src={backgroundveri} />
      <Card.Body>
        <Card.Title>Background verification</Card.Title>
        <Card.Text>
        Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...
        </Card.Text>
        <div className='buttonsection'>
        <Button className='buttonsnow'>
            <span className='mx-1'>Contact us</span>
            <span className='pl-1'><img src={arrow} /></span>
            </Button>
            <p>INR 3000/Project</p>
            </div>
      </Card.Body>
    </Card></div>
    <div className='col-sm-4'> <Card >
      <Card.Img className='p-3' style={{width:"100%"}} variant="top" src={virtual} />
      <Card.Body>
        <Card.Title>Virtual site visit</Card.Title>
        <Card.Text>
        It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...
        </Card.Text>
        <Button className='buttonsnow'>
            <span className='mx-1'>Contact us</span>
            <span className='pl-1'><img src={arrow} /></span>
            </Button>
      </Card.Body>
    </Card></div>
    <div className='col-sm-4'> <Card >
      <Card.Img className='p-3' style={{width:"100%"}} variant="top" src={title}/>
      <Card.Body>
        <Card.Title>Title diligence</Card.Title>
        <Card.Text>
        Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...
        </Card.Text>
        <Button className='buttonsnow'>
            <span className='mx-1'>Contact us</span>
            <span className='pl-1'><img src={arrow} /></span>
            </Button>
      </Card.Body>
    </Card></div>

</div>

    </div>
    
    
    
  )
}

export default Ouroffersection