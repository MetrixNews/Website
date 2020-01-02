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
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
  }

  const logoStyle = {
    textAlign: "center",
    color: "#492354",
    fontSize: "30pt",
    marginBottom: 100,
    fontWeight: "bold"
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>{styles.sidebarCollapsed ? "M" : "Metrix"}</div>
      {menuItems.map(item => (
        <div style={menuItemStyle}>
          <span>{item.icon}</span>
          {!styles.sidebarCollapsed && item.text}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;