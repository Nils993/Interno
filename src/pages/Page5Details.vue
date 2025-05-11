<template>
  <div>
    <HeaderPage />
    <section class="details-banner"></section>
    <div class="details center">
      <div class="details-info-wrap">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="details-info"
        >
          <h3 class="details-info__title">{{ article.titele }}</h3>
          <p class="details-info__text">{{ article.articl1 }}</p>
          <p class="details-info__text">{{ article.articl2 }}</p>
        </div>
      </div>

      <div class="slider">
        <div class="slides">
          <div
            class="slide"
            v-for="(slide, index) in slides"
            :key="index"
            v-show="index === currentSlide"
          >
            <img :src="slide.imgSrc" alt="Slide Image" />
          </div>
        </div>
        <div class="pagination">
          <span
            v-for="(slide, index) in slides"
            :key="index"
            @click="changeSlide(index)"
            :class="{ active: index === currentSlide }"
          ></span>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import { mapState } from "vuex";
export default {
  name: "Page5Details",
  components: {
    HeaderPage,
    FooterPage,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    ...mapState({
      slides: (state) => state.SlidesStore.slides,
      articles: (state) => state.SlidesStore.articles,
    }), // Подключение состояния из хранилища
  },
  methods: {
    changeSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style lang="css" scoped>
.details-banner {
  background-image: url(../assets/img/DetailsBaner2.png);
  height: 350px;
  background-repeat: no-repeat;
  background-position: center;
}

.details {
  margin-top: 100px;
}
.details-info-wrap {
  display: flex;
  justify-content: center;
}
.details-info {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 660px;
  margin-bottom: 30px;
}
.details-info__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
}
.details-info__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.slider {
  width: calc(100% - (20px * 2));
  height: 800px;
  margin-left: auto;
  margin-right: auto;
}

.slides {
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease; /* Плавный переход */
}

.slide {
  width: 100%;
  height: 800px;
  overflow: hidden;
}
.slide img {
  width: 100%;
  height: auto;
  max-height: 800px;
  object-fit: cover;
  object-position: center;
  border-radius: 76px;
}

.pagination {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.pagination span {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}

.pagination span.active {
  background-color: #000;
}
</style>
