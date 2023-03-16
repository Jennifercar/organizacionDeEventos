const imgGalery =document.querySelectorAll(".imgGalery")
const agregarImg =document.querySelector(".agregarImg")
const lightbox =document.querySelector(".lightbox")

imgGalery.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aperecerImg(imagen.getAttribute('src'))
    })
});

lightbox.addEventListener('click',(e)=>{
    if(e.target!== agregarImg){
        lightbox.classList.toggle('show')
 agregarImg.classList.toggle('showImage')
    }
});

const aperecerImg = (imagen)=>{
 agregarImg.src = imagen;
 lightbox.classList.toggle('show')
 agregarImg.classList.toggle('showImage')
     }