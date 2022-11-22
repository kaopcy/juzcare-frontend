import Icon from '@/components/Icon';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { useMutation } from '@apollo/client';

// sections
import ReportCommentInput from './ReportCommentInput';
import ReportCommentList from './ReportCommentList';
import { CreateCommentReportGQL } from '@/graphql/comment.gql';
import useReport from '@/hooks/useReport';
import { ACTION } from '@/contexts/ReportContext';

function ReportComment() {
   const { report, dispatch } = useReport();
   const [createComment, { loading }] = useMutation(CreateCommentReportGQL, {
      keepRootFields: true,
      onError: (error) => {
         console.log(error.message);
      },
      onCompleted: (data) => {
         dispatch({ type: ACTION.UPDATE_COMMENT, payload: { comments: data.createCommentReport?.comments } });
      },
   });

   return (
      <section className="mt-8 flex w-full flex-col gap-y-10 rounded-lg bg-text-lighter/30 p-8">
         <ReportCommentInput createComment={createComment} report={report} isLoading={loading} />
         <div className="flex flex-col gap-y-4">
            <RecursiveComment comments={report.comments} />
         </div>
      </section>
   );
}

RecursiveComment.propTypes = {
   comments: PropTypes.array,
   setPreviousComment: () => {},
};
function RecursiveComment({ comments, setPreviousComment }) {
   const [expand, setExpand] = useState(false);
   return (
      <>
         {comments?.slice(0, 5).map((comment) => (
            <ReportCommentList key={comment._id} comment={comment} />
         ))}

         {expand ? (
            comments?.[5] && <RecursiveComment setPreviousComment={setExpand} comments={comments?.slice(5)} />
         ) : (
            <div className="ml-auto mt-4 flex w-[90%] items-center justify-between ">
               {comments?.[5] && (
                  <button onClick={() => setExpand(true)} className="flex items-center">
                     <Icon className="mr-2 h-3 w-3" icon="ant-design:caret-down-filled" />
                     <span className="text-sm">แสดงเพิ่มเติม ({comments.length - 5})</span>
                  </button>
               )}
               {setPreviousComment && (
                  <button onClick={() => setPreviousComment(false)} className="ml-auto flex items-center">
                     <Icon className="mr-2 h-3 w-3" icon="ant-design:caret-up-filled" />
                     <span className="text-sm">แสดงน้อยลง </span>
                  </button>
               )}
            </div>
         )}
      </>
   );
}

export default ReportComment;
