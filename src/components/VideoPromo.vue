<template>
    <section id="Video" class="video">
      <div class="video-container">
        <!-- Vídeo -->
        <video
          src="@/assets/Videos/VideoPromo.mp4"
          class="promo-video"
          ref="videoElement"
          muted
          loop
          autoplay
          @click="toggleVideo"
        ></video>
  
        <!-- Texto centralizado sobre o vídeo -->
        <div class="centered-text">
          <h1>A ajuda humanitária é a essência do Instituto.</h1>
<p>
  Com apoio de parceiros e voluntários, levamos dignidade e esperança às famílias em vulnerabilidade, 
  enfrentando insegurança alimentar, falta de água e outras necessidades.
</p>
<p>
  Juntos, construímos um futuro mais justo, transformando solidariedade em impacto positivo.
</p>

          <div class="button-group">
            <button @click="handleContato">Contato</button>
            <button @click="handleSaibaMais">Colabore</button>
          </div>
        </div>
  
        <!-- Ícone de Play (aparece apenas quando o vídeo está pausado) -->
        <div v-if="!isPlaying" class="play-icon" @click="toggleVideo">
          ▶
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "VideoPromo",
    data() {
      return {
        isPlaying: true, // Estado inicial: vídeo está reproduzindo
      };
    },
    methods: {
      toggleVideo() {
        const video = this.$refs.videoElement;
  
        if (this.isPlaying) {
          video.pause(); // Pausa o vídeo
        } else {
          video.play(); // Reproduz o vídeo
        }
  
        this.isPlaying = !this.isPlaying; // Alterna o estado
      },
      handleContato() {
        window.open("https://wa.me/5521966564481", "_blank"); // Redireciona para o WhatsApp
      },
      handleSaibaMais() {
        window.location.href = "/Doacao"; // Redireciona para a página /Imoveis
      },
    },
  };
  </script>
  
  <style scoped>
  /* Garantir que não há margens ou padding na página */
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Impede rolagem horizontal */
  }
  
  /* Container do vídeo */
  .video-container {
    position: relative;
    width: 99,1vw; /* Cobre toda a largura da viewport */
    height: 100vh; /* Cobre toda a altura da viewport */
    overflow: hidden; /* Garante que nada ultrapasse o container */
    display: flex;
    justify-content: center; /* Centraliza horizontalmente os elementos */
    align-items: center; /* Centraliza verticalmente os elementos */
  }
  
  /* Estilos do vídeo */
  .promo-video {
    width: 100vw; /* Cobre toda a largura da tela */
    height: 100vh; /* Cobre toda a altura da viewport */
    object-fit: cover; /* Garante que o vídeo preencha o container sem distorcer */
    position: absolute;
    top: 0;
    left: 0;
  }
  
  /* Texto centralizado */
  .centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    z-index: 10;
    max-width: 80%; /* Limita a largura do texto */
    opacity: 0.8; /* Transparência do texto */
  }
  
  .centered-text h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .centered-text p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  /* Botões */
  .button-group {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .button-group button {
    background-color: #03ffaf;
    color: rgb(255, 255, 255);
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .button-group button:hover {
    background-color: #e25914;
    transform: scale(1.07);
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .centered-text h1 {
      font-size: 2rem;
    }
    .centered-text h2 {
      font-size: 1.5rem;
    }
    .centered-text p {
      font-size: 1rem;
    }
    .button-group button {
      font-size: 0.9rem;
      padding: 10px 20px;
    }
  
    .centered-text p {
      font-size: 0.9rem;
    }
  
    .button-group button {
      font-size: 0.8rem;
      padding: 8px 10px;
    }
  }
  </style>
  