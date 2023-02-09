import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO } from "./typeMutations";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProeto: string): void {
            const projeto: IProjeto = {
                id: new Date().toISOString(),
                nome: nomeDoProeto
            }

            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, projeto: IProjeto): void {
            const index = state.projetos.findIndex(proj => proj.id === projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state, id: string): void {
            const index = state.projetos.findIndex(proj => proj.id === id)
            state.projetos.splice(index, 1)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}