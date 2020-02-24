import React from "react";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "#fff",
    padding: "0px 20px",
    textAlign: "center",
    boxSizing: "border-box"
  };
  const titleStyle = {
    display: "inline-block",
    fontWeight: "bold",
    margin: "0 auto",
    fontSize: "24pt",
    color: "#492354"
  }

  return (
    <div style={topBarStyle}>
      <span style={titleStyle}>Metrix News</span>
    </div>
  );
};

export default TopBar;