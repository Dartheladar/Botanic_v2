import React, {Component} from 'react';
import './Plant_grid.css';

import dracena from './IMG/dracena.png'
import bananowiec from './IMG/musa_don.png'
import paprotka from './IMG/fern.png'
import monstera_deliciosa from './IMG/monstera_deliciosa.png'
import monstera_monkey_musk from './IMG/monstera_monkey_musk.png'
import monstera_minima from './IMG/monstera_minima.png'
import bluszcz from './IMG/bluszcz.png'
import fikus from './IMG/fikus.png'
import sansevieria from './IMG/sansevieria.png'
import Suculent_Crassula_Perforata from './IMG/Suculent-Crassula_Perforata.png'
import ornamental_pepper from './IMG/ornamental_pepper.png'
import Opuntia_subulata_Opuncja from './IMG/Opuntia_subulata_Opuncja.png'
import Schlumbergera from './IMG/Schlumbergera.png'
import cactus01 from './IMG/cactus01.png'
// import cactus02 from './IMG/cactus02.png'
import Cactaceae_Eastern from './IMG/Cactaceae_Eastern.png'
import wilczomlecz from './IMG/wilczomlecz.png'
import fittonia from './IMG/fittonia.png'
import aglaonema from './IMG/aglaonema.png'
import philodendron_white_measure from './IMG/philodendron_white_measure.png'
import begonia_leaf_beleaf_inca from './IMG/begonia_leaf_beleaf_inca.png'
import Guzmania_lingulata from './IMG/Guzmania lingulata.png'
import spathiphyllum_sweet_chico from './IMG/spathiphyllum_sweet_chico.png'
import Ornithogalum_dubium_sniadek from './IMG/Ornithogalum_dubium_sniadek.png'
import hoya from './IMG/hoya.png'
import rose from './IMG/rose.png'
import narcyz from './IMG/narcyz.png'
import morgana from './IMG/morgana.png'
import geranium from './IMG/Pelargonium_graveolens.png'
import saintpaulia from './IMG/saintpaulia.png'
import aloes from './IMG/aloes.png'
import chlorophytum from './IMG/chlorophytum_comosum.png'
import epipremnum from'./IMG/epipremnum.png'
import maranta from './IMG/maranta.png'
import philodendron_scandens from './IMG/philodendron_scandens.png'
import scindapsus_pictus from './IMG/scindapsus_pictus.png'


// Jeszcze nie mam
import alocatia from './IMG/alocatia.png'
import amarylis from './IMG/amarylis.png'
import calathea from './IMG/calathea.png'
import chamedora from './IMG/chemadora.png'
import ficus_elastica from './IMG/Ficus_elastica.png'
import areka from './IMG/palma_areka.png'
import stephanotis from './IMG/stephanotis.png'

const Mieszkanie = () => {
    return (
        <div class="container" id="mieszkanie">
            <a href="#dracena"><img src={dracena} alt="Dracena" /></a>
            <a href="#bananowiec"><img src={bananowiec} alt="Drzewo Bananowca" /></a>
            <a href="#paprotka"> <img src={paprotka} alt="Paprotka" /></a>
            <a href="#monstera"><img src={monstera_deliciosa} alt="Monstera Deliciosa" /></a>
            <a href="#monstera"><img src={monstera_monkey_musk} alt="Monstera Monkey Mask" /></a>
            <a href="#monstera_minima"><img src={monstera_minima} alt="Monstera Minima" /></a>
            <a href="#bluszcz"><img src={bluszcz} alt="Bluszcz" /></a>
            <a href="#fikus"><img src={fikus} alt="Fikus" /></a>
            <a href="#sansevieria"><img src={sansevieria} alt="Wężownica" /></a>
            <a href="#suculenta"><img src={Suculent_Crassula_Perforata} alt="Suculenta" /></a>
            <a href="#papryka_ozdobna"><img src={ornamental_pepper} alt="Papryka Ozdobna" /></a>
            <a href="#eve_needle"><img src={Opuntia_subulata_Opuncja} alt="Opuntia subulata Opuncja" /></a>
            <a href="#grudnik"><img src={Schlumbergera} alt="Grudnik" /></a>
            <a href="#echinokaktus"><img src={cactus01} alt="kaktus z suszkami" /></a>
            {/* <a href="#echinokaktus"><img src={cactus02} alt="kaktus z suszkami" /></a> */}
            <a href="#echinokaktus"><img src={Cactaceae_Eastern} alt="Echinokaktus Grusona" /></a>
            <a href="#wilczomlecz"><img src={wilczomlecz} alt="Wilczomlecz" /></a>
            <a href="#fittonia"><img src={fittonia} alt="Fittonia" /></a>
            <a href="#aglaonema"><img src={aglaonema} alt="Aglaonema" /></a>
            <a href="#filodendron_birkin"><img src={philodendron_white_measure} alt="Filodendron Birkin" /></a>
            <a href="#philodendron_scandens"><img src={philodendron_scandens} alt="Philodendron Scandens" /></a>
            <a href="#begonia_krolewska"><img src={begonia_leaf_beleaf_inca} alt="Begonia Królewska" /></a>
            <a href="#guzmania"><img src={Guzmania_lingulata} alt="Guzmania" /></a>
            <a href="#skrzydlokwiat"><img src={spathiphyllum_sweet_chico} alt="Skrzdłokwiat" /></a>
            <a href="#sniadek"><img src={Ornithogalum_dubium_sniadek} alt="Śniadek Wątpliwy" /></a>
            <a href="#hoja"><img src={hoya} alt="Hoja" /></a>
            <a href="#rose_mini"><img src={rose} alt="Róża miniaturka" /></a>
            <a href="#narcyz"><img src={narcyz} alt="Narcyz" /></a>
            <a href="#morgana"><img src={morgana} alt="Morgana" /></a>
            <a href="#geranium"><img src={geranium} alt="Geranium" /></a>
            <a href="#saintpaulia"><img src={saintpaulia} alt="Saintpaulia" /></a>
            <a href="#aloes"><img src={aloes} alt="Aloes" /></a>
            <a href="#chlorophytum"><img src={chlorophytum} alt="Zielistka" /></a>
            <a href="#epipremnum"><img src={epipremnum} alt="Epipremnum" /></a>
            <a href="#maranta"><img src={maranta} alt="Maranta" /></a>
            <a href="#scindapsus_pictus"><img src={scindapsus_pictus} alt="Scindapsus_pictus" /></a>
            <a href="#alocatia"><img src={alocatia} alt="Alocatia" /></a>
            <a href="#amarylis"><img src={amarylis} alt="Amarylis" /></a>
            <a href="#calathea"><img src={calathea} alt="Calathea" /></a>
            <a href="#ficus_elastica"><img src={ficus_elastica} alt="Ficus_elastica" /></a>
            <a href="#chamedora"><img src={chamedora} alt="Chamedora" /></a>
            <a href="#areka"><img src={areka} alt="Areka" /></a>
            <a href="#stephanotis"><img src={stephanotis} alt="Stephanotis" /></a>
        </div>
        );
  };

  export default Mieszkanie;