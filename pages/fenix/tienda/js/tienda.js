// =========================================================
// BASES DE DATOS FENIX (ARSENAL Y HARDWARE COMPLETO)
// =========================================================

const catalogoFenix = [
    // --- ARMAMENTO TÁCTICO ---
    {
        id: 1,
        nombre: "Cuchillo de Combate",
        categoria: "Armas",
        precio: 4000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051289079863574562/350.png?ex=6a597240&is=6a5820c0&hm=546c37222a1f72d5de0d989a154c666a3af88cef1374631b262c41aac40f0d5a&=&format=webp&quality=lossless",
        etiqueta: "",
        esNuevo: false
    },
    {
        id: 2,
        nombre: "Linterna Táctica",
        categoria: "Armas",
        precio: 2000,
        precioAntiguo: null,
        imagen: "https://cdn.discordapp.com/attachments/855484413059006474/1051289284033916980/latest.png?ex=6a597271&is=6a5820f1&hm=82f389caabd8c782020c889db305df1f382c4aab7bed957a8fed05e721a4a3af",
        etiqueta: "",
        esNuevo: false
    },
    {
        id: 3,
        nombre: "Subfusil",
        categoria: "Armas",
        precio: 12000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/739583737045713027/1051289586128650240/350.png?ex=6a5972b9&is=6a582139&hm=46ff0aa4da0e9138695c36d0964dd4c731a03ab129fc0132e82af9234d9b6aba&=&format=webp&quality=lossless",
        etiqueta: "",
        esNuevo: false
    },
    {
        id: 4,
        nombre: "Carabina MK2",
        categoria: "Armas",
        precio: 14000,
        precioAntiguo: null,
        imagen: "https://static.wikia.nocookie.net/gtawiki/images/3/3f/SpecialCarbineMkII-GTAOee.png",
        etiqueta: "Dotación",
        esNuevo: false
    },
    {
        id: 5,
        nombre: "Francotirador Pesado",
        categoria: "Armas",
        precio: 17000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051289864496230401/350.png?ex=6a5972fb&is=6a58217b&hm=d4a309897a878c8da2d75f037269b13b161af0e56fb73ad13708e9ac0ec03a65&=&format=webp&quality=lossless",
        etiqueta: "Precisión",
        esNuevo: false
    },
    {
        id: 6,
        nombre: "Minigun",
        categoria: "Armas",
        precio: 120000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051289924009197650/350.png?ex=6a597309&is=6a582189&hm=174b2862e1138a407f7a034597e4ade2a351b3db14f585ace747c0783a8cfbb2&=&format=webp&quality=lossless",
        etiqueta: "Pesado",
        esNuevo: false
    },
    {
        id: 7,
        nombre: "Lanzacohetes",
        categoria: "Armas",
        precio: 90000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051289969848754236/350.png?ex=6a597314&is=6a582194&hm=7053d6583309be3514a089ee678d9ff01de25cdcfaa9e68a2e7c013871164569&=&format=webp&quality=lossless",
        etiqueta: "",
        esNuevo: false
    },
    {
        id: 8,
        nombre: "Misiles Teledirigidos",
        categoria: "Armas",
        precio: 500000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051290041399377970/350.png?ex=6a597325&is=6a5821a5&hm=413bce2cdd25adcb6f7c24c78c1ae34e632393de404c61c7ce6715cc88457764&=&format=webp&quality=lossless",
        etiqueta: "Fijación",
        esNuevo: false
    },

    // --- VEHÍCULOS AÉREOS Y TERRESTRES ---
    {
        id: 10,
        nombre: "Helicóptero Buzzard",
        categoria: "Vehiculos",
        precio: 50000,
        precioAntiguo: 100000,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051290235654381588/latest.png?ex=6a597354&is=6a5821d4&hm=e048ee7895bd6334f9744b4be81ea4c84d8028d9dcab4a53a71bd191e922432f&=&format=webp&quality=lossless&width=1522&height=856",
        etiqueta: "Descuento",
        esNuevo: false
    },
    {
        id: 11,
        nombre: "Annihilator Furtivo",
        categoria: "Vehiculos",
        precio: 100000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051290342713995327/latest.png?ex=6a59736d&is=6a5821ed&hm=f197aa646e0bd6b5e16906b02eddd39a67d779609af1be04bfa5599081deddf4&=&format=webp&quality=lossless&width=1522&height=856",
        etiqueta: "Sigilo",
        esNuevo: true
    },
    {
        id: 12,
        nombre: "Helicóptero Akula",
        categoria: "Vehiculos",
        precio: 250000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051290526642618439/latest.png?ex=6a597399&is=6a582219&hm=a61b3fe5a054c285abd7bfbab193ed38c8339a84b36bfa3eb56ad3ccb6ff7766&=&format=webp&quality=lossless&width=1522&height=856",
        etiqueta: "",
        esNuevo: false
    },
    {
        id: 13,
        nombre: "Lanzamisiles Chernobog",
        categoria: "Vehiculos",
        precio: 500000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051290562352914432/latest.png?ex=6a5973a2&is=6a582222&hm=552c4c3237fcd90623af29f2c214a309e2084181c568effa9af7792733fb2cd6&=&format=webp&quality=lossless&width=1522&height=856",
        etiqueta: "Antiaéreo",
        esNuevo: false
    },
    {
        id: 14,
        nombre: "Caza P-996 Lazer",
        categoria: "Vehiculos",
        precio: 90000,
        precioAntiguo: 500000,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051290615821906020/latest.png?ex=6a5973ae&is=6a58222e&hm=f24ac6ced4ae8cd0686c8ad7a99d6f747dc16fdba4eedf7a09c61d2fe2dcfa52&=&format=webp&quality=lossless&width=1522&height=856",
        etiqueta: "Autorizado",
        esNuevo: false
    },
    {
        id: 15,
        nombre: "Caza Nokota",
        categoria: "Vehiculos",
        precio: 80000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051290707379376178/latest.png?ex=6a5973c4&is=6a582244&hm=dfee2bc29cc8cf67964fb74032841651bd2ed15cd9bd2f8c0039d9a11edba504&=&format=webp&quality=lossless&width=1522&height=856",
        etiqueta: "Clásico",
        esNuevo: false
    },
    {
        id: 17,
        nombre: "Insurgent (Sin Torreta)",
        categoria: "Vehiculos",
        precio: 40000,
        precioAntiguo: null,
        imagen: "https://static.wikia.nocookie.net/gtawiki/images/f/fb/Insurgent-GTAO-front.png",
        etiqueta: "",
        esNuevo: false
    },
    {
        id: 18,
        nombre: "Helicóptero Valkyrie",
        categoria: "Vehiculos",
        precio: 120000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051290936023457862/latest.png?ex=6a5973fb&is=6a58227b&hm=b2f81e6a89d838757d184a54dc5f818542ab0491ab85a5a6982d62f3860a938a&=&format=webp&quality=lossless&width=1522&height=856",
        etiqueta: "Apoyo Aéreo",
        esNuevo: false
    },
    {
        id: 19,
        nombre: "Tanque Rhino",
        categoria: "Vehiculos",
        precio: 600000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051291036481232937/latest.png?ex=6a597413&is=6a582293&hm=4283ec678473751eb1b4d33354bdd9164e7f01938cc0991ec887e9b0070b8884&=&format=webp&quality=lossless&width=1522&height=856",
        etiqueta: "Pesado",
        esNuevo: false
    },
    {
        id: 20,
        nombre: "Annihilator Estándar",
        categoria: "Vehiculos",
        precio: 30000,
        precioAntiguo: 80000,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1051291153355509850/8bc1fe-1.png?ex=6a59742f&is=6a5822af&hm=5f72578382abcacf58413ca92a42c461a8549d4bd689816c1f452018d0ddf42a&=&format=webp&quality=lossless",
        etiqueta: "Descuento",
        esNuevo: false
    },

    // --- SERVICIOS FENIX ---
    {
        id: 21,
        nombre: "Arsenal Personal Desbloqueado",
        categoria: "Servicios",
        precio: 1000000,
        precioAntiguo: null,
        imagen: "https://media.discordapp.net/attachments/855484413059006474/1066500601812357120/maxresdefault.png?ex=6a596a16&is=6a581896&hm=db351fa83e3c93437dda49c8768e5d2b496dd66f40c54290241294b1dfaf4d37&=&format=webp&quality=lossless",
        etiqueta: "VIP",
        esNuevo: true
    },
    {
        id: 22,
        nombre: "Seguro de Vida (Cruz Roja)",
        categoria: "Servicios",
        precio: 100000,
        precioAntiguo: null,
        imagen: "https://lh3.google.com/u/2/d/1lwf1iq1g4sApuEdydx-mdx6attZb0n4V=w1878-h928-iv1",
        etiqueta: "",
        esNuevo: false
    },

    // --- HARDWARE & GAMING ---
    {
        id: 23,
        nombre: "Xbox Series X (Edición Marina)",
        categoria: "Consolas",
        precio: 11500,
        precioAntiguo: 13999,
        imagen: "https://cms-assets.xboxservices.com/assets/55/7e/557e00a4-1d7a-45d4-b88a-5a7f5ac0e2e6.png",
        etiqueta: "Oficial",
        esNuevo: true
    },
    {
        id: 24,
        nombre: "Torre FENIX (Ryzen 5 5600G + RTX 4060 + 32GB RAM)",
        categoria: "PCs Gamer",
        precio: 24500,
        precioAntiguo: null,
        imagen: "https://ss628.liverpool.com.mx/xl/1180597880.jpg", 
        etiqueta: "Armado Táctico",
        esNuevo: true
    },
    {
        id: 25,
        nombre: "Laptop ROG Zephyrus G14",
        categoria: "Laptops",
        precio: 35000,
        precioAntiguo: 38000,
        imagen: "https://m.media-amazon.com/images/I/71MvcFwIgEL.jpg",
        etiqueta: "-8%",
        esNuevo: false
    },
    {
        id: 26,
        nombre: "Audífonos Astro A50 Tácticos",
        categoria: "Audifonos",
        precio: 6000,
        precioAntiguo: 7500,
        imagen: "https://resource.logitechg.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/a50-gen-5/astro-a50-x-gen-5-white-video-thumbnail-gallery.png",
        etiqueta: "-20%",
        esNuevo: false
    },
    
    // --- COLECCIONABLES ---
    {
        id: 27,
        nombre: "Figura Evangelion EVA-01 (S.H. Figuarts)",
        categoria: "Figuras",
        precio: 3500,
        precioAntiguo: null,
        imagen: "https://m.media-amazon.com/images/I/51HThb6x41L._AC_UF894,1000_QL80_.jpg",
        etiqueta: "Importación",
        esNuevo: true
    }
];

