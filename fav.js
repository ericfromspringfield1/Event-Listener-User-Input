const favoriteThingsContainer = document.querySelector("#favoriteThings") 
const htmlRep = (thing, location) => {
    return `
    <div>
    <h3>I can totally buy ${thing} at ${location}</h3> 
    </div>
    `
}

document.querySelector("#saveEntry").addEventListener("click", event => {
    const thing = document.querySelector("#thing").value
    const location = document.querySelector("#location").value
    const thingLocation = htmlRep(thing, location)
    favoriteThingsContainer.innerHTML += thingLocation 
   
})