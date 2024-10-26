import React from "react"
import "./ContainerSections.css";

export const ContainerSections = ({children, style}) => {
    return (
        <section className={style}>{children}</section>         

        
    )
}