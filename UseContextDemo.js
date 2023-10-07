import React, {useContext} from 'react';
import {BlogContext} from './App';

export default function UseContextDemo(){
    const binfo = useContext(BlogContext);
    return(
        <div>
            <p><h2>Topic:{binfo.React.post}</h2></p>
            <p><h2>Topic:{binfo.React.author}</h2></p>
            <p><h2>Topic:{binfo.NodeJs.post}</h2></p>
            <p><h2>Topic:{binfo.NodeJs.author}</h2></p>

        </div>
    )
}

/*
//add this code to app.js while implenting UseContextDemo

import './App.css';

import UseContextDemo from './UseContextDemo';
import React from 'react';

const blogInfo={
  React:{
    post:"Learn useContext Hooks",
    author:"varun K"
  },
  NodeJs:{
    post:"Node Commands",
    author:"veena M"
  }
};
export const BlogContext = React.createContext(blogInfo);

function App() {
  return (
    <div className="App">
      <div>
        <h1>useContext() demo</h1>
        <BlogContext.Provider value = {blogInfo}>
          <UseContextDemo/>
        </BlogContext.Provider>
      </div>
    </div>
  );
}

export default App;
*/ 