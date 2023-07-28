"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postUrlShort_controller_1 = __importDefault(require("../controllers/postUrlShort.controller"));
const getUrlShort_controller_1 = __importDefault(require("../controllers/getUrlShort.controller"));
const redirect_controller_1 = __importDefault(require("../controllers/redirect.controller"));
const analytics_contoller_1 = __importDefault(require("../controllers/analytics.contoller"));
const urlShortRouter = express_1.default.Router();
/**
 * @method POST
 * @description Shorten a URL
 * @access Public
 * @param {string} url - The URL to be shortened
 * @returns {object} - The shortened URL
 */
urlShortRouter.post('/api/urlShort/shorten', postUrlShort_controller_1.default);
/**
 * @method GET
 * @description Retrieve the original URL from a shortened URL
 * @access Public
 * @param {string} shortCode - The short code of the shortened URL
 * @returns {object} - The original URL
 */
urlShortRouter.get('/api/urlShort/:shortCode', getUrlShort_controller_1.default);
/**
 * @method GET
 * @description Redirect to the original URL from a shortened URL
 * @access Public
 * @param {string} shortCode - The short code of the shortened URL
 * @returns {object} - The original URL
 */
urlShortRouter.get('/:shortCode', redirect_controller_1.default);
/**
 * @method GET
 * @description Retrieve analytics data for a shortened URL
 * @access Public
 * @param {string} shortCode - The short code of the shortened URL
 * @param {object} clickData - The click data for the shortened URL
 * @returns {object} - The click data for the shortened URL
 */
urlShortRouter.get('/api/analytics/:shortCode', analytics_contoller_1.default);
exports.default = urlShortRouter;
