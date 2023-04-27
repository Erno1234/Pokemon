import Pokemon from "./Pokemon.js"
import { adatBeolvas } from "./hivasok.js";
$(function(){
    let vegpont = "https://pokeapi.co/api/v2/pokemon/ditto";
    adatBeolvas(vegpont, megjelenit);
})

function megjelenit(adat){
    const szuloElem =$(".tarolo");
    console.log(adat);
    let obj={
        eleresiut:adat.sprites.front_default,
        pokemonNev:adat.name,
    }
    const poke1 = new Pokemon(obj, szuloElem);
}