<template>
  <div class="donation-container">
    <h1 class="title">Seja um doador</h1>
    <p class="description">
      Doadores são as pessoas que fazem doações mensais e recorrentes para o Instituto Gilgal, 
      fundamentais para manter nosso trabalho independente de poderes políticos e econômicos. 
      É graças a essas contribuições constantes que podemos nos planejar, 
      e manter nossos projetos . 
      Tudo isso significa salvar vidas!
    </p>

    <!-- Escolha do valor -->
    <div v-if="currentStep === 1">
      <h2 class="subtitle">Escolha um valor</h2>
      <div class="donation-options">
        <div
          v-for="(option, index) in donationOptions"
          :key="index"
          class="donation-option"
          :class="{ selected: selectedOption === option.value }"
          @click="selectOption(option.value)"
        >
          <p class="amount">Doe</p>
          <p class="value">R${{ option.value.toFixed(2) }}</p>
          <p class="daily">R${{ option.daily.toFixed(2) }}/dia</p>
        </div>
        <div
          class="donation-option other-option"
          :class="{ selected: selectedOption === 'other' }"
          @click="selectOption('other')"
        >
          <p class="amount">Doe</p>
          <p class="value">Outro valor</p>
        </div>
      </div>

      <div v-if="selectedOption === 'other'" class="custom-input">
        <label for="customValue">Digite um valor:</label>
        <input
          type="number"
          id="customValue"
          v-model="customValue"
          placeholder="Ex: 50.00"
        />
      </div>

      <button class="donate-button" @click="goToNextStep">
        Continuar
      </button>
    </div>

    <!-- Identificação -->
    <div v-if="currentStep === 2">
      <h2>Identificação</h2>
      <form @submit.prevent="goToNextStep">
        <div class="form-group">
          <label for="nome">Nome completo *</label>
          <input v-model="donationData.nome" type="text" id="nome" required />
        </div>
        <div class="form-group">
          <label for="cpf">CPF *</label>
          <input v-model="donationData.cpf" type="text" id="cpf" required />
        </div>
        <div class="form-group">
          <label for="email">E-mail *</label>
          <input v-model="donationData.email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone *</label>
          <input
            v-model="donationData.telefone"
            type="text"
            id="telefone"
            required
          />
        </div>
        <button type="submit" class="donate-button">Próximo</button>
      </form>
    </div>

    <!-- Pagamento -->
    <div v-if="currentStep === 3">
      <h2>Pagamento</h2>
      <form @submit.prevent="submitDonation">
        <div class="form-group">
          <label for="metodo-pagamento">Método de pagamento</label>
          <select v-model="donationData.metodoPagamento" id="metodo-pagamento">
            <option value="cartao">Cartão de crédito</option>
            <option value="boleto">Boleto</option>
            <option value="debito">Débito automático</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div v-if="donationData.metodoPagamento === 'debito'" class="form-group">
          <label for="banco">Banco</label>
          <select v-model="donationData.banco" id="banco">
            <option value="bradesco">Bradesco</option>
            <option value="itau">Itaú</option>
            <option value="santander">Santander</option>
            <option value="bb">Banco do Brasil</option>
            <option value="caixa">Caixa</option>
          </select>
        </div>
        <button type="submit" class="donate-button">Finalizar Doação</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonationComponent",
  data() {
    return {
      currentStep: 1, // Controla a etapa atual
      donationOptions: [
        { value: 45, daily: 1.5 },
        { value: 75, daily: 2.5 },
        { value: 174, daily: 5.8 },
      ],
      selectedOption: null,
      customValue: null,
      donationData: {
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
        metodoPagamento: "",
        banco: "",
      },
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      if (option !== "other") {
        this.customValue = null;
      }
    },
    goToNextStep() {
      if (this.currentStep === 1) {
        let donationAmount =
          this.selectedOption === "other"
            ? this.customValue
            : this.selectedOption;
        if (!donationAmount || donationAmount <= 0) {
          alert("Por favor, insira um valor válido para a doação.");
          return;
        }
      }
      this.currentStep++;
    },
    submitDonation() {
      console.log("Doação finalizada:", this.donationData);
      alert("Obrigado por finalizar sua doação!");
    },
  },
};
</script>

<style scoped>
/* Estilos permanecem os mesmos do original */
</style>

  <style scoped>
  .donation-container {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
  }
  .title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  .description {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .donation-options {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .donation-option {
    border: 2px solid #ccc;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: 0.3s ease;
  }
  .donation-option.selected {
    border-color: red;
    background-color: #ffe6e6;
  }
  .amount {
    font-weight: bold;
    font-size: 1rem;
  }
  .value {
    font-size: 1.5rem;
    color: red;
    font-weight: bold;
  }
  .daily {
    font-size: 0.9rem;
    color: #555;
  }
  .other-option {
    color: red;
    font-weight: bold;
  }
  .custom-input {
    margin: 1rem 0;
  }
  .custom-input label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .custom-input input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .donation-impact {
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 5px;
    margin: 1rem 0;
    font-size: 0.9rem;
  }
  .donate-button {
    background-color: red;
    color: white;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .donate-button:hover {
    background-color: darkred;
  }
  </style>
  