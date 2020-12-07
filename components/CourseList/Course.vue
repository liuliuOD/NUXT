<template>
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
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./courseList.scss";
</style>
