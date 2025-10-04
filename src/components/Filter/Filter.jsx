import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsActions';
import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter">
      <label className="label" htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className="input"
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};
