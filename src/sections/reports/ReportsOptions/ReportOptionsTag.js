import Tag from '@/components/commons/Tag';

function ReportOptionsTag() {

   const tags = [
      {
         id: '1234',
         name: 'โรงอาหารพระเทพ',
      },
      {
         id: '12345',
         name: 'คุคุควย',
      },
      {
         id: '12346',
         name: 'หิวข้าว',
      },
      {
         id: '2234',
         name: 'โรงอาหารพระเทพ',
      },
      {
         id: '22345',
         name: 'คุคุควย',
      },
      {
         id: '22346',
         name: 'หิวข้าว',
      },
      {
         id: '11234',
         name: 'โรงอาหารพระเทพ',
      },
      {
         id: '112345',
         name: 'คุคุควย',
      },
      {
         id: '112346',
         name: 'หิวข้าว',
      },
      {
         id: '12234',
         name: 'โรงอาหารพระเทพ',
      },
      {
         id: '122345',
         name: 'คุคุควย',
      },
      {
         id: '122346',
         name: 'หิวข้าว',
      },
   ];
   return (
      <section className="flex flex-col items-start gap-y-1.5 mb-5">
         <h3 className='underline text-primary mb-2' >แท็กยอดนิยม</h3>
         {tags.slice(0,5).map((tag) => (
            <Tag className="" key={tag.id} tag={tag} />
         ))}
      </section>
   );
}

export default ReportOptionsTag;
