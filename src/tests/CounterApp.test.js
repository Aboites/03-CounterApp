import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import React from 'react';
import CounterApp from "../CounterApp";

describe('Pruebas realizadas a <CounterApp />', () => {

    test('Debe cargar <CounterApp /> con el valor por defecto de 10', () => {
        
        const wrapper = shallow(<CounterApp />);

        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe cargar <CounterApp /> con el valor dado', () => {
        
        const valor = 100;
        const wrapper = shallow(<CounterApp value={ valor } />);

        const valorRenderizado = wrapper.find('h2').text();

        expect( valorRenderizado ).toBe( valor.toString() );

    });

})
