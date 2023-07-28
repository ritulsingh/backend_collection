"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorResponse_utils_1 = __importDefault(require("../utils/errorResponse.utils"));
const apiResponse_utils_1 = __importDefault(require("../utils/apiResponse.utils"));
const urlshort_model_1 = require("../models/urlshort.model");
const getUrlShort = async (req, res) => {
    const shortCode = req.params.shortCode;
    try {
        const shortenedUrl = await urlshort_model_1.ShortenedUrlModel.findOne({ shortCode });
        if (shortenedUrl) {
            return res.status(200).send((0, apiResponse_utils_1.default)(200, { originalUrl: shortenedUrl.originalUrl }, 'Original URL retrieved'));
        }
        else {
            return res.status(404).send((0, errorResponse_utils_1.default)(404, "NOT_FOUND", "Short URL not found"));
        }
    }
    catch (err) {
        console.error('Error retrieving original URL:', err);
        return res.status(500).send((0, errorResponse_utils_1.default)(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error"));
    }
};
exports.default = getUrlShort;
