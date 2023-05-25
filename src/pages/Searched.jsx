import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardCuisine, Grid } from "../components/StyledComponents";

const Searched = () => {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipe.map((item) => (
        <CardCuisine key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </CardCuisine>
      ))}
    </Grid>
  );
};

export default Searched;
