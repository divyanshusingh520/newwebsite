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
       
      <div className='bloghead'>
        <div></div>
       <Blogs/>
       </div>
       
       <Contactform/> 
       
       <Footersection/> 
       </div>


  </>
  );
}

export default App;
