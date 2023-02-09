<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input
                    v-model="nomeDoProjeto"
                    type="text"
                    class="input"
                    id="nomeDoProjeto"
                />
            </div>
            <div class="field">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import IProjeto from "@/interfaces/IProjeto";
import { useStore } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
    name: "FormularioVue",

    props: {
        id: {
            type: String,
        },
    },

    data() {
        return {
            nomeDoProjeto: "",
        };
    },

    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id === this.id)

            this.nomeDoProjeto = projeto?.nome || ''
        }
    },

    methods: {
        salvar(): void {
            if (this.id) {
                this.store.commit('ALTERA_PROJETO', {
                    id: this.id,
                    nome: this.nomeDoProjeto
                } as IProjeto)
            } else {
                this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto);
            }

            this.nomeDoProjeto = "";
            this.$router.push("/projetos");
        },
    },

    setup() {
        const store = useStore();

        return {
            store,
        };
    },
});
</script>

