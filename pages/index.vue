<template>
  <div>
    <Header :siteTitle="siteTitle" />
    <Auth :modalType="'register'" :openModal="true" @authSubmit="authSubmit"/>
    <CourseList />
    <Footer :siteTitle="siteTitle" :year="year" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CourseList from "@/components/CourseList/CourseList";
import Auth from "@/components/Modal/Auth";

export default {
  components: {
    Header,
    Footer,
    CourseList,
    Auth,
  },
  data() {
    return {
      year: 2020,
      siteTitle: process.env.site_title,
    };
  },
  methods: {
    authSubmit(inputs) {
      console.log(inputs)
    }
  },
};
</script>

<style>
</style>
