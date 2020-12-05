<template>
  <div
    class="registrationLoginModal"
    :class="[isOpen ? 'is-active' : '', 'modal']"
  >
    <div class="modal-background"></div>
    <div class="modal-card login">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <span>{{ modalTitle }}</span>
        </p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <a class="button_a">
        <button class="button is-fullwidth google">
          <span class="reg_login icon is-normal">
            <i class="fab fa-google"></i>
          </span>
          <span>Use Google Account To {{ modalTitle }}</span>
        </button>
      </a>
      <hr class="login-or" />
      <form @submit="checkForm" method="post">
        <section class="modal-card-body">
          <!--login-->
          <div v-if="modalType === 'login'">
            <Login
              :errors.sync="errors"
              :email.sync="email"
              :password.sync="password"
            />
          </div>

          <!--register-->
          <div v-else-if="modalType === 'register'">
            <Register
              :errors.sync="errors"
              :name.sync="name"
              :email.sync="email"
              :password.sync="password"
              :repeatPassword.sync="repeatPassword"
            />
          </div>

          <!--submit button-->
          <div class="reg_login_button">
            <button type="submit" class="button is-fullwidth">
              {{ modalTitle }}
            </button>
          </div>
          <hr />
          <div class="bottom_center">
            Already have an account ?<a href="#">Go to login</a> or
            <a href="#">Forgot password</a>.
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    modalType: {
      type: String,
      required: true,
      default: "login",
    },
    openModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.openModal,
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      errors: {
        name: null,
        email: null,
        password: null,
        repeatPassword: null,
      },
    };
  },
  computed: {
    modalTitle() {
      if (this.modalType === "login") {
        return "Login";
      }
      if (this.modalType === "register") {
        return "Register";
      }
    },
  },
  methods: {
    checkForm(e) {
      e.preventDefault();

      this.clearErrors();
      //驗證使用者輸入資料
      this.email || (this.errors.email = true);
      this.password || (this.errors.password = true);

      if (this.modalType === "register") {
        this.name || (this.errors.name = true);
        (this.repeatPassword && this.repeatPassword === this.password) ||
          (this.errors.repeatPassword = true);
      }

      // 存在錯誤 || 送出表單
      this.hasError() ||
        this.$emit("authSubmit", {
          modalType: this.modalType,
          name: this.name,
          email: this.email,
          password: this.password,
        });
    },
    clearErrors() {
      for (const [key, value] of Object.entries(this.errors)) {
        this.errors[key] = false;
      }
    },
    hasError() {
      for (const [key, value] of Object.entries(this.errors)) {
        if (value === true) {
          return true;
        }
      }

      return false;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./login.scss";
</style>
