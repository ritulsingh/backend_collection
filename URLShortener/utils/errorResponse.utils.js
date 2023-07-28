"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiError = (statusCode, code, message = "Something went wrong", meta) => {
    const response = {
        statusCode,
        data: null,
        error: {
            code,
            message,
        },
        success: false,
        meta,
    };
    return response;
};
exports.default = apiError;
