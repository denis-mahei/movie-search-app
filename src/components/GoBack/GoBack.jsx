import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import css from './GoBack.module.css';

const GoBack = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <IoMdArrowRoundBack size="24" />
      {children}
    </Link>
  );
};
export default GoBack;
