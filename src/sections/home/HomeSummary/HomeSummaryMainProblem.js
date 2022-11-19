import { useMemo, useEffect, useRef } from 'react';
import _ from 'lodash';
// components
import Chart from '@/components/Chart';
// configs
import { donutChartOption } from '@/configs/apexchart.config';

function HomeSummaryMainProblem() {
   const countingNumberRef = useRef(0);

   useEffect(() => {
      function animateValue(start, end, duration) {
         if (start === end) return;
         const range = end - start;
         let current = start;
         const increment = end > start ? 1 : -1;
         const stepTime = Math.abs(Math.floor(duration / range));
         const countingNumber = countingNumberRef.current;
         const timer = setInterval(function () {
            current += increment;
            countingNumber.innerHTML = current;
            if (current == end) {
               clearInterval(timer);
            }
         }, stepTime);
      }
      animateValue(0, 45, 800);
   }, []);

   const chartOptions = useMemo(
      () =>
         _.merge(donutChartOption, {
            plotOptions: {
               radialBar: {
                  track: {
                     strokeWidth: '100%',
                     background: '#e7e7e7',
                  },
                  hollow: { size: '50%' },
                  dataLabels: {
                     name: { offsetY: -10 },
                     value: {
                        offsetY: 2,
                        color: '#383838',
                        fontSize: '22px',
                        fontWeight: '700',
                        lineHeight: '0px',
                     },
                     total: {
                        show: true,
                        label: 'ปัญหา',
                        color: '#ACACAC',
                        fontSize: '13px',
                        fontWeight: '700',
                        lineHeight: '0px',
                        formatter: () => `${100} %`,
                     },
                  },
               },
            },
         }),
      []
   );

   const chartSeries = useMemo(() => [44], []);
   return (
      <article className="flex aspect-[10/11] w-64 flex-col items-center justify-center rounded-md bg-paper pb-5">
         <div className="h-[220px]">
            <Chart type="radialBar" series={[chartSeries[0]]} options={chartOptions} height={250} />
         </div>
         <div className="flex">
            <h1 ref={countingNumberRef} className="mb-4 mr-2">
               45
            </h1>
            <h1 className="mb-4">ปัญหา</h1>
         </div>
         <h3 className="font-normal">ที่ตึกโหล</h3>
      </article>
   );
}

export default HomeSummaryMainProblem;
