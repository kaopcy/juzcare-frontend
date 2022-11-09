import { updateActiveTags } from '@/slices/reportOptions';
import { useDispatch, useSelector } from '@/redux/store';

// components
import ReportOptionsTag from './ReportOptionsTag';

function ReportOptionsTagSelector() {
   const tags = useSelector((state) => state.reportOptions.tags);

   const dispatch = useDispatch();
   const onTagsClick = (e) => {
      dispatch(updateActiveTags({ activeTags: [e.target.value] }));
   };

   return (
      <section className="mb-5 flex flex-col items-start gap-y-1.5">
         <h3 className="mb-2 text-primary underline">แท็กยอดนิยม</h3>
         {tags?.slice(0, 5).map((tag) => (
            <ReportOptionsTag value={tag.name} onClick={onTagsClick} key={tag.id} tag={tag} />
         ))}
      </section>
   );
}

export default ReportOptionsTagSelector;
