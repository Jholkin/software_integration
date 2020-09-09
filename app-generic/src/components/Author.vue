<template>
    <div v-if="currentAuthor" class="edit-form">
        <h4>Autor</h4>
        <form>
            <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name"
                v-model="currentAuthor.name"
                />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email"
                v-model="currentAuthor.email"
                />
            </div>
            <div class="form-group">
                <label for="github">Github</label>
                <input type="text" class="form-control" id="github"
                v-model="currentAuthor.github"
                />
            </div>
            <div class="form-group">
                <label for="twitter">Twitter</label>
                <input type="text" class="form-control" id="twitter"
                v-model="currentAuthor.twitter"
                />
            </div>
            <div class="form-group">
                <label for="location">Ubicación</label>
                <input type="text" class="form-control" id="location"
                v-model="currentAuthor.location"
                />
            </div>
            <div class="form-group">
                <label for="latest_article_published">Último artículo publicado</label>
                <input type="text" class="form-control" id="latest_article_published"
                v-model="currentAuthor.latest_article_published"
                />
            </div>
        </form>

        <button class="badge badge-danger mr-2"
        @click="deleteAuthor"
        >
        Delete
        </button>

        <button type="submit" class="badge badge-success"
        @click="updateAuthor"
        >
        Update
        </button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Please click on a Autor...</p>
    </div>
</template>

<script>
import AuthorDataService from "../services/AuthorDataService";

export default {
    name: "author",
    data() {
        return {
            currentAuthor: null,
            message: ''
        };
    },
    methods: {
        getAuthor(id) {
            AuthorDataService.get(id)
                .then(response => {
                    this.currentAuthor = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        updateAuthor() {
            AuthorDataService.update(this.currentAuthor.id, this.currentAuthor)
                .then(response => {
                    console.log(response.data);
                    this.message = 'The author was updated successfully';
                })
                .catch(e => {
                    console.log(e);
                });
        },
        deleteAuthor() {
            AuthorDataService.delete(this.currentAuthor.id)
                .then(response => {
                    console.log(reponse.data);
                    this.$router.push({name: "authors"});
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.message = '';
        this.getAuthor(this.$route.params.id);
    }
};
</script>

<style>
.edit-form{
    max-width: 300px;
    margin: auto;
}
</style>