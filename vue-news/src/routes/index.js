import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView, {} from '../views/CreateListView.js'
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      // path : url 주소
      path: "/",
      // component : url 주소로 갔을 때에 표시될 컴포넌트
      redirect: "/news",
    },

    {
      // path : url 주소
      path: "/news",
      name: 'news',
      // component : url 주소로 갔을 때에 표시될 컴포넌트
      component: createListView('NewsView'),
    },

    {
      path: "/ask",
      name: 'ask',
      component: createListView('AskView'),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView('JobsView'),
    },

    {
      path: "/item/:id",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    }
  ],
});
