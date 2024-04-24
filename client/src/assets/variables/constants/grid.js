const grid = {
  container: {
    display: "grid",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  },
  column: {
    display: "grid",
    gridColumn: "span 1",
  },
  gap: {
    small: { gap: "0.5rem" },
    medium: { gap: "1rem" },
    large: { gap: "1.5rem" },
  },
};

export default grid;
