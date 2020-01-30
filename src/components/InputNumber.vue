<template>
  <input type="number" @input="inputHandler" :value="value" />
</template>

<script>
export default {
  name: 'InputNumber',
  props: ['value'],
  methods: {
    inputHandler: function(e) {
      this.$emit('onInput', e.target.value)
    }
  }
}
</script>

<style scoped>
input[type="number"] {
  color: #2c3e50;
  border: 1px solid #2c3e50;
  width: 7rem;
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