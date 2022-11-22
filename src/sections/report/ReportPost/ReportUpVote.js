import Icon from '@/components/Icon';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
// stores
import { UpVoteGQL } from '@/graphql/report.gql';
import { useMutation } from '@apollo/client';
// hooks
import useUser from '@/hooks/useUser';
// utils
import { classname } from '@/utils/getClassName';
// path
import ReactTooltip from 'react-tooltip';

ReportUpVote.propTypes = {
   report: PropTypes.object,
};

function ReportUpVote({ report }) {
   const router = useRouter();
   const [upvoteService] = useMutation(UpVoteGQL);
   const { user, isAuthenticated } = useUser();
   const onUpvoteClick = () => {};

   const isLiked = useMemo(() => report.upVotes.some((e) => e._id === user?._id), [user, report]);

   return (
      <>
         <button
            data-for="like-button"
            data-tip="like-button"
            type="button"
            onClick={onUpvoteClick}
            className={classname('flex items-center', isLiked && 'text-primary ')}
         >
            <Icon className="mr-1 h-5 w-5" icon="ant-design:like-outlined" />
            <span className="-mb-2 mr-2 text-sm font-normal">{report.upVotes.length}</span>
         </button>
         <ReactTooltip
            id="like-button"
            className="!rounded-lg !p-4 !shadow-md"
            place="top"
            type="light"
            effect="float"
            getContent={() =>
               report?.upVotes.map((e) => (
                  <div key={e._id} className="flex items-start">
                     <div className="mr-3 text-base font-bold text-text">{e.firstName}awdawd</div>
                     <div className="text-base font-bold text-text">{e.lastName}</div>
                  </div>
               ))
            }
         />
      </>
   );
}

export default ReportUpVote;
