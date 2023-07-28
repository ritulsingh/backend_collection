import express, { IRouter } from 'express';
import postUrlShort from '../controllers/postUrlShort.controller';
import getUrlShort from '../controllers/getUrlShort.controller';
import redirectController from '../controllers/redirect.controller';
import analyticsData from '../controllers/analytics.contoller';

const urlShortRouter: IRouter = express.Router();

/**
 * @method POST
 * @description Shorten a URL
 * @access Public
 * @param {string} url - The URL to be shortened
 * @returns {object} - The shortened URL
 */
urlShortRouter.post('/api/urlShort/shorten', postUrlShort);

/**
 * @method GET
 * @description Retrieve the original URL from a shortened URL
 * @access Public
 * @param {string} shortCode - The short code of the shortened URL
 * @returns {object} - The original URL
 */
urlShortRouter.get('/api/urlShort/:shortCode', getUrlShort);

/**
 * @method GET
 * @description Redirect to the original URL from a shortened URL
 * @access Public
 * @param {string} shortCode - The short code of the shortened URL
 * @returns {object} - The original URL
 */
urlShortRouter.get('/:shortCode', redirectController)

/**
 * @method GET
 * @description Retrieve analytics data for a shortened URL
 * @access Public
 * @param {string} shortCode - The short code of the shortened URL
 * @param {object} clickData - The click data for the shortened URL
 * @returns {object} - The click data for the shortened URL
 */
urlShortRouter.get('/api/analytics/:shortCode', analyticsData);

export default urlShortRouter;