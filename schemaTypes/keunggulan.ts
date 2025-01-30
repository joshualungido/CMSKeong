import { SchemaTypeDefinition } from "sanity";

const keunggulan: SchemaTypeDefinition = {
  name: "keunggulan",
  title: "Keunggulan Kami",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Keunggulan",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "description",
      title: "Deskripsi Keunggulan",
      type: "text",
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: "icon",
      title: "Ikon Lucide",
      type: "string",
      description: "Masukkan nama ikon dari Lucide (misalnya: Star, Lightbulb, Leaf)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Gambar Keunggulan",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default keunggulan;
