<template>
    <div class="container">
      <h1 class="title">Seja um Voluntário!</h1>
      <p class="description">
        Faça parte da nossa missão! Para se tornar um voluntário, basta enviar o seu
        currículo e informações de contato. Entraremos em contato assim que possível.
      </p>
      <section class="carousel-container">
        <CarrosselVoluntariosComponent2 />
      </section>
      <h2 class="subtitle">Por que ser voluntário?</h2>
      <p class="description">
        Ser voluntário é uma oportunidade única de:
      </p>
      <ul class="benefits-list">
        <li>Contribuir para causas que fazem a diferença na vida de muitas pessoas.</li>
        <li>Desenvolver novas habilidades e crescer pessoal e profissionalmente.</li>
        <li>Conectar-se com outras pessoas que compartilham dos mesmos valores e objetivos.</li>
        <li>Deixar um impacto positivo na sociedade e no mundo ao seu redor.</li>
      </ul>
      <p class="description">Escolha como deseja enviar o seu currículo:</p>
      <div class="actions">
        <a
          :href="whatsappLink"
          class="button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar pelo WhatsApp
        </a>
        <a :href="emailLink" class="button email">
          Enviar por E-mail
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from "vue";
  import CarrosselVoluntariosComponent2 from "@/components/CarrosselVoluntariosComponent2.vue";
  
  export default {
    name: "ContatoPage",
    components: {
      CarrosselVoluntariosComponent2,
    },
    setup() {
      const whatsappNumber = "5521966564481"; 
      const emailAddress = "projetosocial.gilgal@hotmail.com";  
  
      const whatsappLink = computed(() =>
        `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20me%20tornar%20um%20voluntário!`
      );
  
      const emailLink = computed(() =>
        `mailto:${emailAddress}?subject=Quero%20ser%20voluntário&body=Olá,%20gostaria%20de%20me%20tornar%20um%20voluntário!`
      );
  
      return {
        whatsappLink,
        emailLink,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    padding-top: 1.5rem;
    font-family: Arial, sans-serif;
  }
  
  .title {
    font-size: 3rem;
    color: #5d8bb9;
  }
  
  .subtitle {
    font-size: 2rem;
     color: #5d8bb9;
    margin-top: -4rem;
  }
  
  .description {
    font-size: 1.4rem;
    color: #03316d;
    text-align: justify;
    margin-bottom: 0.5rem;
    text-align: justify;
}
  
   
  .benefits-list {
    text-align: left;
    margin: 1rem auto;
    text-align: justify;
    padding: 0 1.5rem;
    list-style-type: disc;
  }
  
  .benefits-list li {
    font-size: 1.5rem;
    text-align: justify;
    color: #5d8bb9;
 
  }
  
  .actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 20px;
  }
  
  .button {
    padding: 10px 1.2rem;
    font-size: 1.6rem;
    border-radius: 8px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .whatsapp {
    background-color: #02a240;
    
  }
  
  .whatsapp:hover {
    background-color: #1cfe03;
    color: #000000;
  }
  
  .email {
    background-color: #023770;
  }
  
  .email:hover {
    background-color: #0056b3;
    color: #000000;
  }
  </style>
  