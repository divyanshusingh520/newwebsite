
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import profile1 from "./Images/profile1.svg"
import profile2 from "./Images/profile2.svg"
import profile3 from "./Images/profile3.svg"
import arrow from './Images/arrow.svg'
import './styles/headersubsection.css'
import { useState } from 'react';



function Ourteammembers() {

  const [showMoreFirst, setShowMoreFirst] = useState(false);
  const [showMoreSecond, setShowMoreSecond] = useState(false);
  const [showMoreThird, setShowMoreThird] = useState(false);

  const textFirst = "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...";  // your long text here"; // your first long text here
  const textSecond = "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications....";
  const textThird = "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management...."; // your long text here

  const toggleTextFirst = () => {
    setShowMoreFirst(!showMoreFirst);
  }

  const toggleTextSecond = () => {
    setShowMoreSecond(!showMoreSecond);
  }

  const toggleTextThird = () => {
    setShowMoreThird(!showMoreThird);
  }
 

  return (
    <div className='team-member-setion'>
        <div className='offer-section-content text-center'>
<div className='offerings'>Our Team Members</div>

</div>
        <div className='row pt-4'>
    <div className='col-sm-4 verification-section'> <Card >
      <Card.Img className='p-3' style={{width:"100%"}} variant="top" src={profile1} />
      <Card.Body>
        <Card.Title>Brajesh Pathak</Card.Title>
        <Card.Text>
        {showMoreFirst ? textFirst : textFirst.substring(0, 100) + '...'}
         
        </Card.Text>
        <div className='buttonsection d-flex justify-content-end align-items-center'>
              <p onClick={toggleTextFirst}>{showMoreFirst ? 'View Less' : 'View More'}</p>
            </div>
      </Card.Body>

    </Card></div>
    <div className='col-sm-4 verification-section'> <Card >
      <Card.Img className='p-3' style={{width:"100%"}} variant="top" src={profile2} />
      <Card.Body>
        <Card.Title>Deepak Shukla</Card.Title>
        <Card.Text>
        {showMoreSecond ? textSecond : textSecond.substring(0, 100) + '...'}
         
        </Card.Text>
        <div className='buttonsection d-flex justify-content-end align-items-center'>
              <p onClick={toggleTextSecond}>{showMoreSecond ? 'View Less' : 'View More'}</p>
            </div>
      </Card.Body>
    </Card></div>
    <div className='col-sm-4 verification-section'> <Card >
      <Card.Img className='p-3' style={{width:"100%"}} variant="top" src={profile3}/>
      <Card.Body>
        <Card.Title>Alok Kumar Singh</Card.Title>
        <Card.Text>
        {showMoreThird ? textThird : textThird.substring(0, 100) + '...'}
         
        </Card.Text>
        <div className='buttonsection d-flex justify-content-end align-items-center'>
              <p onClick={toggleTextThird}>{showMoreThird ? 'View Less' : 'View More'}</p>
            </div>
      </Card.Body>
    </Card></div>

</div>

    </div>
  )
}

export default Ourteammembers