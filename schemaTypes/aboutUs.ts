const aboutUs = {
    name: 'aboutUs',
    title: 'About Us',
    type: 'document',
    fields: [
      {
        name: 'history',
        title: 'Sejarah Perusahaan',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'visionMission',
        title: 'Visi & Misi',
        type: 'object',
        fields: [
          {
            name: 'visi',
            title: 'Visi',
            type: 'array',
            of: [{ type: 'block' }],
          },
          {
            name: 'misi',
            title: 'Misi',
            type: 'array',
            of: [{ type: 'block' }],
          },
        ],
      },
      {
        name: 'advantages',
        title: 'Keunggulan',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'images',
        title: 'Gambar',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
            fields: [
              {
                name: 'alt',
                title: 'Deskripsi Gambar',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  };
  
  export default aboutUs;
  