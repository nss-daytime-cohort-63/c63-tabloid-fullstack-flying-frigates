import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTags } from "../modules/tagManager";
import Tag from "./Tag";

export default function TagManager() {
    const navigate = useNavigate();
    const [tags, setTags] = useState([])

    const handleClick = () => {

        navigate("/add")
    }

    useEffect(() => {
        getAllTags().then(setTags);
    }, []);

    return (
        <div>
            <button onClick={handleClick}>Create a tag</button>
            <section>
                {tags.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))}
            </section>
        </div>
    );
}