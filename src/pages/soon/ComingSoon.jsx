import React, { lazy } from 'react'
import "./comingsoon.scss"
import img from "../../assets/RoFjQ2Z.jpg"
const ComingSoon = () => {
  return (
<div className="comingSoon">
    <div className="image">
        <picture>
            <img src={img} loading="lazy" alt="" />
        </picture>
    </div>
    <div className="details">
      <div className="header">
        <h4>Coming Soon</h4>
        <h3>VolksWagen 2.0</h3>
      </div>
      <div class="timing">
              <div class="box">
                <h4 id="day">18</h4>
                <span>days</span>
              </div>
              <div class="box">
                <h4 id="hour">10</h4>
                <span>hours</span>
              </div>
              <div class="box">
                <h4 id="minute">38</h4>
                <span>mins</span>
              </div>
              <div class="box">
                <h4 id="second">19</h4>
                <span>secs</span>
              </div>
            </div>
    </div>
</div>
  )
}

export default ComingSoon