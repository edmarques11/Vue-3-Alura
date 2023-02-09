import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Tarefas",
        component: () =>
            import(/* webpackChunkName: "Tarefas" */ "@/views/Tarefas.vue"),
    },
    {
        path: "/projetos",
        component: () =>
            import(/* webpackChunkName: "Projetos" */ "@/views/Projetos.vue"),
        children: [
            {
                path: "/projetos",
                name: "",
                component: () =>
                    import(
                        /* webpackChunkName: "Lista" */ "@/views/projetos/Lista.vue"
                    ),
            },
            {
                path: "novo",
                name: "Novo Projeto",
                component: () =>
                    import(
                        /* webpackChunkName: "Formulario" */ "@/views/projetos/Formulario.vue"
                    ),
            },
            {
                path: ":id",
                name: "Editar Projeto",
                component: () =>
                    import(
                        /* webpackChunkName: "Formulario" */ "@/views/projetos/Formulario.vue"
                    ),
                props: true,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
