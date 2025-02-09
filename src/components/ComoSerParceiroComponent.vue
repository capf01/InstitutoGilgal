<template>
  <section class="parceiro-section">
    <h1 class="title">Como ser parceiro</h1>
    <p class="description">
      Entre em contato conosco por WhatsApp ou por email. Estamos ansiosos para colaborar com você!
    </p>
    <div class="contact-options">
      <a
        :href="whatsappLink"
        target="_blank"
        class="contact-link whatsapp"
      >
        WhatsApp
      </a>
      <a
        href="mailto:projetosocial.gilgal@hotmail.com"
        class="contact-link email"
      >
        Email
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComoSerParceiroComponent',
  data() {
    return {
      whatsappNumber: '5521966564481',
      whatsappMessage: 'Olá! Gostaria de me tornar um parceiro do Instituto Gilgal.',
    };
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
    },
  },
};
</script>

<style scoped>
.parceiro-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #5d8bb9;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #5d8bb9;
}

.contact-options {
  display: flex;
  gap: 1rem;
}

.contact-link {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  text-decoration: none;
  color: hsl(0, 0%, 100%);
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.contact-link.whatsapp {
  background-color: #3de812;
  width: 150px;
}

.contact-link.whatsapp:hover {
  background-color: #1da851;
}

.contact-link.email {
  background-color: #007bff;
  width: 150px;
}

.contact-link.email:hover {
  background-color: #0056b3;
}
</style>
