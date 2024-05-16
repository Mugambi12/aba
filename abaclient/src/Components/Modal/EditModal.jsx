import "./Modal.css";

function EditModal({ itemType, itemId, onClose }) {
  // Add your edit modal logic here

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        {/* Add your edit modal UI here */}
        <h2>Edit {itemType}</h2>
        <p>Edit {itemType} content here...</p>
        <div className="edit-modal-buttons">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
