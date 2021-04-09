import React from 'react';
import './main.css'
import Soup from '../../images/soup.jpg'
const Main = (props) =>{


          return(
            <div>
              <header>

              <nav>
                 <a href="#">Home</a>
                 <a href="#">Services</a>
                 <a href="#">Contact</a>
                 <a href="#">About Us</a>
              </nav>

              </header>

              <main style={ {height: '70vh'}   }>
              <img src={Soup} width={140} height={100}/>
              <p><span>Preis: € 5</span></p>
              <p>Suppe</p>

              </main>

              <footer>
                Footer information, links, etc.
              </footer>

            </div>
          )
}

export default Main;
