// Leemos la URL del navegador
const parametrosURL = new URLSearchParams(window.location.search);
const producto_seleccionado = parametrosURL.get("producto");

var tituloProducto = "";
var descripcionProducto = "";
var precioProducto = "";
var porPieza = "";
var piezasProducto = "";

//SI esto esta hecho con la patas pero y que, funciona y ya con eso me basta :)
if (producto_seleccionado === "guitarra_electrica") {
  tituloProducto = "Guitarra Electrica";
  descripcionProducto =
    "Guitarra electrica perfecta para principiantes color blanca.  Incluye 1 guitarra, 1 Juego de cuerdas, 1 mochila de guitarra, 1 mini-amplificador, 1 Cable de audio, 1 Correa y 3 puas .";
  precioProducto = "1300";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "perchero_metalico") {
  tituloProducto = "Organizador de ropa metalico";
  descripcionProducto =
    "Perchero de metal color negro para organizar ropa y zapatos. Medidas 175 cm de Largo x 194 cm de Alto x 40 cm de Ancho. Capacidad de hasta 400 Kg. Require ensamblado.";
  precioProducto = "2000";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "cafetera") {
  tituloProducto = "Cafetera Expresso";
  descripcionProducto =
    "Cafetera espresso con espumador de leche y pantalla tactil. Prepara Espresso, Latte, Cappuccino y Americano. Compacta. De 15 bares.";
  precioProducto = "1800";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "caja_seguridad") {
  tituloProducto = "Caja de Conexiones";
  descripcionProducto =
    "Caja electrica perfecta para exteriores. De hierro. 40 cm x 30 cm x 20 cm.";
  precioProducto = "1000";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "caja_herramientas") {
  tituloProducto = "Organizador de Herramientas + Rotomartillo + Organizador";
  descripcionProducto =
    "Kit Truper. Incluye caja de herramientas de 19 pulgadas, organizador de 15 compartimietnos y Rotomartillo de 1/2 con 650 Watts de potencia.";
  precioProducto = "1000";
  porPieza = "c/u";
  piezasProducto = "2";
} else if (producto_seleccionado === "carrito_herramientas") {
  tituloProducto = "Carrito para Herramientas";
  descripcionProducto =
    "Carro de heramientas de metal color negro de 3 niveles con tablero perforado superior para organizar utencilios. 36 cm de Ancho x 65cm de Largo x 78cm de Alto.";
  precioProducto = "1500";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "corral_bebe") {
  tituloProducto = "Corral para Bebe";
  descripcionProducto =
    "Cercado para bebes plegable hexagonal. Con almohadillas protectoras y estructuras para juegos de tiro. 130 cm de largo x 113 cm de ancho x 65 cm de Alto. Con soporte maximo de 200 kg.";
  precioProducto = "700";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "escritorio_ele") {
  tituloProducto = "Escritorio en Ele";
  descripcionProducto =
    "Escritorio esquinero de vidrio. 120 cm De largo x 120 cm de Ancho x 75 cm de Alto. Con capacidad de hasta 50 kg. Require ensamblado.";
  precioProducto = "1300";
  porPieza = "c/u";
  piezasProducto = "2";
} else if (producto_seleccionado === "gato_neumatico") {
  tituloProducto = "Gato Neumatico";
  descripcionProducto =
    "Gato neumatico de 3 toneladas con 3 fuelles. Minima elevacion 15 cm. Maxima elevacion 40 cm. Longitud de palanca de 1 metro.";
  precioProducto = "1800";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "maquina_coser") {
  tituloProducto = "Mesa Industrial para Maquina de Coser";
  descripcionProducto =
    "Mesa con estante para maquina de coser de codo. Para modelos Axis, Recta, Overlock, 20 Zigzag, 31-17, de triple arrastre o de doble avance. 120 cm de Largo x 50 cm de Ancho x 83 cm de Alto.";
  precioProducto = "4000";
  porPieza = "c/u";
  piezasProducto = "2";
} else if (producto_seleccionado === "mesa_noche") {
  tituloProducto = "Mesa de Noche";
  descripcionProducto =
    "Mesa de noche para recamara con cajón. Acabado de madera, color gris. Peso 12 kg. 50 cm de Largo x 40 cm de Ancho x 60 cm de Alto. Require ensamblado.";
  precioProducto = "1500";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "monitor") {
  tituloProducto = "Monitor";
  descripcionProducto =
    "Monitor gamer de 24 pulgadas XUNDEFINED, con resolución Full HD y bocinas integradas, opera a una tasa de 144Hz, diseñado en color negro, con tecnologías de conectividad como HDMI y FreeSync.";
  precioProducto = "1600";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "rin_italika") {
  tituloProducto = "Rin trasero para AT125 RT Italika";
  descripcionProducto =
    "Rin trasero amarillo de 43.18cm para motocicleta, compatible con modelos como Italika AT 125 RT (años 2017-2022). Estructura de cinco aspas, fabricado para sistemas de freno de disco. La medida exacta del rin es 4 x 43.18cm.";
  precioProducto = "900";
  porPieza = "c/u";
  piezasProducto = "2";
} else if (producto_seleccionado === "silla_oficina") {
  tituloProducto = "Silla de oficina estilo Tulip";
  descripcionProducto =
    "De polipropileno con forro en vinipiel (cuero sintético). Estructura de  acero cromado con movilidad de 360°,  80 cm de altura y soporta de 100-120 kg.";
  precioProducto = "300";
  porPieza = "c/u";
  piezasProducto = "2";
} else if (producto_seleccionado === "maquina_sublimado") {
  tituloProducto = "Maquina para Sublimar 6 en 1";
  descripcionProducto =
    "Equipo versátil el cual permite intercambiar sus componentes para trabajar diferentes superficies, Plancha plana (29 x 38 cm) para camisetas o artículos planos, prensa para gorras, prensas para tazas de 9 oz y 11 oz, prensas  para platos diámetros de 8 y 10 pulgadas. Con control digital: Posee una caja para configurar el tiempo (segundos) y la temperatura hasta 210°C y con brazo giratorio de 360°.";
  precioProducto = "5000";
  porPieza = "c/u";
  piezasProducto = "2";
} else if (producto_seleccionado === "maquina_tazas") {
  tituloProducto = "Maquina para Sublimar Tazas";
  descripcionProducto =
    "Máquina de Prensa para vaso de sublimación (11oz-20oz) con tambor, rango de temperatura de 200-380 °C con rango de temporizador de 0-999 s, cuenta con pantalla de control digital.";
  precioProducto = "2500";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "silla_tabernera") {
  tituloProducto = "Silla Tabernera";
  descripcionProducto =
    "Banco alto para barra, altura del asiento 80 cm, giro de 360°, estructura de acero cromado, con reposapiés, de tapizado en vinipiel (cuero sintético) con acolchado, capacidad de carga 100 kg.";
  precioProducto = "1000";
  porPieza = "c/u";
  piezasProducto = "4";
} else if (producto_seleccionado === "tarja") {
  tituloProducto = "Tarja Multifuncional";
  descripcionProducto =
    "Fregadero de cocina, 75cm Largo, 45cm Ancho 22cm Altura, acero inoxidable, fregadero de cascada con estación de trabajo de un solo tazón, fregadero de cocina con pantalla digital multifuncional, grifo extraíble, color negro.";
  precioProducto = "3800";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "ventilador") {
  tituloProducto = "Ventilador Mytek";
  descripcionProducto =
    "Ventilador de techo diseñado específicamente para falso plafón, 60x60 cm, ventilador interno de 35 cm, 3 velocidades silenciosas y una rotación de 360 grados mediante una rejilla, control remoto que permite programar el apagado automático con temporizador de 1, 4 y hasta 8 horas.";
  precioProducto = "2600";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "bomba_alberca") {
  tituloProducto = "Bomba para Alberca";
  descripcionProducto =
    "Bomba de filtración por cartucho para piscinas desmontables o elevadas. Se adapta a piscina de 10 a 12 pies, 600 GPH (galones por hora), Incluye bomba eléctrica, cámara del filtro, cartucho de filtro, mangueras y abrazaderas.";
  precioProducto = "2100";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "colchon_cunero") {
  tituloProducto = "Colchon para Cunero";
  descripcionProducto =
    "Colchon cunero de espuma de poliuretano, funda extraible, con almohadita incluida, forro impermeable  140cm largo, 80cm ancho y 10cm alto soporta 50kg.";
  precioProducto = "1000";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "traje_baño") {
  tituloProducto = "Traje de Baño";
  descripcionProducto =
    "Traje para dama, conjunto tipo bikini, diseño abrazado de material elastico de nailon spandex, color rojo, sin mangas.";
  precioProducto = "80";
  porPieza = "c/u";
  piezasProducto = "5";
} else if (producto_seleccionado === "silla_para_oficina") {
  tituloProducto = "Silla de Oficina";
  descripcionProducto =
    "Silla de oficina ergonomica con ruedas, no reclinable color negro, giro de 360°, 50 cm ancho, 96 cm alto, soporta 80kg de peso.";
  precioProducto = "800";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "tela_antihelada") {
  tituloProducto = "Tela Antihelada para Invenadero";
  descripcionProducto =
    "Tela antiheladas, fabricada con materiales de alta calidad es semivalente (permite la adecuada circulacion del aire y la luz), 20cm de ancho, 2.1m de largo.";
  precioProducto = "350";
  porPieza = "";
  piezasProducto = "1";
} else if (producto_seleccionado === "tapete_bano") {
  tituloProducto = "Tapete para Baño";
  descripcionProducto =
    "Tapete de baño espuma de polietileno, antideslizante, color gris con detalles lavable 61cm largo, 40cm ancho.";
  precioProducto = "50";
  porPieza = "c/u";
  piezasProducto = "10";
} else {
  tituloProducto = "Nada, vuelve al inicio!";
  descripcionProducto = "";
  precioProducto = "";
  porPieza = "";
  piezasProducto = "";
  window.location.href = "index.html";
}

