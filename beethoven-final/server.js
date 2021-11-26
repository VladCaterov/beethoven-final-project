// 'use strict';
// const log = console.log
// log('Express server')
// const express = require('express')
// const app = express();

// const path = require('path');


// app.use(express.static(path.join(__dirname, '/client/build')))
// // All routes other than above will go to index.html
// app.get("*", (req, res) => {
//     // check for page routes that we expect in the frontend to provide correct status code.
//     const goodPageRoutes = ["/", "/about", "/contact"];
//     if (!goodPageRoutes.includes(req.url)) {
//         // if url not in expected page routes, set status to 404.
//         res.status(404);
//     }

//     // send index.html
//     res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });
// /*************************************************/
// // Express server listening...
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     log(`Listening on port ${port}...`);
// });