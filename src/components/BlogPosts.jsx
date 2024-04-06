import { useState, useEffect } from 'react';
import { getBlogPosts } from '../services/utils';
import BlogPost from './BlogPost';

function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then(setBlogPosts);
  }, []);

  return (
    <div>
      {blogPosts.map(blog => (
        <BlogPost
          blog={blog}
          key={blog.id}
        />
      ))}
    </div>
  );
}

export default BlogPosts;
