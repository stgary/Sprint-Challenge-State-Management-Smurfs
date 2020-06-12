import React, { useContext } from 'react';
import { SmurfContext } from '../contexts'

const Smurfs = () => {

    const { smurf } = useContext(SmurfContext);

    return (
        <div className='smurf-card'>
            <p>Name: { smurf.name }</p>
            <p>Age: { smurf.age }</p>
            <p>Height: { smurf.height }</p>
            <p>----------------------</p>
        </div>
    );
};

export default Smurfs;