<template>
    <div class="box formulario">
        <div class="columns">
            <div
                class="column is-8"
                role="form"
                aria-label="Formulário para criação de uma nova tarefa"
            >
                <input
                    v-model="descricao"
                    type="text"
                    class="input"
                    placeholder="Qual tarefa você deseja iniciar?"
                />
            </div>
            <div class="column">
                <Temporizador
                    @aoTemporizadorFinalizar="finalizarTarefa($event)"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
    name: "FormularioVue",

    components: { Temporizador },

    emits: ['aoSalvarTarefa'],

    data() {
        return {
            descricao: "",
        };
    },

    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao || 'Tarefa sem descrição'
            })

            this.descricao = "";
        },
    },
});
</script>

<style scoped>
.formulario {
    color: var(--texto-primario);
    background: var(--bg-primario);
}
</style>
