/**React */
import React from 'react';

/**Components */
import ItemSocial from './../itemSocial/itemSocial';

const navBarSocial = (props) => {
    const listItemSocial = props.listItemSocial && props.listItemSocial.map(item => {
        return <ItemSocial  url={item.url} class={item.class} />
    })    
    return (
        <ul className="nav navbar-nav ml-auto header-social">
            {listItemSocial}
            {props.children}
        </ul>
    )
}

export default navBarSocial;