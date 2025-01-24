<template>
  <MainHeader/>
  <div class="image-containerwwp">
    <a href="https://api.whatsapp.com/send?phone=21966564481">
      <img src="@/assets/Images/whatsapp.png" alt="Imagem do WhatsApp" />
    </a>
    </div>
  <router-view/>
  <FooterComponent/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import MainHeader from './components/MainHeader.vue';

export default {
  name: 'App',
  components: {
     MainHeader,
     FooterComponent,
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5d8bb9;
 
}
.image-containerwwp {
  position: fixed;
  bottom: 20px; /* Ajuste para a parte inferior da tela */
  right: 20px; /* Ajuste para a lateral direita da tela */
  width: 80px; /* Tamanho do container */
  height: 80px; /* Tamanho do container */
  border-radius: 50%;
  background-color: white; /* Fundo branco para contraste */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para destaque */
  z-index: 1000; /* Garante que o ícone fique acima de outros elementos */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-containerwwp img {
  width: 100%; /* O ícone ocupará todo o container */
  height: 100%; /* Mantém a proporção */
  object-fit: contain; /* Ajusta a imagem sem distorção */
}
</style>
