import { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";
import axios from "axios";
import Footer from "./Footer";

const api = "http://localhost:9292/posts";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await axios.get(api);
    setPost(response.data);
  };

  return (
    <div className="container-fluid">
      <Header />
      <Post posts={post} loadPosts={loadPosts} />
      <Footer/>
    </div>
  );
}

export default App;
