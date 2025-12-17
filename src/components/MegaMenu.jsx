import React from 'react'
import '../styles/MegaMenu.css'
const MegaMenu = ({ data, visible }) => {
    if (!data || !visible) return null;
    
    return (
    <div className="mega-menu">
      <div className="mega-menu-container">
        {data.map((section, index) => (
          <div className="mega-column" key={index}>
            <h4 className="mega-title">{section.title}</h4>

            <ul>
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu
