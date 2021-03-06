import http from "../http-common";

class AuthorDataService {
    getAll() {
        return http.get("/authors");
    }

    get(id) {
        return http.get(`/authors/${id}`);
    }

    create(data) {
        return http.post("/authors", data);
    }

    update(id, data) {
        return http.put(`/authors/${id}`, data);
    }

    delete(id) {
        return http.delete(`/authors/${id}`);
    }

    findByName(name) {
        return http.get(`/authors?name=${name}`);
    }
}

export default new AuthorDataService();