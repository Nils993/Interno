<template>
  <div id="app">
    <HeaderPage />
    <section class="intro">
      <div class="intro-info">
        <h2 class="intro__title">Articles & News</h2>
        <p class="intro__text">Home / Blog</p>
      </div>
    </section>
    <section class="latestpost center">
      <h2 class="latestpost__heading">Latest Post</h2>
      <div class="latestpost-wrap">
        <div class="latestpost__img"></div>
        <div class="latestpost-info">
          <h3 class="latestpost__title">
            Low Cost Latest Invented Interior Designing Ideas
          </h3>
          <div class="latestpost__text">
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
            </p>
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
          </div>

          <div class="latestpost-wrap__btn">
            <p class="latestpost__data">26 December,2022</p>
            <button class="projects-item__but projects-item__but--blog">
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
    </section>
    <section class="blog center">
      <h3 class="blog-heading__title">Articles & News</h3>
      <div class="blog-cards--page2">
        <div
          v-for="article in paginatedCards"
          :key="article.id"
          class="blog-card blog-card--page2"
        >
          <img
            class="blog-card__back"
            width="380"
            :src="article.image"
            alt=""
          />
          <p class="blog-card__tag">{{ article.tag }}</p>

          <div class="blog-card-info">
            <h3 class="blog-card__title">{{ article.title }}</h3>
            <div class="blog-card-wraper-but">
              <p class="blog-card__date">{{ article.date }}</p>
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
  name: "Page2Blog",
  components: {
    HeaderPage,
    FooterPage,
    PaginationPage,
  },
  data() {
    return {
      currentPage: 1, // Текущая страница для пагинации
      itemsPerPage: 3, // Количество карточек на странице
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.ArticlStore.articles,
    }),
    totalPages() {
      return Math.ceil(this.articles.length / this.itemsPerPage);
    },
    paginatedCards() {
      const start = (this.currentPage - 1) * this.itemsPerPage; //start = 0,4,8,12
      return this.articles.slice(start, start + this.itemsPerPage); //slice(0, 4),//slice(4, 8),//slice(8, 12)
    },
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    },
    goToBlogDetails() {
      this.$router.push("/blog-details"); // Переход на страницу блога
    },
  },
};
</script>

<style lang="css" scoped>
.intro {
  display: flex;
  background-image: url(../assets/img/Photo.png);
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

.blog-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.blog-heading__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
}
.blog-heading__text {
  width: 800px;
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
}
.blog-cards {
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  justify-content: space-between;
}
.blog-cards--page2 {
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  justify-content: space-between;
}
.blog-card {
  padding: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  width: 380px;
}
.blog-card:hover {
  background: rgb(244, 240, 236);
}
.blog-card:hover .projects-item__but--blog {
  background: rgb(255, 255, 255);
}
.blog-card__tag {
  position: relative;
  top: -65px;
  left: -85px;
  width: 118px;
  height: 29px;
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blog-card--page2 {
  margin-bottom: 30px;
}

.blog-card__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  margin-top: 10px;
}
.blog-card__date {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
}

.blog-page {
  margin-top: 20px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.blog-page__but {
  border-radius: 50%;
  width: 52px;
  height: 52px;
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  border: 1px solid rgb(205, 162, 116);
  background-color: #fff;
  align-items: center;
  text-align: center;
}

.intro {
  display: flex;
  background-image: url(../assets/img/Photo.png);
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

.latestpost {
  margin-top: 200px;
  margin-bottom: 150px;
}
.latestpost-wrap {
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 22px;
  box-sizing: border-box;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}
.latestpost__heading {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 27px;
}
.latestpost__img {
  background-image: url(../assets/img/lastPastImg.png);
  border-radius: 37px;
  width: 765px;
  height: 510px;
}
.latestpost-info {
  width: 463px;
  display: flex;
  flex-direction: column;
}
.latestpost__title {
  color: rgb(41, 47, 54);
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
}
.latestpost__text {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 22px;
  margin-bottom: 25px;
}
.latestpost__data {
  color: rgb(77, 80, 83);
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
}
.latestpost-wrap__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
