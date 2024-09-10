import { deleteImage } from "./Delete_imagen.js";

//Funcion para cargas las imagenes del localStorage
 export function loadGallery() {
  const gallery = document.getElementById('cont-img')

  gallery.innerHTML = ''
  const images = JSON.parse(localStorage.getItem('imagenes')) || []

  if (images.length >= 1) {
    document.getElementById('noResultAlert').style.display = 'none'
  }else{
    document.getElementById('noResultAlert').style.display = 'block'
  }

  images.forEach((img, index) => {
    const imgElement = document.createElement('img')
    imgElement.src = img
    imgElement.onclick = () => viewImageDetail(img)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Borrar";
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.onclick = () => deleteImage(index)

    const container = document.createElement('div')
    container.classList.add('contL-image', 'animate__animated', 'animate__jackInTheBox')
    container.appendChild(imgElement)
    container.appendChild(deleteButton)

    gallery.appendChild(container)
  });

}


// Funcion para ver las imagenes en grande
const viewImageDetail = ( img ) => {
  const modal = document.querySelector('.cont-modal')
  const modalImg = document.getElementById('modal-img')
  const btnClose = document.getElementById('closeModal')

  modal.style.display = "block"
  modalImg.src = img

  btnClose.addEventListener('click', () => {
    modal.style.display = "none"
  })
  
}