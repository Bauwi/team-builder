export default position =>
  position
    .split(/[-\s]/g)
    .map(word => word[0])
    .join("")
    .toUpperCase();
