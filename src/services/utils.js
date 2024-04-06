import axios from 'axios';

const baseUrl = 'api/blogs';

export const getBlogPosts = async () => {
  const request = await axios.get(baseUrl);
  const response = request;
  return response.data;
};
