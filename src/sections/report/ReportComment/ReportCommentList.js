import PropTypes from 'prop-types';
// sections
import Image from '@/components/Image';

import Moment from 'react-moment';
import 'moment/locale/th';

ReportCommentList.propTypes = {
   comment: PropTypes.object,
};

function ReportCommentList({ comment }) {
   return (
      <div className="flex items-center gap-x-5">
         <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image alt={`comment-${comment?.user?._id}`} src={comment?.user?.avatar?.avatarUrl} />
         </div>
         <div className="flex flex-col leading-5">
            <div className="flex items-center gap-x-5">
               <span className="font-bold">{comment?.user?.firstName}</span>
               <div className="text-xs text-primary-dark">
                  <Moment fromNow locale="th">
                     {new Date(comment.createdAt)}
                  </Moment>
               </div>
            </div>
            <div>{comment.body}</div>
         </div>
      </div>
   );
}

export default ReportCommentList;
