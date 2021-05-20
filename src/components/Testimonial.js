import React, { useState } from 'react';
import Images from './Images';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import "./Testimonial.css"
import "../css/default.css"
import "../css/style.css"
import "../css/LineIcons.css"
import "../css/style.css.map"   
import "../css/magnific-popup.css"

const TestimonialData = {
    
    carousal_items: [
        {
            id: 1,
            altText: 'Slide 1',
            caption: 'Slide 1',
            text: "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
            img1: Images.image1,
            title1: "Isabela Moriera",
            sub_title1: "CEO, GrayGrids",
            img2: Images.image2,
            title2: "Fiona",
            sub_title2: "Lead Designer, UIdeck",
            img3: Images.image3,
            title3: "Elon Musk",
            sub_title3: "CEO, SpaceX",  
                
        
        },
        {
            id: 2,
            altText: 'Slide 2',
            caption: 'Slide 2',
            text: "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
            img1: Images.image2,
            title1: "Fiona",
            sub_title1: "Lead Designer, UIdeck",
            img2: Images.image3,
            title2: "Elon Musk",
            sub_title2: "CEO, SpaceX",
            img3: Images.image4,
            text3: "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
            title3: "Fajar Siddiq",
            sub_title3: "CEO, MakerFlix",
        },
        {
            id: 3,
            altText: 'Slide 3',
            caption: 'Slide 3',
            text: "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
            img1: Images.image3,
            title1: "Elon Musk",
            sub_title1: "CEO, SpaceX",
            img2: Images.image4,
            title2: "Fajar Siddiq",
            sub_title2: "CEO, MakerFlix",
            img3: Images.image1,
            title3: "Isabela Moriera",
            sub_title3: "CEO, GrayGrids",
        },
        {
            id: 4,
            altText: 'Slide 4',
            caption: 'Slide 4',
            text: "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
            img1: Images.image4,
            title1: "Fajar Siddiq",
            sub_title1: "CEO, MakerFlix",
            img2: Images.image1,
            title2: "Isabela Moriera",
            sub_title2: "CEO, GrayGrids",
            img3: Images.image2,
            title3: "Fiona",
            sub_title3: "Lead Designer, UIdeck",
        },
    ],
}
            

console.log(TestimonialData);
TestimonialData.carousal_items.map((item) => {
    console.log(item.altText);
});

const Testimonial = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === TestimonialData.carousal_items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? TestimonialData.carousal_items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = TestimonialData.carousal_items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}>
                    <CardDeck className="card-item">
                        <Card >
                            <CardBody className="text-center">
                            <CardImg className="my-img" src={item.img1} alt="Card image cap" roundedCircle />
                            <CardText>{item.text}</CardText><hr/>
                            <CardTitle tag="h5">{item.title1}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.sub_title1}</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card >
                            <CardBody className="text-center">
                            <CardImg className="my-img" src={item.img2} alt="Card image cap" roundedCircle />
                            <CardText>{item.text}</CardText><hr/>
                            <CardTitle tag="h5">{item.title2}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.sub_title2}</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card >
                            <CardBody className="text-center">
                            <CardImg className="my-img" src={item.img3} alt="Card image cap" roundedCircle/>
                            <CardText>{item.text}</CardText><hr/>
                            <CardTitle tag="h5">{item.title3}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.sub_title3}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardDeck>
                
            </CarouselItem>
        )
    });
         
    return (
        <section id="testimonial" className="testimonial-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center pb-10">
                            <h2 className="title pt-5">Testimonial</h2>
                            <p className="text">
                                Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}>
                        <CarouselIndicators className="my-indicator" items={TestimonialData.carousal_items} activeIndex={activeIndex} onClickHandler={goToIndex} roundedCircle />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
                
            </div>
        </section>
    )
}
      
export default Testimonial;