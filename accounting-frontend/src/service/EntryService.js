const axios = require('axios').default;
const SERVER_API_URL = 'http://localhost:8080';

class EntryService {
    retrieveAllEntries() {
        return axios.get(`${SERVER_API_URL}/entries`);
    }
}

export default new EntryService();