"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiResponse = (statusCode, data, message = "Success") => {
    const response = {
        statusCode,
        data,
        message,
        success: statusCode < 400,
        error: null,
    };
    return response;
};
exports.default = apiResponse;
