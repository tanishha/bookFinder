import axios from "axios";
const BaseURL = process.env.REACT_APP_BASE_URL;

const http = axios.create({
    baseURL: BaseURL,
    responseType: "json",
});

function GET(url) {
    return http.get(url);
}

function POST(url, data) {
    return http.post(url, data);
}

function DELETE(url, params = {}) {
    return http.delete(url, {
        params,
    });
}

export default {
    GET,
    POST,
    DELETE,
};