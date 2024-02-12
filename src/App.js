import React from'react';
import { useState } from'react';
import { useEffect } from'react';
import './App.css';
import { Private } from './components/Private';
import { Public } from './components/Public';

function App() {

  const [articles, setArticles] = useState([{id:1,title:"medical",content:"general",is_Public:true},{id:2,title:"criminal",content:"case",is_Public:false}]);
const [privateArticle, setPrivateArticle] = useState([]);
const [publicArticle, setPublicArticle] = useState([]);

const addArticle = (is_Public) => {
  setArticles([...articles, {id:articles.length+1,title:`article ${articles.length}`,content:`content ${articles.length}`,is_Public:is_Public}])
}
useEffect(() => {
  setPrivateArticle(articles.filter(article => article.is_Public === false))
  setPublicArticle(articles.filter(article => article.is_Public === true))
}, [articles])

  return (
    <div className="App">
      <div className='header'> Header</div>
      <div className='container'>
      <div className='nav'> Navbar</div>
      <div className='articles'>
        <div className='private-art'>Private Article
        <Private article={privateArticle} title = "Private Article" addPrivate={addArticle} />
        </div>

        <div  className='public-art'>Public Article
        <Public article={publicArticle} title = "Public article" addPublic={addArticle} />
        </div>



      </div>
      </div>

    </div>
  );
}

export default App;