const coleccionesFenix = [
    {
        // NUEVA COLECCIÓN: BOTÓN DE VER TODO
        titulo: "Inventario",
        subtitulo: "Catálogo Completo",
        imagen: "https://st.depositphotos.com/49653292/59621/i/450/depositphotos_596212120-stock-photo-seattle-usa-circa-august-2022.jpg",
        categoria: "Todo",
        textoBoton: "Ver Todo el Arsenal"
    },
    {
        titulo: "Seguro de vida",
        subtitulo: "Cruz Roja",
        imagen: "https://lh3.google.com/u/2/d/1lwf1iq1g4sApuEdydx-mdx6attZb0n4V=w1878-h928-iv1",
        categoria: "Servicios",
        textoBoton: "Contrata Ahora"
    },
    {
        titulo: "Armas",
        subtitulo: "Colección",
        imagen: "https://lh3.google.com/u/2/d/1cCYje2oXKgCFm8UnEP4Wso0YO65vv9TR=w2000-h4328-iv1",
        categoria: "Armas",
        textoBoton: "Comprar Ahora"
    },
    {
        titulo: "Vehiculos",
        subtitulo: "Colección",
        imagen: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/GTA-Online-Warstock-Vehicles.jpg",
        categoria: "Vehiculos",
        textoBoton: "Comprar Ahora"
    },
    {
        titulo: "Hardware",
        subtitulo: "Gaming & PCs",
        imagen: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
        categoria: "PCs Gamer",
        textoBoton: "Mejorar Setup"
    },
    {
        titulo: "Coleccionables",
        subtitulo: "Anime y Figuras",
        imagen: "https://i.pinimg.com/736x/be/95/fd/be95fd34c3431cf5735f0403fe7e4626.jpg",
        categoria: "Figuras",
        textoBoton: "Explorar"
    }
];
// =========================================================
// INICIALIZACIÓN
// =========================================================

