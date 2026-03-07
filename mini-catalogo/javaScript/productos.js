const productos = [
    {
        nombre: "Laptop",
        precio: "3500",
        descripcion: "Laptop 16GB RAM"
    },
    {
        nombre: "Mouse",
        precio: "80",
        descripcion: "Mouse inalámbrico"
    },
    {
        nombre: "Teclado",
        precio: "120",
        descripcion: "Teclado mecánico"
    }
];

const template = document.getElementById("product-template");
const catalogo = document.getElementById("catalogo");

productos.forEach(p => {

    const clon = template.content.cloneNode(true);

    const card = clon.querySelector("product-card");

    card.setAttribute("nombre", p.nombre);
    card.setAttribute("precio", p.precio);
    card.setAttribute("descripcion", p.descripcion);

    catalogo.appendChild(clon);

});