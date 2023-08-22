// Obtener el elemento navbar
const navbar = document.getElementById('navbar');

// Template del navbar
const navTemplate = `
  <nav class="navbar">
    <a href="#" class="brand">Marina Gaming</a>

    <div class="menu-containerN">

      <ul class="mega-menuN">
      
        <li class="linkN">
          <a href="#inicio">Inicio</a> 
        </li>
        
        <li class="linkN">
         <a href="#">Sobre nosotros</a>
        </li>

        <li class="dropdown">
          <div>
            <span>Medallas</span>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
        
          <ul class="menuN">
            <li class="linkN">
              <a href="#">Lista de Medallas</a>
            </li>
            <li class="linkN">
              <a href="#">Cuadro de condecoraciones</a> 
            </li>
          </ul>
        </li>

        <li class="dropdown">
        <div>
            <span>Alto Mando</span>
            <span class="material-symbols-outlined">
                expand_more
            </span>
        </div>
        <ul class="menuN">
            <li class="linkN">
                <a href="#">Almirantes</a>
            </li>
            <li class="linkN">
                <a href="#">Moderadores</a>
            </li>
            <li class="linkN">
                <a href="#">Admins</a>
            </li>
        </ul>
    </li>
    <li class="dropdown">
        <div>
            <span>MAR TV</span>
            <span class="material-symbols-outlined">
                expand_more
            </span>
        </div>
        <ul class="menuN">
            <li class="linkN">
                <a href="https://manuelheraz.github.io/MARTV/">MAR TV</a>
            </li>
            <li class="linkN">
                <a href="https://manuelheraz.github.io/MARTV/#movies">Peliculas</a>
            </li>
            <li class="linkN">
                <a href="https://manuelheraz.github.io/MARTV/#series">Series</a>
            </li>
        </ul>
    </li>

    <li class="dropdown">
        <div>
            <span>FENIX-RolePlay</span>
            <span class="material-symbols-outlined">
                expand_more
            </span>
        </div>
        <ul class="menuN">
            <li class="linkN">
                <a href="#">Tienda</a>
            </li>
            <li class="linkN">
                <a href="#">Noticiero</a>
            </li>
        </ul>
    </li>

      </ul>

    </div>

    <div class="buttonsN">
      <button class="btnN">Discord</button>
      <button class="menu-btn">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>

  </nav>
`;

// Renderizar el template
navbar.innerHTML = navTemplate;