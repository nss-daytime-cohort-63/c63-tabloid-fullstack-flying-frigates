import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { FormGroup } from "reactstrap";

const PostForm = ({ getPosts }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [imageLocation, setImageLocation] = useState();
    const [categoryId, setCategoryId] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        getAllCategories(false).then(data => setCategories(data.categories))
    }, [])

    const submitPost = (e) => {
        e.preventDefault();
        const post = {
            title,
            content,
            imageLocation,
            categoryId
        }

        addPost(post).then((postData) => { navigate(`/postDetails/${postData.id}`) });
    };

    return (
        <>
            <h2>New Post</h2>
            <Form onSubmit={submitPost}>
                <FormGroup>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" onChange={(e) => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="content">Content</label>
                    <input name="content" type="text" onChange={(e) => setContent(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="imageLocation">Image Location URL</label>
                    <input name="imageLocation" type="text" onChange={(e) => setImageLocation(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="categoryId" className="m-3">Select A Category</label>
                    <select onChange={(e) => setCategoryId(e.target.value)}>
                        {categories.map((category) =>
                            <option value={category.id} key={`addpostcategory--${category.id}`}>{category.name}</option>)}
                    </select>
                </FormGroup>
                <button
                    id="postSaveBtn"
                    color="success">
                    Save
                </button>
            </Form >
        </>
    )
}
export default PostForm