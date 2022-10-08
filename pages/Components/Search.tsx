import React from "react";

const link = "https://cse.google.com/cse.js?cx=40a99cba2beb24774";

export default function Search() {
    return (
        <div>
            <script async src={link}></script>
            <div className="gcse-search"></div>
        </div>
    );
}
