const classes = ['header', 'menu', 'menu_item', 'tabs',
    'tab_item', 'menu', 'link', 'tabs', 'tab_item', 'menu',
    'menu_item', 'menu', 'menu_item'];

function amountOfElements() {
    const object = {};

    classes.sort().forEach((key) => {
        if (key in object) {
            object[key] += 1;
        } else {
            object[key] = 1;
        }
    });
    return object;
}

console.log(amountOfElements());
