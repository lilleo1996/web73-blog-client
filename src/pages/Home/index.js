import React, { useState, useEffect } from "react";
import axios from "axios";

import PostCreation from "../../components/PostCreation";
import PostItem from "../../components/PostItem";

function Home() {
  const [isCreating, setIsCreating] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = () => {
      axios
        .get("http://localhost:3001/posts")
        .then((res) => {
          setPosts(res.data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    getPosts();
  }, []);

  return (
    <div className="home">
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of your application.</p>
      <div className="post-creation-container">
        <button onClick={() => setIsCreating(!isCreating)}>
          Open Creat Post Form
        </button>
        {isCreating && <PostCreation />}
      </div>
      {isLoading ? (
        <h4>Loading ...</h4>
      ) : (
        <div className="posts-container">
          <h4>This is a posts</h4>
          <ul>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
