import { SchemaTypeDefinition } from "sanity";

const article: SchemaTypeDefinition = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }], // Tetap mempertahankan block untuk teks dan elemen lainnya
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true, // Memungkinkan cropping image
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "video", // Menambahkan field video
      title: "Video",
      type: "file",
      options: {
        accept: "video/*", // Membatasi hanya format video yang dapat diunggah
      },
      validation: (Rule) => Rule.optional(), // Bisa diisi atau kosong
    },
  ],
};

export default article;