window.onload = () => {
    cargarColecciones();
    cargarTienda('Todo');
    actualizarInterfazCarrito();
};

// =========================================================
// RENDERIZADO DEL CATÁLOGO Y COLECCIONES
// =========================================================

function cargarColecciones() {
    const contenedor = document.getElementById('grid-colecciones');
    let htmlColecciones = '';

    coleccionesFenix.forEach(coleccion => {
        htmlColecciones += `
        <div class="col-md-4 col-xs-6">
            <div class="shop">
                <div class="shop-img">
                    <img src="${coleccion.imagen}" alt="${coleccion.titulo}">
                </div>
                <div class="shop-body">
                    <h3>${coleccion.titulo}<br>${coleccion.subtitulo}</h3>
                    <a href="#" class="cta-btn" onclick="aplicarFiltro(event, '${coleccion.categoria}')">${coleccion.textoBoton} <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>`;
    });
    contenedor.innerHTML = htmlColecciones;
}

function cargarTienda(filtro = 'Todo') {
    const contenedor = document.getElementById('grid-productos');
    let htmlProductos = '';
    let productosA_Mostrar = catalogoFenix;

    if (filtro === 'Descuentos') {
        productosA_Mostrar = catalogoFenix.filter(p => p.etiqueta !== "" || p.precioAntiguo !== null);
    } else if (filtro !== 'Todo') {
        productosA_Mostrar = catalogoFenix.filter(p => p.categoria === filtro);
    }

    if (productosA_Mostrar.length === 0) {
        contenedor.innerHTML = '<div class="col-md-12 text-center"><h4 style="color:red;">INVENTARIO AGOTADO EN ESTA CATEGORÍA</h4></div>';
        return;
    }

    productosA_Mostrar.forEach(producto => {
        let labels = '';
        if (producto.etiqueta !== "" || producto.esNuevo) {
            labels = `<div class="product-label">
                        ${producto.etiqueta ? `<span class="sale">${producto.etiqueta}</span>` : ''}
                        ${producto.esNuevo ? `<span class="new">Nuevo</span>` : ''}
                      </div>`;
        }

        htmlProductos += `
        <div class="col-md-4 col-xs-6">
            <div class="product">
                <div class="product-img">
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="height: 200px; object-fit: cover;">
                    ${labels}
                </div>
                <div class="product-body">
                    <p class="product-category">${producto.categoria}</p>
                    <h3 class="product-name"><a href="#">${producto.nombre}</a></h3>
                    <h4 class="product-price">$${producto.precio.toLocaleString('en-US')} 
                        ${producto.precioAntiguo ? `<del class="product-old-price">$${producto.precioAntiguo.toLocaleString('en-US')}</del>` : ''}
                    </h4>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id})"><i class="fa fa-shopping-cart"></i> Adquirir</button>
                </div>
            </div>
        </div>`;
    });
    contenedor.innerHTML = htmlProductos;
}

