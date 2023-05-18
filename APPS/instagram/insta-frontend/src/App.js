import React, { useState } from 'react';
import './App.css';
import Post from './Post';
import axios from './axios.js'

function App() {

  const [posts, setPosts] = useState([
    {
      username:"sujalrishi",
      caption:"Wow its work!!!",
      imageUrl:"https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"
    },
    {
      username:"akshat_malviya",
      caption:"Wow_Dope!!!",
      imageUrl:"https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"
    },
    {
      username:"sexy_gaurav_ray",
      caption:"Wow the dick is good!!!",
      imageUrl:"https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"
    }
  ])

  return (
    <div className="app">
      <div className="app_header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU" alt="instagram" className="app_headerImg" />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
