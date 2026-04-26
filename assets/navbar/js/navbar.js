// Obtener el elemento navbar
const navbar = document.getElementById('navbar');

// Prefix para GitHub Pages (Asegura que siempre apunte al repo correcto)
const navTemplate = `
  <nav class="navbar">
    <a href="/MarinaGaming/index.html#inicio" class="brand">
      <img src="https://lh3.google.com/u/2/d/1Y2FY8HucV76hUs6HvRnuhPK8xUpRbQ6Z=w3000-h6501-iv1?auditContext=forDisplay" alt="Logo Marina Gaming" class="logo">
      <span class="brand-text">Marina Gaming</span>
    </a>
    
    <div class="menu-containerN">
      <ul class="mega-menuN">
        
        <li class="linkN">
          <a href="/MarinaGaming/index.html#inicio">Inicio</a> 
        </li>
        
        <li class="dropdown">
          <div>
            <span>Sobre Nosotros</span>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
          <ul class="menuN">
            <li class="linkN">
              <a href="/MarinaGaming/index.html#sobre">Nosotros</a>
            </li>
            <li class="linkN">
              <a href="/MarinaGaming/pages/wiki/index.html">Wiki Oficial</a>
            </li>
            <li class="linkN">
              <a href="/MarinaGaming/pages/galeria/index.html">Galería</a>
            </li>
          </ul>
        </li>
        
        <li class="dropdown">
          <div>
            <span>Medallas</span>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
          <ul class="menuN">
            <li class="linkN">
              <a href="/MarinaGaming/pages/medallas/pages/listaMedallas/index.html#lista">Lista de Medallas</a>
            </li>
            <li class="linkN">
              <a href="/MarinaGaming/pages/medallas/pages/cuadroCondecoraciones/index.html">Cuadro de condecoraciones</a> 
            </li>
          </ul>
        </li>
        
        <li class="dropdown">
          <div>
            <span>Alto Mando</span>
            <span class="material-symbols-outlined">expand_more</span>
          </div>
          <ul class="menuN">
            <li class="linkN">
                <a href="/MarinaGaming/pages/almirantes/index.html">Almirantes</a>
            </li>
            <li class="linkN">
                <a href="/MarinaGaming/pages/moderadores/index.html">Moderadores</a>
            </li>
            <li class="linkN">
                <a href="/MarinaGaming/pages/admins/index.html">Admins</a>
            </li>
          </ul>
        </li>
        
        <li class="dropdown">
          <div>
              <span>Multimedia</span>
              <span class="material-symbols-outlined">expand_more</span>
          </div>
          <ul class="menuN">
              <li class="linkN">
                  <a href="https://cytu.be/r/MarinaGaming" style="color: #ff3b3b; font-weight: bold;">🔴 EN VIVO</a>
              </li>
              <li class="linkN">
                  <a href="/MarinaGaming/pages/martv/index.html">MAR TV</a>
              </li>
              <li class="linkN">
                  <a href="/MarinaGaming/pages/musica/index.html">Música Gamer</a>
              </li>
              <li class="linkN">
                  <a href="/MarinaGaming/pages/radio/index.html">Radio MAR</a>
              </li>
          </ul>
        </li>
        
        <li class="dropdown">
          <div>
              <span>FENIX-RolePlay</span>
              <span class="material-symbols-outlined">expand_more</span>
          </div>
          <ul class="menuN">
              <li class="linkN">
                  <a href="/MarinaGaming/pages/fenix/tienda/index.html">Tienda</a>
              </li>
              <li class="linkN">
                  <a href="/MarinaGaming/pages/fenix/noticias/index.html">Noticiero</a>
              </li>
          </ul>
        </li>
        
      </ul>
    </div>
    
    <div class="buttonsN">
      <a href="https://discord.gg/XfqqrWNAhy" style="text-decoration: none;">
          <button class="btnN" style="cursor: pointer;">Discord</button>
      </a>
      <button class="menu-btn">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </nav>
`;

// Renderizar el template
navbar.innerHTML = navTemplate;