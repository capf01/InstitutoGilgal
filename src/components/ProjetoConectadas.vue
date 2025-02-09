<template> 
    <div class="margin">
     <div class="zenith-container">
       <!-- Foto grande na lateral esquerda -->
       <div class="card" @click="openCarousel">
         <img
           :src="require('@/assets/Images/Card01/Sacolao (1).jpeg')"
           alt="Sacolao"
           class="card-image"
         />
         
       </div>
   
       <!-- Texto e botões na lateral direita -->
       <div class="description">
         <h2>Projetos Concectadas</h2>
         <p>
          O projeto Conectadas, promovido pelo Instituto Gilgal, é voltado para capacitar e empoderar meninas e jovens mulheres em situação de vulnerabilidade social por meio da tecnologia e da inclusão digital. A iniciativa busca reduzir as desigualdades de gênero no acesso ao conhecimento tecnológico, proporcionando ferramentas que ampliem suas oportunidades educacionais e profissionais.

Durante o projeto, as participantes têm acesso a oficinas de programação, design digital, segurança na internet, além de palestras inspiradoras com mulheres que são referência em áreas como tecnologia, empreendedorismo e inovação. O objetivo é despertar nelas a confiança para liderar, criar e conquistar seu espaço no mundo digital.

Mais do que ensinar habilidades técnicas, o Conectadas fomenta a autonomia, o pensamento crítico e a capacidade de inovação, mostrando que elas podem ser protagonistas de suas histórias e agentes de transformação em suas comunidades.

Junte-se ao projeto Conectadas e descubra como a tecnologia pode abrir portas para um futuro cheio de possibilidades!







</p>
 
 
 
         <div class="button-group">
           <button @click="handleContato">Fale Conosco</button>
           <button @click="openLocation">Localização</button>
         </div>
       </div>
   
       <!-- Modal para galeria -->
       <div v-if="isGalleryOpen" class="carousel-modal">
         <button class="close-button" @click="closeCarousel">X</button>
         <button class="arrow left-arrow" @click="prevImage">&#9664;</button>
         <div class="carousel-content">
           <img
             :src="currentImage"
             alt="Imagem da Galeria"
             class="carousel-main-image"
           />
         </div>
         <button class="arrow right-arrow" @click="nextImage">&#9654;</button>
         <div class="carousel-thumbnails">
           <img
             v-for="(image, index) in galleryImages"
             :key="index"
             :src="image"
             alt="Miniatura"
             class="thumbnail"
             @click="changeImage(index)"
           />
         </div>
       </div>
     </div>
   </div>
   </template>
   
   <script>
   export default {
     name: "ProjetoConectadas",
     data() {
       return {
         galleryImages: [  
       require('@/assets/Images/Card01/Sacolao (1).jpeg'),
       require('@/assets/Images/Card01/Sacolao (2).jpeg'),
       require('@/assets/Images/Card01/Sacolao (3).jpeg'),
       require('@/assets/Images/Card01/Sacolao (4).jpeg'),
   
               ],
         isGalleryOpen: false,
         currentImageIndex: 0,
       };
     },
     computed: {
       currentImage() {
         return this.galleryImages[this.currentImageIndex];
       },
     },
     methods: {
       openCarousel() {
         this.isGalleryOpen = true;
         this.currentImageIndex = 0; // Sempre começa na primeira imagem
       },
       closeCarousel() {
         this.isGalleryOpen = false;
       },
       prevImage() {
         this.currentImageIndex =
           (this.currentImageIndex - 1 + this.galleryImages.length) %
           this.galleryImages.length;
       },
       nextImage() {
         this.currentImageIndex =
           (this.currentImageIndex + 1) % this.galleryImages.length;
       },
       changeImage(index) {
         this.currentImageIndex = index;
       },
     handleContato() {
         const message = encodeURIComponent("Olá, tenho interesse em mais informações sobre o Park Golf");
         window.open(`https://wa.me/5592984317825?text=${message}`, "_blank");
     },
       openLocation() {
         window.open("https://www.google.com/maps?q=RUA+WALDEMAR+JARDIM+MAUES,+n°+1.120,+NOVO+ALEIXO,+MANAUS-AM");
  // Link para localização
       },
     },
   };
   
   </script>
  <style scoped>
  .margin{
     margin: 20px;
   }
  .zenith-container {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
  h2{
  font-size: 24px;
  margin-bottom: 10px;
  line-height: 1.6;
  color: rgb(0, 0, 0);
  }  
  p{
   
  margin-bottom: 10px;
  line-height: 1.6;
  color: rgb(0, 0, 0);
  }
  .card {
    flex: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: transparent;
    border: none;
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .card-image:hover {
    transform: scale(1.05);
  }
  
  .description {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .description h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .description p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .button-group {
    display: flex;
    gap: 15px;
  }
  
  .button-group button {
    background-color: #d15c0d;
    color: rgb(254, 254, 251);
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  .button-group2 button{
    background-color: #082a5f;
    color: rgb(254, 251, 251);
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  .button-group button:hover {
    background-color: #089c46;
    transform: scale(1.05);
  }
  
  .carousel-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .carousel-content {
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-main-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
  
  .carousel-thumbnails {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .thumbnail {
    width: 100px;
    height: 70px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 5px;
    transition: transform 0.3s ease, border 0.3s ease;
  }
  
  .thumbnail:hover {
    transform: scale(1.1);
    border: 2px solid white;
  }
  
  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    color: black;
    font-size: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
  }
  
  .left-arrow {
    left: 10px;
  }
  
  .right-arrow {
    right: 10px;
  }
   /* Responsividade */
   @media (max-width: 768px) {
     .zenith-container {
       flex-direction: column;
       align-items: center;
     }
     .carousel-main-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
     .card {
       max-width: 100%;
     }
     .card-image{
       max-width: 100%;
       max-height: 100%;
     }  
     .button-group button,
     .button-group2 button {
       padding: 10px 15px;
       font-size: 0.8rem;
     }
   
     
   }
  </style>
 