import {BsFileEarmarkTextFill} from 'react-icons/bs'
export default {
  name: 'Cv',
  title: 'السيرة الذاتية',
  icon: BsFileEarmarkTextFill,
  type: 'document',
  fields: [
    {
      name: 'CvFullName',
      title: 'الاسم',
      type: 'string',
    },
    {
      name: 'CvAcademicAchievement',
      title: 'التحصيل الدراسي',
      type: 'string',
    },
    {
      name: 'CvAge',
      title: 'العمر',
      type: 'number',
    },
    {
      name: 'CvBirthDate',
      title: 'تاريخ الميلاد',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 1,
        calendarTodayLabel: 'اليوم',
      },
    },
    {
      name: 'CvText',
      title: 'نص السيرة الذاتية (التفاصيل)',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'CvCertificates',
      title: 'الشهادات',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'CvExperiences',
      title: 'الخبرات | المهارات  ',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'CvWorkplaces',
      title: 'الوضائف السابقة | الاماكن التي عملت فيها',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'CvPhoto',
      title: 'صورة شخصية',
      type: 'image',
    },
    {
      type: 'object',
      name: 'CvContact',
      fieldsets: [{name: 'Contact', title: 'معلومات التواصل والحسابات الشخصية'}],
      fields: [
        {
          title: 'رقم الهاتف',
          name: 'CvPhoneNumber',
          type: 'string',
        },
        {
          title: 'البريد الالكتروني',
          name: 'CvEmail',
          type: 'string',
        },
        {
          title: 'فيس بوك',
          name: 'facebook',
          type: 'url',
          fieldset: 'Contact',
        },
        {
          title: 'تليجرام',
          name: 'telegram',
          type: 'url',
          fieldset: 'Contact',
        },
        {
          title: 'تويتر',
          name: 'twitter',
          type: 'url',
          fieldset: 'Contact',
        },
        {
          title: 'انستجرام',
          name: 'instagram',
          type: 'url',
          fieldset: 'Contact',
        },
        {
          title: 'يوتيوب',
          name: 'youtube',
          type: 'url',
          fieldset: 'Contact',
        },
        {
          title: 'جيت هب',
          name: 'gitHub',
          type: 'url',
          fieldset: 'Contact',
        },
        {
          title: 'لينكد ان',
          name: 'linkedin',
          type: 'url',
          fieldset: 'Contact',
        },
      ],
    },
    {
      name: 'CvPdf',
      title: 'ملف السيرة الذاتية *PDf',
      type: 'file',
    },
  ],
}

// TODO:how to download files from the front end
//  GROQ query
// *[_type == 'movie'] {
//   title,
//   "manuscriptURL": manuscript.asset->url
// }
//  Then you can use the URL in HTML for example like this:
// <a href={`${manuscriptURL}?dl=`}>Manuscript</a>
