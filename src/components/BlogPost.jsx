const BlogPost = ({ blog }) => {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.author}</p>
    </div>
  );
};

export default BlogPost;
