import { Outlet } from "react-router";

function About(){
    return (
        <div>
            <h1>This is my About section where differnet component will render</h1>
            <Outlet />
        </div>
    )
}

export default About;