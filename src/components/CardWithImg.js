import React from 'react';

const CardWithImg = (props) => {
  const {title, img, imgRight, content, footerLink } = props;
  const containerClassName = imgRight?"card-with-img-right": "card-with-img"
  return (
    <div className={containerClassName}>
      <img src={img} className="card-img" alt=""/>
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-content">
        <p> {content}</p>
      </div>
      <div className="card-footer">
        {footerLink}
      </div>
    </div>
  );
};

CardWithImg.defaultProps = {
  img: "http://unsplash.it/100/100",
  title: "Card Default Title",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias assumenda at, ea error harum illo iusto, laborum molestias neque nostrum optio, perferendis praesentium quos reiciendis rerum saepe sit tempora ut voluptates.",
  footerLink : <a href="#">Default Link</a>,
  imgRight: false
}

export default CardWithImg;
