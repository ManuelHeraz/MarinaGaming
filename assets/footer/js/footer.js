// Obtener el elemento footer
const footer = document.getElementById('footer');

// Definir el template como string
const footerTemplate = `
  <img class="logoMar" src="https://media.discordapp.net/attachments/739583737045713027/1143001556816498788/MAR_blanco_.png?width=1202&height=676" alt="Logo de Marina Gaming">
  
  <div class="social-icons-container">
    <a href="https://www.facebook.com/MarinaGamingOfficial/"><i class='bx bxl-facebook-circle'></i></a>
    <a href="https://discord.gg/XfqqrWNAhy"><i class='bx bxl-discord-alt'></i></a>
    <a href="https://discord.gg/XfqqrWNAhy"><i class='bx bxl-twitter'></i></a>
    <a href="https://discord.gg/XfqqrWNAhy"><i class='bx bxl-instagram-alt'></i></a>
  </div>

  <ul class="footer-menu-container">
    <li class="menu-itemF"><a href="#home">Inicio</a></li>
    <li class="menu-itemF"><a href="https://discord.gg/XfqqrWNAhy">Discord</a></li>
    <li class="menu-itemF"><a href="https://es.socialclub.rockstargames.com/crew/ii\_marina\_armada\_iii">Social Club</a></li>
    <li class="menu-itemF"><a href="https://www.youtube.com/@joelheaz">JoelHeaz</a></li>    
    <li class="menu-itemF"><a href="https://discord.gg/XfqqrWNAhy">Contacto</a></li>
  </ul>

  <span class="copyright">&copy; 2023, Marina Gaming. Todos los Derechos Reservados <br> Created by: <a href="https://github.com/ManuelHeraz">ManuelHeraz</a></span>
`;

// Renderizar el template dentro del footer
footer.innerHTML = footerTemplate;