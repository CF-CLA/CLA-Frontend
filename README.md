# CLA-Frontend
Command Line App front-end

* Once project is downloaded, run `npm update` to ensure all packages contained are fully updated and creates the corresponding `package-lock.json` file data.
* Environment variable is created at project root directory as `.env` file.
* `.env` file includes one variable named: `BASE_URL` which has the value of the base URL of the API server (NOT INCLUDING THE ROUTE PATH).
* EX: `BASE_URL=http://localhost:8000`.
* Run this command line application using the command `npm start`.
* Press CTRL+C to leave the prompt once finished.
* If the `npm start` command doesn't work, ensure `package.json` file contains the start script which reads: `"start": "node src/app.js"`.