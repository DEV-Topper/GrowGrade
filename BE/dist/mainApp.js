"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainApp = (app) => {
    try {
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    message: "success",
                });
            }
            catch (error) {
                res.status(404).json({
                    message: "failed",
                });
            }
        });
    }
    catch (error) { }
};
exports.mainApp = mainApp;
