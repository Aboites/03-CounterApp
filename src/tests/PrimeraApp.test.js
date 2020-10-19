import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    
    test('Debe mostrar el mensaje "Hola soy Rodrigo"', () => {
        
        const mensaje = "Hola soy Rodrigo";

        const { getByText } = render( <PrimeraApp saludo= { mensaje }/>);
        
        expect( getByText(mensaje) ).toBeInTheDocument();
    })
    

})
