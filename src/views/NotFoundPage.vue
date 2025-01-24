<template>
    <div class="not-found">
      <div class="container text-center">
        <h1 class="display-1">404</h1>
        <h2>Oops! Página não encontrada.</h2>
        <p>Desculpe, mas a página que você está procurando não existe.</p>
        <router-link to="/" class="btn btn-primary">Voltar para a Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFoundPage"
  };
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
    color: #495057;
    text-align: center;
  }
  
  .container {
    max-width: 600px;
  }
  
  h1 {
    font-size: 6rem;
    font-weight: bold;
    color: #dc3545;
  }
  
  h2 {
    font-size: 2rem;
    margin-top: 10px;
  }
  
  p {
    margin-top: 20px;
    font-size: 1.2rem;
  }
  
  .btn {
    margin-top: 30px;
  }
  </style>
  