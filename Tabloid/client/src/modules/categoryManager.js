import { getToken } from "./authManager";
import { useNavigate } from "react-router-dom";

const apiUrl = "/api/category"

export const getAllCategories = () => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        throw new Error("An unknown error occurred while trying to get categories.",)
      }
    })
  })
};
export const deleteCategory = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.json())
      .then(() => { getAllCategories() })
  })
};

export const getCategoryById = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      else {
        throw new Error(`Failed to get category ${id}`)
      }
    })
  })
};

export const addCategory = (category) => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 401) {
        throw new Error("UnAuthorized");
      } else {
        throw new Error("An unknown error occurred while trying to get categories.",);
      }
    });
  });
};