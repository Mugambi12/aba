const flex = {
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  wrap: {
    flexWrap: "wrap",
  },
  nowrap: {
    flexWrap: "nowrap",
  },
  justify: {
    start: { justifyContent: "flex-start" },
    end: { justifyContent: "flex-end" },
    center: { justifyContent: "center" },
    between: { justifyContent: "space-between" },
    around: { justifyContent: "space-around" },
    evenly: { justifyContent: "space-evenly" },
  },
  align: {
    start: { alignItems: "flex-start" },
    end: { alignItems: "flex-end" },
    center: { alignItems: "center" },
    baseline: { alignItems: "baseline" },
    stretch: { alignItems: "stretch" },
  },
};

export default flex;
