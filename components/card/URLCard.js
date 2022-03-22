
import React from "react";
import styles from "../../styles/Home.module.css"

export default function URLCard({ props, {label: {text}} }) => {
return (
<a {...props}>{text}</a>
)
}
