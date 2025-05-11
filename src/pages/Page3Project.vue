<template>
  <div>
    <HeaderPage />
    <section class="intro">
      <div class="intro-info">
        <h2 class="intro__title">Our Project</h2>
        <p class="intro__text">Home / Project</p>
      </div>
    </section>
    <section class="categoreis center">
      <div class="categoreis-buttons">
        <button
          class="categoreis__but"
          v-for="button in buttons"
          :key="button"
          :class="{ active: selectedCategory === button }"
          @click="filterCards(button)"
        >
          {{ button }}
        </button>
      </div>
      <div class="categoreis-carts">
        <div
          v-for="card in paginatedCards"
          :key="card.id"
          class="categoreis-cart"
        >
          <img class="img" :src="card.image" alt="" />
          <div class="categoreis-cart__info">
            <div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.text }}</p>
            </div>

            <button
              @click="goToBlogDetails"
              class="projects-item__but projects-item__but--blog"
            >
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19L9 10L1 1"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <PaginationPage
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="setPage"
      />
    </section>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import PaginationPage from "../components/PaginationPage.vue";
import { mapState } from "vuex";

export default {
  name: "PageProject",
  components: {
    HeaderPage,
    FooterPage,
    PaginationPage,
  },

  data() {
    return {
      buttons: ["Bathroom", "Bed Room", "Kitchan", "Living Area"],
      selectedCategory: null,
      currentPage: 1, // Текущая страница для пагинации
      itemsPerPage: 4, // Количество карточек на странице
    };
  },

  computed: {
    ...mapState({
      cards: (state) => state.Cards.cards, // Получаем карточки из Vuex состояния
    }),

    filteredCards() {
      if (!this.selectedCategory) {
        return this.cards;
      }
      return this.cards.filter(
        (card) => card.category === this.selectedCategory
      );
    },

    totalPages() {
      return Math.ceil(this.filteredCards.length / this.itemsPerPage);
    },

    paginatedCards() {
      const start = (this.currentPage - 1) * this.itemsPerPage; //start = 0,4,8,12
      return this.filteredCards.slice(start, start + this.itemsPerPage); //slice(0, 4),//slice(4, 8),//slice(8, 12)
    },
  },

  methods: {
    filterCards(category) {
      if (this.selectedCategory === category) {
        this.selectedCategory = null;
      } else {
        this.selectedCategory = category;
        this.currentPage = 1;
      }
    },

    setPage(page) {
      this.currentPage = page;
    },
    goToBlogDetails() {
      this.$router.push("/project/slider"); // Переход на страницу блога
    },
  },
};
</script>
<style lang="css" scoped>
.intro {
  display: flex;
  background-image: url(../assets/img/Photo111.png);
  background-repeat: no-repeat;
  background-position: center;
  height: 356px;
  align-items: flex-end;
  justify-content: center;
}
.intro-info {
  background-color: #fff;
  padding: 41px 78px;
  border-radius: 37px 37px 0px 0px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.intro__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
}
.intro__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.categoreis-buttons {
  display: flex;
  justify-content: center;

  align-items: center;
  margin-top: 200px;
  margin-bottom: 50px;
}
.categoreis__but:last-child {
  border-right: rgb(205, 162, 116) 1px solid;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
.categoreis__but:first-child {
  border-left: rgb(205, 162, 116) 1px solid;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}
.categoreis__but {
  border: rgb(205, 162, 116) 1px solid;
  border-right: none;
  border-left: #fff;
  cursor: pointer;
  padding: 26px 66px;
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  background: #fff;
}

.categoreis__but.active {
  box-sizing: border-box;
  background: rgb(205, 162, 116);
  color: rgb(255, 255, 255);
}
.categoreis-cart__info {
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  padding-top: 25px;
}
.categoreis-carts {
  column-count: 2;
  gap: 30px;
  margin-bottom: 20px;
}
.categoreis-cart {
  max-width: 585px;
  margin: 0;
  display: block; /* Убирает пустое пространство под изображением */ /* Чтобы картинки были адаптивными */
  height: auto; /* Сохраняет пропорции изображения */
}
.img {
  max-width: 585px;
}
</style>
