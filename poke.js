import Pokemon from "./Pokemon.js"
let LISTA=[];
$(function(){
    
    
    let vegpont = "https://pokeapi.co/api/v2/pokemon/ditto";
    adatbeolvas(vegpont, megjelenit);
})
function adatbeolvas(vegpont, myCallback){
    fetch(vegpont,{
        method: "GET",
    })
    .then((response)=> response.json())
    .then((adat)=>{
        myCallback(adat);      
    })
}
function megjelenit(adat){
    const szuloElem =$(".tarolo");
    console.log(adat);
    let eleresiut = adat.sprites.front_default;
    let pokemonNev = adat.name;
    const poke1 = new Pokemon(pokemonNev, eleresiut, szuloElem);
}