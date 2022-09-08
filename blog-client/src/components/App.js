import { useEffect, useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import Post from "./Post";
import axios from "axios";

const api = "http://localhost:5000/posts";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await axios.get(api);
    setPost(response.data)
  };

  return (
    <div className="container-fluid">
      <Header />
      <Modal loadPosts={loadPosts} />
      <Post posts={post} loadPosts={loadPosts}  />
    </div>
  );
}

export default App;
