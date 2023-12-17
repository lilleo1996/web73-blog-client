import { useState } from "react";
import axios from "axios";

const PostCreation = () => {
  const [title, setTitle] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      hashtags: hashtags.split(","), // "vietnam,giaoduc,sachgiaokhoa"
      content: content,
      // lay user -> author
      author: "hieutc",
    };

    axios
      .post("http://localhost:3001/posts", newPost)
      .then(() => {
        setTitle("");
        setHashtags("");
        setContent("");
        console.log("Create a new post successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="post-creation">
      <h2>Create a post</h2>
      <form>
        <div className="title">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div className="hashtag">
          <label htmlFor="hashtag">Hashtags: </label>
          <input
            type="text"
            id="hashtag"
            value={hashtags} //"music,student"
            onChange={(event) => setHashtags(event.target.value)}
          ></input>
        </div>
        <div className="content">
          <label htmlFor="content">Content: </label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <button onClick={handleCreatePost}>Create Post</button>
      </form>
    </div>
  );
};

export default PostCreation;
