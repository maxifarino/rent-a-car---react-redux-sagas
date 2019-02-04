import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class Categories extends Component {

    constructor(props) {
        super(props);
    }

    firstColMd6 = () => {
        const { t } = this.props;
        const globalizedWord = t('todos');
        const amount = Math.ceil(this.props.listCategories.length / 2);
        return [...this.props.listCategories].slice(0, amount).map((element, index) => {
            return (
                <label className="special-checkbox">{index == 0 ? globalizedWord : element.name}
                    <input key={element.id}
                        onChange={() => this.props.unselectCategory(element.id)}
                        defaultChecked={element.isChecked}
                        checked={element.isChecked}
                        type="checkbox" />
                    <span className="checkmark" />
                </label>
            )
        })
    }

    secondColMd6 = () => {
        const length = this.props.listCategories.length;
        const mount = Math.ceil(length / 2);
        return [...this.props.listCategories].slice(mount, length).map((element, index) => {
            return (
                <label className="special-checkbox">{element.name}
                    <input key={element.id}
                        onChange={() => this.props.unselectCategory(element.id)}
                        defaultChecked={element.isChecked}
                        checked={element.isChecked}
                        type="checkbox" />
                    <span className="checkmark" />
                </label>
            )
        })
    }

    render() {
        const { t } = this.props;
        return (
            <div className="row categories w-100 mt-3 pt-4 pb-4 pl-4 pr-4" >
                <div className="col-md-12"><p>{t('categorias')}</p></div>
                <div className="col-md-6">
                    {this.firstColMd6()}
                </div>
                <div className="col-md-6">
                    {this.secondColMd6()}
                </div>
            </div>
        );
    }
}

export default withNamespaces()(Categories);