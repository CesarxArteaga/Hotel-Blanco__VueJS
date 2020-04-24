import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home'
import Estancias from '@/components/Estancias'

Vue.use(Router);


export default new Router({
   routes: [
            {path: "/", component: Home}, 
            {path: '/estancias', component: Estancias}
   ]
});

