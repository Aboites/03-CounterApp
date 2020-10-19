import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Heroes', () => {
    
    test('getHeroeById debe retornar heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( heroe => heroe.id === id);

        expect( heroe ).toEqual( heroeData );

    })

    test('getHeroeById debe retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    })


    test('getHeroesByOwner debe retornar un arreglo con heroes de DC', () => {
        
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        const heroesDC = heroes.filter( h => h.owner === owner);

        expect( heroe ).toEqual( heroesDC );

    })


    test('getHeroesByOwner debe retornar un arreglo con heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );

        const heroesMarvel = heroes.filter( h => h.owner === owner);

        const cantidadObtenida = heroe.length;

        expect( cantidadObtenida ).toBe( heroesMarvel.length );

    })
    

})


// getHeroesByOwner