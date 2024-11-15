/*const principal= document.getElementById("cuerpo")

principal.addEventListener("DOMContentLoaded",()=>{
    console.log("el contenido se ha cargado")
fetch("https://rickandmortyapi.com/api/character/?page=1")
.then((response)=>{
    if(!response.ok){
            return console.log("algo a salido mal")
    }
    return response.json()
})

.then((data)=>{
    principal.innerHTML= data.value
})
.catch((data)=>{
    principal.innerText= "algo ha salido mal"})
})*/ 
document.addEventListener("DOMContentLoaded", () => {
    const principal = document.getElementById("cuerpo");

    fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then((response) => {
            if (!response.ok) {
                console.log("Algo ha salido mal");
                return;
            }
            return response.json();
        })
        .then((data) => {
            // Creamos tarjetas para cada personaje
            const personajesHTML = data.results.map((character) => {
                return `
                        <div class="maquetacion">
                        <img src="${character.image}" alt="${character.name}">
                        <h3>${character.name}</h3>
                        <p>Specie: ${character.species}</p>
                    </div>
                `;
            }).join("");

            
            principal.innerHTML = personajesHTML
        })
        .catch(() => {
            principal.innerText = "Algo ha salido mal";
        });
});