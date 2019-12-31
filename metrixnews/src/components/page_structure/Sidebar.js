import React from "react";
// import '../../app.scss';

const Sidebar = ({ menuItems, styles }) => {
  const sidebarStyle = {
    height: "100vh",
    width: styles.sidebarWidth,
    position: "fixed",
    zIndex: 1,
    backgroundColor: "#fff ",
    paddingTop: 10,
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
    color: "#492354",
    fontWeight: "bold",
    fontSize: 16
  }

  const iconStyle = {
    fontSize: 16,
    color: "#492354",
    marginRight: styles.sidebarCollapsed ? 0 : 10,
  };

  const logoStyle = {
    textAlign: "center",
    color: "#492354",
    fontSize: "30pt",
    marginBottom: 60,
    fontWeight: "bold"
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>{styles.sidebarCollapsed ? "M" : "Metrix"}</div>
      {menuItems.map(item => (
        <div style={menuItemStyle}>
          <span style={iconStyle}>{item.icon}</span>
          {!styles.sidebarCollapsed && item.text}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;