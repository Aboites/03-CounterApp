import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import "@testing-library/jest-dom";


describe('Pruebas de 05-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {
        
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const userTest = getUser();

        expect( userTest ).toEqual( user );

    })

    test('getUsuarioActivo debe retornar objeto con username Rodrigo', () => {
        
        const usernameTest = "Rodrigo";

        const testUser = {
            uid: "ABC567",
            username: usernameTest
        }

        const received = getUsuarioActivo( "Rodrigo" );

        expect( received ).toEqual( testUser );

    })
    

})
