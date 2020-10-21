import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import React from 'react';
import CounterApp from "../CounterApp";

describe('Pruebas realizadas a <CounterApp />', () => {

    let wrapper;

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );
        
    });

    test('Debe cargar <CounterApp /> con el valor por defecto de 10', () => {

        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe cargar <CounterApp /> con el valor dado', () => {
        
        const valor = 100;
        const wrapper = shallow(<CounterApp value={ valor } />);

        const valorRenderizado = wrapper.find('h2').text();

        expect( valorRenderizado ).toBe( valor.toString() );

    });

    test('Debe incrementar el contador que se renderizo', () => {

        const btn1 = wrapper.find('button').at(0).simulate('click');

        const valorRenderizado = wrapper.find('h2').text();
        
        expect( valorRenderizado ).toBe('11');
        
    });

    test('Debe decrementar el contador que se renderizo', () => {

        
        const btn1 = wrapper.find('button').at(2).simulate('click');

        const valorRenderizado = wrapper.find('h2').text();
        
        expect( valorRenderizado ).toBe('9');
        
    });

    test('Debe de asignar el valor de los props en el contador renderizado', () => {
        
        const wrapper = shallow(<CounterApp value={ 105 } />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valorRenderizado = wrapper.find('h2').text();

        expect( valorRenderizado ).toBe('105');

    })
    
    

})
