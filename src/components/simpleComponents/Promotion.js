import React, { Component } from 'react';
import {UncontrolledCarousel, CarouselItem,  Col, Row } from 'reactstrap';

export class PromotionList extends Component{
    state={}

    render(){
        return(
            <Row>
                {
                    this.props.promotions.map(promo=> <PromotionItem key={promo.id} {...promo}></PromotionItem>)
                }
            </Row>
        );
    }
}

class PromotionItem extends Component {
    state = {  }
    
    render() {         
        return (   
            <Col md={4} mb={4}>
                <img className="img-fluid mb-4" src={this.props.imagePath} alt={this.props.name} />
                <h4 className="mb-3 mt-2">{this.props.name}</h4>
                <p>{this.props.description}</p>
            </Col>
         );
    }
}


export class PromotionCarousel extends Component{
    state={}

    render(){
        const items = this.props.promotions.map(i=> {
            i.src = i.imagePath;
            i.altText = i.name;
            return i;
        });

        return(
            <UncontrolledCarousel items={items}>
            </UncontrolledCarousel>
        );
    }
}

export class PromotionListContainer extends Component{
    state = { 
        isLoading: true,
        promotions: [] 
    }

    componentDidMount(){
        this.fetchPromotions()
        .then((promos) =>{
            this.setState({promotions: promos, isLoading:false});
        });
    }

    fetchPromotions(){
        var cachedPromos = localStorage.getItem("promotions") ? JSON.parse(localStorage.getItem("promotions")) : null;

        if (!cachedPromos || cachedPromos.date < Date.now()){
            return fetch("http://localhost:63743/api/data/getPromotions")
            .then(res => {
                if (res.status == 200)
                    return res.json();                
                
                return [];
            })
            .then(data=> {
                //TODO fix cache comparing
                    cachedPromos = {
                        promotions: data,
                        date: new Date(Date.now() + (1*60*3600))
                    };

                    if (data.length > 0){
                        localStorage.setItem("promotions", JSON.stringify(cachedPromos));
                    }

                    return cachedPromos.promotions;
                }
            );
        }else{
            console.log("promotions fetched form cache");
            return new Promise((resolve) => {
                resolve(cachedPromos.promotions)
            });
        }
    }

    render(){
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, this.state);
          });

        return(
            <>
                {children}
            </>
        );
    }
}

export default PromotionListContainer;