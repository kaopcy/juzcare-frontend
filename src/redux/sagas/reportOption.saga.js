import { put, take, call, select } from 'redux-saga/effects';
import { fetchTag, startFetchTag, fetchTagFail, fetchTagSucceed } from '../slices/reportOptions';

import { getReports, getTags } from '@/services/reports.service';

export function* tagsFlow() {
   while (true) {
      const { payload } = yield take(fetchTag);
      const tagsQuery = payload.tagsQuery;
      yield put(startFetchTag());
      try {
         const tags = yield call(getTags, { tagsQuery });
         yield put(fetchTagSucceed({ tags }));
      } catch (error) {
         yield put(fetchTagFail({ error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด' }));
      }
   }
}
