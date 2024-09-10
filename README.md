# Galería AV

Este es un proyecto simple de una galería de imágenes que permite a los usuarios cargar imágenes desde su dispositivo, verlas en una galería, ver detalles de la imagen en tamaño completo y eliminar imágenes. Las imágenes se almacenan en el `localStorage` del navegador.

## Funcionalidades

- **Cargar imágenes**: Los usuarios pueden seleccionar y cargar imágenes desde su dispositivo.
- **Vista en galería**: Las imágenes cargadas se muestran en una galería con un diseño responsivo.
- **Ver imagen en grande**: Al hacer clic en una imagen, se puede visualizar en tamaño completo en una ventana modal.
- **Eliminar imágenes**: Los usuarios pueden eliminar imágenes individuales de la galería.
- **Almacenamiento persistente**: Las imágenes se guardan en el `localStorage`, lo que permite que la galería persista entre sesiones.

## Tecnologías utilizadas

- **HTML5**: Para la estructura del proyecto.
- **CSS3**: Para el diseño y estilo visual.
- **JavaScript**: Para la funcionalidad de carga, eliminación y visualización de las imágenes.
- **Bootstrap 4**: Para el diseño responsivo y algunos estilos predefinidos.
- **Animate.css**: Para añadir animaciones a los elementos.
- **SweetAlert**: Para mostrar alertas atractivas y personalizadas al usuario.

## Estructura del proyecto

/Galeria-AV │ ├── index.html - Página principal de la galería ├── style.css - Archivo de estilos personalizados ├── /js - Carpeta de archivos JavaScript │ ├── App.js - Controlador principal para cargar y enviar imágenes │ ├── Get_Imagen.js - Funcionalidades para cargar imágenes desde el localStorage │ ├── Post_Imagen.js - Funcionalidad para subir nuevas imágenes al localStorage │ └── Delete_Imagen.js - Funcionalidad para eliminar imágenes del localStorage └── /img - Carpeta opcional para imágenes estáticas

bash
Copiar código

## Instalación y uso

1. **Descargar o clonar el repositorio**:
   ```bash
   git clone https://github.com/Albert-Valdemora/Galeria-AV.git
Abrir el archivo index.html en tu navegador.


## Problemas conocidos
- **Almacenamiento limitado**:
 Dado que las imágenes se almacenan en localStorage, el espacio disponible es limitado. Puede que el almacenamiento se llene rápidamente si se cargan imágenes grandes o muchas imágenes.
- **QuotaExceededError**: Si se intenta subir una imagen que excede el límite de almacenamiento, se puede generar un error de cuota excedida.

##  Futuras mejoras
- Utilizar un almacenamiento más escalable (como Firebase o una base de datos) para almacenar las imágenes en lugar de localStorage.
- Añadir un sistema de compresión de imágenes antes de guardarlas para evitar sobrepasar el límite de almacenamiento.
- Implementar un mejor manejo de errores cuando se alcanza el límite de almacenamiento.


## Autor
Albert Daniel Valdemora Suarez 