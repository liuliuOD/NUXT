<template>
  <div class="courseList">
    <div class="columns is-centered is-multiline">
      <div
        class="card column is-5-tablet is-3-desktop"
        v-for="course in courses"
        :key="course.id"
      >
        <Course :course="course" />
      </div>
      <div v-if="courses.length === 0" class="section">
        <p>沒有更多課程了！</p>
      </div>
    </div>
  </div>
</template>
<script>
import Course from "@/components/CourseList/Course";

export default {
  name: "CourseList",
  components: {
    Course,
  },
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
