const remoteCountryService = {
    basePath: process.env.REMOTE_COUNTRY_BASE_PATH || "https://api-staging.segurosfalabella.com/api-datos-dinamicos-sarlaft/getDataSarlaft",
}

module.exports = Object.assign({}, { remoteCountryService })