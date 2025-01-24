<template>
    <div class="parceiros-container">
      <h1>Parceiros</h1>
      <div class="parceiros-grid">
        <div 
          class="parceiro-card" 
          v-for="parceiro in parceiros" 
          :key="parceiro.id"
          :class="{ 'recomecar-card': parceiro.nome === 'Recomeçar' }"
        >
          <img :src="parceiro.logo" :alt="`Logo do parceiro ${parceiro.nome}`" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import agirLogo from "@/assets/Images/agir.jpeg";
  import gerandoFalcoesLogo from "@/assets/Images/gerandofalcoes.png";
  import igrejaLogo from "@/assets/Images/igreja.jpeg";
  import institutoDaCriancaLogo from "@/assets/Images/institutodacrianca.jpeg";
  import panzaGnvLogo from "@/assets/Images/panzagnv.jpeg";
  import recomecarLogo from "@/assets/Images/recomecar-removebg-preview.png";
  import unacoopLogo from "@/assets/Images/unacoop.jpeg";
  
  export default {
    name: "ParceirosComponent",
    data() {
      return {
        parceiros: [
          { id: 1, nome: "AGIR", logo: agirLogo },
          { id: 2, nome: "Gerando Falcões", logo: gerandoFalcoesLogo },
          { id: 3, nome: "Ministério Palavras de Vida", logo: igrejaLogo },
          { id: 4, nome: "Instituto da Criança", logo: institutoDaCriancaLogo },
          { id: 5, nome: "Panza GNV", logo: panzaGnvLogo },
          { id: 6, nome: "Recomeçar", logo: recomecarLogo },
          { id: 7, nome: "Unacoop", logo: unacoopLogo },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .parceiros-container {
    text-align: center;
    padding: 30px 20px; /* Ajuste do espaçamento */
  }
  
  h1 {
    font-size: 2.5rem; /* Tamanho maior para o título */
    
    margin-bottom: 40px; /* Espaçamento aumentado */
  }
  
  .parceiros-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adaptável */
    gap: 30px; /* Espaçamento maior entre os cards */
    justify-items: center;
  }
  
  .parceiro-card {
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 180px; /* Tamanho padrão */
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .parceiro-card:hover {
    transform: scale(1.08); /* Aumentado levemente */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #f8f8f8; /* Fundo claro ao passar o mouse */
  }
  
  .parceiro-card img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    }
  
  /* Estilo específico para o card da logo "Recomeçar" */
  .recomecar-card {
    background-color: #000; /* Fundo preto */
  }
  
  .recomecar-card img {
    border-radius: 0; /* Remover arredondamento para diferenciar */
  }
  
  @media (max-width: 600px) {
    .parceiros-grid {
      gap: 20px; /* Ajuste menor no espaçamento */
    }
  
    .parceiro-card {
      width: 120px; /* Reduz tamanho em telas menores */
      height: 120px;
    }
  
    h1 {
      font-size: 1.8rem; /* Reduz tamanho do título */
      margin-bottom: 30px;
    }
  }
  </style>
  