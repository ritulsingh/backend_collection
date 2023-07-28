"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorResponse_utils_1 = __importDefault(require("../utils/errorResponse.utils"));
const urlshort_model_1 = require("../models/urlshort.model");
const apiResponse_utils_1 = __importDefault(require("../utils/apiResponse.utils"));
const analyticsData = async (req, res) => {
    try {
        const shortCode = req.params.shortCode;
        const shortenedUrl = await urlshort_model_1.ShortenedUrlModel.findOne({ shortCode });
        if (shortenedUrl) {
            const clickData = shortenedUrl.clicks;
            const data = {
                clickCount: clickData.length,
                clickData
            };
            return res.status(200).send((0, apiResponse_utils_1.default)(200, data, 'Click data retrieved'));
        }
        else {
            res.status(404).send((0, errorResponse_utils_1.default)(404, 'Short URL not found'));
        }
    }
    catch (err) {
        console.error('Error retrieving original URL:', err);
        return res.status(500).send((0, errorResponse_utils_1.default)(500, "INTERNAL_SERVER_ERROR", err.message || "Internal server error"));
    }
};
exports.default = analyticsData;
