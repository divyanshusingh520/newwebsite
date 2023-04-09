
import React from 'react'
import logo1 from "../components/Images/logos1.svg";
import vector from "./Images/Vector.svg"
import vector1 from "./Images/vone.svg"
import vector2 from "./Images/vtwo.svg"
import vector3 from "./Images/vthree.svg"
import './styles/headersubsection.css'
import message from "./Images/message.svg"
import calls from "./Images/calls.svg"



function Footersection() {
  return (
    
    <div className='row pt-4 pb-1 footer' style={{backgroundColor:"#002550",}}>
        <div className='col-sm-6 col-md-3 '> <img src={logo1} alt='' /></div>
        <div className='col-sm-6 col-md-3 company'>
            <ul>
                <li className='companys'>Company</li>
                <li>Home</li>
                <li>Our Offerings</li>
                <li>Our Team</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className='col-sm-6 col-md-3 usefull'> <ul>
                <li className='links'>Usefull Link</li>
                <li>Blogs</li>
                <li>FAQ,s</li>
                
            </ul></div>
        <div className='col-sm-6 col-md-3'>
        <ul>
                <li className='d-flex'>
                    <div><img src={message} alt='' /></div>
                <div className='contact-details '>
                <div className='emails'>Email:</div>
                    <div className='email'>support@inreglobal.com</div>
                    
                </div>
                </li>
                <li className='d-flex'><img src={calls} alt='' />
                
                <div className='contact-details '>
                    <div className='emails'>Phone:</div>
                    <div className='email'>+91 | 7019305889</div>
                    
                </div>
            
                </li>
                
            </ul>
        </div>

      <div className='row  pb-4 mt-8 justify-content-between justify-content-center align-items-center'>
       <div className='col-sm-12 col-md-4 copyright'>Copyright 2023. Designed by INRE Global</div> 
       <div className='col-sm-12 col-md-  d-flex justify-content-between justify-content-center align-items-center'>
        <div className='first'>
        <img src={vector} alt='' />
        <span className='pl-1'>LinkedIn</span>
        
        </div>
        <div className='second'><img src={vector1} alt='' />
        <span>Facebook</span>  </div>
        <div className='third'><img src={vector2} alt='' />
        <span>Twitter</span> </div>
        <div className='fourth'><img src={vector3} alt='' />
        <span>Instagram</span> </div>
       </div>
      </div>
    </div>
  )
}

export default Footersection