<template>
  <select @change="changeHandler">
    <option v-bind:key="item" v-for="item in items" :selected="selected==item">{{item}}</option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: ['items', 'selected'],
  methods: {
    changeHandler: function(e) {
      this.$emit('onChange', e.target.value)
    }
  }
}
</script>

<style scoped>
select {
  width: 6rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
  text-align: center;
  padding: 0.1rem;
  margin: 0 0.3rem;
}
</style>