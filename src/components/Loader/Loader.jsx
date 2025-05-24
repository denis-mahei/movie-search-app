import { GridLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = () => {
  return <GridLoader className={style.loader} color="#90cea1" />;
};
export default Loader;
