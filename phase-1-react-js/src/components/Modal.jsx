// AI GENERATED WITH CSS
// AI-generated comment:
// This is a functional component named Modal.
// It receives data and functions from its parent component via 'props'.
// Here, props are destructured directly in the function signature:
// - `isOpen`: A boolean indicating whether the modal should be visible.
// - `onClose`: A function to be called when the modal needs to be closed (e.g., by clicking the close button).
// - `children`: A special prop that allows components to render whatever elements they enclose in the JSX.
export const Modal = ({ isOpen, onClose, children }) => {
    // AI-generated comment:
    // This is an example of conditional rendering. If `isOpen` is false,
    // the component immediately returns `null` (or `undefined`), preventing
    // the modal's JSX from being rendered to the DOM.
    if (!isOpen) return null; // AI-generated: Returning null explicitly is a common practice for not rendering anything.
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
