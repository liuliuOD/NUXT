<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <nuxt-link :to="{ name: 'index' }">
        <Logo class="footer_logo" />
      </nuxt-link>
      <div>
        <i class="far fa-copyright"></i> {{ year }}
        <strong>{{ siteTitle }}</strong> Co., Ltd, all rights reserved.
        <div style="margin-top: 1em">
          <a class="icon_a" href="https://www.facebook.com/" target="_blank">
            <span class="icon">
              <i class="fab fa-facebook"></i>
            </span>
          </a>
          <nuxt-link :to="{ name: 'index' }">
            <span class="icon">
                <i class="fas fa-home"></i>
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from "@/components/Logo";

export default {
  name: "Footer",
  components: {
    Logo,
  },
  props: ["year", "siteTitle"],
  created() {
  },
};
</script>
<style lang="scss" scoped>
@import "./footer.scss";
</style>
