<template>
  <button @click="clickHandler"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    clickHandler: function() {
      this.$emit('onClick')
    }
  }
}
</script>