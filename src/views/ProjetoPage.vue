<template>
  <div class="imoveis-container">
    <section class="projeto">
      <SacolaosolidarioComponent/>
    </section>
    <section class="projeto">
      <AlfabetizacaoComponent/>
    </section>

    <section class="projeto">
      <CapoeiraComponent/>
    </section>

    <section class="projeto">
      <EmpreendedorismoComponent/>
    </section>

    <section class="projeto">
      <GastronomiaConsciente/>
    </section>
    
    <section class="projeto">
      <GilgalAmbiental/>
    </section>
    
    <section class="projeto">
      <InclusaoDigital/>
    </section>
    
    <section class="projeto">
      <JovensFalcoes/>
    </section>
    
    <section class="projeto">
      <RodaConversa/>
    </section>
  </div>
</template>

<script>

import AlfabetizacaoComponent from '@/components/AlfabetizacaoComponent.vue';
import CapoeiraComponent from '@/components/CapoeiraComponent.vue';
import EmpreendedorismoComponent from '@/components/EmpreendedorismoComponent.vue';
import GastronomiaConsciente from '@/components/GastronomiaConsciente.vue';
import GilgalAmbiental from '@/components/GilgalAmbiental.vue';
import InclusaoDigital from '@/components/InclusaoDigital.vue';
import JovensFalcoes from '@/components/JovensFalcoes.vue';
import RodaConversa from '@/components/RodaConversa.vue';
import SacolaosolidarioComponent from '@/components/SacolaosolidarioComponent.vue';

 

export default {
  name: "ImoveisPage",
  components: {
    SacolaosolidarioComponent,
    AlfabetizacaoComponent,
    CapoeiraComponent,
    EmpreendedorismoComponent,
    GastronomiaConsciente,
    GilgalAmbiental,
    InclusaoDigital,
    JovensFalcoes,
    RodaConversa,
  
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
 

/* Responsividade adicional */
@media (max-width: 768px) {
  .imoveis-container {
    grid-template-columns: 1fr;
  }

  .projeto{
    margin-bottom: 15px;
  }
}
</style>
