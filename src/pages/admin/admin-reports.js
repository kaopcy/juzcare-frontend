/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import Layout from '@/layouts/index';
import { getAllReports } from '@/services/admin.service';

import { useSelector } from '@/redux/store';
import { classname } from '@/utils/getClassName';
import { useMemo } from 'react';

import { getStatusTHLabel } from '@/configs/reportConfig/reportStatus.config';
import AdminReportStatusControl from '@/sections/admin/AdminReportStatusControl';

AdminReports.propTypes = {
   reports: PropTypes.array,
};

const THead = ({ children, ...props }) => (
   <th {...props} className={classname('py-6 px-2  text-lg', props.className ?? '')}>
      {children}
   </th>
);

const TData = ({ children, ...props }) => (
   <td {...props} className={classname('px-2 py-4 text-center font-normal', props.className ?? '')}>
      {children}
   </td>
);

function AdminReports({ reports: initReports }) {
   const storeReports = useSelector((state) => state.adminReports.reports);
   const { error } = useSelector((state) => state.adminReports);

   const reports = useMemo(() => storeReports ?? initReports, [initReports, storeReports]);

   return (
      <div className="min-h-screen w-full py-10">
         {error && <div className="">{error}</div>}
         <table className="w-full rounded-lg border bg-[#FBFBFB]">
            <thead className="">
               <tr className="border-b">
                  <THead className="max-w-[100px]">ID</THead>
                  <THead className="">รายการ</THead>
                  <THead className="">เวลา</THead>
                  <THead className="">วันที่</THead>
                  <THead className="">แท็ก</THead>
                  <THead className="">สถานะ</THead>
                  <THead className="min-w-[80px]" />
               </tr>
            </thead>
            <tbody className="">
               {reports.map((report) => (
                  <tr className="" key={report._id}>
                     <TData className="ellipsis max-w-[100px] whitespace-normal text-start">{report._id}</TData>
                     <TData className="max-w-[200px] text-start">{report.title}</TData>
                     <TData className="">
                        {new Date(report.createdAt).toLocaleTimeString('th-TH', { timeStyle: 'short' })}
                     </TData>
                     <TData className="">
                        {new Date(report.createdAt).toLocaleDateString('th-TH', { dateStyle: 'short' })}
                     </TData>
                     <TData className="">{report.location.name}</TData>
                     <TData className="">{getStatusTHLabel(report.status.type)}</TData>
                     <TData className="">
                        <AdminReportStatusControl report={report} />
                     </TData>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

AdminReports.getLayout = (page) => (
   <Layout title="จัดการผู้ใช้" variant="admin">
      {page}
   </Layout>
);

export const getServerSideProps = async () => {
   const reports = await getAllReports();
   return {
      props: {
         reports,
      },
   };
};

export default AdminReports;
