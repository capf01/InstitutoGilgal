<template>
    <!-- Seção de serviços com transição de entrada -->
    
    <transition name="fade-slide">
      <section v-if="isVisible" id="services" class="section">
      
        <!-- Carrossel moderno -->
        <div class="modern-carousel">
          <!-- Imagem atual -->
           
          <div class="carousel-images">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              alt="Imagem de Serviços"
              :class="{ active: index === currentIndex }"
            />
          </div>
  
          <!-- Indicadores -->
          <div class="carousel-indicators">
            <button
              v-for="(image, index) in images"
              :key="index"
              :class="{ active: index === currentIndex }"
              @click="goToImage(index)"
            ></button>
          </div>
  
          <!-- Botões de navegação -->
          <button @click="previousImage" class="carousel-button left"></button>
          <button @click="nextImage" class="carousel-button right"></button>
        </div>
      </section>
    </transition>
  </template>
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    name:"CarrosselVoluntariosComponent2",
    setup() {
      const isVisible = ref(false);
      const images = [
       
 
      new URL('@/assets/Images/CarrosselVoluntario/Voluntarios (2).jpeg', import.meta.url).href, 
      new URL('@/assets/Images/CarrosselVoluntario/Voluntarios (3).jpeg', import.meta.url).href, 
      new URL('@/assets/Images/CarrosselVoluntario/Voluntarios (4).jpeg', import.meta.url).href, 
      new URL('@/assets/Images/CarrosselVoluntario/Voluntarios (5).jpeg', import.meta.url).href, 
      new URL('@/assets/Images/CarrosselVoluntario/Voluntarios (6).jpeg', import.meta.url).href,  
       
    ];
  
      const currentIndex = ref(0);
  
      const previousImage = () => {
        currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
      };
  
      const nextImage = () => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
      };
  
      const goToImage = (index) => {
        currentIndex.value = index;
      };
  
      let autoSlideInterval = null;
  
      onMounted(() => {
        setTimeout(() => (isVisible.value = true), 200);
        autoSlideInterval = setInterval(nextImage, 3000);
      });
  
      onUnmounted(() => {
        clearInterval(autoSlideInterval);
      });
  
      return {
        isVisible,
        images,
        currentIndex,
        previousImage,
        nextImage,
        goToImage
      };
    }
  };
  </script>
  <style scoped>
  .section {
  display: flex; /* Permite centralizar o conteúdo filho */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-direction: column; /* Garante que os elementos sejam dispostos em coluna */
  padding: 10px;
  text-align: center;
  width: 100vw;
  height: 100vh; /* Ocupa toda a altura da tela */
  max-width: 1200px;
  background-color: #fcfcfc;
  border-radius: 15px;
  margin: 0 auto; /* Garante que esteja centralizado horizontalmente */
}

.modern-carousel {
  position: relative;
  width: 100vw;
  max-width: 1000px; /* Define um tamanho máximo para o carrossel */
  max-height: 90vh;
  height: auto; /* Permite que a altura seja ajustada automaticamente */
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  border-radius: 30px;
  justify-content: center; /* Centraliza o carrossel internamente */
  align-items: center; /* Centraliza verticalmente o conteúdo */
  aspect-ratio: 16 / 9; /* Mantém a proporção do carrossel */
  margin: 0 auto; /* Centraliza o carrossel na página */
}

  
  .carousel-images {
    display: flex;
    border-radius: 30px;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    height: 100%;
  }
  
  .carousel-images img {
    flex-shrink: 0;
    border-radius: 30px;
    width: 100vw;
    height: 100%;
    object-fit: contain; /* Ajusta a imagem sem cortar ou aplicar zoom */
    display: none;
    max-width: 100%; /* Garante que as imagens não ultrapassem a largura do carrossel */
    max-height: 100%; /* Garante que as imagens não ultrapassem a altura do carrossel */
  }
  
  .carousel-images img.active {
    display: block;
    border-radius: 15px;
  }
  
  /* Indicadores */
  .carousel-indicators {
    display: flex;
    justify-content: center;
     
  }
  
  .carousel-indicators button {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: #ccc;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .carousel-indicators button.active {
    background: #333;
  }
  
  /* Botões de navegação */
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0);
    color: rgb(116, 114, 114);
    border: none;
  
    font-size: 1rem;
    cursor: pointer;
    border-radius: 50%;
    z-index: 2;
    transition: background 0.3s;
  }
  
  .carousel-button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  
  .carousel-button.left {
    left: 10px;
  }
  
  .carousel-button.right {
    right: 10px;
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .modern-carousel {
      aspect-ratio: 4 / 3;
    }
  
    .section-title {
      font-size: 1.8rem;
    }
  
    .section-description {
      font-size: 1rem;
    }
  
    .carousel-button {
      padding: 8px;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .modern-carousel {
      aspect-ratio: 1 / 1;
    }
  
    .section-title {
      font-size: 1.5rem;
    }
  
    .section-description {
      font-size: 0.9rem;
    }
  
    .carousel-button {
      font-size: 0.8rem;
      padding: 6px;
    }
  
    .carousel-indicators button {
      width: 6px;
      height: 6px;
    }
  }
  </style>
  