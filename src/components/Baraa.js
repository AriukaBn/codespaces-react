import React from "react";

const Baraa = ({ item, onItemClick, OnItemClick }) => {
    return (
        <>
        <div className="nii">
          <div className="Baraa">
            <div className="a1">
              <img src={item.image}/>
              <h4>{item.title}</h4>
              <p>{item.category}</p>
              <p>{item.price}$</p>
              </div>
            <div className="a2">
              <button className="SagsandHiih" onClick={() => OnItemClick(item)}>Sagsand hiih</button>
              <button onClick={() => onItemClick(item)}>About</button>
            </div>
          </div>
        </div>
        </>
    );
}
export default Baraa;