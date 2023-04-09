import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import happy from "./Images/Happy.svg"
import { Formik } from "formik";
import * as yup from "yup";
import Select from 'react-select';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './styles/headersubsection.css'




function Contactform() {

  const stages = [
    { value: 'stage1', label: 'Stage 1' },
    { value: 'stage2', label: 'Stage 2' },
    { value: 'stage3', label: 'Stage 3' },
    // ...
  ];

  return (
    <div className='inputform pt-4 pb-4'>
      
      <div className='container'>
  <div className='row'>
    <div className='col-sm-12 col-md-7'>
      <p className='get'>Get In Touch With Us To Connect</p>
      <p className='contactus'>Contact Us </p>
      <Form>

        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
              <Form.Label className="label-center-start bg-white px-2">Full name</Form.Label>
              <Form.Control type="email" placeholder="Enter name" maxLength="50" />
              <Form.Text className="text-muted">
                Not more than 50 characters.
              </Form.Text>
            </Form.Group>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
              <Form.Label className="label-center-start bg-white px-2">Email address</Form.Label>
              <Form.Control type="email" placeholder="lorem@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
              <Form.Text className="text-danger">
                Please enter a valid email address.
              </Form.Text>
            </Form.Group>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
              <PhoneInput
                placeholder="+97473476464"
                defaultCountry="India"
                onChange={(value) => console.log(value)}
              />
            </Form.Group>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
              <Form.Label className="label-center-start bg-white px-2">Country</Form.Label>
              <Form.Control type="password" placeholder="Bangalore" />
            </Form.Group>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
              <Form.Label className="position-absolute top-0 start-0 bg-white px-2">Stages</Form.Label>
              <Select options={stages} placeholder="I have booked but registration is not done" />
            </Form.Group>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Form.Group className="mb-3 position-relative" controlId="formBasicPassword"></Form.Group>
          </div>
          <div className='col-sm-12 col-md-6'>
            <Button className='submit' variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>

      </Form>
    </div>

    <div className='col-sm-12 col-md-5 happyimage'>
      <img src={happy} alt='' />
    </div>
  </div>
</div>

</div>
  )
}

export default Contactform