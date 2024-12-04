import express from "express";

const PORT = 5050;
const app = express();

import grades from "./routes/grades.mjs";
import grades_agg from "./routes/grades_agg.mjs";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use("/grades", grades); // The C.R.U.D Routes...
app.use("/grades-agg", grades_agg); // The Aggregation Routes...

// Our Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Starts the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
