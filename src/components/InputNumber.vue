<template>
  <input type="number" @input="inputHandler" />
</template>

<script>
export default {
  name: 'InputNumber',
  methods: {
    inputHandler: function() {
      this.$emit('onInput')
    }
  }
}
</script>

<style scoped>
input[type="number"] {
  width: 6rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  padding: 0.1rem;
  text-align: center;
}
</style>