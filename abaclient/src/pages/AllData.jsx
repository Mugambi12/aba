import React, { useState, useEffect } from "react";
import { fetchDocsData } from "../apiController/apiDocs";
import { fetchUsersData } from "../apiController/usersApi";
import { fetchBlogsData } from "../apiController/blogsApi";

function AllData() {
  const [docsData, setDocsData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [blogsData, setBlogsData] = useState(null);

  useEffect(() => {
    // Fetch data from all routes
    async function fetchData() {
      const docs = await fetchDocsData();
      const users = await fetchUsersData();
      const blogs = await fetchBlogsData();

      setDocsData(docs);
      setUsersData(users);
      setBlogsData(blogs);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Data</h1>
      {/* Display data here */}
      <div>
        <h2>Docs Data</h2>
        <pre>{JSON.stringify(docsData, null, 2)}</pre>
      </div>
      <div>
        <h2>Users Data</h2>
        <pre>{JSON.stringify(usersData, null, 2)}</pre>
      </div>
      <div>
        <h2>Blogs Data</h2>
        <pre>{JSON.stringify(blogsData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default AllData;
