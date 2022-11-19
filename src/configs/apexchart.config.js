const donutChartOption = {
   legend: { show: false },
   chart: {
      animations: {
         enabled: true,
         easing: 'easeinout',
         speed: 800,
         dynamicAnimation: {
            enabled: true,
            speed: 350,
         },
      },
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: '#D9D9D9',
      fontFamily: 'LineSeed',
   },
   stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round',
   },
   fill: {
      type: 'gradient',
      gradient: {
         colorStops: [
            { offset: 0, color: '#F7931E' },
            { offset: 100, color: '#FFBB6B' },
         ],
      },
   },
   plotOptions: {
      radialBar: {
         track: {
            strokeWidth: '100%',
            background: '#e7e7e7',
         },
         dataLabels: {
            name: { offsetY: -10 },
            value: {
               offsetY: 2,
               color: '#383838',
               fontSize: '22px',
               fontWeight: '500',
               lineHeight: '0px',
            },
            total: {
               show: true,
               label: 'ปัญหา',
               color: '#ACACAC',
               fontSize: '13px',
               fontWeight: '700',
               lineHeight: '0px',
               formatter: () => 100,
            },
         },
      },
   },
};

export { donutChartOption };
