/*
//using fetch
import React, { useState,useEffect } from 'react'
export const Exp13=()=>{
    const [data,setData] = useState([])
    const getData = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response)=>response.json())
        .then((result)=>setData(result))
        .catch((err)=>console.log("error occured",err));
    };
    useEffect(()=>{
        getData();
    },[]);
    return(
        <div>
            <table border="1" cellpadding="10px" align="center">
                <th>sno</th><th>posts</th>
                {
                    data.map((d)=>(
                        <tr key={d.id}>
                            <td align="center">{d.id}</td>
                            <td align="cemter">{d.title}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Exp13;*/


//using Axios
import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Exp13(){
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=>{console.log(err)})
    },[])

    return(
        <div>
            <h1>DataFetching Demo</h1>
            <ol>
                {
                    posts.map(post=>(
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}