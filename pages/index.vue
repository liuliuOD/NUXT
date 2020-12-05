<template>
  <div>
    <Header :siteTitle="siteTitle" />
    <Footer :siteTitle="siteTitle" :year="year" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  data(){
    return {
      year: 2020,
      siteTitle: process.env.site_title,
    }
  },
};
</script>

<style>
</style>
