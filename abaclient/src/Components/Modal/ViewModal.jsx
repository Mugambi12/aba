import "./Modal.css";

function ViewModal({ itemType, itemId, onClose }) {
  // Add your view modal logic here

  return (
    <div className="view-modal">
      <div className="view-modal-content">
        {/* Add your view modal UI here */}
        <h2>View {itemType}</h2>
        <p>View {itemType} details here...</p>
        <div className="view-modal-buttons">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ViewModal;
