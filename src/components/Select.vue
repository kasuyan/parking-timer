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