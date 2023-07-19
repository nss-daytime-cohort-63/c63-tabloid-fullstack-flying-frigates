import { useState, useEffect } from "react";
import { deleteCategory, getAllCategories, editCategory } from "../modules/categoryManager";
import { Category } from "./Category";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function CategoryList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(setCategories)
  }, []);

  return (
    <div>
      <Button variant="success" onClick={() => { navigate("/category/add") }}>
        Add New Category
      </Button>
      {categories.map((category) => (
        <section key={category.id}>
          <Category key={category.id} category={category} />
          <Button variant="primary" onClick={() => { navigate(`/category/${category.id}/edit`) }} >
            Edit
          </Button>
          <Button variant="danger" onClick={() => { deleteCategory(category.id) }}>
            Delete
          </Button>
        </section>
      ))}
    </div>
  )
}