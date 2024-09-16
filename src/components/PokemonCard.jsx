import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import StartButton from './StartButton';
import './PokemonList.css'
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

const PokemonCard = ({ name, image, types, id, favorite }) => {

  const dispatch = useDispatch();

  const typesString = types.map((elem) => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return <Card
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
  >
    <Meta description={typesString} />
  </Card>
}

export default PokemonCard; 