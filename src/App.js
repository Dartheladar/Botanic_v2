import logo from './IMG/leaf.png';
import './App.css';
import React, { Fragment } from 'react';
import ParticlesBg from 'particles-bg';
import BackButton from './BackButton';
import Mieszkanie from './Mieszkanie';
import Balkon from './Balkon';

import Dracena from './plants/Dracena';
import Bananowiec from './plants/Bananowiec';
import Paprotka from './plants/Paprotka';
import Monstera from './plants/Monstera';
import Bluszcz from './plants/Bluszcz';
import Fikus from './plants/Fikus';
import Sansewieria from './plants/Sansevieria';
import Suculenta from './plants/Suculenta';
import Papryka_ozdobna from './plants/Papryka_ozdobna';
import Eve_needle from './plants/Eve_needle';
import Grudnik from './plants/Grudnik';
import Echinokaktus from './plants/Echinokaktus';
import Wilczomlecz from './plants/Wilczomlecz';
import Fittonia from './plants/Fittonia';
import Filodendron_birkin from './plants/Filodendron_birkin';
import Aglaonema from './plants/Aglaonema';
import Begonia_krolewska from './plants/Begonia_krolewska';
import Guzmania from './plants/Guzmania';
import Skrzydlokwiat from './plants/Skrzydlokwiat';
import Sniadek from './plants/Sniadek';
import Hoja from './plants/Hoja';
import Rose_mini from './plants/Rose_mini';
import Narcyz from './plants/Narcyz';
import Pomidor_koktajlowy from './plants/Pomidor_koktajlowy';
import Szczypiorek from './plants/Szczypiorek';
import Mieta from './plants/Mieta';
import Lawenda from './plants/Lawenda';
import Szalwia_omszona from './plants/Szalwia_omszona';
import Gozdziki from './plants/Gozdziki';
import Petunia from './plants/Petunia';
import Aksamitka from './plants/Aksamitka';
import Begonia from './plants/Begonia';
import Scroll from './Scroll';



class App extends React.Component {
  render() {
    return (
      <Fragment className="App">
        <div>
          <Scroll>
          <ParticlesBg color="#ffffff" num={500} type="cobweb" bg={true} />
          <h1 className='f1 tc' id="top" >My personal garden</h1>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <h1 className=' f2 tc'>Mieszkanie</h1>
            <Mieszkanie />
          <h1 className='f2 tc'>Balkon</h1>
            <Balkon />

          <Dracena />
          <Bananowiec />
          <Paprotka />
          <Monstera />
          <Bluszcz />
          <Fikus />
          <Sansewieria />
          <Suculenta />
          <Papryka_ozdobna />
          <Eve_needle />
          <Grudnik />
          <Echinokaktus />
          <Wilczomlecz />
          <Fittonia />
          <Filodendron_birkin />
          <Aglaonema />
          <Begonia_krolewska />
          <Guzmania />
          <Skrzydlokwiat />
          <Sniadek />
          <Hoja />
          <Rose_mini />
          <Narcyz />

          <Pomidor_koktajlowy />
          <Szczypiorek />
          <Mieta />
          <Lawenda />
          <Szalwia_omszona />
          <Gozdziki />
          <Petunia />
          <Aksamitka />
          <Begonia />

          
          </Scroll>
        </div>
        <div>
          <BackButton />
          <h1 className='f6 tc'>Made by Dartheladar</h1>
        </div>
      </Fragment>
    );
    }
}


export default App;
