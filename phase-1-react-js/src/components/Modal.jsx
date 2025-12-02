// AI GENERATED WITH CSS
export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return;
    return (
        // This takes up the whole screen and add the gray overlay
        <div className="modal-overlay">
            {/* This holds all the content */}
            <div className="modal-content">
                {/* Simple close button */}
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {/* All the content passed in when the Modal component is wrapper around other jsx */}
                {children}
            </div>
        </div>
    );
};
