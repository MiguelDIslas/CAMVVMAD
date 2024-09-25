import {AppDispatch} from '../Store';
import {setLoading} from './Loading.slice';

export const fetchDataWithLoading = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
