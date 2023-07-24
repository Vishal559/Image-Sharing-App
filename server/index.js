const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Image_Sharing_App_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("CONNECTED WITH DATABASE"))
  .catch((error) => {
    console.log("DATABASE CONNECTION ISSUES");
    console.log(error);
    process.exit(1);
  });

app.listen("5000", () => {
  console.log("server is running on port 5000 !!!");
});
