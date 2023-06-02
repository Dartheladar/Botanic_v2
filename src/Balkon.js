import React, {Component} from 'react';
import './Plant_grid.css';

import pomidor_koktajlowy from './IMG/pomidor_koktajlowy.png'
import szczypiorek from './IMG/chives.png'
import mentha_spicata_moroccan from './IMG/mentha_spicata_moroccan.png'
import paper_mint from './IMG/paper_mint.png'
import lemon_mint from './IMG/lemon_mint.png'
import lavender from './IMG/lavender.png'
import szalwia_omszona from './IMG/sage.png'
import gozdziki from './IMG/carnations_flowers.png'
import petunie from './IMG/petunie.png'
import aksamitki from './IMG/merigold.png'
import begonia from './IMG/begonia_knole.png'



const Balkon = () => {
    return (
        <div class="container" id="balkon">
        <a href="#pomidor_koktajlowy"><img src={pomidor_koktajlowy} alt="Pomidor Koktajlowy" /></a>
        <a href="#szczypiorek"><img src={szczypiorek} alt="Szczypiorek" /></a>
        <a href="#mieta"><img src={mentha_spicata_moroccan} alt="Mięta Marokańska" /></a>
        <a href="#mieta"><img src={paper_mint} alt="Mieta Pieprzowa" /></a>
        <a href="#mieta"><img src={lemon_mint} alt="Mieta Cytrynowa" /></a>
        <a href="#lawenda"><img src={lavender} alt="Lawenda" /></a>
        <a href="#szalwia_omszona"><img src={szalwia_omszona} alt="Szałwia Omszona" /></a>
        <a href="#gozdziki"><img src={gozdziki} alt="Goździki" /></a>
        <a href="#petunia"><img src={petunie} alt="Petunia" /></a>
        <a href="#aksamitki"><img src={aksamitki} alt="Aksamitka" /></a>
        <a href="#begonia"><img src={begonia} alt="Begonia" /></a>
        
      </div>
        
        );
  };

  export default Balkon;