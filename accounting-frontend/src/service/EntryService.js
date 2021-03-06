const axios = require('axios').default;
const SERVER_API_URL = 'http://localhost:8080';

class EntryService {
    static retrieveAllEntries() {
        return axios.get(`${SERVER_API_URL}/entries`);
    }

    static retrieveEntry(id) {
        return axios.get(`${SERVER_API_URL}/entries/${id}`);
    }

    static updateEntry(id, entry) {
        return axios.put(`${SERVER_API_URL}/entries/${id}`, entry);
    }

    static createEntry(entry) {
        return axios.post(`${SERVER_API_URL}/entries`, entry);
    }

    static deleteEntry(id) {
        return axios.delete(`${SERVER_API_URL}/entries/${id}`);
    }
}

export default EntryService;