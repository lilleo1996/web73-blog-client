import "./style.css";

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Hashtag: {"#" + post.hashtags.join("#")}</p>
    </div>
  );
};

export default PostItem;
