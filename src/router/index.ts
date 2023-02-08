import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Tarefas",
        component: () => import("@/views/Tarefas.vue"),
    },
    {
        path: "/projetos",
        name: "Projetos",
        component: () => import("@/views/Projetos.vue"),
    },
    {
        path: "/projetos/novo",
        name: "Novo Projeto",
        component: () => import("@/views/projetos/Formulario.vue"),
    },
    {
        path: "/projetos/:id",
        name: "Editar Projeto",
        component: () => import("@/views/projetos/Formulario.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
