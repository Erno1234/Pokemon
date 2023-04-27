class Pokemon{
    constructor(nev, kep, szuloElem){
        this.nev = nev;
        this.kep = kep;
        szuloElem.append(`
            <div class="pokemon">
                <h3>${this.nev}</h3>
                <img src='${this.kep}' alt='pokemon' ">
            </div>
        `)
    }

    
}
export default Pokemon;