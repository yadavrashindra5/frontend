import { Outlet } from "react-router";

const Dashboard=()=>{
    return(
        <div>
            <div>Hello</div>
            <div>{<Outlet/>}</div>
        </div>
    )
}

export default Dashboard;