import {GiNotebook} from 'react-icons/gi'
export default {
  name: 'Subject',
  title: 'المواد الدراسية',
  icon: GiNotebook,
  type: 'document',
  fields: [
    {
      name: 'subjectName',
      title: 'اسم المادة',
      type: 'string',
    },
    {
      name: 'subjectUnite',
      title: 'عدد الفصول',
      type: 'number',
    },
    {
      title: ' صورة المنهج',
      name: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'نص الصورة البديل',
        },
      ],
    },

    {
      name: 'subjectStage',
      title: 'المرحلة',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'stage'}],
        },
      ],
    },
    {
      name: 'subjectLectures',
      title: 'المحاضرات',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'Lectures'}],
        },
      ],
    },
  ],
}
