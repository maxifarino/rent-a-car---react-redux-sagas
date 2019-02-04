import React, { Component } from 'react';
import { Input } from 'reactstrap';

class DropDowTime extends Component {

    constructor(props) {
        super(props);
        this.state = { hour: 0, minutes: 0 };
    }
    
    /** */
    componentWillReceiveProps(nextProps) {
        if (nextProps.hour) {
            this.setState({ hour: nextProps.hour })
        }
        if (nextProps.minutes) {
            this.setState({ minutes: nextProps.minutes })
        }
    }

    /** */
    onChangeHourHandler = (e) => {
        this.props.onChangeHourHandler({ [e.target.name]: e.target.value });
    }

    /** */
    onChangeMinutesHandler = (e) => {
        this.props.onChangeMinutesHandler({ [e.target.name]: e.target.value });
    }

    /** */
    render() {
        return (
            <>
                <Input value={this.state.hour} name="hour" type="select" onChange={this.onChangeHourHandler} className="form-control">
                    <option value="0">00</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                </Input>
                <Input value={this.state.minutes} name="minutes" onChange={this.onChangeMinutesHandler} type="select" className="form-control">
                    <option value="0">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                </Input>
            </>
        );
    }
}

export default DropDowTime;