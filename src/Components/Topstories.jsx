import React from 'react'
import axios from "axios";
import{useEffect,useState} from "react";
import "./stories.css";
import Card from './Card';




export const Topstories = () => {
    const [news, setNews]=  useState([]);
   

      const getData=()=>{
        axios.get('https://jsnews.herokuapp.com/topstories')
        .then((response)=>{
           console.log(response);
          const repo=response.data;
          setNews(repo);
          console.log(news);
    
        });
        
        
        



    }
    
      useEffect(()=>{
        getData()   
      }
      ,[]);
  return (
    <div className='storydiv'>
        <div className='top'>TopStories</div>
        <div className='mapdiv'>
    {news.map((e)=>{
     return (
        <Card image={e.url} title={e.title} score={e.score} by={e.by} time={e.time}/>

     )
    })}
    </div>
     
    </div>
  )
}
