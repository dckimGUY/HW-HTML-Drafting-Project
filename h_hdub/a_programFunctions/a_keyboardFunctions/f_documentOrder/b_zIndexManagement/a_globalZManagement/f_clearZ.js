function clearZ() {
    const children = utilityLayer0.children;
    const len = children.length;
    if (len === 0) return;

    // Fast loop with cached length
    for (let j = 0; j < len; j++) {
        // Clearing the property is faster than setting to an empty string in some engines
        children[j].style.removeProperty('z-index');
    }
}