function aplicarFiltro(event, categoria) {
    event.preventDefault();
    cargarTienda(categoria);
    document.getElementById('grid-productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =========================================================
// SISTEMA DE CARRITO DE COMPRAS
// =========================================================

let carritoFenix = JSON.parse(localStorage.getItem('carritoFenix')) || [];

function agregarAlCarrito(idProducto) {
    const producto = catalogoFenix.find(p => p.id === idProducto);
    if (!producto) return;

    const itemExistente = carritoFenix.find(p => p.id === idProducto);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carritoFenix.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }
    guardarCarrito();
    actualizarInterfazCarrito();
}

function actualizarInterfazCarrito() {
    const contenedorLista = document.getElementById('lista-carrito-dropdown');
    const contadorIcono = document.getElementById('contador-carrito');
    const textoCantidad = document.getElementById('carrito-cantidad-texto');
    const textoSubtotal = document.getElementById('carrito-subtotal');

    let html = '';
    let totalItems = 0;
    let subtotal = 0;

    if (carritoFenix.length === 0) {
        contenedorLista.innerHTML = '<p class="text-center" style="margin-top: 15px; color: gray;">El carrito está vacío.</p>';
        contadorIcono.innerText = '0';
        textoCantidad.innerText = '0';
        textoSubtotal.innerText = '0.00';
        return;
    }

    carritoFenix.forEach(item => {
        totalItems += item.cantidad;
        subtotal += (item.precio * item.cantidad);

        html += `
        <div class="product-widget">
            <div class="product-img">
                <img src="${item.imagen}" alt="${item.nombre}">
            </div>
            <div class="product-body">
                <h3 class="product-name"><a href="#">${item.nombre}</a></h3>
                <h4 class="product-price"><span class="qty">${item.cantidad}x</span>$${item.precio.toLocaleString('en-US')}</h4>
            </div>
            <button class="delete" onclick="eliminarItem(${item.id})"><i class="fa fa-close"></i></button>
        </div>`;
    });

    contenedorLista.innerHTML = html;
    contadorIcono.innerText = totalItems;
    textoCantidad.innerText = totalItems;
    textoSubtotal.innerText = subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function eliminarItem(idProducto) {
    carritoFenix = carritoFenix.filter(item => item.id !== idProducto);
    guardarCarrito();
    actualizarInterfazCarrito();
}

function vaciarCarrito(event) {
    if(event) event.preventDefault();
    carritoFenix = [];
    guardarCarrito();
    actualizarInterfazCarrito();
}

function guardarCarrito() {
    localStorage.setItem('carritoFenix', JSON.stringify(carritoFenix));
}

function toggleCarrito(event) {
    event.preventDefault();
    const menuCarrito = document.querySelector('.cart-dropdown');
    
    if (menuCarrito.style.opacity === '1' || menuCarrito.classList.contains('active')) {
        menuCarrito.style.opacity = '0';
        menuCarrito.style.visibility = 'hidden';
        menuCarrito.classList.remove('active');
    } else {
        menuCarrito.style.opacity = '1';
        menuCarrito.style.visibility = 'visible';
        menuCarrito.classList.add('active');
    }
}

// =========================================================
// MOTOR DEL CHECKOUT / TERMINAL DE HACKEO
// =========================================================

function abrirCheckout(event) {
    if(event) event.preventDefault();
    
    if(carritoFenix.length === 0) {
        alert("ACCESO DENEGADO: El carrito está vacío.");
        return;
    }

    document.getElementById('pago-transfer').innerText = "Transferencia de Banco Marina *****" + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pago-debito').innerText = "Tarjeta de debito Banco Marina ****" + Math.floor(1000 + Math.random() * 9000);

    document.getElementById('checkout-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden'; 
    
    // Cierra el menú pequeño del carrito para que no estorbe de fondo
    const menuCarrito = document.querySelector('.cart-dropdown');
    menuCarrito.style.opacity = '0';
    menuCarrito.style.visibility = 'hidden';
}

function cerrarCheckout() {
    document.getElementById('checkout-overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

function iniciarHackeo() {
    const inputDiscord = document.getElementById('discord-id').value.trim();
    if(inputDiscord === "") {
        alert("ERROR: Debes introducir una Identidad Encriptada (Discord Tag).");
        return;
    }

    document.getElementById('fase-formulario').style.display = 'none';
    document.getElementById('fase-carga').style.display = 'block';

    const textoCarga = document.getElementById('texto-carga');
    const secuencias = [
        "Estableciendo conexión segura...",
        "Cifrando datos del comprador...",
        "Verificando fondos en cuenta...",
        "Autorizando despliegue logístico...",
        "¡TRANSACCIÓN APROBADA!"
    ];

    let cronometro = 0;
    
    secuencias.forEach((frase, indice) => {
        setTimeout(() => {
            textoCarga.innerText = frase;
            if(indice === secuencias.length - 1) {
                textoCarga.style.color = "#D10024"; 
                setTimeout(generarTicket, 1500); 
            }
        }, cronometro);
        cronometro += 1200; 
    });
}

function generarTicket() {
    document.getElementById('fase-carga').style.display = 'none';
    document.getElementById('fase-ticket').style.display = 'block';

    const fechaActual = new Date();
    document.getElementById('ticket-fecha').innerText = fechaActual.toLocaleString('es-MX');
    
    document.getElementById('ticket-discord').innerText = document.getElementById('discord-id').value;
    document.getElementById('ticket-entrega').innerText = document.getElementById('metodo-entrega').value;

    const selectPago = document.getElementById('metodo-pago');
    document.getElementById('ticket-pago').innerText = selectPago.options[selectPago.selectedIndex].text;

    let htmlItems = '';
    let totalPagar = 0;
    
    carritoFenix.forEach(item => {
        totalPagar += (item.precio * item.cantidad);
        htmlItems += `<p style="margin: 5px 0;">${item.cantidad}x ${item.nombre} <span style="float: right;">$${(item.precio * item.cantidad).toLocaleString('en-US')}</span></p>`;
    });
    
    document.getElementById('ticket-items').innerHTML = htmlItems;
    document.getElementById('ticket-total').innerText = totalPagar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function destruirEvidencia() {
    carritoFenix = [];
    guardarCarrito();
    actualizarInterfazCarrito();
    
    cerrarCheckout();
    
    document.getElementById('fase-formulario').style.display = 'block';
    document.getElementById('fase-ticket').style.display = 'none';
    document.getElementById('discord-id').value = '';
    document.getElementById('texto-carga').style.color = "#00ff00";
    document.getElementById('texto-carga').innerText = "Estableciendo conexión segura...";
}
// =========================================================
// MOTOR DE BÚSQUEDA FENIX (CON FILTRO DE CATEGORÍAS)
// =========================================================

function buscarEnCatalogo(event) {
    event.preventDefault(); 

    const termino = document.getElementById('input-buscador').value.toLowerCase().trim();
    const categoriaFiltro = document.getElementById('select-categoria').value;
    const contenedor = document.getElementById('grid-productos');
    let htmlProductos = '';

    // 1. Filtrar primero por la categoría seleccionada en el menú
    let resultados = catalogoFenix;
    if (categoriaFiltro !== "Todo") {
        resultados = resultados.filter(p => p.categoria === categoriaFiltro);
    }

    // 2. Filtrar adicionalmente por el texto ingresado (si escribió algo)
    if (termino !== "") {
        resultados = resultados.filter(p => p.nombre.toLowerCase().includes(termino));
    }

    // 3. Si el usuario buscó con todo vacío y la categoría en "Todo", recargamos la tienda normal
    if (termino === "" && categoriaFiltro === "Todo") {
        cargarTienda('Todo');
        return;
    }

    // 4. Si no hay coincidencias (Ej. Buscó "Rhino" en la categoría "Audio")
    if (resultados.length === 0) {
        contenedor.innerHTML = '<div class="col-md-12 text-center" style="margin: 50px 0;"><h4 style="color:#D10024;">[!] ERROR: NO SE ENCONTRÓ EQUIPAMIENTO COINCIDENTE</h4><button class="primary-btn mt-3" onclick="cargarTienda(\'Todo\'); document.getElementById(\'input-buscador\').value=\'\'; document.getElementById(\'select-categoria\').value=\'Todo\';">VER TODO EL ARSENAL</button></div>';
        document.getElementById('grid-productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }

    // 5. Dibujar los productos filtrados
    resultados.forEach(producto => {
        let labels = '';
        if (producto.etiqueta !== "" || producto.esNuevo) {
            labels = `<div class="product-label">
                        ${producto.etiqueta ? `<span class="sale">${producto.etiqueta}</span>` : ''}
                        ${producto.esNuevo ? `<span class="new">Nuevo</span>` : ''}
                      </div>`;
        }

        htmlProductos += `
        <div class="col-md-4 col-xs-6">
            <div class="product">
                <div class="product-img">
                    <img src="${producto.imagen}" alt="${producto.nombre}" style="height: 200px; object-fit: cover;">
                    ${labels}
                </div>
                <div class="product-body">
                    <p class="product-category">${producto.categoria}</p>
                    <h3 class="product-name"><a href="#">${producto.nombre}</a></h3>
                    <h4 class="product-price">$${producto.precio.toLocaleString('en-US')} 
                        ${producto.precioAntiguo ? `<del class="product-old-price">$${producto.precioAntiguo.toLocaleString('en-US')}</del>` : ''}
                    </h4>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn" onclick="agregarAlCarrito(${producto.id})"><i class="fa fa-shopping-cart"></i> Adquirir</button>
                </div>
            </div>
        </div>`;
    });

    contenedor.innerHTML = htmlProductos;
    document.getElementById('grid-productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
}