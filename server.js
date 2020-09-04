const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth-router'))
app.use('/api/articles', require('./routes/articles-router'))

const PORT = config.get("PORT") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (e) {
    console.log("SERVER ERROR", e);
    process.exit(1);
  }
}

start();
