import { React } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Row } from "reactstrap";


export const Category = ({ category }) => {
  const navigate = useNavigate();
  const sendDelete = (event) => {
    event.preventDefault();
    navigate(`/category/delete/${category.id}`)
  }
  return (
    <Card className="m-4">
      <Row>
        <strong>
          {category.name}
        </strong>
      </Row>
      <Button size="small" variant="danger" onClick={sendDelete}>
        Delete
      </Button>
    </Card>
  )
}