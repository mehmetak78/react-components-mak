import React from 'react';
import CardWithImg from "../components/CardWithImg";
import Card from "../components/Card";

const Page1 = () => {
  return (
    <div className="container">
    <div className="card-group">
      <CardWithImg
        imgRight
        img= "http://unsplash.it/100/100"
        title= "Page1 Title"
        content= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur impedit mollitia repudiandae soluta voluptates. Distinctio dolore facilis nesciunt sequi."
        footerLink= {<a href="www.google.com.tr">FooterLink</a>}
      />
      <Card
        img= "http://unsplash.it/100/100"
        title= "Page1 Title"
        content= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur impedit mollitia repudiandae soluta voluptates. Distinctio dolore facilis nesciunt sequi."
        footerLink= {<a href="www.google.com.tr">FooterLink</a>}
      />
    </div>
    </div>
  );
};

export default Page1;
