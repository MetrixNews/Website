import React from "react";
// import '../../app.scss';

const Sidebar = ({ menuItems, styles }) => {
  const sidebarStyle = {
    height: "100vh",
    width: styles.sidebarWidth,
    position: "fixed",
    zIndex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 10,
    textAlign: "center",
  };

  const logoStyle = {
    textAlign: "center",
    color: "#492354",
    marginBottom: 150,
    fontWeight: "bold",
    fontSize: "24pt",
  };

  const menuItemStyle = {
    display: "block",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
    textAlign: "center",

  }
  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>{styles.sidebarCollapsed ? "M" : "Metrix News"}</div>
      {menuItems.map(item => (
          <span style={menuItemStyle}>{item.icon}</span>
      ))}
    </div>
  );
};

export default Sidebar;