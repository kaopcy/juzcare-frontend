import { useRouter } from 'next/router';
import { useMemo, useCallback } from 'react';

const useSearchQuery = () => {
   const router = useRouter();
   const curTags = useMemo(() => router.query?.tag?.split(','), [router.query]);

   const replaceTag = useCallback(
      (newTag) => {
         if (newTag.length === 0) {
            const { tag, ...rest } = router.query;
            router.replace({ query: { ...rest } }, undefined, {
               shallow: true,
            });
         } else router.replace({ query: { ...router.query, tag: newTag } }, undefined, { shallow: true });
      },
      [router],
   );

   const appendTagQuery = useCallback(
      (value) => {
         if (curTags) {
            if (Array.isArray(curTags)) replaceTag([...curTags, value].join(','));
            else replaceTag([curTags, value].join(','));
         } else replaceTag([value]);

         // replaceTag(typeof curTags === 'string' ? [curTags, value] : isTagArray ? [...curTags, value] : [value]);
      },
      [replaceTag, curTags],
   );

   const removeTagQuery = useCallback(
      (value) => {
         if (!curTags) return;
         replaceTag([...curTags.filter((e) => e !== value)].join(','));
      },
      [curTags, replaceTag],
   );

   const replaceSort = useCallback(
      (newSort) => {
         router.replace({ query: { ...router.query, sort: newSort } }, undefined, { shallow: true });
      },
      [router],
   );

   const replaceOrder = useCallback(
      (newOrder) => {
         router.replace({ query: { ...router.query, order: newOrder } }, undefined, { shallow: true });
      },
      [router],
   );

   const replaceFilter = useCallback(
      (newFilter) => {
         router.replace({ query: { ...router.query, filter: newFilter } }, undefined, { shallow: true });
      },
      [router],
   );

   const getCurrentSearchQuery = useCallback(() => {
      const { query } = router;
      return {
         tags: query.tag ? query.tag.split(',').map((e) => ({ name: e })) : null,
         sort: query.sort ?? null,
         order: query.order ?? null,
         filter: query.filter ?? null,
      };
   }, [router]);

   return {
      appendTagQuery,
      removeTagQuery,
      replaceSort,
      replaceFilter,
      replaceOrder,
      tagQuery: router.query.tag,
      getCurrentSearchQuery,
   };
};

export default useSearchQuery;
