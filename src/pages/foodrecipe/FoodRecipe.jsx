import React from "react";
import { Image, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoodRecipe = ({ recipe }) => {
  return (
    <>
      {recipe.map((item) => {
        return (
          <div key={item.idMeal} className="text-center">
            <p className="h6 text-center text-bg-warning">{item.strArea}</p>
            <p className="h3 text-center bg-black text-white">{item.strMeal}</p>
            <p className="h6 text-center text-bg-danger">
              Category: {item.strCategory}
            </p>
            <Image
              src={item.strMealThumb}
              alt={item.strMeal}
              className="img-fluid w-100"
              style={{ objectFit: "cover", height: "auto", maxHeight: "500px" }}
            />

            <ListGroup variant="flush" className="my-3">
              <ListGroup.Item>
                Ingredient 1: {item.strIngredient1}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 2: {item.strIngredient2}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 3: {item.strIngredient3}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 4: {item.strIngredient4}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 5: {item.strIngredient5}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 6: {item.strIngredient6}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 7: {item.strIngredient7}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 8: {item.strIngredient8}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 9: {item.strIngredient9}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 10: {item.strIngredient10}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 11: {item.strIngredient11}
              </ListGroup.Item>
              <ListGroup.Item>
                Ingredient 12: {item.strIngredient12}
              </ListGroup.Item>
            </ListGroup>

            <div className="text-start my-3">
              <h5>Instructions:</h5>
              <p>{item.strInstructions}</p>
            </div>
            <p className="h3">To see on Youtube Click on this</p>
            <Link className="youtube" to={item.strYoutube}>Click</Link>
          </div>
        );
      })}
    </>
  );
};

export default FoodRecipe;
