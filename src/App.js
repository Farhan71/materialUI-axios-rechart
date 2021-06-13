import { Button } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';
import LIneChart from './Components/LineChart/LIneChart';
import News from './Components/News/News';
import Piechart from './Components/Piechart/Piechart';

function App() {
  const [articles, setArticles] = useState([])
  // useEffect(()=>{
  //     fetch ('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bee05a5023a74e43aa05de6f147f2970')
  //     .then ( res => res.json() )
  //     .then (data => setArticles(data.articles))
  // },[])
  useEffect(()=>{
    const url ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bee05a5023a74e43aa05de6f147f2970'
    axios(url)
    .then (data => setArticles(data.data.articles))
},[])
  const newsStyle = {
    // float: 'left',
    // margin: '10px',
    marginRight: '30px',
    display: 'flex',
    flexWrap: "wrap",

  }
  return (
    <div >
      <Button color="primary">Hello World</Button> <br />
      <Button variant="contained" color="secondary">Secondary</Button>
      <h1>Total articles: {articles.length}</h1>
      <div style={newsStyle}>
        {
          articles.map (article => <News article={article}></News>  ) 
          
        }
      </div>
      <LIneChart></LIneChart>
      <Piechart></Piechart>
      
    </div>
  );
}

export default App;
