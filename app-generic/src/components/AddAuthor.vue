<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="name">Name</label>
                <input
                type="text"
                class="form-control"
                id="name"
                required
                v-model="author.name"
                name="name"
                />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input
                type="email"
                class="form-control"
                id="email"
                required
                v-model="author.email"
                name="email"
                />
            </div>

            <div class="form-group">
                <label for="github">Github</label>
                <input
                type="text"
                class="form-control"
                id="github"
                required
                v-model="author.github"
                name="github"
                />
            </div>

            <div class="form-group">
                <label for="twitter">Twitter</label>
                <input
                type="text"
                class="form-control"
                id="twitter"
                required
                v-model="author.twitter"
                name="twitter"
                />
            </div>

            <div class="form-group">
                <label for="location">Ubicación</label>
                <input
                type="text"
                class="form-control"
                id="location"
                required
                v-model="author.location"
                name="location"
                />
            </div>

            <div class="form-group">
                <label for="latest_article_published">Último artículo publicado</label>
                <input
                type="text"
                class="form-control"
                id="latest_article_published"
                required
                v-model="author.latest_article_published"
                name="latest_article_published"
                />
            </div>

            <button @click="saveAuthor" class="btn btn-success">Guardar</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newAuthor">Add</button>
        </div>
    </div>
</template>

<script>
import AuthorDataService from "../services/AuthorDataService";

export default {
    name: "add-author",
    data() {
        return {
            author: {
                id: null,
                name: "",
                email: "",
                github: "",
                twitter: "",
                location: "",
                latest_article_published: ""
            },
            submitted: false
        };
    },
    methods: {
        saveAuthor() {
            var data = {
                name: this.author.name,
                email: this.author.email,
                github: this.author.github,
                twitter: this.author.twitter,
                location: this.author.location,
                latest_article_published: this.author.latest_article_published,
            };

            AuthorDataService.create(data)
                .then(response => {
                    this.author.id = response.data.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        newAuthor() {
            this.submitted = false;
            this.author = {};
        }
    }
};
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>