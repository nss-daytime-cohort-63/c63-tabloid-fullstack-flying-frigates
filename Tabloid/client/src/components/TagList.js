import { useState, useEffect } from "react";
import { getAllTags } from "../modules/tagManager";
import Tag from "./Tag";

export default function TagManager() {
    const [tags, setTags] = useState([])

    useEffect(() => {
        getAllTags().then(setTags);
    }, []);

    return (
        <div>
            <section>
                {tags.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))}
            </section>
        </div>
    );
}