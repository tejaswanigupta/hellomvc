const express = require('express')
const app = express()
const port = 3001

const cityRoutes = require("./routes/cityRoute");
app.use("/", cityRoutes);

const currencyRoute = require("./routes/currencyRoute");
app.use("/api", currencyRoute);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})