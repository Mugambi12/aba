import "./Modal.css";

function DeleteModal({ itemType, itemId, onDelete, onClose }) {
  const handleConfirmDelete = () => {
    onDelete(itemId);
    onClose();
  };

  return (
    <div className="delete-modal">
      <div className="delete-modal-content">
        <h2 className="delete-modal-title">Confirm Deletion</h2>
        <p className="delete-modal-message">
          Are you sure you want to delete this {itemType}?
        </p>
        <div className="delete-modal-buttons">
          <button onClick={handleConfirmDelete}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
