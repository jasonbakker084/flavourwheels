var _0x2ccc = ['#D798AF', 'Toffee', '#87338C', 'Volatile\x20Acidity', '#C99EC7', 'Balsamic', 'Vinegar', 'sin', 'cos', '\x201\x200\x201\x20', '\x200\x200\x200\x20', 'path', 'alignment-baseline', 'middle', 'rotate(', 'wwOyV', 'EUVLR', 'translate(', 'rotate(-90\x20', 'XLrSN', 'map', 'rotate(90\x20', 'indexOf', 'innerHTML', 'Cyjqg', 'substring', 'lengt', 'tspan', 'appendChild', 'YgVZF', 'BPKmz', 'name', 'parentID', 'text-anchor', 'end', 'style', 'strokeWidth', '0px', 'gwHux', '0.3px', 'rotate(180\x20', 'fill', 'stroke', 'class', 'slice', 'onclick', 'clickAction(this)', 'white', 'sqrt', 'flavorsWine', 'value', 'push', 'replace', 'find', 'TKarM', 'getElementById', 'svgC', 'createElementNS', 'http://www.w3.org/2000/svg', 'setAttribute', 'transform', 'scale(1.03),\x20translate(-8,-8)', 'filter', '#C6D0E3', 'Primary\x20Aromas', 'Flower', '#ACB0D8', 'Peony', 'Elderflower', 'Acacai', 'Jasmine', 'Lavender', 'Rose', '#C4DFA3', 'Lime', 'Lemon', 'Marmalade', '#E99243', '#FAD1A6', 'Quince', 'Apple', 'Pear', 'Nectarine', 'Peach', 'Persimmon', '#EB4423', 'Tropical\x20Fruit', '#F6AC8C', 'Pineapple', 'Mango', 'Guava', 'Kiwi', 'Lychee', 'Bubblegum', '#B20E1F', 'Red\x20Fruit', '#DF947E', 'Cranberry', 'Red\x20Plum', 'Cherry', 'Raspberry', '#7E0E2A', 'Black\x20Fruit', '#E59596', 'Boysenberry', 'Black\x20Currant', 'Black\x20Cherry', 'Plum', 'Blackberry', 'Olive', '#B34C7E', '#E3AFC6', 'Raisin', 'Date', 'Fruitcake', '#3185C8', 'Noble\x20Rot', '#A7C5E8', 'Beeswax', 'Ginger', 'Saffron', '#19AEA0', 'Spice', 'White\x20Pepper', '#B8E1DF', 'Red\x20Pepper', 'Black\x20Pepper', 'Cinnamon', 'Anice', 'Asian\x205-Spice', 'Fennel', 'Mint', 'Thyme', '#A3B4CA', '#218538', 'Vegetable', '#BFDFB6', 'Grass', 'Tomato\x20Leaf', 'Bell\x20Pepper', 'Jalapeno', 'Green\x20Almond', 'Gooseberry', 'Black\x20Tea', 'Tertiary', '#679833', '#D1E7AE', 'Red\x20Beet', 'Volcanic\x20Rocks', 'Slate', 'Wet\x20Gravel', 'Faults', 'Microbial', '#E9EAA3', 'Butter', 'Cream', 'Sourdough', 'Lager', 'Truffle', 'Mushroom', '#B08022', 'Oak\x20Aging', '#E1C892', 'Vanilla', 'Coconut', 'Baking\x20Spices', 'Cigar\x20Box', 'Smoke', 'Dill', '#D37228', 'General\x20Aging', '#F1C192', 'Nuts', 'Cocoa', 'Leather', '#B36D5F', 'TCA\x20(Corked)', '#E4BDB1', 'Musty\x20Cardboard', 'Wet\x20Dog', 'Sulfid\x20&\x20Mercaptans', '#E6B396', 'Boiled\x20Eggs', 'Burnt\x20Rubber', 'Match\x20Box', 'Garlic', 'Cat\x20Pee', '#A5383D', 'Brettanomyces', '#DEA39B', 'Black\x20Cardamon', 'Band-Aid', 'Sweaty\x20Leather\x20Saddle', 'Horse\x20Manure', '#A81D64', 'Cooked'];
(function (_0x1e44c4, _0x2b1a23) {
    var _0x497c6d = function (_0x4724bd) {
        while (--_0x4724bd) {
            _0x1e44c4['push'](_0x1e44c4['shift']());
        }
    };
    _0x497c6d(++_0x2b1a23);
}(_0x2ccc, 0x1bf));
var _0x192d = function (_0x1e44c4, _0x2b1a23) {
    _0x1e44c4 = _0x1e44c4 - 0x0;
    var _0x497c6d = _0x2ccc[_0x1e44c4];
    return _0x497c6d;
};
let selectedFlavors = [];
var innerRadii = [0x32, 0x50, 0x91];
var outerRadii = [0x50, 0x91, 0xcd];
var ringnr = 0x3;
var steps = 0x6d;
var circlex = 0xe6;
var circley = 0xe6;
var parentSliceAutoSelect = !![];
var childSliceAutoDeselect = !![];
var slowness = 0x1;
var wheelSVG = document[_0x192d('0x0')](_0x192d('0x1'));
for (let i = ringnr * 0x2; i > 0x0; i--) {
    const _0x10c4b4 = 'g' + i;
    const _0x488062 = document[_0x192d('0x2')](_0x192d('0x3'), 'g');
    _0x488062[_0x192d('0x4')]('id', _0x10c4b4);
    if (i % 0x2 > 0x0) {
        _0x488062[_0x192d('0x4')](_0x192d('0x5'), _0x192d('0x6'));
        _0x488062[_0x192d('0x4')](_0x192d('0x7'), 'url(#dropshadow)');
    }
    wheelSVG['appendChild'](_0x488062);
}
var SVGBackup = wheelSVG['innerHTML'];
var flavorList = [{
    'ring': 0x1,
    'fromStep': 0x0,
    'toStep': 0x31,
    'color': _0x192d('0x8'),
    'name': _0x192d('0x9'),
    'id': 0xa,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x0,
    'toStep': 0xb,
    'color': '#555CA6',
    'name': _0x192d('0xa'),
    'id': 0x81,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x0,
    'toStep': 0x1,
    'color': _0x192d('0xb'),
    'name': 'Iris',
    'id': 0x432,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x1,
    'toStep': 0x2,
    'color': _0x192d('0xb'),
    'name': _0x192d('0xc'),
    'id': 0x433,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x2,
    'toStep': 0x3,
    'color': _0x192d('0xb'),
    'name': _0x192d('0xd'),
    'id': 0x434,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x3,
    'toStep': 0x4,
    'color': _0x192d('0xb'),
    'name': _0x192d('0xe'),
    'id': 0x435,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x4,
    'toStep': 0x5,
    'color': _0x192d('0xb'),
    'name': _0x192d('0xf'),
    'id': 0x436,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x5,
    'toStep': 0x6,
    'color': _0x192d('0xb'),
    'name': 'Honeysuckle',
    'id': 0x437,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x6,
    'toStep': 0x7,
    'color': '#ACB0D8',
    'name': 'Voilet',
    'id': 0x438,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x7,
    'toStep': 0x8,
    'color': _0x192d('0xb'),
    'name': _0x192d('0x10'),
    'id': 0x439,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x8,
    'toStep': 0x9,
    'color': _0x192d('0xb'),
    'name': _0x192d('0x11'),
    'id': 0x43a,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0x9,
    'toStep': 0xa,
    'color': '#ACB0D8',
    'name': 'Potpourri',
    'id': 0x43b,
    'parentID': 0x81
}, {
    'ring': 0x3,
    'fromStep': 0xa,
    'toStep': 0xb,
    'color': '#ACB0D8',
    'name': 'Hibiscus',
    'id': 0x43c,
    'parentID': 0x81
}, {
    'ring': 0x2,
    'fromStep': 0xb,
    'toStep': 0x10,
    'color': '#72B635',
    'name': 'Citrus',
    'id': 0x82,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0xb,
    'toStep': 0xc,
    'color': _0x192d('0x12'),
    'name': _0x192d('0x13'),
    'id': 0x43d,
    'parentID': 0x82
}, {
    'ring': 0x3,
    'fromStep': 0xc,
    'toStep': 0xd,
    'color': _0x192d('0x12'),
    'name': _0x192d('0x14'),
    'id': 0x43e,
    'parentID': 0x82
}, {
    'ring': 0x3,
    'fromStep': 0xd,
    'toStep': 0xe,
    'color': _0x192d('0x12'),
    'name': 'Grapefruit',
    'id': 0x43f,
    'parentID': 0x82
}, {
    'ring': 0x3,
    'fromStep': 0xe,
    'toStep': 0xf,
    'color': _0x192d('0x12'),
    'name': 'Orange',
    'id': 0x440,
    'parentID': 0x82
}, {
    'ring': 0x3,
    'fromStep': 0xf,
    'toStep': 0x10,
    'color': _0x192d('0x12'),
    'name': _0x192d('0x15'),
    'id': 0x441,
    'parentID': 0x82
}, {
    'ring': 0x2,
    'fromStep': 0x10,
    'toStep': 0x17,
    'color': _0x192d('0x16'),
    'name': 'Tree\x20Fruit',
    'id': 0x83,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x10,
    'toStep': 0x11,
    'color': _0x192d('0x17'),
    'name': _0x192d('0x18'),
    'id': 0x442,
    'parentID': 0x83
}, {
    'ring': 0x3,
    'fromStep': 0x11,
    'toStep': 0x12,
    'color': _0x192d('0x17'),
    'name': _0x192d('0x19'),
    'id': 0x443,
    'parentID': 0x83
}, {
    'ring': 0x3,
    'fromStep': 0x12,
    'toStep': 0x13,
    'color': _0x192d('0x17'),
    'name': _0x192d('0x1a'),
    'id': 0x444,
    'parentID': 0x83
}, {
    'ring': 0x3,
    'fromStep': 0x13,
    'toStep': 0x14,
    'color': _0x192d('0x17'),
    'name': _0x192d('0x1b'),
    'id': 0x445,
    'parentID': 0x83
}, {
    'ring': 0x3,
    'fromStep': 0x14,
    'toStep': 0x15,
    'color': _0x192d('0x17'),
    'name': _0x192d('0x1c'),
    'id': 0x446,
    'parentID': 0x83
}, {
    'ring': 0x3,
    'fromStep': 0x15,
    'toStep': 0x16,
    'color': '#FAD1A6',
    'name': 'Apricote',
    'id': 0x447,
    'parentID': 0x83
}, {
    'ring': 0x3,
    'fromStep': 0x16,
    'toStep': 0x17,
    'color': _0x192d('0x17'),
    'name': _0x192d('0x1d'),
    'id': 0x448,
    'parentID': 0x83
}, {
    'ring': 0x2,
    'fromStep': 0x17,
    'toStep': 0x1d,
    'color': _0x192d('0x1e'),
    'name': _0x192d('0x1f'),
    'id': 0x84,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x17,
    'toStep': 0x18,
    'color': _0x192d('0x20'),
    'name': _0x192d('0x21'),
    'id': 0x449,
    'parentID': 0x84
}, {
    'ring': 0x3,
    'fromStep': 0x18,
    'toStep': 0x19,
    'color': _0x192d('0x20'),
    'name': _0x192d('0x22'),
    'id': 0x44a,
    'parentID': 0x84
}, {
    'ring': 0x3,
    'fromStep': 0x19,
    'toStep': 0x1a,
    'color': _0x192d('0x20'),
    'name': _0x192d('0x23'),
    'id': 0x44b,
    'parentID': 0x84
}, {
    'ring': 0x3,
    'fromStep': 0x1a,
    'toStep': 0x1b,
    'color': '#F6AC8C',
    'name': _0x192d('0x24'),
    'id': 0x44c,
    'parentID': 0x84
}, {
    'ring': 0x3,
    'fromStep': 0x1b,
    'toStep': 0x1c,
    'color': _0x192d('0x20'),
    'name': _0x192d('0x25'),
    'id': 0x44d,
    'parentID': 0x84
}, {
    'ring': 0x3,
    'fromStep': 0x1c,
    'toStep': 0x1d,
    'color': _0x192d('0x20'),
    'name': _0x192d('0x26'),
    'id': 0x44e,
    'parentID': 0x84
}, {
    'ring': 0x1,
    'fromStep': 0x31,
    'toStep': 0x4a,
    'color': _0x192d('0x8'),
    'name': _0x192d('0x9'),
    'id': 0xa,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x1d,
    'toStep': 0x24,
    'color': _0x192d('0x27'),
    'name': _0x192d('0x28'),
    'id': 0x85,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x1d,
    'toStep': 0x1e,
    'color': _0x192d('0x29'),
    'name': _0x192d('0x2a'),
    'id': 0x44f,
    'parentID': 0x85
}, {
    'ring': 0x3,
    'fromStep': 0x1e,
    'toStep': 0x1f,
    'color': _0x192d('0x29'),
    'name': _0x192d('0x2b'),
    'id': 0x450,
    'parentID': 0x85
}, {
    'ring': 0x3,
    'fromStep': 0x1f,
    'toStep': 0x20,
    'color': _0x192d('0x29'),
    'name': 'Pomegranate',
    'id': 0x451,
    'parentID': 0x85
}, {
    'ring': 0x3,
    'fromStep': 0x20,
    'toStep': 0x21,
    'color': _0x192d('0x29'),
    'name': 'Sour\x20Cherry',
    'id': 0x452,
    'parentID': 0x85
}, {
    'ring': 0x3,
    'fromStep': 0x21,
    'toStep': 0x22,
    'color': _0x192d('0x29'),
    'name': 'Strawberry',
    'id': 0x453,
    'parentID': 0x85
}, {
    'ring': 0x3,
    'fromStep': 0x22,
    'toStep': 0x23,
    'color': _0x192d('0x29'),
    'name': _0x192d('0x2c'),
    'id': 0x454,
    'parentID': 0x85
}, {
    'ring': 0x3,
    'fromStep': 0x23,
    'toStep': 0x24,
    'color': _0x192d('0x29'),
    'name': _0x192d('0x2d'),
    'id': 0x455,
    'parentID': 0x85
}, {
    'ring': 0x2,
    'fromStep': 0x24,
    'toStep': 0x2a,
    'color': _0x192d('0x2e'),
    'name': _0x192d('0x2f'),
    'id': 0x86,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x24,
    'toStep': 0x25,
    'color': _0x192d('0x30'),
    'name': _0x192d('0x31'),
    'id': 0x456,
    'parentID': 0x86
}, {
    'ring': 0x3,
    'fromStep': 0x25,
    'toStep': 0x26,
    'color': _0x192d('0x30'),
    'name': _0x192d('0x32'),
    'id': 0x457,
    'parentID': 0x86
}, {
    'ring': 0x3,
    'fromStep': 0x26,
    'toStep': 0x27,
    'color': _0x192d('0x30'),
    'name': _0x192d('0x33'),
    'id': 0x458,
    'parentID': 0x86
}, {
    'ring': 0x3,
    'fromStep': 0x27,
    'toStep': 0x28,
    'color': _0x192d('0x30'),
    'name': _0x192d('0x34'),
    'id': 0x459,
    'parentID': 0x86
}, {
    'ring': 0x3,
    'fromStep': 0x28,
    'toStep': 0x29,
    'color': '#E59596',
    'name': _0x192d('0x35'),
    'id': 0x45a,
    'parentID': 0x86
}, {
    'ring': 0x3,
    'fromStep': 0x29,
    'toStep': 0x2a,
    'color': _0x192d('0x30'),
    'name': _0x192d('0x36'),
    'id': 0x45b,
    'parentID': 0x86
}, {
    'ring': 0x2,
    'fromStep': 0x2a,
    'toStep': 0x2e,
    'color': _0x192d('0x37'),
    'name': 'Dried\x20Fruit',
    'id': 0x87,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x2a,
    'toStep': 0x2b,
    'color': _0x192d('0x38'),
    'name': _0x192d('0x39'),
    'id': 0x45c,
    'parentID': 0x87
}, {
    'ring': 0x3,
    'fromStep': 0x2b,
    'toStep': 0x2c,
    'color': _0x192d('0x38'),
    'name': 'Fig',
    'id': 0x45d,
    'parentID': 0x87
}, {
    'ring': 0x3,
    'fromStep': 0x2c,
    'toStep': 0x2d,
    'color': _0x192d('0x38'),
    'name': _0x192d('0x3a'),
    'id': 0x45e,
    'parentID': 0x87
}, {
    'ring': 0x3,
    'fromStep': 0x2d,
    'toStep': 0x2e,
    'color': _0x192d('0x38'),
    'name': _0x192d('0x3b'),
    'id': 0x45f,
    'parentID': 0x87
}, {
    'ring': 0x2,
    'fromStep': 0x2e,
    'toStep': 0x31,
    'color': _0x192d('0x3c'),
    'name': _0x192d('0x3d'),
    'id': 0x88,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x2e,
    'toStep': 0x2f,
    'color': _0x192d('0x3e'),
    'name': _0x192d('0x3f'),
    'id': 0x460,
    'parentID': 0x88
}, {
    'ring': 0x3,
    'fromStep': 0x2f,
    'toStep': 0x30,
    'color': _0x192d('0x3e'),
    'name': _0x192d('0x40'),
    'id': 0x461,
    'parentID': 0x88
}, {
    'ring': 0x3,
    'fromStep': 0x30,
    'toStep': 0x31,
    'color': _0x192d('0x3e'),
    'name': _0x192d('0x41'),
    'id': 0x462,
    'parentID': 0x88
}, {
    'ring': 0x2,
    'fromStep': 0x31,
    'toStep': 0x3b,
    'color': _0x192d('0x42'),
    'name': _0x192d('0x43'),
    'id': 0x89,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x31,
    'toStep': 0x32,
    'color': '#B8E1DF',
    'name': _0x192d('0x44'),
    'id': 0x463,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x32,
    'toStep': 0x33,
    'color': _0x192d('0x45'),
    'name': _0x192d('0x46'),
    'id': 0x464,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x33,
    'toStep': 0x34,
    'color': _0x192d('0x45'),
    'name': _0x192d('0x47'),
    'id': 0x465,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x34,
    'toStep': 0x35,
    'color': '#B8E1DF',
    'name': _0x192d('0x48'),
    'id': 0x466,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x35,
    'toStep': 0x36,
    'color': _0x192d('0x45'),
    'name': _0x192d('0x49'),
    'id': 0x467,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x36,
    'toStep': 0x37,
    'color': _0x192d('0x45'),
    'name': _0x192d('0x4a'),
    'id': 0x468,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x37,
    'toStep': 0x38,
    'color': _0x192d('0x45'),
    'name': _0x192d('0x4b'),
    'id': 0x469,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x38,
    'toStep': 0x39,
    'color': '#B8E1DF',
    'name': 'Eucalyptus',
    'id': 0x46a,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x39,
    'toStep': 0x3a,
    'color': _0x192d('0x45'),
    'name': _0x192d('0x4c'),
    'id': 0x46b,
    'parentID': 0x89
}, {
    'ring': 0x3,
    'fromStep': 0x3a,
    'toStep': 0x3b,
    'color': _0x192d('0x45'),
    'name': _0x192d('0x4d'),
    'id': 0x46c,
    'parentID': 0x89
}, {
    'ring': 0x1,
    'fromStep': 0x4a,
    'toStep': 0x50,
    'color': _0x192d('0x4e'),
    'name': 'Secondary',
    'id': 0xb,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x3b,
    'toStep': 0x43,
    'color': _0x192d('0x4f'),
    'name': _0x192d('0x50'),
    'id': 0x8a,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x3b,
    'toStep': 0x3c,
    'color': _0x192d('0x51'),
    'name': _0x192d('0x52'),
    'id': 0x46d,
    'parentID': 0x8a
}, {
    'ring': 0x3,
    'fromStep': 0x3c,
    'toStep': 0x3d,
    'color': '#BFDFB6',
    'name': _0x192d('0x53'),
    'id': 0x46e,
    'parentID': 0x8a
}, {
    'ring': 0x3,
    'fromStep': 0x3d,
    'toStep': 0x3e,
    'color': '#BFDFB6',
    'name': _0x192d('0x54'),
    'id': 0x46f,
    'parentID': 0x8a
}, {
    'ring': 0x3,
    'fromStep': 0x3e,
    'toStep': 0x3f,
    'color': _0x192d('0x51'),
    'name': _0x192d('0x55'),
    'id': 0x470,
    'parentID': 0x8a
}, {
    'ring': 0x3,
    'fromStep': 0x3f,
    'toStep': 0x40,
    'color': _0x192d('0x51'),
    'name': _0x192d('0x56'),
    'id': 0x471,
    'parentID': 0x8a
}, {
    'ring': 0x3,
    'fromStep': 0x40,
    'toStep': 0x41,
    'color': _0x192d('0x51'),
    'name': _0x192d('0x57'),
    'id': 0x472,
    'parentID': 0x8a
}, {
    'ring': 0x3,
    'fromStep': 0x41,
    'toStep': 0x42,
    'color': '#BFDFB6',
    'name': 'Sun\x20dried\x20Tom',
    'id': 0x473,
    'parentID': 0x8a
}, {
    'ring': 0x3,
    'fromStep': 0x42,
    'toStep': 0x43,
    'color': _0x192d('0x51'),
    'name': 'Tomato',
    'id': 0x474,
    'parentID': 0x8a
}, {
    'ring': 0x3,
    'fromStep': 0x42,
    'toStep': 0x43,
    'color': _0x192d('0x51'),
    'name': _0x192d('0x58'),
    'id': 0x475,
    'parentID': 0x8a
}, {
    'ring': 0x1,
    'fromStep': 0x50,
    'toStep': 0x5c,
    'color': _0x192d('0x8'),
    'name': _0x192d('0x59'),
    'id': 0xc,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x43,
    'toStep': 0x4a,
    'color': _0x192d('0x5a'),
    'name': 'Earth',
    'id': 0x8b,
    'parentID': 0xa
}, {
    'ring': 0x3,
    'fromStep': 0x43,
    'toStep': 0x44,
    'color': _0x192d('0x5b'),
    'name': 'Clay\x20Pot',
    'id': 0x476,
    'parentID': 0x8b
}, {
    'ring': 0x3,
    'fromStep': 0x47,
    'toStep': 0x48,
    'color': _0x192d('0x5b'),
    'name': _0x192d('0x5c'),
    'id': 0x477,
    'parentID': 0x8b
}, {
    'ring': 0x3,
    'fromStep': 0x48,
    'toStep': 0x49,
    'color': '#D1E7AE',
    'name': _0x192d('0x5d'),
    'id': 0x478,
    'parentID': 0x8b
}, {
    'ring': 0x3,
    'fromStep': 0x49,
    'toStep': 0x4a,
    'color': '#D1E7AE',
    'name': 'Petroleum',
    'id': 0x479,
    'parentID': 0x8b
}, {
    'ring': 0x3,
    'fromStep': 0x44,
    'toStep': 0x45,
    'color': _0x192d('0x5b'),
    'name': _0x192d('0x5e'),
    'id': 0x47a,
    'parentID': 0x8b
}, {
    'ring': 0x3,
    'fromStep': 0x45,
    'toStep': 0x46,
    'color': '#D1E7AE',
    'name': _0x192d('0x5f'),
    'id': 0x47b,
    'parentID': 0x8b
}, {
    'ring': 0x3,
    'fromStep': 0x46,
    'toStep': 0x47,
    'color': _0x192d('0x5b'),
    'name': 'Potting\x20Soil',
    'id': 0x47c,
    'parentID': 0x8b
}, {
    'ring': 0x1,
    'fromStep': 0x5c,
    'toStep': 0x6d,
    'color': '#E55831',
    'name': _0x192d('0x60'),
    'id': 0xd,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x4a,
    'toStep': 0x50,
    'color': '#B3B326',
    'name': _0x192d('0x61'),
    'id': 0x8c,
    'parentID': 0xb
}, {
    'ring': 0x3,
    'fromStep': 0x4a,
    'toStep': 0x4b,
    'color': _0x192d('0x62'),
    'name': _0x192d('0x63'),
    'id': 0x47d,
    'parentID': 0x8c
}, {
    'ring': 0x3,
    'fromStep': 0x4b,
    'toStep': 0x4c,
    'color': _0x192d('0x62'),
    'name': _0x192d('0x64'),
    'id': 0x47e,
    'parentID': 0x8c
}, {
    'ring': 0x3,
    'fromStep': 0x4c,
    'toStep': 0x4d,
    'color': _0x192d('0x62'),
    'name': _0x192d('0x65'),
    'id': 0x47f,
    'parentID': 0x8c
}, {
    'ring': 0x3,
    'fromStep': 0x4d,
    'toStep': 0x4e,
    'color': _0x192d('0x62'),
    'name': _0x192d('0x66'),
    'id': 0x480,
    'parentID': 0x8c
}, {
    'ring': 0x3,
    'fromStep': 0x4e,
    'toStep': 0x4f,
    'color': _0x192d('0x62'),
    'name': _0x192d('0x67'),
    'id': 0x481,
    'parentID': 0x8c
}, {
    'ring': 0x3,
    'fromStep': 0x4f,
    'toStep': 0x50,
    'color': _0x192d('0x62'),
    'name': _0x192d('0x68'),
    'id': 0x482,
    'parentID': 0x8c
}, {
    'ring': 0x2,
    'fromStep': 0x50,
    'toStep': 0x56,
    'color': _0x192d('0x69'),
    'name': _0x192d('0x6a'),
    'id': 0x8d,
    'parentID': 0xc
}, {
    'ring': 0x3,
    'fromStep': 0x50,
    'toStep': 0x51,
    'color': _0x192d('0x6b'),
    'name': _0x192d('0x6c'),
    'id': 0x483,
    'parentID': 0x8d
}, {
    'ring': 0x3,
    'fromStep': 0x51,
    'toStep': 0x52,
    'color': _0x192d('0x6b'),
    'name': _0x192d('0x6d'),
    'id': 0x484,
    'parentID': 0x8d
}, {
    'ring': 0x3,
    'fromStep': 0x52,
    'toStep': 0x53,
    'color': _0x192d('0x6b'),
    'name': _0x192d('0x6e'),
    'id': 0x485,
    'parentID': 0x8d
}, {
    'ring': 0x3,
    'fromStep': 0x53,
    'toStep': 0x54,
    'color': '#E1C892',
    'name': _0x192d('0x6f'),
    'id': 0x486,
    'parentID': 0x8d
}, {
    'ring': 0x3,
    'fromStep': 0x54,
    'toStep': 0x55,
    'color': _0x192d('0x6b'),
    'name': _0x192d('0x70'),
    'id': 0x487,
    'parentID': 0x8d
}, {
    'ring': 0x3,
    'fromStep': 0x55,
    'toStep': 0x56,
    'color': _0x192d('0x6b'),
    'name': _0x192d('0x71'),
    'id': 0x488,
    'parentID': 0x8d
}, {
    'ring': 0x2,
    'fromStep': 0x56,
    'toStep': 0x5c,
    'color': _0x192d('0x72'),
    'name': _0x192d('0x73'),
    'id': 0x8e,
    'parentID': 0xc
}, {
    'ring': 0x3,
    'fromStep': 0x56,
    'toStep': 0x57,
    'color': _0x192d('0x74'),
    'name': 'Dried\x20Fruit',
    'id': 0x489,
    'parentID': 0x8e
}, {
    'ring': 0x3,
    'fromStep': 0x57,
    'toStep': 0x58,
    'color': _0x192d('0x74'),
    'name': _0x192d('0x75'),
    'id': 0x48a,
    'parentID': 0x8e
}, {
    'ring': 0x3,
    'fromStep': 0x58,
    'toStep': 0x59,
    'color': _0x192d('0x74'),
    'name': 'Tobacco',
    'id': 0x48b,
    'parentID': 0x8e
}, {
    'ring': 0x3,
    'fromStep': 0x59,
    'toStep': 0x5a,
    'color': _0x192d('0x74'),
    'name': 'Coffee',
    'id': 0x48c,
    'parentID': 0x8e
}, {
    'ring': 0x3,
    'fromStep': 0x5a,
    'toStep': 0x5b,
    'color': _0x192d('0x74'),
    'name': _0x192d('0x76'),
    'id': 0x48d,
    'parentID': 0x8e
}, {
    'ring': 0x3,
    'fromStep': 0x5b,
    'toStep': 0x5c,
    'color': _0x192d('0x74'),
    'name': _0x192d('0x77'),
    'id': 0x48e,
    'parentID': 0x8e
}, {
    'ring': 0x2,
    'fromStep': 0x5c,
    'toStep': 0x5e,
    'color': _0x192d('0x78'),
    'name': _0x192d('0x79'),
    'id': 0x8f,
    'parentID': 0xd
}, {
    'ring': 0x3,
    'fromStep': 0x5c,
    'toStep': 0x5d,
    'color': _0x192d('0x7a'),
    'name': _0x192d('0x7b'),
    'id': 0x48f,
    'parentID': 0x8f
}, {
    'ring': 0x3,
    'fromStep': 0x5d,
    'toStep': 0x5e,
    'color': _0x192d('0x7a'),
    'name': _0x192d('0x7c'),
    'id': 0x490,
    'parentID': 0x8f
}, {
    'ring': 0x2,
    'fromStep': 0x5e,
    'toStep': 0x65,
    'color': '#BA5B33',
    'name': _0x192d('0x7d'),
    'id': 0x90,
    'parentID': 0xd
}, {
    'ring': 0x3,
    'fromStep': 0x5e,
    'toStep': 0x5f,
    'color': '#E6B396',
    'name': 'Cured\x20Meat',
    'id': 0x491,
    'parentID': 0x90
}, {
    'ring': 0x3,
    'fromStep': 0x5f,
    'toStep': 0x60,
    'color': _0x192d('0x7e'),
    'name': _0x192d('0x7f'),
    'id': 0x492,
    'parentID': 0x90
}, {
    'ring': 0x3,
    'fromStep': 0x60,
    'toStep': 0x61,
    'color': _0x192d('0x7e'),
    'name': _0x192d('0x80'),
    'id': 0x493,
    'parentID': 0x90
}, {
    'ring': 0x3,
    'fromStep': 0x61,
    'toStep': 0x62,
    'color': '#E6B396',
    'name': _0x192d('0x81'),
    'id': 0x494,
    'parentID': 0x90
}, {
    'ring': 0x3,
    'fromStep': 0x62,
    'toStep': 0x63,
    'color': '#E6B396',
    'name': _0x192d('0x82'),
    'id': 0x495,
    'parentID': 0x90
}, {
    'ring': 0x3,
    'fromStep': 0x63,
    'toStep': 0x64,
    'color': _0x192d('0x7e'),
    'name': 'Onion',
    'id': 0x496,
    'parentID': 0x90
}, {
    'ring': 0x3,
    'fromStep': 0x64,
    'toStep': 0x65,
    'color': _0x192d('0x7e'),
    'name': _0x192d('0x83'),
    'id': 0x497,
    'parentID': 0x90
}, {
    'ring': 0x2,
    'fromStep': 0x65,
    'toStep': 0x69,
    'color': _0x192d('0x84'),
    'name': _0x192d('0x85'),
    'id': 0x91,
    'parentID': 0xd
}, {
    'ring': 0x3,
    'fromStep': 0x65,
    'toStep': 0x66,
    'color': _0x192d('0x86'),
    'name': _0x192d('0x87'),
    'id': 0x498,
    'parentID': 0x91
}, {
    'ring': 0x3,
    'fromStep': 0x66,
    'toStep': 0x67,
    'color': _0x192d('0x86'),
    'name': _0x192d('0x88'),
    'id': 0x499,
    'parentID': 0x91
}, {
    'ring': 0x3,
    'fromStep': 0x67,
    'toStep': 0x68,
    'color': _0x192d('0x86'),
    'name': _0x192d('0x89'),
    'id': 0x49a,
    'parentID': 0x91
}, {
    'ring': 0x3,
    'fromStep': 0x68,
    'toStep': 0x69,
    'color': '#DEA39B',
    'name': _0x192d('0x8a'),
    'id': 0x49b,
    'parentID': 0x91
}, {
    'ring': 0x2,
    'fromStep': 0x69,
    'toStep': 0x6b,
    'color': _0x192d('0x8b'),
    'name': _0x192d('0x8c'),
    'id': 0x92,
    'parentID': 0xd
}, {
    'ring': 0x3,
    'fromStep': 0x69,
    'toStep': 0x6a,
    'color': _0x192d('0x8d'),
    'name': 'Stewed\x20Fruit',
    'id': 0x49c,
    'parentID': 0x92
}, {
    'ring': 0x3,
    'fromStep': 0x6a,
    'toStep': 0x6b,
    'color': _0x192d('0x8d'),
    'name': _0x192d('0x8e'),
    'id': 0x49d,
    'parentID': 0x92
}, {
    'ring': 0x2,
    'fromStep': 0x6b,
    'toStep': 0x6d,
    'color': _0x192d('0x8f'),
    'name': _0x192d('0x90'),
    'id': 0x93,
    'parentID': 0xd
}, {
    'ring': 0x3,
    'fromStep': 0x6b,
    'toStep': 0x6c,
    'color': _0x192d('0x91'),
    'name': _0x192d('0x92'),
    'id': 0x49e,
    'parentID': 0x93
}, {
    'ring': 0x3,
    'fromStep': 0x6c,
    'toStep': 0x6d,
    'color': _0x192d('0x91'),
    'name': _0x192d('0x93'),
    'id': 0x49f,
    'parentID': 0x93
}];
const drawWheel = () => flavorList['map'](_0x27e6c9 => drawSlice(_0x27e6c9));
var drawSlice = ({ring, fromStep, toStep, color, name, id}) => {
    var _0x5d9614 = innerRadii[ring - 0x1];
    var _0x25e84d = outerRadii[ring - 0x1];
    var _0xebf359 = fromStep / steps * 0x2 * Math['PI'];
    var _0x4760c8 = toStep / steps * 0x2 * Math['PI'];
    var _0xdbb0d6 = circlex + Math[_0x192d('0x94')](_0xebf359) * _0x5d9614;
    var _0x283a2c = circley - Math[_0x192d('0x95')](_0xebf359) * _0x5d9614;
    var _0x4c6e6f = circlex + Math[_0x192d('0x94')](_0xebf359) * _0x25e84d;
    var _0x1dc2e8 = circley - Math[_0x192d('0x95')](_0xebf359) * _0x25e84d;
    var _0x279ae7 = circlex + Math[_0x192d('0x94')](_0x4760c8) * _0x25e84d;
    var _0xe92a67 = circley - Math[_0x192d('0x95')](_0x4760c8) * _0x25e84d;
    var _0x539d91 = circlex + Math['sin'](_0x4760c8) * _0x5d9614;
    var _0x233a46 = circley - Math[_0x192d('0x95')](_0x4760c8) * _0x5d9614;
    var _0x138f58 = 'M' + _0xdbb0d6 + '\x20' + _0x283a2c + 'L\x20' + _0x4c6e6f + '\x20' + _0x1dc2e8 + 'A' + _0x25e84d + '\x20' + _0x25e84d + _0x192d('0x96') + _0x279ae7 + '\x20' + _0xe92a67 + 'L' + _0x539d91 + '\x20' + _0x233a46 + 'A' + _0x5d9614 + '\x20' + _0x5d9614 + _0x192d('0x97') + _0xdbb0d6 + '\x20' + _0x283a2c;
    var _0x4498fb = document[_0x192d('0x2')](_0x192d('0x3'), _0x192d('0x98'));
    _0x4498fb['setAttribute']('d', _0x138f58);
    var _0x50bdcd = document[_0x192d('0x2')](_0x192d('0x3'), 'text');
    _0x50bdcd[_0x192d('0x4')]('x', circlex);
    _0x50bdcd[_0x192d('0x4')]('y', circley);
    _0x50bdcd[_0x192d('0x4')](_0x192d('0x99'), _0x192d('0x9a'));
    var _0x3c162e = (fromStep + toStep) / steps * 0xb4 - 0x5a;
    let _0xa742f5 = _0x3c162e;
    if (_0x3c162e > 0x5a) {
        _0xa742f5 = _0x3c162e - 0.2;
    }
    var _0x2985de = _0x192d('0x9b') + _0xa742f5 + '\x20' + circlex + '\x20' + circley + '),';
    if (ring == 0x1) {
        if (_0x192d('0x9c') !== _0x192d('0x9d')) {
            let _0x422f50 = (_0x5d9614 + _0x25e84d) / 1.82;
            let _0x5b492f = 0x0;
            _0x2985de += _0x192d('0x9e') + _0x422f50 + ')';
            if (_0x3c162e > 0x0 && _0x3c162e < 0xb4) {
                _0x2985de += _0x192d('0x9f') + circlex + '\x20' + circley + ')';
                _0x5b492f = -5.5;
            }
            if (_0x3c162e > 0xb4 || _0x3c162e < 0x0) {
                if ('guhjX' === _0x192d('0xa0')) {
                    return flavorList[_0x192d('0x7')](_0x3608d1 => _0x3608d1['parentID'] == slice['id'])[_0x192d('0xa1')](_0x4a47ed => _0x4a47ed['id'])[_0x192d('0xa1')](_0x51d088 => document['getElementById'](_0x51d088))[_0x192d('0x7')](_0x73959d => isSelected(_0x73959d));
                } else {
                    _0x2985de += _0x192d('0xa2') + circlex + '\x20' + circley + ')';
                }
            }
            _0x50bdcd[_0x192d('0x4')]('text-anchor', _0x192d('0x9a'));
            let _0x426d33 = name[_0x192d('0xa3')]('/');
            if (_0x426d33 == -0x1) {
                _0x50bdcd[_0x192d('0xa4')] = name;
            } else {
                if (_0x192d('0xa5') === 'LYDWp') {
                    wheelSVG['innerHTML'] = SVGBackup;
                    drawWheel();
                } else {
                    let _0x34ead3 = name[_0x192d('0xa6')](0x0, _0x426d33 + 0x1);
                    let _0x263d49 = name[_0x192d('0xa6')](_0x426d33 + 0x1, name[_0x192d('0xa7')]);
                    let _0xc72dc5 = document[_0x192d('0x2')](_0x192d('0x3'), _0x192d('0xa8'));
                    _0xc72dc5[_0x192d('0xa4')] = _0x34ead3;
                    _0xc72dc5[_0x192d('0x4')]('x', circlex);
                    _0xc72dc5['setAttribute']('dy', _0x5b492f);
                    _0x50bdcd[_0x192d('0xa9')](_0xc72dc5);
                    let _0x2b99b7 = document[_0x192d('0x2')](_0x192d('0x3'), _0x192d('0xa8'));
                    _0x2b99b7[_0x192d('0xa4')] = _0x263d49;
                    _0x2b99b7[_0x192d('0x4')]('x', circlex);
                    _0x2b99b7[_0x192d('0x4')]('dy', '6');
                    _0x50bdcd[_0x192d('0xa9')](_0x2b99b7);
                }
            }
        } else {
            let _0x1d7d83 = result;
            result = getFlavorFamily(getParentFlavor(flavor)) + '->' + _0x1d7d83;
        }
    } else {
        let _0x260377 = _0x25e84d - 0x3;
        _0x2985de += _0x192d('0x9e') + _0x260377 + ')';
        if (_0x3c162e > 0x5a) {
            let _0x260377 = _0x25e84d - 0x5;
            _0x2985de += 'rotate(180\x20' + circlex + '\x20' + circley + ')';
        } else {
            if (_0x192d('0xaa') === _0x192d('0xab')) {
                let _0x317775 = flavor[_0x192d('0xac')];
                if (flavor[_0x192d('0xad')] != '0') {
                    let _0x273983 = _0x317775;
                    _0x317775 = getFlavorFamily(getParentFlavor(flavor)) + '->' + _0x273983;
                }
                return _0x317775;
            } else {
                _0x50bdcd[_0x192d('0x4')](_0x192d('0xae'), _0x192d('0xaf'));
            }
        }
        _0x50bdcd[_0x192d('0xa4')] = name;
    }
    _0x50bdcd[_0x192d('0x4')]('transform', _0x2985de);
    _0x50bdcd[_0x192d('0xb0')][_0x192d('0xb1')] = _0x192d('0xb2');
    let _0x5990c0 = 'white';
    if (isColorLight(color)) {
        if (_0x192d('0xb3') === 'gwHux') {
            _0x5990c0 = 'black';
            _0x50bdcd[_0x192d('0xb0')]['strokeWidth'] = _0x192d('0xb4');
        } else {
            let _0x56ab5 = _0x25e84d - 0x5;
            _0x2985de += _0x192d('0xb5') + circlex + '\x20' + circley + ')';
        }
    }
    _0x50bdcd[_0x192d('0xb0')][_0x192d('0xb6')] = _0x5990c0;
    _0x50bdcd['style'][_0x192d('0xb7')] = _0x5990c0;
    var _0x51258e = document['createElementNS'](_0x192d('0x3'), 'g');
    _0x51258e[_0x192d('0x4')]('id', '' + id);
    _0x51258e[_0x192d('0x4')](_0x192d('0xb8'), _0x192d('0xb9'));
    _0x51258e[_0x192d('0x4')](_0x192d('0xba'), _0x192d('0xbb'));
    _0x51258e[_0x192d('0xb0')][_0x192d('0xb7')] = _0x192d('0xbc');
    _0x51258e[_0x192d('0xb0')][_0x192d('0xb6')] = color;
    _0x4498fb[_0x192d('0xb0')]['strokeWidth'] = '1px';
    _0x51258e[_0x192d('0xa9')](_0x4498fb);
    _0x51258e[_0x192d('0xa9')](_0x50bdcd);
    var _0x2f97ed = 'g' + ring * 0x2;
    document[_0x192d('0x0')](_0x2f97ed)[_0x192d('0xa9')](_0x51258e);
};
const isColorLight = _0x3c6b24 => {
    let _0x3e026b = parseInt(_0x3c6b24[_0x192d('0xa6')](0x1, 0x3), 0x10);
    let _0x518684 = parseInt(_0x3c6b24[_0x192d('0xa6')](0x3, 0x5), 0x10);
    let _0xdb7148 = parseInt(_0x3c6b24[_0x192d('0xa6')](0x5, 0x7), 0x10);
    hsp = Math[_0x192d('0xbd')](0.299 * (_0x3e026b * _0x3e026b) + 0.587 * (_0x518684 * _0x518684) + 0.114 * (_0xdb7148 * _0xdb7148));
    return hsp > 0xd2;
};
const clickAction = _0x2bebf1 => {
    isSelected(_0x2bebf1) ? deselectSlice(_0x2bebf1) : selectSlice(_0x2bebf1);
    document[_0x192d('0x0')](_0x192d('0xbe'))[_0x192d('0xbf')] = getSelectedFlavorIds();
};
const selectSlice = _0x4e51c5 => {
    if (!isSelected(_0x4e51c5)) {
        document[_0x192d('0x0')](getHigherGroupId(_0x4e51c5))[_0x192d('0xa9')](_0x4e51c5);
        selectedFlavors[_0x192d('0xc0')](getFlavor(_0x4e51c5));
        if (getGroupNumber(_0x4e51c5) > 0x2 && parentSliceAutoSelect) {
            selectSlice(getParentSlice(_0x4e51c5));
        }
    }
};
const deselectSlice = _0x3ba7ae => {
    document['getElementById'](getLowerGroupId(_0x3ba7ae))[_0x192d('0xa9')](_0x3ba7ae);
    deselectFlavor(getFlavor(_0x3ba7ae));
    if (childSliceAutoDeselect) {
        getSelectedChildrenSlices(_0x3ba7ae)[_0x192d('0xa1')](_0x47b9be => deselectSlice(_0x47b9be));
    }
};
const resetWheel = () => {
    wheelSVG['innerHTML'] = SVGBackup;
    drawWheel();
};
const getGroupNumber = _0x5f55ad => parseInt(_0x5f55ad['parentNode']['id'][_0x192d('0xc1')]('g', ''));
const getHigherGroupId = _0x4fef0a => 'g' + (getGroupNumber(_0x4fef0a) - 0x1);
const getLowerGroupId = _0x243479 => 'g' + (getGroupNumber(_0x243479) + 0x1);
const isSelected = _0x42103d => getGroupNumber(_0x42103d) % 0x2 > 0x0;
const getParentSliceID = _0x10d170 => {
    return flavorList[_0x192d('0xc2')](_0x33601f => _0x33601f['id'] == _0x10d170)[_0x192d('0xad')];
};
const getParentSlice = _0x12f658 => document[_0x192d('0x0')](getParentSliceID(_0x12f658['id']));
const deselectFlavor = _0x328415 => {
    selectedFlavors = selectedFlavors[_0x192d('0x7')](_0x461d9f => _0x461d9f != _0x328415);
};
const getFlavor = _0x8a002e => {
    return flavorList[_0x192d('0xc2')](_0x4b8dba => _0x4b8dba['id'] == _0x8a002e['id']);
};
const getSelectedFlavorIds = () => {
    return selectedFlavors[_0x192d('0xa1')](_0x3c18d1 => _0x3c18d1['id']);
};
const getSelectedFlavorParentIds = () => {
    return selectedFlavors[_0x192d('0xa1')](_0x24837f => _0x24837f[_0x192d('0xad')]);
};
const getSelectedFlavorNames = () => {
    return selectedFlavors['map'](_0x26dadc => _0x26dadc[_0x192d('0xac')]);
};
const getParentFlavor = _0x4384ca => {
    return flavorList['find'](_0x49ac83 => _0x49ac83['id'] == _0x4384ca[_0x192d('0xad')]);
};
const getSelectedFlavorBabies = () => {
    return selectedFlavors[_0x192d('0x7')](_0x4250f1 => !getSelectedFlavorParentIds()['includes'](_0x4250f1['id']));
};
const getSelectedFlavorString = () => {
    let _0x520b98 = '';
    getSelectedFlavorBabies()[_0x192d('0xa1')](_0x5367f0 => {
        _0x520b98 == '' ? _0x520b98 += _0x5367f0[_0x192d('0xac')] : _0x520b98 += ',\x20' + _0x5367f0[_0x192d('0xac')];
    });
    return _0x520b98;
};
const getFlavorFamily = _0x1bb6e1 => {
    let _0x5b6e07 = _0x1bb6e1[_0x192d('0xac')];
    if (_0x1bb6e1[_0x192d('0xad')] != '0') {
        if (_0x192d('0xc3') !== _0x192d('0xc3')) {
            transformString += _0x192d('0x9f') + circlex + '\x20' + circley + ')';
            textXCorrection = -5.5;
        } else {
            let _0x1119b3 = _0x5b6e07;
            _0x5b6e07 = getFlavorFamily(getParentFlavor(_0x1bb6e1)) + '->' + _0x1119b3;
        }
    }
    return _0x5b6e07;
};
const getSelectedFlavorStringLong = () => {
    return getSelectedFlavorBabies()[_0x192d('0xa1')](_0x8441ca => getFlavorFamily(_0x8441ca));
};
const getSelectedChildrenSlices = _0x17c902 => {
    return flavorList[_0x192d('0x7')](_0x139c47 => _0x139c47[_0x192d('0xad')] == _0x17c902['id'])[_0x192d('0xa1')](_0x463949 => _0x463949['id'])[_0x192d('0xa1')](_0xf86b72 => document[_0x192d('0x0')](_0xf86b72))[_0x192d('0x7')](_0x339942 => isSelected(_0x339942));
};
drawWheel();