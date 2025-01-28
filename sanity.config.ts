import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import product from "./schemaTypes/product";  // Import schema produk

export default defineConfig({
  name: "default",
  title: "cms-keong",
  projectId: "o5houilb",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [product],  // Menambahkan produk ke dalam schema
  },
});
