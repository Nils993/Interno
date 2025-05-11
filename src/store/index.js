import Vue from "vue";
import Vuex from "vuex";
import ArticlStore from "./modules/articlsStore";
import SlidesStore from "./modules/slidesState";
import Cards from "./modules/cardsStore";
import DitailsStore from "./modules/deteils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { ArticlStore, SlidesStore, Cards, DitailsStore },
});
