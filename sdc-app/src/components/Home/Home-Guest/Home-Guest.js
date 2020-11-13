import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

  class Guest extends Component{
      render(){
          return(
            <Router>
            <div className="App">
               
            <h1 className="header"> Welcome to PowerManager!</h1>
            <h2>The comprehensive asset management solution</h2>
    
              <body>
                <table>
                  <tr>
                    <td>
                      <wrapper name="Articulated Trucks">
                        <Link to="/Guest/Articulated_Trucks">
                        <img className="icons" padding-left="200px" alt="Articulated Trucks" src="https://s7d2.scene7.com/is/image/Caterpillar/CM20200803-1b3b2-05e3c?$cc-s$" />
                        <h5>Articulated Trucks</h5>
                        </Link>
                      </wrapper>`
                    </td>
                    <td>
                      <wrapper name="Asphalt_Pavers">
                        <img className="icons" padding-left="200px" alt="Asphalt_Pavers"  src="https://s7d2.scene7.com/is/image/Caterpillar/C10412030?$cc-s$" />
                        <h5>Asphalt Pavers</h5>
                      </wrapper>
                    </td>
                    <td>
                      <wrapper name="Backhoe">
                        <img className="icons" padding-left="200px" alt="Backhoe Loaders" src="https://s7d2.scene7.com/is/image/Caterpillar/CM20200206-d8c01-57333?$cc-s$"></img>
                        <h5>Backhoe Loaders</h5>
                      </wrapper>
                    </td>
                    <td>
                      <wrapper name="Cold_planer">
                      <img className="icons" padding-left="200px" alt="Cold Planers" src="https://s7d2.scene7.com/is/image/Caterpillar/CM20200206-43545-32720?$cc-s$" />
                      <h5>Cold Planers</h5>
                      </wrapper>
                    </td>
                    </tr>
                    <tr>
                    <td>
                      <wrapper name="Compactor">
                      <img className="icons" padding-left="200px" alt="Compactors" src="https://s7d2.scene7.com/is/image/Caterpillar/CM20130904-45250-23505?$cc-s$" />
                      <h5>Compactors</h5>
                      </wrapper>
                    </td>
                    <td>
                      <wrapper name="Dozer">
                      <img className="icons" padding-left="200px" alt="Dozers" src="https://s7d2.scene7.com/is/image/Caterpillar/C811296?$cc-s$" />
                      <h5>Dozers</h5>
                      </wrapper>
                    </td>
                    <td>
                      <wrapper name="Excavator">
                      <img className="icons" padding-left="200px"  alt="Excavators" src="https://s7d2.scene7.com/is/image/Caterpillar/CM20200803-7d970-4b60a?$cc-s$" />
                      <h5>Excavators</h5>
                      </wrapper>
                    </td>
                    <td>
                      <wrapper name="Off-Highway">
                      <img className="icons" padding-left="200px" alt="Off-Highway Trucks" src="https://s7d2.scene7.com/is/image/Caterpillar/C833061?$cc-s$" />
                      <h5>Off-Highway Trucks</h5>
                      </wrapper>
                    </td>
                    </tr>
                    </table>
                    
          </body>
              </div>
              </Router>
          )
      }
  }

  export default Guest