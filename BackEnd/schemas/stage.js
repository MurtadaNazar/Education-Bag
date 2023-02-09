import {SiGoogleclassroom} from 'react-icons/si'
export default {
  title: 'المراحل',
  name: 'stage',
  type: 'document',
  icon: SiGoogleclassroom,
  fields: [
    {
      name: 'stageName',
      title: 'اسم المرحلة',
      type: 'string',
    },
    {
      name: 'subjectsName',
      title: 'المواد',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'Subject'}],
        },
      ],
    },
  ],
}
