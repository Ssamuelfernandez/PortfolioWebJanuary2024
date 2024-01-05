function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const frontSkills = [
    { title: "HTML" },
    { title: "CSS" },
    { title: "JavaScript" },
    { title: "jQuery" },
    { title: "React.js" },
    { title: "Vue.js" },
    { title: "Bootstrap" },
    { title: "Sass" },
];

const backSkills = [
    { title: "Java" },
    { title: "PHP" },
    { title: "XML" },
    { title: "JSON" },
    { title: "APIs/RESTful" },
    { title: "Laravel" },
    { title: "Hibernate" },
    { title: "DataBase" },
    { title: "SQL" },
    { title: "Git" },
];

for (let i = 0; i < frontSkills.length; i++) {
    // Crear un nuevo elemento de artículo
    let nuevoArticulo = document.createElement("article");
    // Crear un icono de círculo con el color correspondiente
    let icono = document.createElement("i");
    icono.className = "fa-solid fa-circle fa-2xs";
    // Crear un div para el contenido del artículo
    let div = document.createElement("div");
    // Crear un elemento de encabezado con el título correspondiente
    let h3 = document.createElement("h3");
    h3.textContent = frontSkills[i].title;
    // Añadir el encabezado  al div
    div.appendChild(h3);
    // Añadir el icono y el div al nuevo artículo
    nuevoArticulo.appendChild(icono);
    nuevoArticulo.appendChild(div);
    // Añadir el nuevo artículo al contenedor de artículo
    let contenedor = document.querySelector(".front-container");
    contenedor.appendChild(nuevoArticulo);
}

for (let i = 0; i < backSkills.length; i++) {
    let nuevoArticulo = document.createElement("article");
    let icono = document.createElement("i");
    icono.className = "fa-solid fa-circle fa-2xs";
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = backSkills[i].title;
    div.appendChild(h3);
    nuevoArticulo.appendChild(icono);
    nuevoArticulo.appendChild(div);
    let contenedor = document.querySelector(".back-container");
    contenedor.appendChild(nuevoArticulo);
}

