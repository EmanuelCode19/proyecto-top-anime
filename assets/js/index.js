
const load = async(e) => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime')

      const data = await response.json()

        console.log(data.data)
    
        if(response.status === 200){
             data.data.forEach(element => {
                const sectionImg = document.querySelector('.images')

                const div = document.createElement('div')

                const enlace = document.createElement('a');
                enlace.textContent="Mas detalles"
                enlace.href=`informacion?id=${element.mal_id}`
                enlace.classList.add('enlace')

                div.classList.add('container')

                div.innerHTML =`
                <h2 class="color-black">${element.title}</h2>

                <p class="color-black">top popular - ${element.popularity}</p>

               
                

                <img class="cover container" src="${element.images.jpg.image_url}" alt="">
               
                
            
                <p class="color-black">Episodes - ${element.episodes}</p>


                `;
                div.appendChild(enlace)

                sectionImg.appendChild(div)

                

             });

             

        }

        else if(response.status === 401){
            
        }

        else if(response.status === 404){
            
        }else{

        }

        
    }catch(e){

    }
   
}

load()


