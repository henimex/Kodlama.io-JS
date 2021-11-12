import {BaseLogger} from "./baseLogger.js";

export class FileLogger extends BaseLogger {
    log(data) {
        console.log("Logged to File ", data)
    }
}