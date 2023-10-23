import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./employee.routes";

// Load environment variables from the .env file, where the BDD_SYTW_URI is configured
dotenv.config();

const { BDD_SYTW_URI } = process.env;

if (!BDD_SYTW_URI) {
    console.error("No BDD_SYTW_URI environment variable has been defined in config.env");
    process.exit(1);
}

connectToDatabase(BDD_SYTW_URI)
    .then(() => {
        const app = express();
        app.use(cors());
        app.use("/employees", employeeRouter);

        // start the Express server
        app.listen(5200, '172.16.30.2', () => {
	    console.log('Server running at http://172.16.30.2:5200...');
        });

    })
    .catch(error => console.error(error));
