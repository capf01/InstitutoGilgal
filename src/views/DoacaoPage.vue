<template>

  <DonationComponent/>
    <div class="doacao-page">
  
      <div class="doacao-container">
        <!-- Seção de doação via PIX -->
        <div class="pix-section">
          <h3>Doar via PIX</h3>
          <div class="qr-section">
            <h3>Doar via QR Code</h3>

            <img :src="require('@/assets/Images/qrcodegligal.jpeg')" alt="QR Code para doação" />
          </div>
          <p>Chave PIX: <strong>{{ chavePix }}</strong></p>
          <button @click="copiarPix">Copiar Chave PIX</button>
  
          <!-- Mensagem de confirmação -->
          <div v-if="mensagem" class="mensagem">
            {{ mensagem }}
          </div>
        </div>
  
        <!-- Imagem e descrição -->
        <div class="info-section">
          <div class="imgdoa">
             <ContadorAnimado/>
          </div>
          <p>
            Sua doação ajuda o <strong>Instituto Gilgal</strong> a continuar apoiando crianças e pessoas em situação de vulnerabilidade. 
            Contribuímos com alimentação, educação e suporte emocional para transformar vidas.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script> 
import ContadorAnimado from '@/components/ContadorAnimado.vue';
import DonationComponent from '@/components/DonationComponent.vue';

  export default {
    name: "DoacaoPage",
    data() {
      return {
        chavePix: "45.640.768/0001-68", // Substitua pela sua chave PIX
        mensagem: "", // Mensagem para feedback ao usuário
      };
    },
    methods: {
      copiarPix() {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(this.chavePix).then(() => {
            this.mensagem = "O Instituto Gilgal agradece pela sua contribuição";
            setTimeout(() => (this.mensagem = ""), 3000); // Limpa a mensagem após 3 segundos
          });
        } else {
          this.mensagem = "Não foi possível copiar. Seu navegador não é compatível.";
          setTimeout(() => (this.mensagem = ""), 3000);
        }
      },
    },
    components:{
        ContadorAnimado,
        DonationComponent,

    },
  };
  </script>
  
  <style scoped>
  .doacao-page {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  .doacao-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin: 20px 0;
    flex-wrap: wrap; /* Permite ajustar no caso de telas menores */
  }
  
  .pix-section,
  .info-section {
    flex: 1;
    text-align: center;
  }
  
  .info-section {
    padding-top: 100px;
  }
  
  .pix-section {
    padding-top: 20px;
  }
  
  .imgdoa img {
    width: 100%;
    max-width: 500px; /* Aumenta o tamanho máximo da imagem */
    margin-bottom: 15px;
    border-radius: 8px;
  }
  
  .qr-section {
    margin-top: 30px;
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #f200ff;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .mensagem {
    margin-top: 20px;
    color: #1e00ff;;
    font-weight: bold;
  }
  </style>
  