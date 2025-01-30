import React from "react";

export const Card = ({name, phone, email, address, onDelete}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-2 d-flex align-items-center">
          <img
            src="https://i.pinimg.com/736x/a7/a6/1e/a7a61e1ee9f6b8cb041c697c3a04cdcc.jpg"
            className="img-fluid rounded-circle"
            alt="Profile"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <i className="bi bi-geo-alt"></i>{address}
            </p>
            <p className="card-text">
              <i className="bi bi-telephone"></i>{phone}
            </p>
            <p className="card-text">
              <i className="bi bi-envelope"></i>{email}
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column align-items-center justify-content-center">
          <button className="btn btn-outline-primary btn-sm mb-2">
            ✏️
          </button>
          <button className="btn btn-outline-danger btn-sm"
          onClick={onDelete}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
