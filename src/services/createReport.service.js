import { delay } from '@/utils/delay';

import { fakeReportResponse } from '@/_mock/reports';

export const createReport = async () => await delay(1000, fakeReportResponse);
