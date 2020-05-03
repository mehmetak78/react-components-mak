import React from 'react';

const Card = (props) => {
  const {title, img, content, footerLink} = props;
  return (
    <div className="card">
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

Card.defaultProps = {
  title: "Card Default Title",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias assumenda at, ea error harum illo iusto, laborum molestias neque nostrum optio, perferendis praesentium quos reiciendis rerum saepe sit tempora ut voluptates.",
  footerLink : <a href="#">Default Link</a>
}

export default Card;
