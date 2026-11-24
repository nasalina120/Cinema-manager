import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStudios,
  selectFetchStudiosError,
  selectIsFetchingStudios,
  selectStudios,
} from '../store/slices/studiosSlice';
import StudiosList from '../components/Studios/StudiosList';

function StudiosPage () {
  const dispatch = useDispatch();
  const studios = useSelector(selectStudios);
  const isFetching = useSelector(selectIsFetchingStudios);
  const fetchError = useSelector(selectFetchStudiosError);
  useEffect(() => {
    dispatch(fetchStudios());
  }, [dispatch]);
  return (
    <main>
      <h2>Studios List</h2>
      {isFetching && <p>Loading events...</p>}
      {fetchError && <p>{fetchError}</p>}
      {!isFetching && !fetchError && <StudiosList studios={studios} />}
    </main>
  );
}

export default StudiosPage;
