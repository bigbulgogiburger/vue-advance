import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView, {} from '../views/CreateListView.js'
import bus from "@/utils/bus";
// 이것은 $store가 아닌데 왜일까.
import { store } from '../store/index.js'
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
      // component : url 주소로 갔을 때에 표시될 컴포넌트 <= hoc
      // component: createListView('NewsView'),
      // mixin

      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        // #1
        store.dispatch('FETCH_LIST',to.name)
        .then(() => next()
        )
        .catch(error => {
          console.log(error);
        });

      },
      component : NewsView,
    },

    {
      path: "/ask",
      name: 'ask',
      // component: createListView('AskView'),
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST',to.name).then(() =>{
          // console.log('fetched');
          // bus.$emit('end:spinner');
          next();
        })
        .catch(error => {
          console.log(error);
        });
      },
      component: AskView,
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView('JobsView'),
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST',to.name).then(()=>{
          // console.log('fetched');
          // bus.$emit('end:spinner');
          next();
        })
        .catch(error => {
          console.log(error);
        });
      },
      component: JobsView,
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
