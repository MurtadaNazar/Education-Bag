import {GiBookCover} from 'react-icons/gi'
export default {
  name: 'book',
  type: 'document',
  title: 'الكتب المترجمة',
  icon: GiBookCover,

  fields: [
    {
      name: 'BookName',
      type: 'string',
      title: 'اسم الكتاب',
    },
    {
      name: 'AuthorName',
      title: 'اسم المؤلف',
      type: 'string',
    },
    {
      name: 'publishDate',
      title: 'تاريخ النشر',
      type: 'date',
    },
    {
      name: 'TranslationDate',
      title: 'تاريخ الترجمة',
      type: 'date',
    },
    {
      name: 'Language',
      title: '---- مترجم من اللغة ---- الى اللغة',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },

    {
      name: 'BookPage',
      type: 'number',
      title: 'عدد الصفحات',
    },

    {
      name: 'BookCoverImage',
      type: 'image',
      title: 'صورة الكتاب',
      options: {
        hotspot: true,
      },
    },
  ],
}
