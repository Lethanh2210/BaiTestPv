import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import menuData from "../util/HandleData"
import ProductList from "./ProductList";
import ProductListExpand from "./ProductListExpand";

export default function Menu() {
    console.log(JSON.stringify(menuData, null, '  '));

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgColor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    List Product
                </ListSubheader>
            }
        >
            {menuData?.map((item, index) => (
                item.items.length > 0 ? <ProductListExpand key={index} item={item}/> : <ProductList key={index} item={item}/>
            ))}
        </List>
    );
}
