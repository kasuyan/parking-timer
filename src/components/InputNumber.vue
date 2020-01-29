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
  color: #2c3e50;
  border: 1px solid #2c3e50;
  width: 6rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  box-sizing: border-box;
  text-align: center;
}
input[type="number"]:disabled {
  color: #ccc;
  border: 1px solid #ccc;
}
</style>