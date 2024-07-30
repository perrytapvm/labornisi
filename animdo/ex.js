/**
 * Layers the given view behind this view.
 * @param {HTMLElement} currentView - The current view that will remain on top.
 * @param {HTMLElement} viewToLayerBehind - The view to layer behind the current view.
 */
function layerViewBehind(currentView, viewToLayerBehind) {
    if (currentView && viewToLayerBehind) {
        // Get the z-index of the current view
        const currentZIndex = window.getComputedStyle(currentView).zIndex;

        // Set the z-index of the view to layer behind to be one less than the current view's z-index
        viewToLayerBehind.style.zIndex = currentZIndex - 1;
    } else {
        console.error("Both views must be valid DOM elements.");
    }
}

// Example usage
const currentView = document.getElementById('view2');
const viewToLayerBehind = document.getElementById('view1');

layerViewBehind(currentView, viewToLayerBehind);
