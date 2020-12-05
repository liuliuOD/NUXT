<template>
  <div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          :class="[errors.name ? 'input is-danger' : 'input']"
          type="text"
          placeholder="Name*"
          v-model="name"
          @blur="() => this.$emit('update:name', this.name)"
        />
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
      </p>
      <p v-if="errors.name" class="help is-danger">Please enter your name.</p>
    </div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          :class="[errors.email ? 'input is-danger' : 'input']"
          type="email"
          placeholder="Email*"
          name="emailName"
          v-model="email"
          @blur="() => this.$emit('update:email', this.email)"
        />
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </p>
      <p v-if="errors.email" class="help is-danger">Please enter your email.</p>
    </div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          :class="[errors.password ? 'input is-danger' : 'input']"
          type="password"
          placeholder="Password*"
          v-model="password"
          @blur="() => this.$emit('update:password', this.password)"
        />
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
      <p v-if="errors.password" class="help is-danger">
        Please enter your password.
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          :class="[errors.repeatPassword ? 'input is-danger' : 'input']"
          type="password"
          placeholder="Repeat Password*"
          v-model="repeatPassword"
          @blur="() => this.$emit('update:repeatPassword', this.repeatPassword)"
        />
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
      <p v-if="errors.repeatPassword" class="help is-danger">
        Passwords must be equal.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    repeatPassword: {
      type: String,
      required: true,
    },
  },
};
</script>
