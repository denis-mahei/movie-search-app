import css from './Reviews.module.css';

const Reviews = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <h3 className={css.user}>Author: {item.author}</h3>
          <p className={css.content}>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
