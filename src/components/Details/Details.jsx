import css from './Details.module.scss';

const Details = ({ children }) => {
  return <ul className={css.links}>{children}</ul>;
};
export default Details;
