import React, { useState } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
// import axios from "axios";
// import { toast } from "react-toastify";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = "http://localhost:9292/posts";

// default state
const initialState = {
  title: "",
  image: "",
  short_story: "",
};

const Post = ({ posts, loadPosts }) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState(initialState);
  const [userId, setUserId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // object destructuring
  const { title, image, short_story } = state;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // enable us to input data on the input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  // handle the form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !image || !short_story) {
      toast.error("Please fill all input fields");
    } else {
      if (!editMode) {
        axios.post(api, state);
        toast.success("Post Added Succesfully");
        // restore the form input to default with no data
        setState({ title: "", image: "", short_story: "" });
        // close modal after sucessfull submission
        handleClose();
        // rerender the loadPosts function
        loadPosts();
      } else {
        axios.patch(`${api}/${userId}`, state);
        toast.success("Updates Succesfully");
        // restore the form input to default with no data
        setState({ title: "", image: "", short_story: "" });
        // close modal after sucessfull submission
        handleClose();
        // rerender the loadPosts function
        loadPosts();
        setUserId(null);
        setEditMode(false);
        
      }
    }
  }

  const handleUpdate = (id) => {
    const singleUser = posts.find((item) => item.id === id);
    setState({ ...singleUser });
    setUserId(id);
    setEditMode(true);
    handleShow();
    // rerender the loadPosts function
    loadPosts();
  };

  // handle the delete operation
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to delete this post?")) {
      axios.delete(`${api}/${id}`);
      toast.success("deleted successfully");
      // rerender the loadPosts function
      loadPosts();
    }
  };

  // search filter
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = posts.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(posts);
    }
  };
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-md-8">
          <Button variant="secondary" onClick={handleShow}>
            Create New Post
          </Button>
        </div>
        <div className="col-md-4">
          <form action="">
            <div className="blog__search">
              <input
                type="search"
                className="header-search-input"
                placeholder="Search post"
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        {searchInput.length > 1
          ? filteredResults.map(({ title, image, short_story, id }) => {
              return (
                <div className="col-md-4" key={id}>
                  <div className="post__wrapper">
                    <h3 className="p-2 text-center">{title}</h3>
                    <div className="post__image">
                      <img src={image} alt={title}></img>
                    </div>
                    <p className="story__desc">{short_story}</p>
                    <div className="action__icons">
                      <div
                        className="post__edit"
                        onClick={() => handleUpdate(id)}
                      >
                        <BsFillPencilFill />
                      </div>
                      <div
                        className="post__delete"
                        onClick={() => handleDelete(id)}
                      >
                        <BsFillTrashFill />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : posts.map(({ title, image, short_story, id }) => {
              return (
                <div className="col-md-4" key={id}>
                  <div className="post__wrapper">
                    <h3 className="p-2 text-center">{title}</h3>
                    <div className="post__image">
                      <img src={image} alt={title}></img>
                    </div>
                    <p className="story__desc">{short_story}</p>
                    <div className="action__icons">
                      <div
                        className="post__edit"
                        onClick={() => handleUpdate(id)}
                      >
                        <BsFillPencilFill />
                      </div>
                      <div
                        className="post__delete"
                        onClick={() => handleDelete(id)}
                      >
                        <BsFillTrashFill />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>

      {/* toast action message notification */}
      <ToastContainer />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <h3 className="text-center">Create Your New Post</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPostTitle">
              <Form.Label className="form__label">Post Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImageLink">
              <Form.Label className="form__label">Image link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Paste your blog image here"
                name="image"
                value={image}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label className="form__label">Story of your post</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write you stories here"
              style={{ height: "200px" }}
              name="short_story"
              value={short_story}
              onChange={handleChange}
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                {editMode ? "Update" : "Post"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Post;
