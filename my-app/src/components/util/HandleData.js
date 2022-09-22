import Data from '../../data.json'

const buildTree = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes[i].items.length; j++) {
            let node = nodes[i].items[j];
            let found = nodes.find(n => n.category == node);
            if (found) {
                nodes[i].items[j] = Object.assign({}, found);
                found.removed = true;
            } else {
                nodes[i].items[j] = {
                    category: node,
                    items: []
                };
            }
        }
    }


    return nodes.reduce((arr, item) => {
        if (!item.removed) {
            arr.push(item);
        }
        return arr;
    }, []);
}

const menuData = buildTree(Data);
console.log(menuData)
export default menuData;