<template>
  <div>
    <div class="jumbotron" v-if="loaded">
      <div class="container">
        <h1 class="display-3">{{cast.name}}</h1>
        <p>{{cast.gender}}</p>
        <p>
          {{cast.height}}
          <small class="ml-2 text-muted">Height</small>
        </p>
        <p>
          {{cast.mass}}
          <small class="ml-2 text-muted">Weight</small>
        </p>
        <p>
          {{cast.hair_color}}
          <small class="ml-2 text-muted">Hair Color</small>
        </p>
        <p>
          {{cast.eye_color}}
          <small class="ml-2 text-muted">Eye Color</small>
        </p>
        <p>
          {{cast.skin_color}}
          <small class="ml-2 text-muted">Skin Color</small>
        </p>
        <p>
          {{cast.birth_year}}
          <small class="ml-2 text-muted">Birth Year</small>
        </p>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cast: {},
      loaded: false
    };
  },
  async mounted() {
    const result = await fetch(
      `https://swapi.co/api/people/${this.$route.params.id}/`
    );
    const data = await result.json();
    this.cast = data;
    this.loaded = true;
  }
};
</script>