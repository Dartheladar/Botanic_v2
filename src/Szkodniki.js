import React, {Component} from 'react';
import './Plant_grid.css';

import mszyce from './IMG/mszyce.png'
import ziemiorki from './IMG/ziemiorki.png'
import welnowce from './IMG/welnowce.png'
import przedziorki from './IMG/przedziorek.png'

const Szkodniki = () => {
    return (
        <div class="container" id="szkodniki">
            <a href="#mszyce"><img src={mszyce} alt="Mszyce" /></a>
            <a href="#ziemiorki"><img src={ziemiorki} alt="Ziemiórki" /></a>
            <a href="#welnowce"><img src={welnowce} alt="Wełnowce" /></a>
            <a href="#przedziorki"><img src={przedziorki} alt="Przędziorki" /></a>
        </div> 
        );
  };

  export default Szkodniki;

