import React, { Component } from 'react';

export class TextSection extends Component{
    
    render(){
        return(
            <div className="col-md-6 offset-md-3 text-center mb-4 claim">
                <h2 className="mb-3">{this.props.title}</h2>
                <h1>{this.props.subTitle}</h1>
            </div>
        );
    }
}

export class HomeTextSection extends Component{
    render(){
        return(
            <div className="row row-p">
                <div className="text-center ml-auto mr-auto mt-5 mb-3">
                    <h1 className='text-section'>{this.props.title}</h1>
                    <p className='text-section'>{this.props.subTitle}</p>   
                </div>   
            </div>
        );
    }
}