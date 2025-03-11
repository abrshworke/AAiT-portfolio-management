const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const achievementRoute = require("./routes/achievement");  
app.use("/api/achievement", achievementRoute); 

const projectRoute = require("./routes/project");  
app.use("/api/project", projectRoute); 

const newsRoute = require("./routes/news");  
app.use("/api/news", newsRoute); 
 
const gallaryRoute = require("./routes/gallary");  
app.use("/api/gallary", gallaryRoute); 

const AlumniRoute = require("./routes/alumni");  
app.use("/api/alumni", AlumniRoute); 
 
mongoose.connect(
    'mongodb+srv://abreham:abreham21@spm.17fyz.mongodb.net/'
  )
    .then(() => { 
      console.log("Connected to MongoDB successfully!");
    })
    .catch(err => {
      console.error("Error connecting to MongoDB:", err);
    });
  
  
    
app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });





