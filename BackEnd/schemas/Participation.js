import {TiGroup} from 'react-icons/ti'
export default {
  name: 'Participation',
  title: 'المشاركات',
  icon: TiGroup,
  type: 'document',
  fields: [
    {
      name: 'ParticipationName',
      title: 'اسم المشاركة',
      type: 'string',
    },
    {
      name: 'ParticipationType',
      title: 'نوع المشاركة',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'ParticipationDescription',
      title: 'نبذة',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'ParticipationDate',
      title: 'تاريخ المشاركة',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 1,
        calendarTodayLabel: 'اليوم',
      },
    },

    {
      title: 'صور المشاركة',
      name: 'ParticipationPhotos',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
