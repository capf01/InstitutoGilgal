<template>
    
    <section id="contact" class="section">
      <div class="contact-info">
        <h2>Como Nos Encontrar</h2>
        <p>Estamos localizados em Duque de Caxias, RJ. Veja nossa localização no mapa e entre em contato.</p>
        
        <div class="map-container">
          <iframe
            width="100%"
            height="300"
            src="https://www.google.com/maps/embed/v1/place?q=Rua+XX,+Jardim+Anhangá,+Duque+de+Caxias+-+RJ,+CEP+25264686&key=AIzaSyDHZCPY-nZ3vozFF32STNyGywCeUoF5b1w"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
        
        <div class="contact-details">
          <p><strong>Endereço:</strong> Rua XX, Jardim Anhangá, Duque de Caxias - RJ - CEP 25264686</p>
          <p><strong>Telefone:</strong> +55 21 96656-4481</p>
          <p><strong>Email:</strong> projetosocial.gilgal@hotmail.com</p>
        </div>
  
        <div class="contact-form">
          <h3>Envie uma mensagem:</h3>
          <form @submit.prevent="sendToWhatsApp">
            <input type="text" v-model="form.name" placeholder="Seu Nome" required />
            <input type="email" v-model="form.email" placeholder="Seu Email" required />
            <textarea v-model="form.message" placeholder="Sua Mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactForm",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
        whatsappNumber: "5521966564481", // Número de telefone no formato internacional
      };
    },
    methods: {
      sendToWhatsApp() {
        const { name, email, message } = this.form;
  
        if (!name || !email || !message) {
          alert("Por favor, preencha todos os campos.");
          return;
        }
  
        const encodedMessage = encodeURIComponent(`Olá! Meu nome é ${name}, meu email é ${email}. Mensagem: ${message}`);
        const whatsappLink = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodedMessage}`;
        
        window.open(whatsappLink, "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .section {
    padding: 40px;
    background-color: #f9f9f9;
    margin: 20px 0;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .map-container {
    margin-bottom: 20px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .contact-details p {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .contact-form {
    margin-top: 30px;
  }
  
  .contact-form h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  
  .contact-form button {
    background-color: #004d40;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .contact-form button:hover {
    background-color: #00796b;
  }
  </style>
  