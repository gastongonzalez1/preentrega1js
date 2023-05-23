class Producto {
    constructor(id,nombre,precio, imageUrl, tipo, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imageUrl = imageUrl;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
}

const conitosddl = new Producto (1, "Conito de dulce de leche", 50, "https://www.circuitogastronomico.com/wp-content/uploads/2020/06/conitos-manfrey2.jpg", "postre", "Conitos de dulce de leche: los conitos de dulce de leche están compuestos de una galleta con un cono de dulce de leche por encima, cubierto de chocolate" ); 
const tf = new Producto (2, "trufas de chocolate",50, "https://badun.nestle.es/imgserver/v1/80/1290x742/406f1f2b5f0b-trufitas-de-chocolate.jpg", "postre", "Trufas de chocolate: las trufas de chocolate están compuestas de galletita de chocolate molidas con dulce de leche, pueden estar cubiertas de chocolate o de granas de colores");
const flan = new Producto (3, "flan", 100, "https://www.recetasjudias.com/wp-content/uploads/2015/12/Flan-Quesillo.jpg", "postre", "Flan: postre elaborado con una preparación a base de yemas de huevo, azúcar, leche y azúcar quemada como una capa exterior");
const bp = new Producto (4, "budin de Pan", 100, "https://cocinaabuenashoras.com/files/pudin-de-pan-1.jpg", "postre", "Budín de pan: el budín de pan es un postre elaborado a base de pan, manteca, leche, huevo, manteca y azúcar, y cubierto con una capa de azúcar quemada");
const bomba = new Producto (5, "bombas de crema", 50, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrUYmQDu_yVQMyOStvyp2V37QrVjmoJ9NXHRNOSw3DCQOVywzSEtwllBWRVZg3B83AKI&usqp=CAU", "postre", "Bombas de crema: son una receta clásica de la pastelería francesa. Por lo general se rellenan con crema pastelera, mousses o crema de leche batida, según el gusto del cliente");
const bombones = new Producto (6, "Bombones", 25, "https://t2.uc.ltmcdn.com/es/posts/4/4/5/como_hacer_bombones_de_chocolate_23544_600.jpg", "postre", "Bombones: los bombones son pequeñas piezas de chocolate, que en su interior pueden contener licor, crema u otro relleno.");
const pionono = new Producto (7, "Pionono", 150, "https://images.aws.nestle.recipes/original/2020_04_29T15_09_21_mrs_ImageRecipes_146429lrg.jpg", "postre", "Pionono: el pionono consiste en una fina masa enrollada que en su interior lleva dulce de leche.");
const bocaditos = new Producto (8, "Bocaditos", 40, "https://www.recetas.com.bo/sites/default/files/2019-10/bocaditos-dulces-0315.jpg", "postre", "Bocaditos: los bocaditos son pequeños pasteles rellenos de crema de maní o también se pueden rellenar con Nutella.");
const alfajorMaicena = new Producto (9, "Alfajorcito de maicena", 25, "https://www.elmundoeats.com/wp-content/uploads/2021/07/FP2-Argentine-alfajores-on-a-rack.jpg", "postre", "Alfajorcitos de maicena: los alfajorcitos de maicena son dos pequeñas masitas elaboradas a base de maicena que en su interior tienen dulce de leche.");
const pavlova = new Producto (10, "Pavlova", 110, "https://isu.edu.mx/wp-content/uploads/2022/08/Pavlova-1.jpg", "postre", "Pavlova: la pavlova es un tipo de postre elaborado a base del merengue crujiente por fuera y muy cremoso y ligero por dentro.");

const tartaCabsha = new Producto(11, "Tarta Cabsha", 500, "https://static.wixstatic.com/media/c40a1a_fcabf36b5402482e87c466d631bd394a~mv2.jpg/v1/fill/w_2250,h_2250,al_c,q_85/c40a1a_fcabf36b5402482e87c466d631bd394a~mv2.jpg", "tarta", "Esta es una tarta con un relleno de dulce de leche con una capa de ganache de chocolate.");
const lemonPie = new Producto(12, "Lemon Pie", 500, "https://static.solopostres.com/uploads/2010/10/lemon-pie-1.jpg", "tarta", "Esta es una combinación de base crujiente con relleno cremoso de limón y una capa de merengue.");
const tartaDuo = new Producto(13, "Tarta Duo", 400, "https://i.ytimg.com/vi/g7o2AcgbVRI/sddefault.jpg", "tarta", "Es una deliciosa tarta elaborada con suave mousse de chocolate y dulce de leche, sobre una base fina de masa y rellena de exquisitos merenguitos. ¡Un verdadero placer para los amantes de la repostería!");
const tartaFrutilla = new Producto(14, "Tarta de Frutilla", 550, "https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/EC55VMD5JBELTGIGNPRDRMKEXY.jpg", "tarta", "Es una deliciosa tarta con una base crujiente rellena de crema y capas de jugosas fresas naturales.");
const tartaCoco = new Producto(15, "Tarta de Coco", 600, "http://3.bp.blogspot.com/-msiD1VtCj04/WrkNFIJz0yI/AAAAAAAAB2E/rcRt3tqapXoUXfB4-lxgans35dqxaMZ-ACK4BGAYYCw/s1600/tan%2Bdulce%2Brecetas.jpg", "tarta", "Esta deliciosa tarta está rellena de dulce de leche y cubierta con una capa de coco rallado");
const cheesecake = new Producto(16, "Cheesecake", 570, "https://static.guiainfantil.com/media/9787/c/tarta-de-queso-tradicional-receta-de-new-york-cheesecake-md.jpg", "tarta", "Es un postre hecho a base de ricotta, queso crema, azúcar y otros ingredientes, que tiene una base de galletas molidas. Es un postre cremoso y delicioso que combina perfectamente con una variedad de ingredientes y sabores, como frutas frescas o salsas dulces.");

const postres = [conitosddl, tf, flan, bp, bomba, bombones, pionono, bocaditos, alfajorMaicena, pavlova];
const tartas = [tartaCabsha, lemonPie, tartaDuo, tartaFrutilla, tartaCoco, cheesecake];


let currentPageUrl = window.location.href;

let carrito = [];

const postresContainer = document.getElementById('contenedorPostres');
const tartasContainer = document.getElementById('tartasContenedor')
function crearProductosDom (productos, contenedor) {
    for (let producto of productos) {
        let productosHtml = `
        
        <div class="postre card">
            <div class="image"> 
            <img src="${producto.imageUrl}">
            </div>
            <div class="content d-flex flex-column justify-content-between"> 
                <p>${producto.nombre}: ${producto.descripcion}</p>
                <button class="precio"><i class="fas fa-shopping-cart"></i> Precio: ${producto.precio} ARS</button
            </div>
        </div>
        
        `
        contenedor.innerHTML += productosHtml;
    }
}
let redirectFlag = false;

if (currentPageUrl.endsWith("/postres.html")) {
    crearProductosDom(postres, postresContainer);
} else if (currentPageUrl.endsWith('/tortas.html')) {
    crearProductosDom(tartas, tartasContainer);
} else if (currentPageUrl.endsWith('/sobrenosotros.html')) {
    // Código para la página "sobrenosotros.html"
} else if (currentPageUrl.endsWith('/contacto.html')) {
    // Código para la página "contacto.html"
} else if (currentPageUrl.endsWith('/index.html')) {
    // Código para la página "index.html"
} else {
    if (!redirectFlag) {
        redirectFlag = true;
        window.location.href = '../pages/404.html';
    }
}
 // Función para crear elementos DOM de carrito
 function crearCarritoItemDOM(item) {
    const carritoItem = document.createElement('div');
    carritoItem.classList.add('carrito-item');
    
    const nombrePrecio = document.createElement('p');
    nombrePrecio.textContent = `${item.producto.nombre} - ${item.producto.precio} ARS`;
    carritoItem.appendChild(nombrePrecio);
    
    const cantidad = document.createElement('input');
    cantidad.type = 'number';
    cantidad.min = '1';
    cantidad.value = item.cantidad;
    cantidad.addEventListener('input', () => actualizarCantidad(item, parseInt(cantidad.value)));
    carritoItem.appendChild(cantidad);
    
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => eliminarProducto(item));
    carritoItem.appendChild(eliminarBtn);
    
    return carritoItem;
  }
  
  // Función para agregar un producto al carrito
  function agregarProducto(producto) {
    const itemExistente = carrito.find(item => item.producto.id === producto.id);
    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      carrito.push({ producto, cantidad: 1 });
    }
    mostrarCarrito();
    calcularTotal();
  }
  
  // Función para eliminar un producto del carrito
  function eliminarProducto(item) {
    const index = carrito.findIndex(cartItem => cartItem.producto.id === item.producto.id);
    if (index !== -1) {
      carrito.splice(index, 1);
    }
    mostrarCarrito();
    calcularTotal();
  }
  
  // Función para actualizar la cantidad de un producto en el carrito
  function actualizarCantidad(item, cantidad) {
    if (cantidad <= 0) {
      eliminarProducto(item);
    } else {
      item.cantidad = cantidad;
    }
    calcularTotal();
  }
  
  // Función para mostrar los productos en el DOM
  function mostrarProductos() {
    for (let producto of postres) {
      const productoDOM = crearProductoDOM(producto);
      productosContainer.appendChild(productoDOM);
    }
  }
  
  // Función para mostrar los productos en el carrito
  function mostrarCarrito() {
    carritoContainer.innerHTML = '';
    for (let item of carrito) {
      const carritoItemDOM = crearCarritoItemDOM(item);
      carritoContainer.appendChild(carritoItemDOM);
    }
  }
  
  // Función para calcular el total del carrito
  function calcularTotal() {
    total = carrito.reduce((sum, item) => sum + (item.producto.precio * item.cantidad), 0);
    totalElement.textContent = `Total: ${total} ARS`;
  }
  
  // Mostrar productos y carrito al cargar la página
  mostrarProductos();
  mostrarCarrito();
  calcularTotal();
function crearProductosDom(productos, contenedor) {
    for (let producto of productos) {
      let productosHtml = `
        <div class="postre card">
          <div class="image">
            <img src="${producto.imageUrl}">
          </div>
          <div class="content d-flex flex-column justify-content-between">
            <p>${producto.nombre}: ${producto.descripcion}</p>
            <button class="precio" onclick="agregarAlCarrito(${producto.id})"><i class="fas fa-shopping-cart"></i> Precio: ${producto.precio} ARS</button>
          </div>
        </div>
      `;
      contenedor.innerHTML += productosHtml;
    }
  }
  
  // ...
  
  function agregarAlCarrito(productId) {
    // Aquí puedes realizar la lógica para agregar el producto al carrito
    // ... let mensajeAlerta = "Productos en el carrito:\n";
    for (let productId of carrito) {
    // Obtener el nombre del producto a partir del ID (puedes adaptarlo según tu estructura de datos)
    let producto = obtenerProductoPorId(productId);
    if (producto) {
      mensajeAlerta += `- ${producto.nombre}\n`;
    }
  }
  
    // Mostrar un mensaje de alerta
    alert("El producto ha sido agregado al carrito.");
  }

