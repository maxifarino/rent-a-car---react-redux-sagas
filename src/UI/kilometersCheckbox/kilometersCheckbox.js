import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class kilometersCheckbox extends Component {

    KM_PERDAY = 'kmperday';
    UNLIMITED = 'unlimited';
    KM_PERDAY_VALUE = 200;
    UNLIMITED_VALUE = 0;

    constructor(props) {
        super(props);
    }

    selectCheckbox(event) {
        const value = event.target.value;
        this.props.kilometersChange(value == 'KM_PERDAY' ? this.KM_PERDAY_VALUE : this.UNLIMITED_VALUE);
    }

    render() {
        const { t } = this.props;

        const inputKMPerday = this.props.kmPerday ?
            <input type="radio" name="KMPERDAY" value="KM_PERDAY" defaultChecked onChange={event => this.selectCheckbox(event)} />
            : <input type="radio" name="KMPERDAY" value="KM_PERDAY" onChange={event => this.selectCheckbox(event)} />;

        const inputUnLimited = this.props.unLimited ?
            <input type="radio" name="KMPERDAY" value="UNLIMITED" defaultChecked onChange={event => this.selectCheckbox(event)} />
            : <input type="radio" name="KMPERDAY" value="UNLIMITED" onChange={event => this.selectCheckbox(event)} />;

        return (
            <>
                <label
                    className="special-checkbox d-inline mr-3">{t('KmDiarios')}
                    {inputKMPerday}
                    <span className="checkmark"></span>
                </label>

                <label
                    className="special-checkbox d-inline">{t('KMIlimitados')}
                    {inputUnLimited}
                    <span className="checkmark"></span>
                </label>
            </>
        );
    }
}

export default withNamespaces()(kilometersCheckbox);