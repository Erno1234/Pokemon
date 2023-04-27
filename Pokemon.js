class Pokemon{
    constructor(adat, szuloElem){
        this.nev = adat.pokemonNev;
        this.kep = adat.eleresiut;
        szuloElem.append(`
            <div class="pokemon" style="position: absolute;">
                <h3>${this.nev}</h3>
                <img src='${this.kep}' alt='${this.kep}' ">
            </div>
        `)
        this.pokeELEM=$(".pokemon:last-child")
        $(window).on("keydown", (event)=>{
            console.log(event.key);
            let bill=event.key;
            let poz= this.pokeELEM.position()
            console.log(poz);
            switch(bill) {
                case "a":
                    console.log("bal")
                    
                    this.pokeELEM.css("left", poz.left-10)
                    break;
                case "d":
                    console.log("jobb")
                    this.pokeELEM.css("left", poz.left+10)
                    break;
                case "w":
                    console.log("fel")
                    this.pokeELEM.css("left", poz.top+10)
                  break;
                case "s":
                    console.log("le")
                    this.pokeELEM.css("left", poz.top-10)
                break;
                default:
              }
        })
    }

    
}
export default Pokemon;