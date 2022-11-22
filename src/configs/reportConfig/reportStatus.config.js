export const UNVERIFIED = 'UNVERIFIED';
export const VERIFIED = 'VERIFIED';
export const INPROGRESS = 'INPROGRESS';
export const COMPLETE = 'COMPLETE';

export const getStatusTHLabel = (value) =>
   ({
      UNVERIFIED: 'ยังไม่อนุมัติ',
      VERIFIED: 'รอรับเรื่อง',
      INPROGRESS: 'กำลังดำเนินการ',
      COMPLETE: 'เสร็จสิ้น',
   }[value]);

export const statusRadios = [
   {
      label: getStatusTHLabel(UNVERIFIED),
      _id: `radio-${UNVERIFIED}`,
      value: UNVERIFIED,
      valueNumber: 1,
   },
   {
      label: getStatusTHLabel(VERIFIED),
      _id: `radio-${VERIFIED}`,
      value: VERIFIED,
      valueNumber: 2,
   },
   {
      label: getStatusTHLabel(INPROGRESS),
      _id: `radio-${INPROGRESS}`,
      value: INPROGRESS,
      valueNumber: 3,
   },
   {
      label: getStatusTHLabel(COMPLETE),
      _id: `radio-${COMPLETE}`,
      value: COMPLETE,
      valueNumber: 4,
   },
];
