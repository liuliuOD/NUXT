<template>
  <div>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          :class="[errors.email ? 'input is-danger' : 'input']"
          type="email"
          placeholder="Your email"
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
          placeholder="Your password"
          name="passwordName"
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
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
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
  },
};
</script>
