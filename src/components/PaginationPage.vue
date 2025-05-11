<template>
  <div class="blog-page">
    <button
      class="projects-item__but blog-page__but"
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page < 10 ? "0" + page : page }}
      <!-- Форматирование номера страницы -->
    </button>

    <!-- Кнопка для перехода на следующую страницу -->
    <button class="projects-item__but blog-page__but" @click="goToNext">
      <!-- Иконка стрелки -->
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
</template>

<script>
export default {
  name: "PaginationPage",

  props: {
    currentPage: {
      type: Number,
      required: true,
    },

    totalPages: {
      type: Number,
      required: true,
    },
  },

  methods: {
    goToPage(page) {
      // Переход на указанную страницу, если она в пределах допустимого диапазона
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("page-changed", page); // Эмитируем событие с новой страницей
      }
    },

    goToNext() {
      // Переход на следующую страницу, если это возможно
      if (this.currentPage < this.totalPages) {
        this.$emit("page-changed", this.currentPage + 1);
      }
    },
  },
};
</script>
<style scoped>
.blog-page {
  margin-top: 20px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.blog-page__but {
  display: flex;
  justify-content: center;
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
  cursor: pointer;
}
.blog-page__but.active {
  background: rgb(244, 240, 236);
  border: none;
}
</style>
