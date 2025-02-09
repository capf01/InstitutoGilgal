<template>
     <section><CarrosselVoluntariosComponent2/></section>
    <section><ScrollComponent/></section>
    <section><ComoSerParceiroComponent/></section>
    <section><ParceirosComponent/></section>
</template>
<script>
import CarrosselVoluntariosComponent2 from '@/components/CarrosselVoluntariosComponent2.vue';
import ComoSerParceiroComponent from '@/components/ComoSerParceiroComponent.vue';
import ParceirosComponent from '@/components/ParceirosComponent.vue';
import ScrollComponent from '@/components/ScrollComponent.vue';
 

export default{
    name: 'ParceiroPage',
    components: { 
        ScrollComponent,
        ParceirosComponent,
        CarrosselVoluntariosComponent2,
        ComoSerParceiroComponent,        

    }
}
</script>
<style scoped>
 
</style>