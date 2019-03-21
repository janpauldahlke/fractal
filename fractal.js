"use strict";

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require("@frctl/fractal").create());

/* Set the title of the project */
fractal.set("project.title", "morefoo Component Library");

/* Tell Fractal where the components will live */
fractal.components.set("path", __dirname + "/src/components");

/* Tell Fractal where the documentation pages will live */
fractal.docs.set("path", __dirname + "/src/docs");

/* Specify a directory of static assets */
fractal.web.set("static.path", __dirname + "/public");

/* Set the static HTML build destination */
fractal.web.set("builder.dest", __dirname + "/build");
const mandelbrot = require("@frctl/mandelbrot");

const myCustomisedTheme = mandelbrot({
  skin: "fuchsia",
  panels: ["html", "info", "resources"]
});

fractal.web.theme(myCustomisedTheme);

console.log(fractal);
