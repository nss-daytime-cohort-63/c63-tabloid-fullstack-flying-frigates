import { useParams, useNavigate } from "react-router-dom";
import { deleteCategory } from "../../modules/categoryManager";
import { Card, Button } from "reactstrap";


export default function ConfirmDeleteCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const confirmDelete = () => {
    deleteCategory(id)
      .then(() => {
        navigate("/category/manager");
      });
  };

  const denyDelete = () => {
    navigate("/category/manager")
  }
  return (
    <Card>
      <p> Are you sure you want to delete this category?</p>
      <Button onClick={confirmDelete}>Confirm Deletion</Button>
      <Button onClick={denyDelete}>Reject Deletion</Button>
    </Card>
  )
}