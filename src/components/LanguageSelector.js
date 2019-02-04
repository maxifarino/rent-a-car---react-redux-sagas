import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import {UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle,} from 'reactstrap'

export class LanguageSelector extends Component{
	render(){
		const { i18n } = this.props;

		const changeLanguage = (lng) => {
			i18n.changeLanguage(lng);
		}

		const languages = ['es', 'en', 'pt'].filter(i=> i != i18n.language);

		return(
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>{this.props.i18n.language.toUpperCase()}</DropdownToggle>
				<DropdownMenu right>
					{languages.map(lang=><DropdownItem key={lang} onClick={() => changeLanguage(lang)}>{lang.toUpperCase()}</DropdownItem>)}
				</DropdownMenu>
			</UncontrolledDropdown>
		);
	}
}

export default withNamespaces()(LanguageSelector);