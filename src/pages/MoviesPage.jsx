// import { fetchMovies } from '../tmdb-api.js';

import { useState } from 'react';

const MoviesPage = () => {
  // const [value, setValue] = useState({
  //   query: '',
  // });
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   const form = e.target.value;
  //
  //   setValue({
  //     ...value,
  //     query: form,
  //   });
  //   console.log(form);
  // };

  return (
    <form>
      <input
        type="text"
        name="query"
        // value={value.query}
        // onChange={handleSubmit}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default MoviesPage;
