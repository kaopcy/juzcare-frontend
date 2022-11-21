import axios from 'axios';
import { useReducer } from 'react';

import { useDispatch } from '@/redux/store';
import { startLoading, stopLoading } from '@/slices/loading';



const START = 'START';
const SUCCESS = 'SUCCESS';
const FAILED = 'FAILED';

const useUploadFiles = () => {
   const reduxDispatch = useDispatch();
   const initState = {
      response: null,
      error: null,
      isLoading: false,
   };

   const reducer = (state, actions) => {
      switch (actions.type) {
         case START:
            return { ...state, isLoading: true };
         case SUCCESS:
            return { ...state, isLoading: false, response: actions.payload };
         case FAILED:
            return { ...state, isLoading: false, error: actions.payload };
      }
   };

   const [state, dispatch] = useReducer(reducer, initState);

   const upload = async (files) => {
      dispatch({ type: START });
      reduxDispatch(startLoading());
      const formData = new FormData();
      files.forEach((file) => {
         formData.append(file.name, file);
      });
      try {
         const uploadResponse = await axios.post(process.env.NEXT_PUBLIC_UPLOADGATEWAY_URL, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
         });
         dispatch({ type: SUCCESS, payload: uploadResponse.data });
         return uploadResponse.data?.name;
      } catch (error) {
         reduxDispatch(stopLoading());
         dispatch({ type: FAILED, payload: error instanceof Error ? error.message : 'somethin went wrong' });
      }
   };

   return {
      isLoading: state.isLoading,
      response: state.response,
      error: state.error,
      upload,
   };
};

export default useUploadFiles;
