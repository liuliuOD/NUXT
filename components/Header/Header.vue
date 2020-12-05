<template>
  <div class="header">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link :to="{ name: 'index' }">
            <Logo class="title_img"></Logo>
            <span class="title_span">{{ siteTitle }}</span>
          </nuxt-link>
          <a
            role="button"
            class="navbar-burger burger"
            @click="isMenuOpen = !isMenuOpen"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <div class="navbar-item field">
              <Search></Search>
            </div>
          </div>
        </div>
        <!-- For mobile and tablet -->
        <div v-show="isMenuOpen" class="navbar-end is-hidden-tablet">
          <Menu></Menu>
        </div>
        <!-- For desktop -->
        <div class="navbar-end is-hidden-mobile">
          <Menu></Menu>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import Menu from "./Menu";
import Search from "./Search";
import Logo from "@/components/Logo";
export default {
  name: "Header",
  components: {
    Search,
    Menu,
    Logo,
  },
  props: ["siteTitle"],
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./header.scss";
</style>
