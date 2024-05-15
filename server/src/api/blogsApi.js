// blogsApi.js
const { loadData, saveData } = require("../dataHandler/dataHandler");

exports.getBlogs = (req, res) => {
  const blogsData = loadData().blogs;
  res.status(200).json(blogsData);
  console.log("Querying all blogs");
};

exports.createBlog = (req, res) => {
  const newBlog = req.body;
  const blogsData = loadData();
  blogsData.blogs.push(newBlog);
  saveData(blogsData);
  res.status(200).send("Blog created successfully");
};

exports.getBlogById = (req, res) => {
  const blogId = req.params.id;
  const blogsData = loadData();
  const blog = blogsData.blogs.find((blog) => blog.id === blogId);
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).send("Blog not found");
  }
};

exports.updateBlogById = (req, res) => {
  const blogId = req.params.id;
  const updatedBlog = req.body;
  const blogsData = loadData();
  const blogIndex = blogsData.blogs.findIndex((blog) => blog.id === blogId);
  if (blogIndex !== -1) {
    blogsData.blogs[blogIndex] = updatedBlog;
    saveData(blogsData);
    res.status(200).send("Blog updated successfully");
  } else {
    res.status(404).send("Blog not found");
  }
};

exports.deleteBlogById = (req, res) => {
  const blogId = req.params.id;
  const blogsData = loadData();
  const blogIndex = blogsData.blogs.findIndex((blog) => blog.id === blogId);
  if (blogIndex !== -1) {
    blogsData.blogs.splice(blogIndex, 1);
    saveData(blogsData);
    res.status(200).send("Blog deleted successfully");
  } else {
    res.status(404).send("Blog not found");
  }
};
