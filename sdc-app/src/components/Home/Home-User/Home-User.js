import React, {Component} from 'react';
// import Navbar from "../../Navbar/Navbar"
import Jumbotron from 'react-bootstrap/Jumbotron'
import ServiceLog from "../../Equipment/ServiceLog"

  class Guest extends Component{
      render(){
          return(
            <div className="App">
            {/* <Navbar /> */}
               <Jumbotron>
            <h1 className="header"> Welcome to PowerManager!</h1>
            <h2>The comprehensive asset management solution</h2>
              </Jumbotron>     
              {/* Editing allowed if isManager defined */}
              <h3>isManager defined, editing allowed</h3>
              <ServiceLog isManager/>    
              {/* Otherwise, editing not permitted */}
              <h3>isManager not defined, editing not allowed</h3>
              <ServiceLog />
              </div>
          )
      }
  }

  export default Guest