//Custom Attribute or props
import React from "react";

function Card(props) {

  return(
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgscr} alt="picture" className="card_img" />
        <div className="card_info">
          <span className="card_category">A Netflix Original Series</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.links}>
            <button>Watch Now</button>
            </a>
        </div>
      </div>
    </div>

  </>
  )
}

export default Card;