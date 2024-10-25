const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ruleRoutes = require("./routes/ruleRoutes"); 
const connectDB = require("./config/db");
const errorHandler = require("./utils/errorHandler");

dotenv.config();
connectDB();

const app = express();
app.use(cors()); 
app.use(express.json()); 

app.use("/api/rules", ruleRoutes); 

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;

