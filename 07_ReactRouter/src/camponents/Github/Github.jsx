import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    // const [data, setdata] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/kushalvk')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data);
    //     })
    // }, [data]);
    // that is same work as below method (githubInfoLoder)

    const data = useLoaderData()

    return (
        <div className="text-center m-5 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoder = async () => {
   const response =  await fetch('https://api.github.com/users/kushalvk')
   return response.json()
}