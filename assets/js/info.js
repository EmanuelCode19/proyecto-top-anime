function getParam(param) {
  const parametro = new URLSearchParams(location.search);
  return parametro.get(param);
}

const detalles = document.querySelector(".info-anime");

document.addEventListener("DOMContentLoaded", async () => {
  const id = getParam("id");

  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);

  const data = await response.json();

  const infor = data.data;

  console.log(infor);

  extraer(infor);
});

function extraer(data) {
  const div = document.createElement("div");

  const divFlex = document.createElement("div");
  divFlex.classList.add("flex");
  const trailer = document.createElement("div");
  trailer.classList.add("trailer");
  trailer.innerHTML = `


    <div class="trailer">
    <h2 class="color-black">Trailer<h2>
    <iframe width="560" height="315" src="${data.trailer.embed_url}" title="${data.title}" allowfullscreen></iframe>
    </div>
   
    
    
    `;

  if (data.trailer.embed_url === null) {
    div.innerHTML = `
    <div class="bloque-flex">
    <div>
    <img class="cover container" src="${data.images.jpg.image_url}" alt="">
    <h2 class="color-black text-center">${data.title}</h2>
    </div>

    <div class="p-color">
    <h2>Sipnosis</h2>
     <p>${data.synopsis}</p>

    <p>Clasificacion: ${data.rating}</p>

    <p>estado: ${data.status}</p>
    </div>
    </div>
    `;

    detalles.appendChild(div);
  } else {
    div.innerHTML = `
        <div class="bloque-flex">
        <div>
        <img class="cover container" src="${data.images.jpg.image_url}" alt="">
        <h2 class="color-black text-center">${data.title}</h2>
        </div>
    
        <div class="p-color">
        <h2>Sipnosis</h2>
         <p>${data.synopsis}</p>
    
        <p>Clasificacion: ${data.rating}</p>
    
        <p>estado: ${data.status}</p>
        </div>
        </div>
        `;

    divFlex.appendChild(trailer);
    div.appendChild(divFlex);
    detalles.appendChild(div);
  }
}
