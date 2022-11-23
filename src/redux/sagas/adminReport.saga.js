import { take, call, put } from 'redux-saga/effects';
import {} from '../admin/admin-accounts.slice';
import {
   fetchReportsSuccess,
   fetchReportsFailed,
   startFetchReports,
   updateReports,
   rejectReport,
   verifyReport,
   finishReport,
   acceptReport,
} from '../admin/admin-reports.slice';
import {} from '../admin/admin-tags.slice';

import { updateStatusReport, getAllReports, deleteReport } from '@/services/admin.service';
import { VERIFIED, COMPLETE, INPROGRESS } from '@/configs/reportConfig/reportStatus.config';

function* reFetchReportFlow() {
   const reports = yield call(getAllReports);
   yield put(fetchReportsSuccess({ reports }));
}

function* deleteReportFlow({ reportId }) {
   try {
      yield put(startFetchReports());
      yield call(deleteReport, { reportId });
      yield call(reFetchReportFlow);
   } catch (error) {
      console.log(error);
      yield put(fetchReportsFailed({ error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด' }));
   }
}

function* verifyReportFlow({ reportId }) {
   try {
      yield put(startFetchReports());
      yield call(updateStatusReport, { reportId, type: VERIFIED });
      yield call(reFetchReportFlow);
   } catch (error) {
      console.log(error);
      yield put(fetchReportsFailed({ error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด' }));
   }
}

function* acceptReportFlow({ reportId }) {
   try {
      yield put(startFetchReports());
      yield call(updateStatusReport, { reportId, type: INPROGRESS });
      yield call(reFetchReportFlow);
   } catch (error) {
      console.log(error);
      yield put(fetchReportsFailed({ error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด' }));
   }
}

function* finishReportFlow({ reportId }) {
   try {
      yield put(startFetchReports());
      yield call(updateStatusReport, { reportId, type: COMPLETE });
      yield call(reFetchReportFlow);
   } catch (error) {
      console.log(error);
      yield put(fetchReportsFailed({ error: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด' }));
   }
}

export function* adminReportsFlow() {
   while (true) {
      const nextAction = yield take([verifyReport.type, rejectReport.type, finishReport.type, acceptReport.type]);
      
      if (nextAction.type === verifyReport.type) {
         const reportId = nextAction.payload.reportId;
         yield call(verifyReportFlow, { reportId });
      } else if (nextAction.type === rejectReport.type) {
         const reportId = nextAction.payload.reportId;
         yield call(deleteReportFlow, { reportId });
      } else if (nextAction.type === finishReport.type) {
         const reportId = nextAction.payload.reportId;
         yield call(finishReportFlow, { reportId });
      } else if (nextAction.type === acceptReport.type) {
         const reportId = nextAction.payload.reportId;
         yield call(acceptReportFlow, { reportId });
      }
   }
}
