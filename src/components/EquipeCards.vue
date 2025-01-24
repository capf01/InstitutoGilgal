<template>
  <div class="team-container">
    <h1>Equipe</h1>
    <div class="cards">
      <div class="card" v-for="corretor in corretores" :key="corretor.id">
        <img :src="corretor.foto" :alt="`Foto de ${corretor.nome}`" class="profile-pic" />
        <strong><h2>{{ corretor.nome }}</h2></strong>
        <p>{{ corretor.apresentacao }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EquipeCards",
  data() {
    return {
      corretores: [
        {
          id: 1,
          nome: "Tamires Pimentel",
          apresentacao: "CEO e Fundadora",
          foto: require("@/assets/Images/PresidenteEquip.jpeg"),
        },
        
        {
          id: 2,
          nome: "Ayda Targino",
          apresentacao: "Coordenadora e Professora",
          foto: require("@/assets/Images/coordenadora e Professora de alfabetização  reforço escolar.jpeg"),
        },
        
        {
          id: 3,
          nome: "Jeniffer lima",
          apresentacao: "Mobilizadora Social",
          foto: require("@/assets/Images/JenniferLima.jpeg"),
        },
        {
          id: 4,
          nome: "Rafaela Lima",
          apresentacao: "Assistente Social",
          foto: require("@/assets/Images/RafaelaAssistenteSocail.jpeg"),
        },
        {
          id: 5,
          nome: "Scorpion",
          apresentacao: "Mestre de capoeira e Professor de funcional",
          foto: require("@/assets/Images/Scorpionmestredecapoeiraeprofesordefuncional.jpeg"),
        },
        {
          id: 6,
          nome: "Wanda Maria",
          apresentacao: "Jovem Aprendiz",
          foto: require("@/assets/Images/Wanda MariaestrelaJovemaprendiz.jpeg"),
        },
        {
          id: 7,
          nome: "Juliana Teixeira",
          apresentacao: "Nutricionista, Consultora de Alimentos e Chefe de Cozinha",
          foto: require("@/assets/Images/Cheff Juliana Teixeira.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.team-container {
  text-align: center;
  padding: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 colunas */
  gap: 20px;
  margin-top: 20px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  align-items: center;
}

.card:hover {
  transform: scale(1.05);
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

h2 {
  margin: 10px 0;
  font-size: 1.2rem;
  color: #f200ff;;
}

p {
  margin: 10px 0;
  font-size: 0.9rem;
  color: #555;
}

/* Responsividade */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas em telas menores */
  }
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas pequenas */
  }
}

@media (max-width: 480px) {
  .cards {
    grid-template-columns: 1fr; /* 1 coluna em telas muito pequenas */
  }
}
</style>
