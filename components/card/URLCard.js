import React from "react";

function URLCard({ props, children, main_title, description }) => {
   return (
       <a ...props>
        <h2>
            {main_title}
        </h2>
        <p>
            {description}
        </p>
         {children}
       </a>
   );
};

export default URLCard
