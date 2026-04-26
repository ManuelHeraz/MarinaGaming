// Obtener el elemento header
const header = document.getElementById('header');

// Template del header
const headerTemplate = `
  <div class="container-header">

    <div class="header-body">
      <h1>Marina <span>Gaming</span> Medallas</h1>

      <p>La comunidad Marina Gaming cuenta con un sistema de medallas propio, selecciona a continuación si quieres ver la lista de medallas, o ver a los integrantes con al menos 3 condecoraciones</p>

      <p>Recuerda unirte a nuestra comunidad si no estas dentro!</p>
      
      <a href="https://discord.gg/XfqqrWNAhy" class="btn-header">Discord</a>
    </div>

    <div class="header-bottom">

      <div class="bottom-heading">
        <h2>Sistema de Medallas</h2>
      </div>

      <div class="panels">

        <div class="panel">
          <div class="panel-header">
            <span class="category">Medallas</span>
            <span>MAR</span>
          </div>
        
          <div class="panel-body">
            <h2>Lista de Medallas</h2>
            <p>En esta sección encontraras la lista completa de todas las condecoraciones de nuetra comundiad</p>
          </div>
        
          <a href="/pages/medallas/pages/listaMedallas/index.html#lista" class="panel-link">
            <span>Click aquí para ver</span> 
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>

        <div class="panel">
          <div class="panel-header">
              <span class="category">MEDALLAS</span>
              <span>MAR</span>
          </div>
          <div class="panel-body">
              <h2>Cuadro de condecoraciones</h2>
              <p>
                  En esta sección encontraras la lista de integrantes que han sido condecorados, así como las medallas que han recibido
              </p>
          </div>
          
          <a href="/pages/medallas/pages/cuadroCondecoraciones/index.html" class="panel-link">
              <span>Click aquí para ver</span>
              <i class="fas fa-arrow-right"></i>
          </a>
        </div>

      </div>

    </div>

  </div>
`;

// Renderizar el template 
header.innerHTML = headerTemplate;