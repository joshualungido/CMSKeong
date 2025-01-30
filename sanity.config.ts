import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import product from "./schemaTypes/product";  // Import schema produk
import testimonial from "./schemaTypes/testimonials";
import aboutUs from "./schemaTypes/aboutUs";

export default defineConfig({
  name: "default",
  title: "cms-keong",
  projectId: "o5houilb",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [product, testimonial, aboutUs],  // Menambahkan produk ke dalam schema
  },
});
