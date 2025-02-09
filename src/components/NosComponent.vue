
<template>
    <section id="projects" class="section">
      <div class="content">
        <div class="image-container">
          <img 
            src="@/assets/Images/PresidenteEquip.jpeg" 
            alt="Foto de Rogério" 
            class="profile-image" 
          />
        </div>
        <div class="text-content">
            <h1>Nossa História</h1>
        <p>
         Olá, Eu sou a Tamires e quero compartilhar nossa história para que você compreenda como tudo começou. 
         Nossa história tem raízes muito profundas e significativas.
</p>
<p>
  Tudo começou quando enfrentei uma doença que me deixou em um estado quase vegetativo. 
  Foi um momento extremamente difícil, mas, graças a Deus, 
  encontrei forças por meio de uma instituição incrível. O que antes era um projeto para apenas <strong>
    O Instituto começou com 30 crianças</strong>, hoje alcança mais de <strong>525</strong>.
</p>
<p>
  Essa instituição foi essencial para eu deixar de focar nos meus próprios problemas e dores. 
  Ela me deu um propósito: <strong>ajudar a resolver os desafios enfrentados por tantas pessoas</strong>. 
  Aqui, lidamos com questões como vulnerabilidade, insegurança alimentar e a falta de água. 
  São problemas que, muitas vezes, parecem não ter fim, mas seguimos com foco e determinação.
</p>
<p>
  Nosso objetivo principal não é financeiro. Buscamos 
  <strong>parceiros</strong> e <strong>voluntários</strong>
   que se identifiquem com nossa missão e queiram fazer a diferença.  
   Precisamos de pessoas comprometidas e parceiros, que estejam conosco porque 
   acreditam no impacto positivo que podemos gerar.
</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "NosComponent",
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  
  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: justify;
    font-size: 1.2rem;
  }
  
  .section {
    padding: 40px 20px;
    background-color: #ffffff;
    border-radius: 15px;
  }
  
  .content {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .profile-image {
    width: 300px;
    height: 350px; 
    border-radius: 30px;
  }
  .profile-image:hover{
      transform: scale(1.2);
    }
  
  .text-content {
    flex: 2;
    font-size: 16px;
    line-height: 1.8;
  }
  
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  
  p {
    margin-bottom: 15px;
  }
  
  
  /* Responsividade */
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }
  
    .profile-image {
      max-width: 150px;
      margin-bottom: 20px;
    }
    .profile-image:hover{
      max-width: 150px;
      margin-bottom: 20px;
    }
  }
  </style>
  