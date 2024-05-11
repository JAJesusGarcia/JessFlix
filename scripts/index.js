$.get("https://api.1rodemayo.com/movies/", (data, status) => {
    imprimirPeliculas(data);
});

function imprimirPeliculas(data) {
    const divPadre = document.querySelector(".peliculas");
    data.forEach(pelicula => {
        const tarjeta = peliculaImpresa(pelicula);
        divPadre.appendChild(tarjeta);
    });
}

function peliculaImpresa(pelicula) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pelicula");

    const imagenTarjeta = document.createElement("img");
    imagenTarjeta.src = pelicula.poster;

    const nombreTarjeta = document.createElement("h3");
    nombreTarjeta.innerHTML = pelicula.title;
    nombreTarjeta.classList.add("textos-tarjetas");

    const infoPelicula = document.createElement("div");
    infoPelicula.classList.add("informacion-pelicula");

    const año = document.createElement("p");
    año.innerHTML = pelicula.year;
    año.classList.add("textos-tarjetas");

    const genero = document.createElement("p");
    genero.innerHTML = pelicula.genre[0];
    genero.classList.add("textos-tarjetas");

    infoPelicula.append(año, genero);

    const boton = document.createElement("button");
    boton.type = "button";
    boton.innerHTML = "Más Info";

    tarjeta.append(imagenTarjeta, nombreTarjeta, infoPelicula, boton);
    return tarjeta;
}




// M1


// console.log();

// function imprimirPeliculas (data) {
//     const divPadre = document.querySelector(".peliculas");
//     const objMap = data.map((pelicula) => peliculaImpresa(pelicula));
//     objMap.forEach((pelicula) => divPadre.append(pelicula));
//     return divPadre;
// }

// function peliculaImpresa (pelicula) {
//     const tarjeta = document.createElement("div");
//     tarjeta.classList.add("pelicula");
//     const imagenTarjeta = document.createElement("img");
//     imagenTarjeta.src = pelicula.poster;
//     const nombreTarjeta = document.createElement ("h3");
//     nombreTarjeta.innerHTML = pelicula.title;
//     nombreTarjeta.classList.add("textos-tarjetas");

//     const infoPelicula = document.createElement("div");
//     infoPelicula.classList.add("informacion-pelicula");
//     const año = document.createElement("p");
//     año.innerHTML = pelicula.year;
//     año.classList.add("textos-tarjetas");
//     const genero = document.createElement("p");
//     genero.innerHTML = pelicula.genre[0];
//     genero.classList.add("textos-tarjetas");

//     infoPelicula.append(año, genero);

//     const boton = document.createElement("button");
//     boton.type = "button";
//     boton.innerHTML = "Mas Info";
    
//     tarjeta.append(imagenTarjeta,nombreTarjeta,infoPelicula,boton);
//     return tarjeta;
// }



// module.exports = {imprimirPeliculas, peliculaImpresa};






