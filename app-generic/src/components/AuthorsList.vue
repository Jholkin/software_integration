<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by name"
            v-model="name"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchName"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Authors List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(author, index) in authors"
            :key="index"
            @click="setActiveAuthor(author, index)"
          >
            {{ author.name }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentAuthor">
          <h4>Author</h4>
          <div>
            <label><strong>Nombre:</strong></label> {{ currentAuthor.name }}
          </div>
          <div>
            <label><strong>Email:</strong></label> {{ currentAuthor.email }}
          </div>
          <div>
            <label><strong>Status:</strong></label> {{ currentAuthor.published ? "Published" : "Pending" }}
          </div>

          <a class="badge badge-warning"
            :href="'/authors/' + currentAuthor.id"
          >
            Edit
          </a>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      </div>
    </div>
</template>

<script>
import AuthorDataService from "../services/AuthorDataService";

export default {
    name: "authors-list",
    data() {
        return {
            authors: [],
            currentAuthor: null,
            currentIndex: -1,
            name: ""
        };
    },
    methods: {
        retrieveAuthors() {
            AuthorDataService.getAll()
                .then(response => {
                    this.authors = response.data.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e)
                });
        },
        refreshList() {
            this.retrieveAuthors();
            this.currentAuthor = null;
            this.currentIndex = -1;
        },
        setActiveAuthor(author, index) {
            this.currentAuthor = author;
            this.currentIndex = index;
        },

        searchName() {
            AuthorDataService.findByName(this.name)
                .then(response => {
                    this.authors = response.data.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveAuthors();
    }
};
</script>

<style>
.list{
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>