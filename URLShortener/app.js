"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./db"));
const config_1 = __importDefault(require("./config"));
const urlShort_routes_1 = __importDefault(require("./routes/urlShort.routes"));
const app = (0, express_1.default)();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./utils/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use(urlShort_routes_1.default);
app.get('/', (_req, res) => {
    return res.send('Received a GET HTTP method');
});
(0, db_1.default)().then(() => {
    app.listen(config_1.default.port, () => {
        console.log("Server is running on port: " + config_1.default.port);
    });
}).catch((error) => {
    console.error("Error starting the server:", error);
    process.exit(1);
});
;
