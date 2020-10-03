const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLigh= document.querySelector('.imagen-light')
const menu1 = document.querySelector('.menu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLigh.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLigh.classList.toggle('show')
        imagenesLight.classList.toggle('showImage') 
        menu1.style.opacity='1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLigh.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu1.style.opacity='0'
}