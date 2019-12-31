import React from "react";

const FooterMenu = ({ menuItems, styles }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundColor: "#fff",
        color: "#492354",
        position: "fixed",
        borderTop: "1px solid #d8d8d8",
        bottom: 0,
        zIndex: 1,
      }}
    >
      {menuItems.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <span style={{ marginRight: 5, fontSize: 20 }}>{item.icon}</span>
            {styles.showFooterMenuText && item.text}
          </div>
        );
      })}
    </div>
  );
};

export default FooterMenu;