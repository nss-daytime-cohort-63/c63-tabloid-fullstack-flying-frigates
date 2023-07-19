import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { addCategory } from "../modules/categoryManager";

export default function CategoryAddForm() {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState();


  const submitForm = (e) => {
    e.preventDefault();
    addCategory({ name: categoryName })
      .then(() => navigate("/category/manager"))
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };
  return (
    <Card style={{
      display: 'block',
      width: 700,
      padding: 30
    }}>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <CardTitle>
            <h3>
              New Category
            </h3>
          </CardTitle>
          <CardBody>

            <Label for="categoryName">
              <h5>
                Category Name:
              </h5>
            </Label>
            <br></br>
            <Input
              id="categoryName"
              type="textarea"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </CardBody>
        </FormGroup>
        <FormGroup>
          <Button>Save</Button>
        </FormGroup>
      </Form>
    </Card >
  )
}