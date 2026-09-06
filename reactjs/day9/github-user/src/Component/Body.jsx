import { useEffect, useState } from "react";

function Body(){
    const [Profile, setProfile] = useState([]);
    const [count, setCount] = useState("");


    const [username, setUsername] = useState("");


    async function generateProfile(count) {
        const random = Math.floor(1+Math.random()*10000)
        const response = await fetch(`https://api.github.com/users?since=${random}&per_page=${count}`);
        const data = await response.json();

        setProfile(data);
        
        
    }

    useEffect(()=>{
        generateProfile(2);
    },[]);

    async function userName(username) {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setProfile([data]);
        
    }



    return (
       <>
       <div className="src-num">
        <form onSubmit={(e) => {
                e.preventDefault();
                generateProfile(Number(count));
            }}>
                <input 
                    className="inp-num"
                    type="number"
                    placeholder="Type the number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />

                <button type="submit" className="btn">
                    Search
                </button>
         </form>
       </div>
       <div className="src-num">
        <form onSubmit={(e) => {
                e.preventDefault();
                userName(username);
            }}>
                <input
                    className="inp-num"
                    type="text"
                    placeholder="Type name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit" className="btn">
                    Search
                </button>
         </form>
       </div>
        <div className="profile">
            {
                Profile.map((value)=>{
                    return(
                        <div key={value.id} className="card">
                            <img className="img" src={value.avatar_url} alt="Profile Photo" />
                            <h2>{value.login}</h2>
                            <a href={value.url}>Profile</a>
                        </div>
                    )
          
                })
            }
            

        </div></>
    )


    
}
export default Body;