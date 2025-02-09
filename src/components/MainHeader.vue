<template>
  <header class="header">
    <!-- Fundo gradiente dinâmico -->
    <div id="dynamic-gradient">
      <canvas id="gradient-canvas"></canvas>
    </div>

    <!-- Contêiner para Logotipo Centralizado -->
    <div class="header-content-center">
      <div class="logo-container">
        <div
          class="logo-circle"
          @mousemove="handleMouseMove"
          @mouseleave="resetShadow"
          @mouseenter="animateLogo"
        >
          <img
            src="@/assets/Images/logogilgal-removebg-preview.png"
            alt="Logo da Construtora Vieira"
            class="logo1"
            :style="logoStyle"
          />
          <div class="circle-text">
            <span class="gilgal">Gilgal</span>
            <span class="instituto">Instituto</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu de navegação -->
    <nav class="nav-menu">
      <ul class="nav-links" :class="{ show: isMenuOpen }">
        <li><router-link to="/" class="menu-item">Início</router-link></li>
        <li><router-link to="/Projetos" class="menu-item">Projetos</router-link></li>
        <li><router-link to="/Doacao" class="menu-item">Seja Doador</router-link></li>
        <li><router-link to="/Parceiro" class="menu-item">Seja Parceiro</router-link></li>
        <li><router-link to="/Voluntario" class="menu-item">Seja Volutário</router-link></li>
        <li><router-link to="/QuemSomos" class="menu-item">Quem Somos</router-link></li>
        <li><router-link to="/Contato" class="menu-item">Contato</router-link></li>
      </ul>

      <!-- Botão Hambúrguer (para telas menores) -->
      <button class="hamburger" @click="toggleMenu" aria-label="Abrir menu">
        &#9776;
      </button>
    </nav>
  </header>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
  name: "MainHeader",
  setup() {
    const isMenuOpen = ref(false);
    const mouseX = ref(0);
    const mouseY = ref(0);
    const shadowX = ref(0);
    const shadowY = ref(0);
    const isLogoAnimating = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      if (isMenuOpen.value) {
        setTimeout(() => {
          isMenuOpen.value = false;
        }, 2000);
      }
    };

    const handleMouseMove = (event) => {
      const offsetX = event.clientX - window.innerWidth / 2;
      const offsetY = event.clientY - window.innerHeight / 2;

      mouseX.value = event.clientX;
      mouseY.value = event.clientY;
      shadowX.value = Math.min(Math.max(offsetX / 10, -15), 15);
      shadowY.value = Math.min(Math.max(offsetY / 10, -15), 15);
    };

    const resetShadow = () => {
      shadowX.value = 0;
      shadowY.value = 0;
      isLogoAnimating.value = false;
    };

    const animateLogo = () => {
      isLogoAnimating.value = true;
    };

    const logoStyle = computed(() => ({
  filter: `drop-shadow(${shadowX.value}px ${shadowY.value}px 350px rgba(2, 11, 181, 0.9))`, // Sombra mais ampla e opaca
  transform: isLogoAnimating.value ? "scale(1.2)" : "scale(1)", // Efeito de escala opcional
  transition: "transform 0.3s ease, filter 0.1s ease-out",
}));
    const createGradientEffect = () => {
      const canvas = document.getElementById("gradient-canvas");
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(
          mouseX.value,
          mouseY.value,
          100,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width
        );

        gradient.addColorStop(0, "rgba(42, 171, 181, 1)");
        gradient.addColorStop(1, "rgba(91, 197, 114, 1)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        requestAnimationFrame(animate);
      };

      resizeCanvas();
      animate();

      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("mousemove", handleMouseMove);
    };

    onMounted(() => {
      createGradientEffect();
    });

    return {
      isMenuOpen,
      toggleMenu,
      handleMouseMove,
      resetShadow,
      animateLogo,
      logoStyle,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");

/* Estilo para o fundo gradiente dinâmico */
#dynamic-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

#gradient-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.header {
  background-color: transparent;
  color: #5d8bb9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
}

.header-content-center {
  display: flex;
  flex: 1;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: azure;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: #051675;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo1 {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-top: -20px;
  transition: transform 0.3s ease, filter 0.1s ease-out;
}

.circle-text {
  text-align: center;
  
}

.instituto {
  display: block;
  color: rgba(42, 171, 181, 1);
  font-size: 12px;
  font-weight: bold;
  margin-top: -30px;
}

.gilgal {
  display: block;
  color: rgba(91, 197, 114, 1);
  font-size: 12px;
  font-weight: bold;
  margin-top: -15px;
}
  .nav-menu {
    display: flex;
    font-size: 12px;
    align-items: center;
    gap: 20px;
  }
  
  .nav-links {
    font-size: 16px;
    display: flex;
    list-style: none;
    gap: 20px;
  }
  
  .menu-item {
    text-decoration: none;
    color:#0d0879;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .menu-item:hover {
    color: #f3eeee;
  }
  /* Estilo padrão: botão hambúrguer oculto em telas maiores */
  .hamburger {
    padding-top: 30px;
    display: none; /* Oculta o botão por padrão */
  }
  
  /* Exibe o botão hambúrguer em telas menores que 700px */
  @media (max-width: 700px) {
   
  .logo1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
    .hamburger {
      display: block; /* Exibe o botão */
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 1.5rem;
      background: none;
      border: none;
      color: #051675;
      cursor: pointer;
      z-index: 110; /* Certifique-se de que ele fique acima de outros elementos */
    }
  
    .nav-links {
      flex-direction: column; /* Configuração para o menu hambúrguer */
      position: fixed;
      top: 0;
      right: 0;
      padding-top: 20px;
      width: 100%;
      height: 50%;
      background-color: rgba(230, 228, 228, 0.9);
      justify-content: center;
      align-items: center;
      opacity: 0.8; 
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      z-index: 100; /* Ajuste da ordem */
    }
  
    .nav-links.show {
      transform: translateX(0); /* Exibe o menu */
    }
  }
  
  </style>
  