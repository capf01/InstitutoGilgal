<template>
    <section>
        <NosComponent/>
    </section>
    <div class="container">
        <h1>Sobre o Instituto Gilgal</h1>
        <p>O Instituto Gilgal é uma organização sem fins lucrativos fundada em 2016, com a missão de combater as desigualdades sociais e promover a inclusão por meio de ações voltadas ao desenvolvimento social e combate à insegurança alimentar. Atendemos crianças, jovens, mulheres e famílias em situação de vulnerabilidade.</p>

        <h2>Os elementos de diferenciação do Instituto Gilgal</h2>

        <h3>1. Foco no Desenvolvimento e Aprendizado</h3>
        <p>O Instituto não apenas promove o aprendizado, mas também investe no desenvolvimento social, emocional, cultural e intelectual de crianças e adolescentes, reconhecendo a importância de uma formação completa para a transformação social.</p>

        <h3>2. Apoio às Mães Trabalhadoras</h3>
        <p>Uma prioridade é oferecer suporte às mães que trabalham e não têm onde deixar seus filhos, 
            criando um ambiente seguro para as crianças enquanto contribui para a estabilidade das famílias.</p>

        <h3>3. Oficinas para Geração de Renda</h3>
        <p>O Instituto oferece oficinas de habilidades específicas voltados para a qualificação profissional de jovens e adultos, ajudando a melhorar a renda familiar e promovendo autonomia financeira.</p>

        <h3>4. Atuação em Diversas Dimensões da Vulnerabilidade</h3>
        <ul>
            <li>Desenvolvimento infantil e juvenil.</li>
            <li>Inclusão social e redução da desigualdade.</li>
            <li>Apoio psicológico e emocional.</li>
            <li>Segurança alimentar, com projetos como cozinha solidária e distribuição de cestas básicas.</li>
        </ul>

        <h3>5. Compromisso com a Sustentabilidade Ambiental</h3>
        <p>Através do projeto Gilgal Ambiental, o Instituto integra práticas de reaproveitamento de resíduos orgânicos e cultivo de uma horta comunitária, unindo segurança alimentar e sustentabilidade.</p>

        <h3>6. História e Enraizamento na Comunidade</h3>
        <p>Desde 2016, o Instituto Gilgal está profundamente inserido na comunidade do Jardim Anhangá, em Duque de Caxias, conhecendo de perto as necessidades locais e promovendo ações que realmente atendem às demandas da população.</p>

        <h2>Transparência</h2>
        <p>No Instituto Gilgal, a transparência é um dos nossos pilares fundamentais. Trabalhamos com clareza em todas as nossas ações, garantindo uma prestação de contas detalhada e acessível para nossos parceiros, apoiadores e comunidade. Nosso compromisso é assegurar que todos os recursos e iniciativas sejam utilizados de forma responsável e alinhada com nossa missão de transformar vidas.</p>
    </div>
</template>

<script>
import NosComponent from '@/components/NosComponent.vue';

export default {
    name: 'QuemSomos',
    components:{
    NosComponent,
}
}

</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    color: #5d8bb9;
    font-family: Arial, sans-serif;
    text-align: justify;
    line-height: 1.6;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #5d8bb9;
    text-align: center;
}

h2 {
    font-size: 2rem;
    margin-top: 30px;
    color: #5d8bb9;
 
}

h3 {
    font-size: 1.5rem;
    margin-top: 20px;
    color: #5d8bb9;
 
}

ul {
    margin: 10px 0;
    padding-left: 20px;
}

ul li {
    margin-bottom: 10px;
}

p {
    margin-bottom: 20px;
}
</style>
