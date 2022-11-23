import React from "react";

const Review = ({ review }) => {
  const { name, img, userReview, location } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4>{name}</h4>
            <h3>{location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;