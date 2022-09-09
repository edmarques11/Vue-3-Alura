<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro v-bind="{ tempoEmSegundos }" />
        <Botao
            texto="play"
            icone="fas fa-play"
            :desabilitado="cronometroRodando"
            @clicado="iniciar()"
        />
        <Botao
            texto="stop"
            icone="fas fa-stop"
            :desabilitado="!cronometroRodando"
            @clicado="finalizar()"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Botao from "./Botao.vue";

export default defineComponent({
    name: "TemporizadorVue",

    emits: ["aoTemporizadorFinalizar"],

    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        };
    },

    components: { Cronometro, Botao },
    methods: {
        iniciar(): void {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++;
            }, 1000);
            this.cronometroRodando = true;
        },
        finalizar(): void {
            clearInterval(this.cronometro);
            this.cronometroRodando = false;
            this.$emit("aoTemporizadorFinalizar", this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        },
    },
});
</script>
