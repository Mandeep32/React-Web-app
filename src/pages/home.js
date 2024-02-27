import React from 'react';
import logo from '../images/logo.png'
import award from '../images/award.png'
import valves from '../images/valves.png'
import people from '../images/people.png'

class Home extends React.Component{
    
    render(){
        return(
            <div>
            <div id="main">
              <div id="first">
                <img src={logo} alt="" />
              </div>
      
              <div id="second">
                <div id="secondf">
                  <img id="imgs" src={award} alt="" />
                </div>
                <div>
                  <div id="seconds">
                    <h3>
                      CRI PUMPS WINS THE NATIONAL AWARD 2018 for the 4th time.
                    </h3>
                    <ul>
                      <li>
                        C.R.I.'s energy efficient products are well recognized by
                        various Government Institutions, as trustworthy products for
                        various projects across the globe to save energy.
                      </li>
                      <li>
                        C.R.I. is the highest contributor in the country for the
                        projects of EESL (Energy Efficiency Services Limited) to
                        replace the old inefficient pumps with 5 Star rated energy
                        efficient smart pumps with IoT enabled control panel.
                      </li>
                    </ul>
                  </div>
      
                  <img id="imgs2" src={people} alt="" />
                  <p>
                    Government of India has awarded the "National Energy Conservation
                    Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
                    Group received the award from Smt. Sumitra Mahajan, Speaker of
                    Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                  </p>
                </div>
              </div>
      
              <div id="third">
                <p style={{ textAlign: 'center' }}>
                  INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
                  RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
                  POWER FOR THE NATION.
                </p>
                <br></br>
                <img src={valves} alt="" />
                <p style={{ textAlign: 'center' }}>
                  Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
                  Solar Systems - Motors
                </p>
      
                <hr style={{ color: 'rgb(231, 33, 33)' }} />
      
                <h5 style={{ textAlign: 'center' }}>
                  C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                </h5>
                <p style={{ textAlign: 'center' }}>
                  CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA
                  SUGARS | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING
                  FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE
                  FIGHTING AGRICULTURE | RESIDENTIAL
                </p>
              </div>
            </div>
      
            <footer>
              <a href="" style={{ color: 'white', textDecoration: 'none' }}>
                Toll Free 1800 200 1234
              </a>
              <a
                href="https://www.facebook.com/cripumps"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                www.facebook.com/cripumps
              </a>
              <a
                href="https://www.crigroups.com/"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                www.crigroups.com
              </a>
            </footer>
          </div>     
    );
    }
}
export default Home;
