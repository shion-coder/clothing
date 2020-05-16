const express = require("express");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

/* -------------------------------------------------------------------------- */

const app = express();

// Midllewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Routes
require("./routes/billing-routes")(app);

// Service worker
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

// Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
