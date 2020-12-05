<template>
  <div>
    <Header :siteTitle="siteTitle" />
    <CourseList />
    <Footer :siteTitle="siteTitle" :year="year" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CourseList from "@/components/CourseList/CourseList";

export default {
  components: {
    Header,
    Footer,
    CourseList,
  },
  data() {
    return {
      year: 2020,
      siteTitle: process.env.site_title,
    };
  },
};
</script>

<style>
</style>
