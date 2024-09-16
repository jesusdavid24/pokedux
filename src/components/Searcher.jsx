import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import { setSearchTerm } from '../slices/dataSlice';

const Searcher = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.data.searchTerm);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Input.Search
      type="text"
      value={searchTerm}
      placeholder="Buscar Pokémon..."
      style={{ marginBottom: 10 }}
      onChange={handleSearch}
    />
  );
};

export default Searcher;
