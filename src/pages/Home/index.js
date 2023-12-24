import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import PostCreation from "../../components/PostCreation";
import PostItem from "../../components/PostItem";
import Pagination from "../../components/Pagination";
import { useAuth } from "../../contexts/AuthContext";

function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuth();
  console.log(user);
  const packageSize = 5;
  const { data, isLoading, error } = useQuery(["posts", currentPage], () =>
    axios
      .get(
        `http://localhost:3001/posts?page=${currentPage}&pageSize=${packageSize}`
      )
      .then((response) => response.data)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching posts: {error.message}</p>;
  }

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
      <div className="posts-container">
        <h4>This is a posts</h4>
        <ul>
          {data.data.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
      <Pagination
        page={currentPage}
        pageSize={packageSize}
        totalPages={data.totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Home;
