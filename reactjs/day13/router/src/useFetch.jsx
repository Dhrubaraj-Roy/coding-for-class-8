import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";


export default function useFetch(){
//https://api.github.com/users/name
 
    const [profile, setProfile] = useState(null);

    const {name} = useParams();

    async function fetchUser() {
        const response = await fetch(`https://api.github.com/users/${name}`)
        const data = await response.json();
        setProfile(data);

    }

    useEffect(()=>{
        fetchUser();
    },[name])


    return { profile };


}