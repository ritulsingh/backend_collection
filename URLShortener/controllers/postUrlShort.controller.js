"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const errorResponse_utils_1 = __importDefault(require("../utils/errorResponse.utils"));
const apiResponse_utils_1 = __importDefault(require("../utils/apiResponse.utils"));
const urlshort_model_1 = require("../models/urlshort.model");
const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    }
    catch (err) {
        return false;
    }
};
const generateShortCode = () => {
    return Array.from(crypto_1.default.randomBytes(7)).map((byte) => String.fromCharCode(97 + (byte % 26))).join('');
};
const postUrlShort = async (req, res) => {
    const originalUrl = req.body.url;
    if (!originalUrl) {
        return res.status(400).send((0, errorResponse_utils_1.default)(400, 'Missing URL', 'URL is required'));
    }
    if (!isValidURL(originalUrl)) {
        return res.status(400).send((0, errorResponse_utils_1.default)(400, 'Invalid URL', 'URL is required'));
    }
    try {
        const protocol = req.secure ? 'https' : 'http';
        const host = req.get('host');
        const existingShortenedUrl = await urlshort_model_1.ShortenedUrlModel.findOne({ originalUrl });
        if (existingShortenedUrl) {
            const shortUrl = `${protocol}://${host}/${existingShortenedUrl.shortCode}`;
            return res.status(200).send((0, apiResponse_utils_1.default)(200, { shortUrl }, 'Shortened URL retrieved'));
        }
        const shortCode = generateShortCode();
        const shortenedUrl = await urlshort_model_1.ShortenedUrlModel.create({
            shortCode,
            originalUrl,
            clicks: [],
        });
        const shortUrl = `${protocol}://${host}/${shortCode}`;
        return res.status(201).send((0, apiResponse_utils_1.default)(201, { shortUrl }, 'Shortened URL created'));
    }
    catch (err) {
        return res.status(500).send((0, errorResponse_utils_1.default)(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error"));
    }
};
exports.default = postUrlShort;
