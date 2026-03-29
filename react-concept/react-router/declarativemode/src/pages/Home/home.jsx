import { useParams, useSearchParams } from "react-router";

const Home=()=>{
    const {homeId}=useParams();
    const [searchParams,setSearchParams]=useSearchParams();
    searchParams.forEach((param)=>{console.log(param)});
    return (
        <div>Home {homeId}</div>
    )
}

export default Home;