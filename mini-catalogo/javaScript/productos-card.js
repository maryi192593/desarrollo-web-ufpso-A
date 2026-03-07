class ProductCard extends HTMLElement{

  constructor(){
    super();

    const shadow = this.attachShadow({mode:"open"});

    shadow.innerHTML = `
      <style>
        .card{
          border:1px solid #ccc;
          padding:15px;
          margin:10px;
          border-radius:8px;
          width:200px;
          font-family:Arial;

          background-color:#f5f5f5;
        }

        h3{
          margin:0;
        }

        .precio{
          color:green;
          font-weight:bold;
        }
      </style>

      <div class="card">
        <h3>${this.getAttribute("nombre")}</h3>
        <p>${this.getAttribute("descripcion")}</p>
        <p class="precio">$${this.getAttribute("precio")}</p>
      </div>
    `;
  }
}

customElements.define("product-card", ProductCard);