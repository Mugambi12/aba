const { loadData, saveData } = require("../dataHandler/dataHandler");

// Function to validate blog data
const validateBlog = (blog) => {
  return blog && blog.title && blog.authorId && blog.content;
};

// Function to get all blogs
const getBlogs = (req, res) => {
  try {
    const blogsData = loadData().blogs;
    res.status(200).json(blogsData);
    console.log("Querying all blogs");
  } catch (error) {
    res.status(500).send("An error occurred while fetching blogs");
    console.error("Error querying blogs:", error);
  }
};

// Function to create a new blog
const createBlog = (req, res) => {
  const newBlog = req.body;
  if (!validateBlog(newBlog)) {
    return res.status(400).send("Invalid blog data");
  }

  try {
    const blogsData = loadData();
    newBlog.id = blogsData.blogs.length
      ? blogsData.blogs[blogsData.blogs.length - 1].id + 1
      : 1;
    blogsData.blogs.push(newBlog);
    saveData(blogsData);
    res.status(201).send("Blog created successfully");
  } catch (error) {
    res.status(500).send("An error occurred while creating the blog");
    console.error("Error creating blog:", error);
  }
};

// Function to get a blog by ID
const getBlogById = (req, res) => {
  const blogId = Number(req.params.id);

  try {
    const blogsData = loadData();
    const blog = blogsData.blogs.find((blog) => blog.id === blogId);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (error) {
    res.status(500).send("An error occurred while fetching the blog");
    console.error("Error fetching blog:", error);
  }
};

// Function to update a blog by ID
const updateBlogById = (req, res) => {
  const blogId = Number(req.params.id);
  const updatedBlog = req.body;
  if (!validateBlog(updatedBlog)) {
    return res.status(400).send("Invalid blog data");
  }

  try {
    const blogsData = loadData();
    const blogIndex = blogsData.blogs.findIndex((blog) => blog.id === blogId);
    if (blogIndex !== -1) {
      updatedBlog.id = blogId;
      blogsData.blogs[blogIndex] = updatedBlog;
      saveData(blogsData);
      res.status(200).send("Blog updated successfully");
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (error) {
    res.status(500).send("An error occurred while updating the blog");
    console.error("Error updating blog:", error);
  }
};

// Function to delete a blog by ID
const deleteBlogById = (req, res) => {
  const blogId = Number(req.params.id);

  try {
    const blogsData = loadData();
    const blogIndex = blogsData.blogs.findIndex((blog) => blog.id === blogId);
    if (blogIndex !== -1) {
      blogsData.blogs.splice(blogIndex, 1);
      saveData(blogsData);
      res.status(200).send("Blog deleted successfully");
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (error) {
    res.status(500).send("An error occurred while deleting the blog");
    console.error("Error deleting blog:", error);
  }
};

module.exports = {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
