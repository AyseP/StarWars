<template>
  <router-link :to="'/cast/'+cast.id" class="list-group-item list-group-item-action">{{cast.name}}</router-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cast: {}
    };
  },
  async mounted() {
    const result = await fetch(this.url);
    const data = await result.json();
    const splitted = this.url.split("/");
    const id = splitted[splitted.length - 2];
    data.id = id;
    this.cast = data;
  }
};
</script>

<style lang="scss" scoped>
</style>