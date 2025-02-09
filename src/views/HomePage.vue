<template>
<section>
<VideoPromo/>
</section>
<section>
  <ContadorAnimado/>
</section>
<section>
  <NosComponent/>
</section>
<section>
  <CarrosselComponent/>
</section>
<section>
  <EquipeCards/>
</section>
<section>
  <ParceirosComponent/>
</section>

</template>

<script>
import CarrosselComponent from '@/components/CarrosselComponent.vue';
import ContadorAnimado from '@/components/ContadorAnimado.vue';
import EquipeCards from '@/components/EquipeCards.vue';
import NosComponent from '@/components/NosComponent.vue';
import ParceirosComponent from '@/components/ParceirosComponent.vue';
import VideoPromo from '@/components/VideoPromo.vue';

 

export default {
  name: "HomePage",
  components: {
   VideoPromo,
   ContadorAnimado,
   CarrosselComponent,
   NosComponent,
   EquipeCards,
   ParceirosComponent,
  },
};
</script>

<style scoped>
 
</style>