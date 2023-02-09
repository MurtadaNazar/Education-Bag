import {AiFillFileText} from 'react-icons/ai'
export default {
  name: 'Lectures',
  title: 'المحاضرات',
  type: 'document',
  icon: AiFillFileText,
  fields: [
    {
      name: 'LectureTitle',
      title: 'عنوان المحاضرة',
      type: 'string',
    },
    {
      name: 'LectureDescription',
      title: 'نبذة عن المحاضرة',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'LectureAttachment',
      title: 'مرفقات المحاضرة',
      type: 'array',
      of: [{type: 'file'}],
    },
    {
      name: 'LectureUrl',
      title: 'رابط الى شرح المحاضرة',
      type: 'url',
    },
    {
      name: 'subjectsName',
      title: 'المادة',
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
