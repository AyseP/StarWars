<template>
  <div class="mt-4">
    <div v-for="(film, index) in filmler" :key="'film-'+index">
      <div class="card text-center m-4">
        <div class="card-header">{{film.release_date}}</div>
        <div class="card-body">
          <h5 class="card-title">{{film.title}}</h5>
          <p class="card-text">{{film.opening_crawl}}</p>
          <router-link class="btn btn-primary" :to="'/film/'+film.id">Detay</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filmler: []
    };
  },
  async mounted() {
    const result = await fetch("https://swapi.co/api/films");
    const data = await result.json();
    this.filmler = data.results.sort((a, b) =>
      a.release_date > b.release_date
        ? 1
        : b.release_date > a.release_date
        ? -1
        : 0
    );
    this.filmler = this.filmler.map(x => {
      const splitted = x.url.split("/");
      const id = splitted[splitted.length - 2];
      x.id = id;
      return x;
    });
    console.log(data);
  }
};
</script>
 
