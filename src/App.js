import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header';
import Headersubsection from './components/headersubsection';
import Headersubimg from './components/headersubimg';
import Ouroffersection from "./components/Ouroffersection"
import Ourteammembers from "./components/Ourteammembers"
import Blogs from "./components/Blogs"
import Contactform from './components/Contactform';
import Footersection from './components/Footersection';

function App() {
  return (
    <>
       <Header/>
       <div className='container'>
      
        
       
      
    <Headersubsection/>
       <Headersubimg/>
       <Ouroffersection/>
       <Ourteammembers/>
       </div>
      <div className='bloghead'>
        <div className='container'>
       <Blogs/>
       </div>
       </div>
       <div className='container'>
       <Contactform/> 
       </div>
      
      

       <Footersection/> 
  </>
  );
}

export default App;
