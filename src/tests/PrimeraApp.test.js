import React from 'react';
// import { render } from "@testing-library/react";
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('Debe mostrar el mensaje "Hola soy Rodrigo"', () => {
    //     const mensaje = "Hola soy Rodrigo";
    //     const { getByText } = render( <PrimeraApp saludo= { mensaje }/>);
    //     expect( getByText(mensaje) ).toBeInTheDocument();
    // })
    
    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = "Hola soy Rodrigo";
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = "Hola soy Rodrigo";
        const subtitle = "Soy un subtitulo";

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo= { subtitle }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        
        expect( textoParrafo ).toBe( subtitle );

    })
    
})
