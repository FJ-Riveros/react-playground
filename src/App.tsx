import styled from 'styled-components';
import useSearch from './hooks/useSearch';
const Header = styled.header`
  width: 100%;
  max-width: 800px;
  text-align: center;
`;
const CustomForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  const { search, setSearch } = useSearch();
  return (
    <Header>
      <h1>Movie finder</h1>
      <CustomForm>
        <input
          name="movieName"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Batman, Spiderman..."
        ></input>
        <button>Find</button>
      </CustomForm>
    </Header>
  );
}

export default App;
