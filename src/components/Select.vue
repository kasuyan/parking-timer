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
  color: #2c3e50;
  background-color: #fff;
  border: 1px solid #2c3e50;
  width: 7rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
  text-align: center;
  padding: 0.1rem;
  margin: 0 0.3rem;
}

select:disabled {
  color: #ccc;
  border: 1px solid #ccc;
}

option {
  width: 7rem;
  text-align: center;
}
</style>