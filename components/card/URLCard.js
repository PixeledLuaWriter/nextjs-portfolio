import React from "react";

function URLCard({ props, maintitle, description }) {
   return (
       <a {...props}>
        <h2>
            {maintitle}
        </h2>
        <p>
            {description}
        </p>
       </a>
   );
};

export default URLCard
