<template> 
    <footer class="footer">
    
        <div class="logoCodec">
          <!-- Link no Instagram -->
          <a href="https://www.instagram.com/codecsolucoestecnologicas/" target="_blank" rel="noopener noreferrer">
            <img
              src="@/assets/Images/logoCodec.jpeg"
              alt="LogoCodec"
              class="circular-image"
            />
          </a>
          <p>© CODEC Soluções Tecnológicas.</p>
          </div>
    <div class="footer-content">
        <!-- Imagem logo -->
        <a href="https://www.instagram.com/projetogilgal/?igsh=MWE4ZmdnZDh5ZHA4aw%3D%3D" target="_blank" rel="noopener noreferrer">
          <img
            src="@/assets/Images/logogilgal-removebg-preview.png"
            alt="Logo da Conexão Riva"
            class="logo1"
          />
          
        </a>
  <!-- Texto -->
  <p>© 2025 Instituto Gilgal. Todos os direitos reservados.</p>
     
        
        </div>
         
    </footer>
  </template>
  
  <script>
  export default {
    name: "SiteFooter",
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  
  * {
    font-family: Poppins;
  }
  
  .footer {
    background-color:rgb(25, 111, 117);
    padding: 10px 10px;
    display: flex;
    color: aliceblue;
    justify-content: center; /* Centraliza o conteúdo */
    align-items: center;
    box-sizing: border-box;
  }
  
  .footer-content {
    display: flex; /* Flexbox para alinhar logo e texto lado a lado */
    align-items: center; /* Alinha verticalmente */
  }
  .logo {
    padding-right: -50px;
    height: 60px; /* Tamanho da imagem */
    width: auto; /* Mantém a proporção */
    margin-right: 1px; /* Espaço entre a logo e o texto */
  }
  .logo1 {
    padding-left: 10px;
    height: 30px; /* Tamanho da imagem */
    width: 50px; /* Mantém a proporção */
    margin-right: 1px; /* Espaço entre a logo e o texto */
  }
  p{
      padding: 10px;
  }
  .circular-image {
    height: 50px; /* Ajuste o tamanho conforme necessário */
    width: 50px; /* Torna a imagem quadrada */
    border-radius: 50%; /* Torna a imagem circular */
    margin-left: 10px;
    margin-right: 10px;
    object-fit: cover; /* Ajusta a imagem para caber no círculo */
  }
  
  p {
    margin: 0; /* Remove o espaçamento padrão do parágrafo */
    font-size: 1rem;
  }
  
  .logoCodec {
    display: flex;
    align-items: center; /* Alinha o conteúdo verticalmente */
  }
  
  .logoCodec a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 768px) {
    .footer {
      justify-content: center; /* Centraliza os elementos em telas menores */
      padding: 10px 5px;
    }
  
    .footer-content {
      gap: 10px; /* Reduz o espaço entre os elementos em telas menores */
    }
  
    .circular-image {
      height: 40px; /* Reduz o tamanho das imagens circulares */
      width: 40px;
    }
  
    .logo1 {
      height: 20px; /* Reduz o tamanho da segunda logo */
    }
    p{
      padding: 10px;
      font-size: 0.6rem;
    }
  }
  </style>
  