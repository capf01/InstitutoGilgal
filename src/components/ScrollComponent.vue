<template>
    
    <main>
      <section class="content">
        <div class="text-container">
          <h2>
            <span aria-hidden="true">Contribua&nbsp;</span>
            <span class="sr-only">Seja um Parceiro.</span>
          </h2>
        </div>
        <ul class="items-list">
          <li v-for="(item, index) in items" :key="index" class="item">
            {{ item }}
          </li>
        </ul>
      </section>
      
      <section>
        <h2 class="fluid">fin.</h2>
      </section>
    </main>
  </template>
  
  <script>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  export default {
    name: "ScrollComponent",
    data() {
      return {
        items: [
          "Ajude",
          "Faça a Diferença",
          "Melhore a vida de",
          "Crianças",
          "Adolescentes",
          "Seu Apoio",
          "Pode mudar",
          "a",
          "Realidade",
          "de Muitos",
          "Colabore",
          "Inspire",
          "Crie",
          "Transforme",
          "Visualize",
          "Inove",
          "Otimize",
          "Ensine",
          "Impacte",
          "Motive",
          "Escale",
          "Seja um Parceiro.",
        ],
        currentItemIndex: 0,
      };
    },
    mounted() {
      this.setupScrollAnimations();
    },
    methods: {
      setupScrollAnimations() {
        const items = gsap.utils.toArray(".items-list .item");
        const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FF33A6",
        "#FFD433",
        "#33FFF5",
        "#8D33FF",
        "#FF8C33",
        "#33FF8C",
        "#5733FF",
        "#FF3380",
        "#D4FF33",
        "#33F0FF",
        "#FF33F0",
        "#FF5733",
        ]; // Definição das cores para alternar
  
        gsap.set(items, { opacity: 0, y: 50 });
  
        ScrollTrigger.create({
          trigger: ".content",
          start: "top center",
          end: "bottom center",
          scrub: true,
          onUpdate: (self) => {
            const index = Math.floor(self.progress * (items.length - 1));
            if (index !== this.currentItemIndex) {
              const currentItem = items[this.currentItemIndex];
              const nextItem = items[index];
  
              // Animação do item atual saindo
              gsap.to(currentItem, {
                opacity: 0,
                y: 50,
                color: "#FFFFFF", // Volta à cor padrão
                duration: 0.5,
              });
  
              // Animação do próximo item entrando com troca de cor
              gsap.to(nextItem, {
                opacity: 1,
                y: 0,
                color: colors[index % colors.length], // Cor baseada no índice
                duration: 0.5,
              });
  
              this.currentItemIndex = index;
            }
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap");
  @import url("https://unpkg.com/normalize.css") layer(normalize);
  
  body {
    font-family: "Geist", sans-serif;
    margin: 0;
    padding: 0;
    background: #111;
    color: #fff;
    overflow-x: hidden;
    line-height: 1.5;
  }
  
  header {
    text-align: center;
    padding: 5rem 0;
    font-size: 2rem;
    color: #fff;
  }
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0 2rem;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  
  .text-container {
    font-size: 3rem;
    text-align: center;
    color: #fe0808;
  }
  
  .items-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 3rem;
    padding: 0;
    margin: 0;
    gap: 1rem;
  }
  
  .items-list li {
    margin: 0;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s ease, transform 0.5s ease, color 0.5s ease;
  }
  
  h2 {
    padding: 100px;
    font-size: 2rem;
    color: #5d8bb9;
  }
  
  .fluid {
    font-size: 2.5rem;
    text-align: center;
    color: #fff;
    font-weight: 700;
  }
  </style>
  