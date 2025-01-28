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
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Product Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "size",
      title: "Size",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "weight",
      title: "Weight",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "packaging",
      title: "Packaging",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "certification",
      title: "Certification",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.optional(),
    },
  ],
};

export default product;
