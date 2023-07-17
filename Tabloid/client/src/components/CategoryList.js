import { useState, useEffect } from "react";
import { getAllCategories } from "../modules/categoryManager";
import { Category } from "./Category";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(setCategories)
  }, []);

  return (
    <div>
      <section>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </section>

    </div>
  )
}