async function cargarProducto() {
  const panel = document.getElementById("detalles_prod");
  panel.innerHTML = "";

  // 3. Creamos la estructura HTML aplicando las restricciones
  const panelHTML = `
      <div class="product-gallery">
        <div class="main-image-container">
          <img id="featured-image" class="main-image" src="Sources/${producto_seleccionado}.jpg"
          />
        </div>

<div class="thumbnail-container">
  <img
    class="thumbnail active"
    src="Sources/${producto_seleccionado}.jpg"
    onclick="changeImage(this)"
    onerror="this.style.display='none';" 
  />
  <img
    class="thumbnail"
    src="Sources/${producto_seleccionado}2.jpg"
    onclick="changeImage(this)"
    onerror="this.style.display='none';" 
  />
  <img
    class="thumbnail"
    src="Sources/${producto_seleccionado}3.jpg"
    onclick="changeImage(this)"
    onerror="this.style.display='none';" 
  />
  <img
    class="thumbnail"
    src="Sources/${producto_seleccionado}4.jpg"
    onclick="changeImage(this)"
    onerror="this.style.display='none';" 
  />
</div>
      </div>

      <div class="product-info">
        <h1>${tituloProducto}</h1>
        <p class="description">
        ${descripcionProducto}
        </p>
        <div class="price">$ ${precioProducto} MXN ${porPieza}</div>

        <div class="quantity">
          <h3>Disponibles:</h3>
          <p>${piezasProducto} Piezas</p>
        </div>

        <div class="quantity">
          <h3>Contáctate con nosotros para comprar</h3>
          <p>Teléfonos:</p>
            <p>56 5660 9782</p>
            <p>56 5652 9497</p>
        </div>
      </div>  
    `;
  panel.innerHTML = panelHTML;
}

function changeImage(element) {
  document.getElementById("featured-image").src = element.src;

  let thumbnails = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
  }

  element.classList.add("active");
}

document.addEventListener("DOMContentLoaded", cargarProducto);

/*
document.querySelectorAll("img").forEach((img) => {
  if (
    !img.hasAttribute("src") ||
    img.getAttribute("src").trim() === "" ||
    img.getAttribute("src").trim() === "Sources/2.jpg" ||
    img.getAttribute("src").trim() === "Sources/3.jpg" ||
    img.getAttribute("src").trim() === "Sources/4.jpg"
  ) {
    img.remove();
  }
});
*/
