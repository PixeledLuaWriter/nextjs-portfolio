import React from "react";

function URLCard({ props, {label: {text}} }) => {
   return (
       <a {...props}>
        {text}
       </a>
   );
};

export default URLCard
