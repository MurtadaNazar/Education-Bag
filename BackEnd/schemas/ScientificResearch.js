import {GiArchiveResearch} from 'react-icons/gi'
export default {
  name: 'ScientificResearch',
  title: 'البحوث العلمية',
  type: 'document',
  icon: GiArchiveResearch,
  fields: [
    {
      name: 'ResearchTitle',
      title: 'عنوان البحث',
      type: 'string',
    },
    {
      name: 'ResearchDiskrepion',
      title: 'ملخص البحث / شرح مختصر',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', title: 'صورة'}],
      Option: {
        spellCheck: true,
      },
    },
    {
      title: 'رابط الى البحث',
      name: 'ResearchURL',
      type: 'url',
    },
  ],
}
