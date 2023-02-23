import React from "react";

export default function Cards(props) {
  //with the help of props, we are fetching data from database.

  let options = props.options;
  let priceOptions = Object.keys(options); //displaying data half and full from database

  return (
    <div>
      <div>
        <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
          <img
            src={props.imgSrc} //imoprting diffrent image from to database
            className="card-img-top"
            alt="..." style={{height:"120px",objectFit:"fill"}} //this line fit each photo in organized way
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">This is some Important text.</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-secondary">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-secondary rounded">
                {/* selecting quantity of food */}
                {priceOptions.map((data) => {
                  return (
                    <options key={data} value={data}>
                      {data}
                    </options>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
