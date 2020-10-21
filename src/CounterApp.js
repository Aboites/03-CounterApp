// Functional Component
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 10 } ) => {

    const [ counter, setCounter] = useState( value );

    // handleAdd
    const handleAdd = (e) => {
        //setCounter( (c) => c + 1 );
        setCounter( counter + 1 );
    }

    // handleSubstract
    const handleSubstract = (e) => setCounter( counter - 1 );

    // handleAdd
    const handleReset = (e) => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );

}


CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;