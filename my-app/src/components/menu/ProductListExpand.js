import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import * as React from "react";
import List from "@mui/material/List";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import {Expand} from "@mui/icons-material";
import ProductList from "./ProductList";

export default function ProductListExpand(props){
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={props?.item?.category} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {props.item?.items.map((item,index) =>(
                    <List component="div" disablePadding key={index}>
                        <ListItemButton sx={{ pl: 4 }}>
                            {item.items.length > 0 ? <ProductListExpand item={item}/> : <ProductList item={item}/>}
                        </ListItemButton>
                    </List>
                ))}
            </Collapse>
        </div>
    )
}