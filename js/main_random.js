function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomColorPicker(variable) {
    const colors = ['black', 'white', 'red', 'green',
        'blue', 'yellow', 'purple', 'aqua',
        'teal', 'navy', 'olive', 'lime',
        'fuchsia', 'maroon', 'silver', 'gray'];
    let color = colors[getRandomInt(colors.length)];
    document.documentElement.style.setProperty(variable, color);
}

function randomFontPicker(variable) {
    const fonts = ['blackout', 'LindenHill',
        'resistanceregular', 'Trickster_Regular',
        'Mourier_Regular', 'Ouroboros_Regular',
        'LeMurmure_Regular', 'Basteleur_Bold',
        'Basteleur_Moonlight'];
    let font = fonts[getRandomInt(fonts.length)];
    document.documentElement.style.setProperty(variable, font);
}

randomColorPicker('--color-bg');
randomColorPicker('--color-text');
randomFontPicker('--font-title');
randomFontPicker('--font-text');