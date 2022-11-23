import React from 'react';
import ErrorPageSvg from '@/sections/errorPage/ErrorPageSvg';
import Link from 'next/link';
import { PATH } from '@/routes/index';

const ErrorPage = () => (
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-primary-errorbg">
         <div className="relative mb-48">
            <ErrorPageSvg />
            <span className="absolute ml-48 text-2xl font-bold text-white">ขออภัย ไม่พบหน้าเว็บไซด์ที่คุณค้นหา</span>
            <Link href={PATH.home}>
               <button className="absolute ml-6 underline left-80 mt-14 text-primary-dark hover:text-primary" type="button">
                  ย้อนกลับ
               </button>
            </Link>
         </div>
      </section>
   );
export default ErrorPage;
