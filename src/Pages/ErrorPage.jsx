import {useRouteError} from "react-router-dom"
import { NavLink } from "react-router-dom"
export const ErrorPage=()=>{
    const error = useRouteError();
    
    return <>
        <h1>Something error happen</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/">
        <button>Back to Home</button>
        </NavLink>
    </>
}