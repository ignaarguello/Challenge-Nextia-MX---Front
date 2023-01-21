let BASE_URL = "https://challenge-nextia-mx-back.up.railway.app";

if (process.env.NODE_ENV === 'production') {
    BASE_URL = process.env.REACT_APP_URL
}

module.exports = BASE_URL