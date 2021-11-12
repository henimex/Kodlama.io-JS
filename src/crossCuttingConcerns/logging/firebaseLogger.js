import {BaseLogger} from "./baseLogger.js";

export class FirebaseLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Firebase ", data)
    }
}