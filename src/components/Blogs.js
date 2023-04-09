
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import newone from "./Images/newone.svg"
import blog2 from "./Images/blog2.svg"
import blog3 from "./Images/blog3.svg"
import arrow from './Images/arrow.svg'
import './styles/headersubsection.css'
import { Carousel} from 'react-bootstrap';
import rightIcon from "./Images/righticon.svg"
import leftIcon from "./Images/lefticon.svg"
import Admin from './Images/Admin.svg'


function Blogs() {
  return (
    <div className='team-blog-section'>
   <div className='offer-section-content text-center'>
<div className='offerings'>Blogs</div>

</div>
    <div className='carousel-icons'>
      <img src={leftIcon} alt='left icon' className='carousel-icon-left' />
      <img src={rightIcon} alt='right icon' className='carousel-icon-right' />
    </div>
    <Carousel className='' interval={null}>
      <Carousel.Item>
        <div className='row maincarousel'>
          <div className='col-sm-4 verification-section'>
            <Card>
              <Card.Img className='p-3'variant="top" src={newone} />
              <Card.Body>
                <div className='imagename d-flex justify-content-between align-items-center'>
                  <p>Real Estate, Analysis</p>
                </div>
              <div className='buttonsection d-flex justify-content-between align-items-center'>
        <p className='buttonsnows'>
            
            <span className='pl-1'><img src={Admin} /></span>
            <span className='mx-1'>09 June 2022</span>
            </p>
            <p className='project'>By admin</p>
            </div>
                <Card.Title>Background verification</Card.Title>
                <Card.Text>
                  Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...
                </Card.Text>
                <Button className='buttonsnow'>
                  <span className='mx-1'>View more</span>
                  <span className='pl-1'><img src={arrow} /></span>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-4 verification-section'>
            <Card>
              <Card.Img className='p-3'variant="top" src={blog2} />
              <Card.Body>
              <div className='imagename d-flex justify-content-between align-items-center'>
                  <p>Real Estate, Analysis</p>
                </div>
              <div className='buttonsection d-flex justify-content-between align-items-center'>
        <p className='buttonsnows'>
            
            <span className='pl-1'><img src={Admin} /></span>
            <span className='mx-1'>09 June 2022</span>
            </p>
            <p className='project'>By admin</p>
            </div>
                <Card.Title>Virtual site visit</Card.Title>
                <Card.Text>
                  It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...
                </Card.Text>
                <Button className='buttonsnow'>
                  <span className='mx-1'>View more</span>
                  <span className='pl-1'><img src={arrow} /></span>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-4 verification-section'>
            <Card>
              <Card.Img className='p-3'variant="top" src={blog3} />
              <Card.Body>
              <div className='imagename d-flex justify-content-between align-items-center'>
                  <p>Real Estate, Analysis</p>
                </div>
              <div className='buttonsection d-flex justify-content-between align-items-center'>
        <p className='buttonsnows'>
           
            <span className='pl-1'><img src={Admin} /></span>
            <span className='mx-1'>09 June 2022</span>
            </p>
            <p className='project'>By admin</p>
            </div>
                <Card.Title>Title diligence</Card.Title>
                <Card.Text>
                  Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...
                </Card.Text>
                <Button className='buttonsnow'>
                  <span className='mx-1'>View more</span>
                  <span className='pl-1'><img src={arrow} /></span>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
  
  )
}

export default Blogs