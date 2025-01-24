<template>
    <div class="dados-container">
      <h1>Instituto Gilgal</h1>
      <p>
    Somos uma organização sem fins lucrativos dedicada a 
    <strong>transformar vidas</strong>, 
    oferecendo suporte e oportunidades para crianças e adultos em situação de vulnerabilidade, 
    ajudando-os a alcançar um futuro melhor.
    </p>

      <div class="numeros-lista">
        <div
          v-for="item in dados"
          :key="item.id"
          class="numero-item"
        >
          <div class="numero">{{ item.exibido }}</div>
          <div class="descricao">{{ item.descricao }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DadosAnimados",
    data() {
      return {
        dados: [
          { id: 1, valorFinal: 550, exibido: 0, descricao: "CRIANÇAS ATIVAS EM PROJETOS" },
          { id: 2, valorFinal: 5050, exibido: 0, descricao: "ALIMENTOS DISTRIBUÍDOS" },
          { id: 3, valorFinal: 1000, exibido: 0, descricao: "PESSOAS IMPACTADAS" },
        ],
      };
    },
    mounted() {
      this.iniciarContagem();
    },
    methods: {
      iniciarContagem() {
        this.dados.forEach((item) => {
          const incremento = item.valorFinal / 100; // Taxa de incremento
          let contagemAtual = 0;
  
          const animacao = setInterval(() => {
            contagemAtual += incremento;
            if (contagemAtual >= item.valorFinal) {
              item.exibido = item.valorFinal; // Define o valor final
              clearInterval(animacao); // Para a animação
            } else {
              item.exibido = Math.floor(contagemAtual); // Atualiza o número exibido
            }
          }, 20); // Atualiza a cada 20ms
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .dados-container {

    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
     
  }
  
  p {
    font-size: 1rem;
     
    line-height: 1.5;
    margin-bottom: 30px;
  }
  
  .numeros-lista {
    display: flex;
    flex-direction: column; /* Empilha os itens verticalmente */
    align-items: flex-start;
    margin: 20px auto;
    max-width: 600px;
  }
  
  .numero-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .numero {
    font-size: 2.5rem;
    color: #00FF7F	;
    font-weight: bold;
    margin-right: 20px; /* Espaço entre número e texto */
  }
  
  .descricao {
    font-size: 1rem;
 
    font-weight: 500;
  }
  </style>
  