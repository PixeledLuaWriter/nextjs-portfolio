import React from "react";

function URLCard({ props, children, {label: {text}, seclabel: {text2}} }) => {
   return (
       <a {...props}>
        <h2>
            {text}
        </h2>
        <p>
            {text2}
        </p>
         {children}
       </a>
   );
};

export default URLCard
