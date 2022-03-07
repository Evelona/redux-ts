import { useState } from "react";
import { useActions } from "../hooks.js/useActions";
import { useSelector } from "../hooks.js/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, loading, error } = useSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}
      {!loading && !error && data.map((rep) => <div key={rep}>{rep}</div>)}
    </div>
  );
};

export default RepositoriesList;
