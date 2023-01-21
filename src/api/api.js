let BASE_URL = "http://localhost:8080";

if (process.env.NODE_ENV === 'production') {
    BASE_URL = process.env.REACT_APP_URL
}

module.exports = BASE_URL