/**React */
import React, { Component } from 'react';

/**Components */
import NavMenu from './NavMenu';
import Header from './Header'
import Footer from './Footer';

class Layout extends Component {
  displayName = Layout.name

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" canvas="container">
        <Header data={this.props.configurations.header} logo={this.props.configurations.footer.showLogo} />
        <NavMenu data={this.props.configurations.socialNetwors} pages={this.props.configurations.pages} />
        {this.props.children}
        <Footer
          data={this.props.configurations.footer}
          pages={this.props.configurations.pages}
          social={this.props.configurations.socialNetwors}
          access={this.props.configurations.access}
        />
      </div>
    );
  }
}


export default Layout;
