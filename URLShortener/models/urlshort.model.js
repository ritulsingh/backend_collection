"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenedUrlModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const urlShortenerSchema = new mongoose_1.Schema({
    shortCode: {
        type: String,
        required: true,
        index: true,
    },
    originalUrl: {
        type: String,
        required: true,
    },
    clicks: {
        type: [
            {
                timestamp: { type: Date, required: true },
                ipAddress: { type: String, required: true },
                referer: String,
                userAgent: String,
            },
        ],
        default: [],
    },
}, { timestamps: true, versionKey: false });
exports.ShortenedUrlModel = mongoose_1.default.model("urlShortener", urlShortenerSchema);
