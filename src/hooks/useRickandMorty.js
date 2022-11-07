import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// query
import { gql, useQuery } from '@apollo/client';
import client from '@/graphql/apollo-client';

const ITEMS_PER_PAGE = 10;

const QUERY = gql`
   query CHARACTER($clientPage: Int) {
      characters(page: $clientPage) {
         info {
            pages
            count
            prev
            next
         }
         results {
            name
            id
            image
            status
         }
      }
   }
`;

export default function useRickandMorty(initPage) {
   const [page, setPage] = useState(initPage);
   const router = useRouter();
   const { loading, data, error, fetchMore } = useQuery(QUERY, {
      ssr: false,
      variables: {
         clientPage: page,
      },
   });

   useEffect(() => {
      if (loading || !page) return;
      router.push(`/rickandmorty?page=${page}`, undefined, { shallow: true });
      fetchMore({
         variables: {
            clientPage: page,
         },
      });
   }, [page, loading, fetchMore]);

   const totalPage = useMemo(() => (loading ? null : data?.characters.info.pages), [data, loading]);
   return { loading, rickandmorty: data, error, page, setPage, totalPage };
}
