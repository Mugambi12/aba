import React, { useState } from "react";
import Pagination from "../../Pagination/Pagination";

const Publication = ({ publicationData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 3;

  const totalPages = Math.ceil(publicationData.length / publicationsPerPage);
  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = publicationData.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );

  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    link.click();
  };

  const handleShare = (title, url) => {
    const shareText = `Check out this publication: ${title}\n${url}`;
    if (navigator.share) {
      navigator
        .share({
          title: "Publication",
          text: shareText,
          url: url,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      console.log("Web Share API not supported on your browser");
    }
  };

  const goToPage = (page) => setCurrentPage(page);
  const onNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const onPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const onFirstPage = () => setCurrentPage(1);
  const onLastPage = () => setCurrentPage(totalPages);

  return (
    <div className="publications-container">
      <ul className="publications-items">
        {currentPublications.map((publication, index) => (
          <li key={index} className="publication-item">
            <div className="publication-info">
              <div className="publication-info-title">{publication.title}</div>
              <div className="publication-ownership">
                <div className="publication-file-type">
                  File type: {publication.type}.
                </div>
                <div className="publication-info-author">
                  Published by: {publication.authors}
                </div>
                <div className="publication-info-date">
                  On {publication.date}
                </div>
              </div>
              <div className="publication-info-summary">
                {publication.summary}
              </div>
            </div>

            <div className="publication-buttons">
              <button
                className="download-btn"
                onClick={() => handleDownload(publication.file)}
              >
                <span>Download</span>
              </button>
              <button
                className="share-btn"
                onClick={() =>
                  handleShare(publication.title, window.location.href)
                }
              >
                <span>Share</span>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={goToPage}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        onFirstPage={onFirstPage}
        onLastPage={onLastPage}
      />
    </div>
  );
};

export default Publication;
