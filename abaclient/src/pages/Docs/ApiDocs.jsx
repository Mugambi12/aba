import { useState, useEffect } from "react";
import { fetchDocsData } from "../../dataHandlers/getDocsApi";

function ApiDocumentation() {
  const [docsData, setDocsData] = useState(null);

  useEffect(() => {
    // Fetch data from all routes
    async function fetchData() {
      const docs = await fetchDocsData();

      setDocsData(docs);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Data</h1>

      {/* Display Docs Data */}
      <div>
        <h2>Docs Data</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {docsData &&
              docsData.map((doc, index) => (
                <tr key={index}>
                  <td>{doc.title}</td>
                  <td>{doc.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApiDocumentation;
