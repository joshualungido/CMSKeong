import { SchemaTypeDefinition } from "sanity";

const product: SchemaTypeDefinition = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(100), // Wajib diisi
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10), // Wajib diisi, minimal 10 karakter
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true, // Memungkinkan pemotongan gambar
      },
      validation: (Rule) => Rule.required(), // Wajib diisi
    },
    {
      name: "type",
      title: "Product Type",
      type: "string",
      validation: (Rule) => Rule.required(), // Wajib diisi
    },
    {
      name: "size",
      title: "Size",
      type: "string",
      validation: (Rule) => Rule.required(), // Wajib diisi
    },
    {
      name: "weight",
      title: "Weight",
      type: "string",
      validation: (Rule) => Rule.required(), // Wajib diisi
    },
    {
      name: "packaging",
      title: "Packaging",
      type: "string",
      validation: (Rule) => Rule.required(), // Wajib diisi
    },
    {
      name: "certification",
      title: "Certification",
      type: "string",
      validation: (Rule) => Rule.optional(), // Opsional
    },
  ],
};

export default product;
