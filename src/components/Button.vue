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

<style scoped>
button {
  color: #2c3e50;
  border: 1px solid #2c3e50;
  width: 10rem;
  height: 3rem;
  font-size: 2rem;
  border-radius: 0.3rem;
  text-align: center;
  margin: 0 0.3rem;
}

button:disabled {
  color: #ccc;
  border: 1px solid #ccc;
}
</style>