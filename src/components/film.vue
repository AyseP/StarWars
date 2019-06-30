<template>
  <div>
    <div v-if="loaded">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">{{film.title}}</h1>
          <p>{{film.opening_crawl}}</p>
          <p>
            {{film.director}}
            <small class="ml-2 text-muted">Director</small>
          </p>
          <p>
            {{film.producer}}
            <small class="ml-2 text-muted">Producer</small>
          </p>
          <p>
            {{film.release_date}}
            <small class="ml-2 text-muted">Release Date</small>
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Cast</div>
        <div class="list-group list-group-flush">
          <cast-link v-for="(cast, index) in film.characters" :url="cast" :key="'cast-'+index" />
        </div>
      </div>
    </div>
    <div v-else>Yüklüyor...</div>
  </div>
</template>
<script>
import cast from "./cast";
import castLink from "./castLink";
export default {
  data() {
    return {
      film: {},
      loaded: false
    };
  },
  components: {
    cast,
    castLink
  },
  async mounted() {
    const result = await fetch(
      `https://swapi.co/api/films/${this.$route.params.id}/`
    );
    const data = await result.json();
    this.film = data;
    this.loaded = true;
  }
};
</script>

