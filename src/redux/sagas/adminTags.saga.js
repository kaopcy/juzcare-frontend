import { call, put, take } from 'redux-saga/effects';
import { } from '../admin/admin-accounts.slice';
import { acceptTag, fetchTagsFailed, fetchTagsSuccess, rejectTag, startFetchTags } from '../admin/admin-tags.slice';

import { UNVERIFIED, VERIFIED } from '@/configs/reportConfig/reportStatus.config';
import { getAllTags, updateStatusTag } from '@/services/admin.service';

function* reFetchTagsFlow() {
   const tags = yield call(getAllTags);
   yield put(fetchTagsSuccess({ tags }));
}

function* acceptTagFlow({ _id }) {
   try {
      yield put(startFetchTags());
      yield call(updateStatusTag, { _id, status: VERIFIED });
      yield call(reFetchTagsFlow);
   } catch (error) {
      console.log(error);
      yield put(fetchTagsFailed({ error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด' }));
   }
}

function* deleteTagFlow({ _id }) {
   try {
      yield put(startFetchTags());
      yield call(updateStatusTag, { _id, status: UNVERIFIED });
      yield call(reFetchTagsFlow);
   } catch (error) {
      console.log(error);
      yield put(fetchTagsFailed({ error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด' }));
   }
}

export function* adminTagsFlow() {
   while (true) {
      const nextAction = yield take([acceptTag.type, rejectTag.type]);

      if (nextAction.type === acceptTag.type) {
         const _id = nextAction.payload._id;
         console.log(_id);
         yield call(acceptTagFlow, { _id });
      } else if (nextAction.type === rejectTag.type) {
         const _id = nextAction.payload._id;
         yield call(deleteTagFlow, { _id });
      }
   }
}
