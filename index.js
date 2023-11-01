//Importamos los modulos a utilizar
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

//Modelo de datos
const usergraphics = require("./userData/graphichelper.js");
const userMembers = require("./userData/memberhelper.js");

//Configuro el motor  de vistas con su directorio
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares de express para manejo de errores
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method")); 
app.use(express.static(path.join(__dirname, "public"))); 

//Índice predeterminado/Ruta de inicio 
//No necesitamos agregar una barra invertida al representar las páginas de vista
app.get("/", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(usergraphics);
    //Parse it into JavaScript Object
    const graphics = await JSON.parse(data);
    res.render("homepage", { graphics });
  } catch (e) {
    console.log(e);
  }
});

app.get("/", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userMembers);
    //Parse it into JavaScript Object
    const members = await JSON.parse(data);
    res.render("homepage", { members });
  } catch (e) {
    console.log(e);
  }
});

// seanson Ruta
app.get("/seanson", (req, res) => {
  res.render("seanson");
});

// location Ruta
app.get("/location", (req, res) => {
  res.render("location");
});

// graphic Ruta
app.get("/graphic", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(usergraphics);
    //Parse delJavaScript Object
    const graphics = await JSON.parse(data);
    res.render("graphic", { graphics });
  } catch (e) {
    console.log(e);
  }
});

app.get("/member", async (req, res) => {
  try {
    //Fetch the incoming JSON data
    const data = await JSON.stringify(userMembers);
    //Parse delJavaScript Object
    const members = await JSON.parse(data);
    res.render("member", { members });
  } catch (e) {
    console.log(e);
  }
});


//Start del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on the port: ${port}`);
});
