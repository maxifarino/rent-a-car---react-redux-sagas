import React from 'react';
import ItemSocialFooter from '../itemSocialFooter/itemSocialFooter';

const socialFooter = (props) => {
    
    const listItemSocialFooter = props.listItemSocial && props.listItemSocial.map(item => {
        return <ItemSocialFooter url={item.url} class={item.class} />
    });

    return (
        <ul className="social-footer list-inline">
            {listItemSocialFooter}
        </ul>
    )
}

export default socialFooter;

