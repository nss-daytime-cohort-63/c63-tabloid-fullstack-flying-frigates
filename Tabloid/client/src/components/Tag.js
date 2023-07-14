import React from "react";
//import necessary? What exactly is it doing? try removing

export default function Tag({ tag }) {

    return (
        <li>
            {tag.name}
        </li>
    );
}