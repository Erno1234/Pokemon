export function adatBeolvas(vegpont, myCallback){
    fetch(vegpont,{
        method: "GET",
    })
    .then((response)=> response.json())
    .then((adat)=>{
        myCallback(adat);      
    })
}