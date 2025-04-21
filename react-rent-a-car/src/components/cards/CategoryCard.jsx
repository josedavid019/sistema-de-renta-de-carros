import React from "react";
import "./CategoryCard.css";

export function CategoryCard({
  category_image,
  category_name,
  category_description,
  onClick,
}) {
  return (
    <div className="category-card-container">
      <div className="category-card">
        <div className="category-card-image">
          <img src={category_image} alt={category_name} />
        </div>
        <div>
          <h2>{category_name}</h2>
          <p>{category_description}</p>
        </div>
        <button type="button" onClick={onClick}>
          Ver Carros
        </button>
      </div>
    </div>
  );
}
