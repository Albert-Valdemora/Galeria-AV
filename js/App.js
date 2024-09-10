import { loadGallery } from "./Get_Imagen.js";
import { enviarFoto } from "./Post_Imagen.js";
const formulario = document.getElementById('formulario');


document.addEventListener('DOMContentLoaded', loadGallery);
formulario.addEventListener('submit', enviarFoto);


