import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Icon from '@/components/Icon';
import { useRouter } from 'next/router';
// stores
import { useDispatch } from '@/redux/store';
import { upvoteReports } from '@/slices/reports';
import { useMutation } from '@apollo/client';
import { UpVoteGQL } from '@/graphql/report.gql';
// hooks
import useUser from '@/hooks/useUser';
// utils
import { classname } from '@/utils/getClassName';
// path
import { PATH } from '@/routes/index';

ReportListPostUpVote.propTypes = {
   report: PropTypes.object,
};

function ReportListPostUpVote({ report }) {
   const router = useRouter();
   const [upvoteService] = useMutation(UpVoteGQL);
   const { user, isAuthenticated } = useUser();
   const dispatch = useDispatch();
   const onUpvoteClick = () => {
      if (!isAuthenticated) return router.push(PATH.auth.login);
      dispatch(upvoteReports({ _id: report._id, userId: user._id }));
      upvoteService({ variables: { _id: report._id } });
   };

   const isLiked = useMemo(() => report.upVotes.some((e) => e._id === user?._id), [user, report]);

   return (
      <button
         type="button"
         onClick={onUpvoteClick}
         className={classname('flex items-center', isLiked && 'text-primary ')}
      >
         <Icon className="mr-1 h-5 w-5" icon="ant-design:like-outlined" />
         <span className="-mb-2 mr-2 text-sm font-normal">{report.upVotes.length}</span>
      </button>
   );
}

export default ReportListPostUpVote;
