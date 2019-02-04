/**React */
import React, { Component } from 'react';

/**Grid */
import GridColumn from './../UI/grid/gridColumn';

/**Components */
import SiteMap from './siteMap/siteMap';
import Questions from './questions/questions';
import SocialFooter from './socialFooter/socialFooter';
import Access from './access/access';
import Logo from './logo/logo';

class Footer extends Component {

	render() {
		return (
			<footer className="row row-p pt-5 pb-5">

				<GridColumn class="col-md-3 col1">
					<Logo show={this.props.data.showLogo} />
					<h3>{this.props.data.subTitle}</h3>
					<p>
						Av. Cabildo 2280 - Local 89 CABA (Bs. As.)
						<br />De Lunes a Viernes de 09 a 18hs.
						<br />Sábados de 09 a 13hs
					</p>
					<SocialFooter listItemSocial={this.props.social} />
				</GridColumn>

				<GridColumn class="col col2">
					<SiteMap data={this.props.pages} />
				</GridColumn>

				<GridColumn class="col col3">
					{this.props.access.showAccess && <Access data={this.props.access} />}
				</GridColumn>

				<GridColumn class="col col4">
					<Questions phones={this.props.data.otherPhones}
						email={this.props.data.email} />
				</GridColumn>

				<GridColumn class="col-md-3 col5">
					<h3>Sitio seguro</h3>
					<img width="160" src="images/footer/godaddy.jpg" alt="GoDaddy" />
					<img width="85" src="images/footer/mcafee.jpg" alt="MCafee" />
					<img width="40" style={{ display: this.props.data.showAfipService ? 'block' : 'none' }} src="images/footer/afip.jpg" alt="AFIP" />
				</GridColumn>

			</footer>
		);
	}
}

export default Footer;