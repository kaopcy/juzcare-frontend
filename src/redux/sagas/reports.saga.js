import { put, take, call, select, all } from 'redux-saga/effects';
import {
   startFetchReport,
   fetchReportsFailed,
   fetchReportsSuccess,
   fetchReports,
   fetchMoreReports,
   fetchMoreReportsSuccess,
} from '../slices/reports';
import {
   getOptions,
   updateActiveTags,
   updateFilter,
   updateSort,
   updatePage,
   toggleOrder,
   updateNextPage,
} from '../slices/reportOptions';

import { getReports } from '@/services/reports.service';

function* fetchFlow() {
   const { sort, order, filter, activeTags, page } = yield select(getOptions);

   yield put(startFetchReport());
   try {
      const { reports, nextPage } = yield call(getReports, { sort, order, activeTags, filter, page });
      yield put(fetchReportsSuccess({ reports }));
      yield put(updateNextPage({ nextPage }));
   } catch (error) {
      yield put(fetchReportsFailed({ error }));
   }
}

function* fetchMoreFlow() {
   const { sort, order, filter, activeTags, nextPage: nextPageToFetch } = yield select(getOptions);

   if (nextPageToFetch === -1) return;
   yield put(startFetchReport());
   try {
      const { reports, nextPage } = yield call(getReports, { sort, order, activeTags, filter, page: nextPageToFetch });
      yield put(fetchMoreReportsSuccess({ reports }));
      yield put(updateNextPage({ nextPage }));
   } catch (error) {
      console.log(error.message);
      yield put(fetchReportsFailed({ error }));
   }
}

export function* reportFlow() {
   while (true) {
      const nextAction = yield take([
         fetchReports.type,
         updateActiveTags.type,
         updateFilter.type,
         updateSort.type,
         updatePage.type,
         toggleOrder.type,
         fetchMoreReports.type,
      ]);
      if (nextAction.type === fetchMoreReports.type) {
         yield call(fetchMoreFlow);
      } else {
         yield call(fetchFlow);
      }
   }
}
