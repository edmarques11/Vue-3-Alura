import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        ADICIONA_PROJETO(state, nomeDoProeto: string) {
            const projeto: IProjeto = {
                id: new Date().toISOString(),
                nome: nomeDoProeto
            }

            state.projetos.push(projeto)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}