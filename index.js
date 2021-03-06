const _baseURL = "https://animechan.vercel.app/api";
const axios = require("axios").default;
module.exports = {
    /**
     * Get a random quote
     * @returns {Promise<{anime: string, character: string, quote: string}> | {error: string}}
     * @example
     * const {Random} = require("animechan.js");
     * Random().then(console.log);
     */
    async Random() {
        const url = `${_baseURL}/random`;
        return axios({
            method: "GET",
            url: url,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * Get 10 random quotes
     * @returns {Promise<{anime: string, character: string, quote: string}>[] | {error: string}}
     * @example
     * const {Get10RandomQuotes} = require("animechan.js");
     * Get10RandomQuotes().then(console.log);
     */
    async Get10RandomQuotes() {
        const url = `${_baseURL}/quotes`;
        return axios({
            method: "GET",
            url: url,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * Get quotes by anime title
     * @param {string} title - The Anime's title 
     * @param {number} [page]
     * @returns {Promise<{anime: string, character: string, quote: string}>[] | {error: string}}
     * @example
     * const {GetQuotesByAnimeTitle} = require("animechan.js");
     * GetQuotesByAnimeTitle("naruto", 1).then(console.log);
     */
    async GetQuotesByAnimeTitle(title, page) {
        const url = `${_baseURL}/quotes/anime?title=${encodeURI(title)}${(page) ? `&page=${page}`: ''}`;
        return axios({
            method: "GET",
            url: url,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * 
     * @param {strign} name - The Character's name 
     * @param {number} [page]
     * @returns {Promise<{anime: string, character: string, quote: string}>[] | {error: string}}
     * @example
     * const {GetQuotesByCharacterName} = require("animechan.js");
     * GetQuotesByCharacterName("saitama", 1).then(console.log);
     */
    async GetQuotesByCharacterName(name, page) {
        const url = `${_baseURL}/quotes/character?name=${encodeURI(name)}${(page) ? `&page=${page}`: ''}`;
        return axios({
            method: "GET",
            url: url,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * 
     * @returns {Promise<string[]>}
     * @example
     * const {GetAvailableAnimeTitles} = require("aniemchan.js")
     * GetAvailableAnimeTitles().then(console.log);
     */
    async GetAvailableAnimeTitles() {
        const url = `${_baseURL}/available/anime`;
        return axios({
            method: "GET",
            url: url,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}