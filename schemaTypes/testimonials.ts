const testimonial = {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'text',
        title: 'Testimonial Text',
        type: 'string',
        validation: (Rule: any) => Rule.required().max(300).warning('Maksimal 300 karakter.'),
      },
      {
        name: 'client',
        title: 'Client Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
        options: {
          list: [
            { title: 'Indonesia', value: 'Indonesia' },
            { title: 'Malaysia', value: 'Malaysia' },
            { title: 'Singapura', value: 'Singapura' },
          ],
        },
      },
    ],
  };
  
  export default testimonial;
  