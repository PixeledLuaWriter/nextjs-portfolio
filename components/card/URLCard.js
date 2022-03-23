import React from "react";

function URLCard({ props, children, maintitle, description }) {
   return (
       <a {...props}>
        <h2>
            {maintitle}
        </h2>
        <p>
            {description}
        </p>
         {children}
       </a>
   );
};

export default URLCard
