<template>
  <div class="courseList">
    <div class="columns is-centered is-multiline">
      <div
        class="card column is-5-tablet is-3-desktop"
        v-for="course in courses"
        :key="course.id"
      >
        <div class="course_item">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="course.image" :alt="course.title" />
            </figure>
          </div>
          <div class="course_title_parent">
            <div class="course_title is-clearfix">
              <h2 class="is-pulled-left">{{ course.title }}</h2>
            </div>
          </div>
          <div class="description">{{ course.description }}</div>
          <nuxt-link
            class="details"
            :to="{
              name: 'course-id',
              params: {
                id: course.id,
              },
            }"
          >
          </nuxt-link>
        </div>
      </div>
      <div v-if="courses.length === 0" class="section">
        <p>沒有更多課程了！</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CourseList",
  data() {
    return {
      courses: [
        {
          id: 1,
          image: "https://bulma.io/images/placeholders/1280x960.png",
          title: "mock 01",
          description: "this is a mock course...",
        },
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "./courseList.scss";
</style>
