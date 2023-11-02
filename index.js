//Importamos los modulos a utilizar
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");


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
    res.render("homepage");
  } catch (e) {
    console.log(e);
  }
});


//Start del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on the port: ${port}`);
});
