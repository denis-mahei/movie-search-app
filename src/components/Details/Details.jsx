import css from './Details.module.css';

const Details = ({ children }) => {
  return <ul className={css.links}>{children}</ul>;
};
export default Details;
