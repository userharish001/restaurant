import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import Home from "./pages/home/Home"
import About from "./pages/about/About";
import Categories from "./pages/categories/Categories";
import FoodRecipe from "./pages/foodrecipe/FoodRecipe";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Fruit from "./DataList/Fruit";
import Reservation from "./pages/Reservation/Reservation";

export default function App() {
  const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const url = "https://www.fruityvice.com/api/fruit/all";
  const url2 = "https://www.themealdb.com/api/json/v1/1/random.php";

  async function fetchData() {
    try {
      const res = await axios.get(url);
      // console.log(res.data);
      setData(res.data);
      const result = await axios.get(url2);
      // console.log(result.data.meals);
      setRecipe(result.data.meals);
      // console.log(recipe);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbars />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recipe" element={<FoodRecipe recipe={recipe} />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/categories:fruits" element={<Fruit data={data} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}
