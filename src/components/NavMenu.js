/**React */
import React, { Component } from 'react';
import { Navbar, Collapse } from 'reactstrap';

/**CCS */
import './NavMenu.css';

/**Components */
import LanguageSelector from './LanguageSelector';
import NavLinkContainer from './navLinkContainer/navLinkContainer';
import NavBarSocial from './../components/navBarSocial/navBarSocial';

class NavMenu extends Component {
	displayName = NavMenu.name

	render() {

		return (
			<Navbar id='mainNav' fixedTop fluid collapseOnSelect className='row row-p navbar-expand-sm navbar-rently'>
				<Collapse isOpen={true} className='navbar-collapse'>

					<NavLinkContainer pages={this.props.pages} />

					<NavBarSocial listItemSocial={this.props.data}>
						<LanguageSelector />
					</NavBarSocial>

				</Collapse>
			</Navbar>
		);
	}
}

export default NavMenu;