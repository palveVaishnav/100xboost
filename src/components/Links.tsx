"use client"
import { NavLink } from "react-router-dom";
export default function Link({ pageName }: { pageName: string }) {
    return (
        <NavLink to={pageName}>
            {pageName}
        </NavLink>
    )
}