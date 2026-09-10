import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "./useFetch";


export default function GithubUser(){
  
        const {profile} = useFetch();


        return(
        <>
            <h1>GitHub user</h1>
            <h2>Name: {profile?.login}</h2>
            <img src={profile?.avatar_url} alt="xxx"></img>
        </>
        )
}