export const UNVERIFIED = 'UNVERIFIED';
export const VERIFIED = 'VERIFIED';
export const INPROGESS = 'INPROGESS';
export const COMPLETE = 'COMPLETE';

export const getStatusTHLabel = (value) =>
   ({
      VERIFIED: 'รออนุมัติ',
      INPROGRESS: 'กำลังดำเนินการ',
      COMPLETE: 'เสร็จสิ้น',
   }[value]);

export const statusRadios = [
   {
      label: 'รออนุมัติ',
      _id: 'radio-1234',
      value: VERIFIED,
   },
   {
      label: 'กำลังดำเนินการ',
      _id: 'radio-12345',
      value: INPROGESS,
   },
   {
      label: 'เสร็จสิ้น',
      _id: 'radio-12346',
      value: COMPLETE,
   },
];
