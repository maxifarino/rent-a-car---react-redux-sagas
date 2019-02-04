/**React */
import React, { Component } from 'react';

/**Components */
import WhatsApp from './whatsApp/whatsApp';
import Slogan from './slogan/slogan';
import CancelBooking from './cancelBooking/cancelBooking';
import LoggingAccount from './loggingAccount/loggingAccount';
import Logo from './logo/logo';

class Header extends Component {

    render() {
        return (
            <div className="top-header row row-p pt-3 d-md-none d-sm-none d-none d-lg-flex ">
                <div className="col-md-4 p-0">
                    <Logo show={this.props.logo} />
                </div>

                <div className="col-md-8 p-0 text-right top-access text-light pt-1">

                    <Slogan data={this.props.data.phone} />

                    <CancelBooking show={this.props.data.showCancelBooking} />

                    <LoggingAccount show={this.props.data.showLogin} />

                    <WhatsApp data={this.props.data} />

                </div>
            </div>
        );
    }
}

export default Header;
