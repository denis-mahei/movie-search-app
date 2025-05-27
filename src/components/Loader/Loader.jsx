import { GridLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = () => {
  return <GridLoader className={style.loader} color="#01b4e4" />;
};
export default Loader;
