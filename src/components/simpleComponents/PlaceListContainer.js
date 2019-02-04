import React, { Component } from 'react';

export class PlacesListContainer extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            isError: false,
            places: [] 
        }
    }
   
    componentDidMount(){
        this.fetchPlaces()
            .then((places) =>{
                this.setState({places: places, isLoading:false});
            })
            .catch((err) =>{
                this.setState({places: [], isLoading:false, isError:true});
            });
    }

    async fetchPlaces(){
        var cachedPlaces = localStorage.getItem("places") ? JSON.parse(localStorage.getItem("places")) : null;

        if (!cachedPlaces || cachedPlaces.date < Date.now()){
            const res = await fetch("http://localhost:58871/api/data/getPlaces");

            if (res.status == 200){
                const data = await res.json();
                data.forEach(place => {
                    place.label = place.name;
                    place.value=place.id;
                });
                cachedPlaces = {
                    places: data,
                    date: new Date(Date.now() + (1 * 60 * 3600))
                };
                if (data.length > 0) {
                    localStorage.setItem("places", JSON.stringify(cachedPlaces));
                }
                return cachedPlaces.places;
            }else{
                throw res.status;
            }
        }else{            
            return new Promise((resolve) => {
                resolve(cachedPlaces.places)
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