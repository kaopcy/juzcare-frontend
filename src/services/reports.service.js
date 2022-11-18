import { fakeReportsResponse, fakeTagsResponse } from '@/_mock/reports';

const NETWORK_DELAY = 0;

export const getTags = async () => {
   const response = await new Promise((res) => setTimeout(() => res(fakeTagsResponse), NETWORK_DELAY));
   return response;
};

export const getPosts = async ({ sort = '', order = '', filter = '', activeTags = '', page = '', search = '' }) => {
   const response = await new Promise((res) => setTimeout(() => res(fakeReportsResponse), NETWORK_DELAY));
   return response;
};
