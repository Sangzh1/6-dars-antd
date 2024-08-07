import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

// Custom hook: useGlobalContext
export const useGlobalContext = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Function to update user in Redux store
  const updateUser = (user) => {
    dispatch(setUser(user));
  };

  return {
    user,
    updateUser,
  };
};
