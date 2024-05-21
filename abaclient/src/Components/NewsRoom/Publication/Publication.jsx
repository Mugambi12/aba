import React, { useState } from "react";
import "./Publication.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="publications-container">
      <div className="publications-items">
        {currentPublications.map((publication, index) => (
          <div key={index} className="publication-item">
            <div className="publication-pdf">
              <embed src={publication.file} type="application/pdf" />
            </div>
            <div className="publication-info">
              <div className="publication-info-title">{publication.title}</div>
              <div className="publication-ownership">
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
              <div className="publication-buttons">
                <button
                  className="download-btn"
                  onClick={() => handleDownload(publication.file)}
                >
                  <span>Download</span>
                  <i className="fas fa-download"></i>
                </button>
                <button
                  className="share-btn"
                  onClick={() =>
                    handleShare(publication.title, window.location.href)
                  }
                >
                  <span>Share</span>
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="publication-pagination">
        <button
          className="pagination-btn"
          onClick={goToFirstPage}
          disabled={currentPage === 1}
        >
          <i className="fas fa-angle-double-left"></i>
        </button>
        <button
          className="pagination-btn"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-btn"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <button
          className="pagination-btn"
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
        >
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Publication;
