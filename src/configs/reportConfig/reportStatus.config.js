export const UNVERIFIED = 'UNVERIFIED';
export const VERIFIED = 'VERIFIED';
export const INPROGESS = 'INPROGESS';
export const COMPLETE = 'COMPLETE';

export const getStatusTHLabel = (value) =>
   ({
      UNVERIFIED: 'ยังไม่อนุมัติ',
      VERIFIED: 'รออนุมัติ',
      INPROGRESS: 'กำลังดำเนินการ',
      COMPLETE: 'เสร็จสิ้น',
   }[value]);

export const statusRadios = [
   {
      label: 'รออนุมัติ',
      _id: 'radio-1234c',
      value: VERIFIED,
      valueNumber: 1
   },
   {
      label: 'กำลังดำเนินการ',
      _id: 'radio-12345',
      value: INPROGESS,
      valueNumber: 2
   },
   {
      label: 'เสร็จสิ้น',
      _id: 'radio-12346',
      value: COMPLETE,
      valueNumber: 3
   },
];
