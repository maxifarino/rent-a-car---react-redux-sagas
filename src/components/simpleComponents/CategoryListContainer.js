import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Slider  from 'react-slick';

export class CategoryListContainer extends Component{
    state = { 
        isLoading: true,
        isError: false,
        categories: [] 
    }

    componentDidMount(){
        this.fetchCategories()
            .then((categories) =>{
                this.setState({categories: categories, isLoading:false});
            })
            .catch((err) =>{
                this.setState({categories: [], isLoading:false, isError:true});
            });
    }

    async fetchCategories(){
        var cachedCategories = localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : null;

        if (!cachedCategories || cachedCategories.date < Date.now()){
            const res = await fetch("http://localhost:63743/api/data/getCategories");

            if (res.status == 200){
                const data = await res.json();
                cachedCategories = {
                    categories: data,
                    date: new Date(Date.now() + (1 * 60 * 3600))
                };
                if (data.length > 0) {
                    localStorage.setItem("categories", JSON.stringify(cachedCategories));
                }
                return cachedCategories.categories;
            }else{
                throw res.status;
            }
        }else{            
            return new Promise((resolve) => {
                resolve(cachedCategories.categories)
            });
        }
    }

    render(){

        return(
            <>
                {
                    React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, this.state);
                        })
                }
            </>
        );
    }
}

export class FleetCarousel extends Component{
	state={}

	render(){

        var settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: this.props.slidesToShow,
            slidesToScroll: this.props.slidesToScroll,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

		return(
            <Slider {...settings}>
                {this.props.categories.map(category=>
				 	category.models.map(model => <FleetCarouselItem key={model.id} {...model}></FleetCarouselItem>)
				)}
            </Slider>
		);
	}
}

export class FleetCarouselItem extends Component{
	state={};

	render(){
		return(
			<div className="container-fluid">
				<Row>
					<div className="col-md-8 flota-car-img">
						<div className="car-image mb-3">
							<img className="img-fluid" src={this.props.imagePath} alt="" />
						</div>
					</div>
					<div className="col-md-4 car-item">
						<h2 class="car-name mt-1">{this.props.name}</h2>
						<p class="car-category">Categoría <span>{this.props.category.name}</span></p>
						<p class="car-description">{this.props.description}</p>
						<div class="details">
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="Personas" src="images/cars/details/person.png" alt="" />
								<p>X4</p>
							</div>
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="Valijas Grandes" src="images/cars/details/luggage-lg.png" alt="" />
								<p>X2</p>
							</div>
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="Valijas Chicas" src="images/cars/details/luggage-xs.png" alt="" />
								<p>X2</p>
							</div>
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="Caja" src="images/cars/details/caja.png" alt="" />
								<p>Auto</p>
							</div>
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="Aire Acondicionado" src="images/cars/details/airconditioner.png" alt="" />
								<p>Sí</p>
							</div>
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="ABS" src="images/cars/details/abs.png" alt="" />
								<p>Sí</p>
							</div>
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="Dirección" src="images/cars/details/direction.png" alt="" />
								<p>Asist.</p>
							</div>
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="Airbugs" src="images/cars/details/airbug.png" alt="" />
								<p>Sí</p>
							</div>
							<div class="details-item">
								<img data-toggle="tooltip" data-placement="top" title="GPS Integrado" src="images/cars/details/gps.png" alt="" />
								<p>Sí</p>
							</div>
						</div>
						<div class="price">
							<p class="text-uppercase">Desde <span>ARS</span><strong> $135</strong> por día</p>
						</div>
						<a class="btn-street btn mb-3" href="busqueda-1.html">Reserva ahora</a>
					</div>
				</Row>
			</div>
		);
	}
}

export class FleetNavigator extends Component{
    render(){
        return(
            <div id="accordion" className=" mb-5">
                {this.props.categories.map(category => <FleetNavigationItemGroup {...category}></FleetNavigationItemGroup>)}        
            </div>
        );
    }
}

export class FleetNavigationItemGroup extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-header" id="HeaderChicos">
                    <h5 className="mb-0">
                        <button className="btn btn-link float-left" data-toggle="collapse" data-target="#Chicos" aria-expanded="true" aria-controls="Chicos">
                        {this.props.name}
                        </button>
                        <button className="btn btn-link float-right" data-toggle="collapse" data-target="#Chicos" aria-expanded="true" aria-controls="Chicos">
                        <i className="fas fa-angle-down"></i>
                        </button>
                    </h5>
                </div>
                <div id="Chicos" className="collapse show" aria-labelledby="HeaderChicos" data-parent="#accordion">
                    <div className="card-body">
                        <ul className="list-unstyled">
                            {this.props.models.map(model=> <CategoryNavigatorItem {...model}></CategoryNavigatorItem>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export class CategoryNavigatorItem extends Component{
    render(){
        return(
            <li><i className="fas fa-angle-right"></i>{this.props.name}</li>
        );
    }
}