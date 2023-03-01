import React from "react";
import { Link } from "react-router-dom";
import obj from "../../json/object/four";
import Header from "../header/header";
import photo from "../photo/book.png";
const University = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-sm-12">
          {obj.map((item) => {
            return (
              <div key={item.id} className="card" style={{ width: "18rem" }}>
                <img src={photo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <Link
                    to={"/word"}
                    className="btn btn-primary"
                    style={{ display: "block" }}
                  >
                    {item.NamObj}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default University;
