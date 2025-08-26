import React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./Links.css";

const quickLinks = [
  { title: "BPO", link: "business-process-outsourcing.html" },
  { title: "IOT", link: "iot.html" },
  { title: "IT Infra", link: "it-infrastructure-management-services.html" },
  { title: "Energy and Utility", link: "energy-utility-service.html" },
  { title: "Manufacturing", link: "manufacturing.html" },
  { title: "Retail", link: "retail.html" },
  { title: "Transport & Logistics", link: "transport-logistics.html" },
  { title: "Travel & Hospitality", link: "travel-hospitality-solution.html" },
];

const Links = () => {
  // Split into 3 equal-ish columns
  const columnCount = 3;
  const itemsPerColumn = Math.ceil(quickLinks.length / columnCount);
  const columns = Array.from({ length: columnCount }, (_, i) =>
    quickLinks.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  );

  return (
    <div className="links-container">
      <h2 className="links-heading">QUICKLINKS</h2>
      <div className="links-grid">
        {columns.map((col, colIdx) => (
          <div className="links-col" key={colIdx}>
            {col.map((item, idx) => (
              <div className="link-item" key={idx}>
                <FaAngleRight className="link-icon" />
                <a href={item.link} className="link-text">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
