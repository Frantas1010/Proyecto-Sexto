const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const imageSources = ["https://cdn-icons-png.flaticon.com/512/117/117885.png", ""];  // Rutas de las imágenes
const currentImageIndex = 0;

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



function changeImage() {
  var image = document.getElementById("myImage");
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  image.src = imageSources[currentImageIndex];
}

const togglebutton = document.getElementById('toggleButton')
const sidebar = document.getElementById('sidebar')

togglebutton.addEventListener('click', () => {
  sidebar.classList.toggle('open')
})

const toggleabout = document.getElementById('toggleAbout')
const topbar = document.getElementById('topbar')

toggleabout.addEventListener('click', () => {
  topbar.classList.toggle('show')
})

const customButtonSVG = document.querySelector(".custom-button-svg");
const customModal = document.querySelector(".custom-modal");

// Agregamos un evento al botón SVG para abrir la modal
customButtonSVG.addEventListener("click", () => {
  customModal.style.display = "block";
});

// Agregamos un evento para cerrar la modal cuando se haga clic fuera de ella
window.addEventListener("click", (event) => {
  if (event.target == customModal) {
    customModal.style.display = "none";
  }
  // Obtenemos el botón SVG y la modal por su clase
 });


