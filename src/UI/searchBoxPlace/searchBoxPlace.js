import React, { Component } from 'react';
import Select, { components } from 'react-select';

const searchBoxPlace = (props) => {

    const Option = (props) => {
        return (
            <components.Option {...props}>
                <i className={"fas mr-2 " + (props.data.category == 'airport' ? "fa-plane" : "fa-building")}></i>
                {props.data.label}
            </components.Option>
        );
    };

    const ValueContainer = ({ children, ...props }) => (
        <components.ValueContainer {...props}>
            <i style={{ color: props.theme.colors.primary25 }} className="fas fa-map-marker-alt"></i>
            {children}
        </components.ValueContainer>
    );


    return (
        <Select
            isClearable
            value={props.placeSelected}
            options={props.data}
            components={{Option,ValueContainer}}
            onChange={(selectedOption) => props.placeChangeHandler(selectedOption)}
            styles={{
                input: base => ({
                    ...base,
                    marginLeft: '10px'
                }),
                placeholder: base => ({
                    ...base,
                    marginLeft: "20px"
                }),
                singleValue: base => ({
                    ...base,
                    marginLeft: "20px"
                })
            }}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary25: '#FCDE2F',
                    primary: 'black',
                }
            })}
        />
    )
}


export default searchBoxPlace;