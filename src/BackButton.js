import React, {Component} from 'react';
import './BackButton.css';

const BackButton = () => {
    return (
        <div className='backbutton'>
            <form style={{ display: 'inline' }} action="#top" method="get">
                <button> Powrót do listy</button>
            </form>
        </div>
    );
  };

export default BackButton;
