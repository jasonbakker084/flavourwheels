var _0x48cf = ['sqrt', 'flavorsTea', 'value', 'push', 'parentNode', 'replace', 'find', 'parentID', 'filter', 'name', 'includes', 'svgC', 'createElementNS', 'http://www.w3.org/2000/svg', 'setAttribute', 'transform', 'scale(1.03),\x20translate(-8,-8)', 'url(#dropshadow)', 'appendChild', 'innerHTML', '#727F39', 'Plants\x20/\x20herbaceous', 'Grass', 'Fresh\x20cut\x20grass', 'Bamboo', '#939D61', 'Vegetables', 'Butternut', 'Spinach', 'Bean\x20sprouts', 'Aspargus', 'Peas', 'Alfalfa', 'Green\x20beans', 'Basil', 'Parsley', 'Lavender', 'Sage', 'Thyme', '#E2B027', 'Summer\x20meadow', 'Osmanthus', 'Jasmine', 'Chrysantemum', '#EFD051', 'Garden\x20flowers', 'Rose', 'Peony', 'Honeysuckle', 'Gardenia', '#977334', 'Nutty\x20/\x20milky', 'Creamy', 'Fresh\x20butter', 'Almond', 'Chestnut', '#7A74AC', 'Sweet', 'Honey/beewax', 'Caramel', 'Syrup', 'Toffee', 'Brown\x20sugar', 'Vanilla', '#AA604A', 'Fire\x20/\x20animal', 'Stable', 'Toast', 'Smoke', 'Tobacco', 'Leather', '#D48E45', 'Spicy', 'Hot\x20/\x20cooling', 'Cinnamon', 'Nutmeg', 'Clove', 'Cardamom', 'Star\x20anise', 'Ginger', 'Fresh\x20/\x20candied\x20fruit', 'Tropical', '#8A5372', 'Pineapple', 'Melon', 'Mango', '#AB849D', 'Stone\x20and\x20vine\x20fruit', 'Apple', 'Apricot', 'Pear', 'Peach', 'Grape', 'Citrus', 'Mandarine', 'Orange', 'Lemon', 'Bergamot', 'Lime', 'Berry', 'Blueberry', 'Raspberry', 'Strawberry', 'Blackcurrant', '#6D99CD', 'Oyster\x20/\x20shrimps', 'Seasalt', '#878C8D', 'Volcanic', 'Chalk', 'Granite', '#706456', 'Earthy', 'Forest', 'Musty\x20/\x20humus', 'Moss\x20/\x20care', 'Compost', 'Wood', 'Pine', '#8E8477', 'Wet\x20wood', 'Sawdust', 'Cedar', 'Oak', 'Mahogany', 'Eucalypt', 'map', 'sin', 'cos', '\x201\x200\x201\x20', '\x200\x200\x200\x20', 'path', 'text', 'middle', 'rotate(', 'translate(', 'rotate(90\x20', 'text-anchor', 'indexOf', 'substring', 'lengt', 'tspan', 'rotate(180\x20', 'end', 'style', 'strokeWidth', 'white', 'black', '0.3px', 'fill', 'stroke', 'onclick', 'clickAction(this)', '0.5px', 'getElementById'];
(function (_0x4ffcf6, _0x1c0a95) {
    var _0x47a348 = function (_0x294907) {
        while (--_0x294907) {
            _0x4ffcf6['push'](_0x4ffcf6['shift']());
        }
    };
    _0x47a348(++_0x1c0a95);
}(_0x48cf, 0x141));
var _0x771e = function (_0x4ffcf6, _0x1c0a95) {
    _0x4ffcf6 = _0x4ffcf6 - 0x0;
    var _0x47a348 = _0x48cf[_0x4ffcf6];
    return _0x47a348;
};
let selectedFlavors = [];
var innerRadii = [0x32, 0x50, 0x91];
var outerRadii = [0x50, 0x91, 0xc8];
var ringnr = 0x3;
var steps = 0x56;
var circlex = 0xe6;
var circley = 0xe6;
var parentSliceAutoSelect = !![];
var childSliceAutoDeselect = !![];
var slowness = 0x1;
var wheelSVG = document['getElementById'](_0x771e('0x0'));
for (let i = ringnr * 0x2; i > 0x0; i--) {
    const _0x263cc5 = 'g' + i;
    const _0x4c6611 = document[_0x771e('0x1')](_0x771e('0x2'), 'g');
    _0x4c6611[_0x771e('0x3')]('id', _0x263cc5);
    if (i % 0x2 > 0x0) {
        _0x4c6611[_0x771e('0x3')](_0x771e('0x4'), _0x771e('0x5'));
        _0x4c6611[_0x771e('0x3')]('filter', _0x771e('0x6'));
    }
    wheelSVG[_0x771e('0x7')](_0x4c6611);
}
var SVGBackup = wheelSVG[_0x771e('0x8')];
var flavorList = [{
    'ring': 0x1,
    'fromStep': 0x0,
    'toStep': 0x11,
    'color': _0x771e('0x9'),
    'name': _0x771e('0xa'),
    'id': 0x16,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x0,
    'toStep': 0x3,
    'color': _0x771e('0x9'),
    'name': _0x771e('0xb'),
    'id': 0xb7,
    'parentID': 0x16
}, {
    'ring': 0x3,
    'fromStep': 0x0,
    'toStep': 0x1,
    'color': _0x771e('0x9'),
    'name': _0x771e('0xc'),
    'id': 0x56c,
    'parentID': 0xb7
}, {
    'ring': 0x3,
    'fromStep': 0x1,
    'toStep': 0x2,
    'color': _0x771e('0x9'),
    'name': 'Hay',
    'id': 0x56d,
    'parentID': 0xb7
}, {
    'ring': 0x3,
    'fromStep': 0x2,
    'toStep': 0x3,
    'color': '#727F39',
    'name': _0x771e('0xd'),
    'id': 0x56e,
    'parentID': 0xb7
}, {
    'ring': 0x2,
    'fromStep': 0x3,
    'toStep': 0xa,
    'color': _0x771e('0xe'),
    'name': _0x771e('0xf'),
    'id': 0xb8,
    'parentID': 0x16
}, {
    'ring': 0x3,
    'fromStep': 0x3,
    'toStep': 0x4,
    'color': _0x771e('0xe'),
    'name': _0x771e('0x10'),
    'id': 0x56f,
    'parentID': 0xb8
}, {
    'ring': 0x3,
    'fromStep': 0x4,
    'toStep': 0x5,
    'color': _0x771e('0xe'),
    'name': _0x771e('0x11'),
    'id': 0x570,
    'parentID': 0xb8
}, {
    'ring': 0x3,
    'fromStep': 0x5,
    'toStep': 0x6,
    'color': _0x771e('0xe'),
    'name': _0x771e('0x12'),
    'id': 0x571,
    'parentID': 0xb8
}, {
    'ring': 0x3,
    'fromStep': 0x6,
    'toStep': 0x7,
    'color': _0x771e('0xe'),
    'name': _0x771e('0x13'),
    'id': 0x572,
    'parentID': 0xb8
}, {
    'ring': 0x3,
    'fromStep': 0x7,
    'toStep': 0x8,
    'color': _0x771e('0xe'),
    'name': _0x771e('0x14'),
    'id': 0x573,
    'parentID': 0xb8
}, {
    'ring': 0x3,
    'fromStep': 0x8,
    'toStep': 0x9,
    'color': _0x771e('0xe'),
    'name': _0x771e('0x15'),
    'id': 0x574,
    'parentID': 0xb8
}, {
    'ring': 0x3,
    'fromStep': 0x9,
    'toStep': 0xa,
    'color': _0x771e('0xe'),
    'name': _0x771e('0x16'),
    'id': 0x575,
    'parentID': 0xb8
}, {
    'ring': 0x2,
    'fromStep': 0xa,
    'toStep': 0x11,
    'color': '#727F39',
    'name': 'Herbs',
    'id': 0xb9,
    'parentID': 0x16
}, {
    'ring': 0x3,
    'fromStep': 0xa,
    'toStep': 0xb,
    'color': _0x771e('0x9'),
    'name': _0x771e('0x17'),
    'id': 0x576,
    'parentID': 0xb9
}, {
    'ring': 0x3,
    'fromStep': 0xb,
    'toStep': 0xc,
    'color': '#727F39',
    'name': _0x771e('0x18'),
    'id': 0x577,
    'parentID': 0xb9
}, {
    'ring': 0x3,
    'fromStep': 0xc,
    'toStep': 0xd,
    'color': _0x771e('0x9'),
    'name': 'Mint',
    'id': 0x578,
    'parentID': 0xb9
}, {
    'ring': 0x3,
    'fromStep': 0xd,
    'toStep': 0xe,
    'color': _0x771e('0x9'),
    'name': _0x771e('0x19'),
    'id': 0x579,
    'parentID': 0xb9
}, {
    'ring': 0x3,
    'fromStep': 0xe,
    'toStep': 0xf,
    'color': _0x771e('0x9'),
    'name': _0x771e('0x1a'),
    'id': 0x57a,
    'parentID': 0xb9
}, {
    'ring': 0x3,
    'fromStep': 0xf,
    'toStep': 0x10,
    'color': _0x771e('0x9'),
    'name': _0x771e('0x1b'),
    'id': 0x57b,
    'parentID': 0xb9
}, {
    'ring': 0x3,
    'fromStep': 0x10,
    'toStep': 0x11,
    'color': '#727F39',
    'name': 'Fennel',
    'id': 0x57c,
    'parentID': 0xb9
}, {
    'ring': 0x1,
    'fromStep': 0x11,
    'toStep': 0x18,
    'color': _0x771e('0x1c'),
    'name': 'Floral',
    'id': 0x17,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x11,
    'toStep': 0x14,
    'color': _0x771e('0x1c'),
    'name': _0x771e('0x1d'),
    'id': 0xba,
    'parentID': 0x17
}, {
    'ring': 0x3,
    'fromStep': 0x11,
    'toStep': 0x12,
    'color': _0x771e('0x1c'),
    'name': _0x771e('0x1e'),
    'id': 0x57d,
    'parentID': 0xba
}, {
    'ring': 0x3,
    'fromStep': 0x12,
    'toStep': 0x13,
    'color': _0x771e('0x1c'),
    'name': _0x771e('0x1f'),
    'id': 0x57e,
    'parentID': 0xba
}, {
    'ring': 0x3,
    'fromStep': 0x13,
    'toStep': 0x14,
    'color': '#E2B027',
    'name': _0x771e('0x20'),
    'id': 0x57f,
    'parentID': 0xba
}, {
    'ring': 0x2,
    'fromStep': 0x14,
    'toStep': 0x18,
    'color': _0x771e('0x21'),
    'name': _0x771e('0x22'),
    'id': 0xbb,
    'parentID': 0x17
}, {
    'ring': 0x3,
    'fromStep': 0x14,
    'toStep': 0x15,
    'color': '#EFD051',
    'name': _0x771e('0x23'),
    'id': 0x580,
    'parentID': 0xbb
}, {
    'ring': 0x3,
    'fromStep': 0x15,
    'toStep': 0x16,
    'color': '#EFD051',
    'name': _0x771e('0x24'),
    'id': 0x581,
    'parentID': 0xbb
}, {
    'ring': 0x3,
    'fromStep': 0x16,
    'toStep': 0x17,
    'color': _0x771e('0x21'),
    'name': _0x771e('0x25'),
    'id': 0x582,
    'parentID': 0xbb
}, {
    'ring': 0x3,
    'fromStep': 0x17,
    'toStep': 0x18,
    'color': _0x771e('0x21'),
    'name': _0x771e('0x26'),
    'id': 0x583,
    'parentID': 0xbb
}, {
    'ring': 0x1,
    'fromStep': 0x18,
    'toStep': 0x1d,
    'color': _0x771e('0x27'),
    'name': _0x771e('0x28'),
    'id': 0x18,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x18,
    'toStep': 0x1d,
    'color': _0x771e('0x27'),
    'name': '',
    'id': 0xbc,
    'parentID': 0x18
}, {
    'ring': 0x3,
    'fromStep': 0x18,
    'toStep': 0x19,
    'color': _0x771e('0x27'),
    'name': _0x771e('0x29'),
    'id': 0x584,
    'parentID': 0xbc
}, {
    'ring': 0x3,
    'fromStep': 0x19,
    'toStep': 0x1a,
    'color': _0x771e('0x27'),
    'name': _0x771e('0x2a'),
    'id': 0x585,
    'parentID': 0xbc
}, {
    'ring': 0x3,
    'fromStep': 0x1a,
    'toStep': 0x1b,
    'color': _0x771e('0x27'),
    'name': _0x771e('0x2b'),
    'id': 0x586,
    'parentID': 0xbc
}, {
    'ring': 0x3,
    'fromStep': 0x1b,
    'toStep': 0x1c,
    'color': '#977334',
    'name': _0x771e('0x2c'),
    'id': 0x587,
    'parentID': 0xbc
}, {
    'ring': 0x3,
    'fromStep': 0x1c,
    'toStep': 0x1d,
    'color': _0x771e('0x27'),
    'name': 'Roasted\x20nuts',
    'id': 0x588,
    'parentID': 0xbc
}, {
    'ring': 0x1,
    'fromStep': 0x1d,
    'toStep': 0x24,
    'color': _0x771e('0x2d'),
    'name': _0x771e('0x2e'),
    'id': 0x19,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x1d,
    'toStep': 0x24,
    'color': _0x771e('0x2d'),
    'name': '',
    'id': 0xbd,
    'parentID': 0x19
}, {
    'ring': 0x3,
    'fromStep': 0x1d,
    'toStep': 0x1e,
    'color': _0x771e('0x2d'),
    'name': 'Malt',
    'id': 0x589,
    'parentID': 0xbd
}, {
    'ring': 0x3,
    'fromStep': 0x1e,
    'toStep': 0x1f,
    'color': _0x771e('0x2d'),
    'name': _0x771e('0x2f'),
    'id': 0x58a,
    'parentID': 0xbd
}, {
    'ring': 0x3,
    'fromStep': 0x1f,
    'toStep': 0x20,
    'color': _0x771e('0x2d'),
    'name': _0x771e('0x30'),
    'id': 0x58b,
    'parentID': 0xbd
}, {
    'ring': 0x3,
    'fromStep': 0x20,
    'toStep': 0x21,
    'color': '#7A74AC',
    'name': _0x771e('0x31'),
    'id': 0x58c,
    'parentID': 0xbd
}, {
    'ring': 0x3,
    'fromStep': 0x21,
    'toStep': 0x22,
    'color': _0x771e('0x2d'),
    'name': _0x771e('0x32'),
    'id': 0x58d,
    'parentID': 0xbd
}, {
    'ring': 0x3,
    'fromStep': 0x22,
    'toStep': 0x23,
    'color': _0x771e('0x2d'),
    'name': _0x771e('0x33'),
    'id': 0x58e,
    'parentID': 0xbd
}, {
    'ring': 0x3,
    'fromStep': 0x23,
    'toStep': 0x24,
    'color': _0x771e('0x2d'),
    'name': _0x771e('0x34'),
    'id': 0x58f,
    'parentID': 0xbd
}, {
    'ring': 0x1,
    'fromStep': 0x24,
    'toStep': 0x29,
    'color': _0x771e('0x35'),
    'name': _0x771e('0x36'),
    'id': 0x1a,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x24,
    'toStep': 0x29,
    'color': _0x771e('0x35'),
    'name': '',
    'id': 0xbe,
    'parentID': 0x1a
}, {
    'ring': 0x3,
    'fromStep': 0x24,
    'toStep': 0x25,
    'color': _0x771e('0x35'),
    'name': _0x771e('0x37'),
    'id': 0x590,
    'parentID': 0xbe
}, {
    'ring': 0x3,
    'fromStep': 0x25,
    'toStep': 0x26,
    'color': _0x771e('0x35'),
    'name': _0x771e('0x38'),
    'id': 0x591,
    'parentID': 0xbe
}, {
    'ring': 0x3,
    'fromStep': 0x26,
    'toStep': 0x27,
    'color': _0x771e('0x35'),
    'name': _0x771e('0x39'),
    'id': 0x592,
    'parentID': 0xbe
}, {
    'ring': 0x3,
    'fromStep': 0x27,
    'toStep': 0x28,
    'color': _0x771e('0x35'),
    'name': _0x771e('0x3a'),
    'id': 0x593,
    'parentID': 0xbe
}, {
    'ring': 0x3,
    'fromStep': 0x28,
    'toStep': 0x29,
    'color': _0x771e('0x35'),
    'name': _0x771e('0x3b'),
    'id': 0x594,
    'parentID': 0xbe
}, {
    'ring': 0x1,
    'fromStep': 0x29,
    'toStep': 0x31,
    'color': _0x771e('0x3c'),
    'name': _0x771e('0x3d'),
    'id': 0x1b,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x29,
    'toStep': 0x31,
    'color': _0x771e('0x3c'),
    'name': _0x771e('0x3e'),
    'id': 0xbf,
    'parentID': 0x1b
}, {
    'ring': 0x3,
    'fromStep': 0x29,
    'toStep': 0x2a,
    'color': _0x771e('0x3c'),
    'name': _0x771e('0x3f'),
    'id': 0x595,
    'parentID': 0xbf
}, {
    'ring': 0x3,
    'fromStep': 0x2a,
    'toStep': 0x2b,
    'color': _0x771e('0x3c'),
    'name': _0x771e('0x40'),
    'id': 0x596,
    'parentID': 0xbf
}, {
    'ring': 0x3,
    'fromStep': 0x2b,
    'toStep': 0x2c,
    'color': '#D48E45',
    'name': 'Pepper',
    'id': 0x597,
    'parentID': 0xbf
}, {
    'ring': 0x3,
    'fromStep': 0x2c,
    'toStep': 0x2d,
    'color': _0x771e('0x3c'),
    'name': _0x771e('0x41'),
    'id': 0x598,
    'parentID': 0xbf
}, {
    'ring': 0x3,
    'fromStep': 0x2d,
    'toStep': 0x2e,
    'color': _0x771e('0x3c'),
    'name': _0x771e('0x42'),
    'id': 0x535,
    'parentID': 0xbf
}, {
    'ring': 0x3,
    'fromStep': 0x2e,
    'toStep': 0x2f,
    'color': _0x771e('0x3c'),
    'name': 'Licorice',
    'id': 0x536,
    'parentID': 0xbf
}, {
    'ring': 0x3,
    'fromStep': 0x2f,
    'toStep': 0x30,
    'color': '#D48E45',
    'name': _0x771e('0x43'),
    'id': 0x537,
    'parentID': 0xbf
}, {
    'ring': 0x3,
    'fromStep': 0x30,
    'toStep': 0x31,
    'color': _0x771e('0x3c'),
    'name': _0x771e('0x44'),
    'id': 0x538,
    'parentID': 0xbf
}, {
    'ring': 0x1,
    'fromStep': 0x31,
    'toStep': 0x44,
    'color': '#8A5372',
    'name': _0x771e('0x45'),
    'id': 0x1c,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x31,
    'toStep': 0x35,
    'color': '#8A5372',
    'name': _0x771e('0x46'),
    'id': 0xc0,
    'parentID': 0x1c
}, {
    'ring': 0x3,
    'fromStep': 0x31,
    'toStep': 0x32,
    'color': _0x771e('0x47'),
    'name': _0x771e('0x48'),
    'id': 0x539,
    'parentID': 0xc0
}, {
    'ring': 0x3,
    'fromStep': 0x32,
    'toStep': 0x33,
    'color': '#8A5372',
    'name': 'Banana',
    'id': 0x53a,
    'parentID': 0xc0
}, {
    'ring': 0x3,
    'fromStep': 0x33,
    'toStep': 0x34,
    'color': _0x771e('0x47'),
    'name': _0x771e('0x49'),
    'id': 0x53b,
    'parentID': 0xc0
}, {
    'ring': 0x3,
    'fromStep': 0x34,
    'toStep': 0x35,
    'color': _0x771e('0x47'),
    'name': _0x771e('0x4a'),
    'id': 0x53c,
    'parentID': 0xc0
}, {
    'ring': 0x2,
    'fromStep': 0x35,
    'toStep': 0x3b,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x4c'),
    'id': 0xc1,
    'parentID': 0x1c
}, {
    'ring': 0x3,
    'fromStep': 0x35,
    'toStep': 0x36,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x4d'),
    'id': 0x53d,
    'parentID': 0xc1
}, {
    'ring': 0x3,
    'fromStep': 0x36,
    'toStep': 0x37,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x4e'),
    'id': 0x53e,
    'parentID': 0xc1
}, {
    'ring': 0x3,
    'fromStep': 0x37,
    'toStep': 0x38,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x4f'),
    'id': 0x53f,
    'parentID': 0xc1
}, {
    'ring': 0x3,
    'fromStep': 0x38,
    'toStep': 0x39,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x50'),
    'id': 0x540,
    'parentID': 0xc1
}, {
    'ring': 0x3,
    'fromStep': 0x39,
    'toStep': 0x3a,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x51'),
    'id': 0x541,
    'parentID': 0xc1
}, {
    'ring': 0x3,
    'fromStep': 0x3a,
    'toStep': 0x3b,
    'color': '#AB849D',
    'name': 'Muscatel',
    'id': 0x542,
    'parentID': 0xc1
}, {
    'ring': 0x2,
    'fromStep': 0x3b,
    'toStep': 0x40,
    'color': '#8A5372',
    'name': _0x771e('0x52'),
    'id': 0xc2,
    'parentID': 0x1c
}, {
    'ring': 0x3,
    'fromStep': 0x3b,
    'toStep': 0x3c,
    'color': '#8A5372',
    'name': _0x771e('0x53'),
    'id': 0x543,
    'parentID': 0xc2
}, {
    'ring': 0x3,
    'fromStep': 0x3c,
    'toStep': 0x3d,
    'color': _0x771e('0x47'),
    'name': _0x771e('0x54'),
    'id': 0x544,
    'parentID': 0xc2
}, {
    'ring': 0x3,
    'fromStep': 0x3d,
    'toStep': 0x3e,
    'color': '#8A5372',
    'name': _0x771e('0x55'),
    'id': 0x545,
    'parentID': 0xc2
}, {
    'ring': 0x3,
    'fromStep': 0x3e,
    'toStep': 0x3f,
    'color': '#8A5372',
    'name': _0x771e('0x56'),
    'id': 0x5aa,
    'parentID': 0xc2
}, {
    'ring': 0x3,
    'fromStep': 0x3f,
    'toStep': 0x40,
    'color': '#8A5372',
    'name': _0x771e('0x57'),
    'id': 0x5ab,
    'parentID': 0xc2
}, {
    'ring': 0x2,
    'fromStep': 0x40,
    'toStep': 0x44,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x58'),
    'id': 0xc3,
    'parentID': 0x1c
}, {
    'ring': 0x3,
    'fromStep': 0x40,
    'toStep': 0x41,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x59'),
    'id': 0x5ac,
    'parentID': 0xc3
}, {
    'ring': 0x3,
    'fromStep': 0x41,
    'toStep': 0x42,
    'color': '#AB849D',
    'name': _0x771e('0x5a'),
    'id': 0x5ad,
    'parentID': 0xc3
}, {
    'ring': 0x3,
    'fromStep': 0x42,
    'toStep': 0x43,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x5b'),
    'id': 0x90,
    'parentID': 0xc3
}, {
    'ring': 0x3,
    'fromStep': 0x43,
    'toStep': 0x44,
    'color': _0x771e('0x4b'),
    'name': _0x771e('0x5c'),
    'id': 0x5af,
    'parentID': 0xc3
}, {
    'ring': 0x1,
    'fromStep': 0x44,
    'toStep': 0x47,
    'color': _0x771e('0x5d'),
    'name': '',
    'id': 0x1d,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x44,
    'toStep': 0x47,
    'color': _0x771e('0x5d'),
    'name': 'Marine',
    'id': 0xc4,
    'parentID': 0x1d
}, {
    'ring': 0x3,
    'fromStep': 0x44,
    'toStep': 0x45,
    'color': _0x771e('0x5d'),
    'name': 'Seaweed\x20/\x20fish',
    'id': 0x5b0,
    'parentID': 0xc4
}, {
    'ring': 0x3,
    'fromStep': 0x45,
    'toStep': 0x46,
    'color': _0x771e('0x5d'),
    'name': _0x771e('0x5e'),
    'id': 0x5b1,
    'parentID': 0xc4
}, {
    'ring': 0x3,
    'fromStep': 0x46,
    'toStep': 0x47,
    'color': _0x771e('0x5d'),
    'name': _0x771e('0x5f'),
    'id': 0x5b2,
    'parentID': 0xc4
}, {
    'ring': 0x1,
    'fromStep': 0x47,
    'toStep': 0x4a,
    'color': _0x771e('0x60'),
    'name': '',
    'id': 0x1e,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x47,
    'toStep': 0x4a,
    'color': _0x771e('0x60'),
    'name': 'Mineral',
    'id': 0xc5,
    'parentID': 0x1e
}, {
    'ring': 0x3,
    'fromStep': 0x47,
    'toStep': 0x48,
    'color': _0x771e('0x60'),
    'name': _0x771e('0x61'),
    'id': 0x5b3,
    'parentID': 0xc5
}, {
    'ring': 0x3,
    'fromStep': 0x48,
    'toStep': 0x49,
    'color': _0x771e('0x60'),
    'name': _0x771e('0x62'),
    'id': 0x5b4,
    'parentID': 0xc5
}, {
    'ring': 0x3,
    'fromStep': 0x49,
    'toStep': 0x4a,
    'color': _0x771e('0x60'),
    'name': _0x771e('0x63'),
    'id': 0x5b5,
    'parentID': 0xc5
}, {
    'ring': 0x1,
    'fromStep': 0x4a,
    'toStep': 0x56,
    'color': _0x771e('0x64'),
    'name': _0x771e('0x65'),
    'id': 0x1f,
    'parentID': 0x0
}, {
    'ring': 0x2,
    'fromStep': 0x4a,
    'toStep': 0x4f,
    'color': '#706456',
    'name': _0x771e('0x66'),
    'id': 0xc6,
    'parentID': 0x1f
}, {
    'ring': 0x3,
    'fromStep': 0x4a,
    'toStep': 0x4b,
    'color': _0x771e('0x64'),
    'name': 'Forest\x20floor',
    'id': 0x5b6,
    'parentID': 0xc6
}, {
    'ring': 0x3,
    'fromStep': 0x4b,
    'toStep': 0x4c,
    'color': _0x771e('0x64'),
    'name': _0x771e('0x67'),
    'id': 0x5b7,
    'parentID': 0xc6
}, {
    'ring': 0x3,
    'fromStep': 0x4c,
    'toStep': 0x4d,
    'color': _0x771e('0x64'),
    'name': _0x771e('0x68'),
    'id': 0x5b8,
    'parentID': 0xc6
}, {
    'ring': 0x3,
    'fromStep': 0x4d,
    'toStep': 0x4e,
    'color': _0x771e('0x64'),
    'name': _0x771e('0x69'),
    'id': 0x5b9,
    'parentID': 0xc6
}, {
    'ring': 0x3,
    'fromStep': 0x4e,
    'toStep': 0x4f,
    'color': _0x771e('0x64'),
    'name': 'Wet\x20leaves',
    'id': 0x5ba,
    'parentID': 0xc6
}, {
    'ring': 0x2,
    'fromStep': 0x4f,
    'toStep': 0x56,
    'color': '#8E8477',
    'name': _0x771e('0x6a'),
    'id': 0xc7,
    'parentID': 0x1f
}, {
    'ring': 0x3,
    'fromStep': 0x4f,
    'toStep': 0x50,
    'color': '#8E8477',
    'name': _0x771e('0x6b'),
    'id': 0x5bb,
    'parentID': 0xc7
}, {
    'ring': 0x3,
    'fromStep': 0x50,
    'toStep': 0x51,
    'color': _0x771e('0x6c'),
    'name': _0x771e('0x6d'),
    'id': 0x5bc,
    'parentID': 0xc7
}, {
    'ring': 0x3,
    'fromStep': 0x51,
    'toStep': 0x52,
    'color': _0x771e('0x6c'),
    'name': _0x771e('0x6e'),
    'id': 0x5bd,
    'parentID': 0xc7
}, {
    'ring': 0x3,
    'fromStep': 0x52,
    'toStep': 0x53,
    'color': _0x771e('0x6c'),
    'name': _0x771e('0x6f'),
    'id': 0x5be,
    'parentID': 0xc7
}, {
    'ring': 0x3,
    'fromStep': 0x53,
    'toStep': 0x54,
    'color': '#8E8477',
    'name': _0x771e('0x70'),
    'id': 0x5bf,
    'parentID': 0xc7
}, {
    'ring': 0x3,
    'fromStep': 0x54,
    'toStep': 0x55,
    'color': _0x771e('0x6c'),
    'name': _0x771e('0x71'),
    'id': 0x5c0,
    'parentID': 0xc7
}, {
    'ring': 0x3,
    'fromStep': 0x55,
    'toStep': 0x56,
    'color': _0x771e('0x6c'),
    'name': _0x771e('0x72'),
    'id': 0x5c1,
    'parentID': 0xc7
}];
const drawWheel = () => flavorList[_0x771e('0x73')](_0x3e27d5 => drawSlice(_0x3e27d5));
var drawSlice = ({ring, fromStep, toStep, color, name, id}) => {
    var _0x26cd39 = innerRadii[ring - 0x1];
    var _0x1508e1 = outerRadii[ring - 0x1];
    var _0x3f9a09 = fromStep / steps * 0x2 * Math['PI'];
    var _0x20a663 = toStep / steps * 0x2 * Math['PI'];
    var _0x4bff4b = circlex + Math[_0x771e('0x74')](_0x3f9a09) * _0x26cd39;
    var _0x232ee3 = circley - Math[_0x771e('0x75')](_0x3f9a09) * _0x26cd39;
    var _0x567959 = circlex + Math['sin'](_0x3f9a09) * _0x1508e1;
    var _0x1e06db = circley - Math[_0x771e('0x75')](_0x3f9a09) * _0x1508e1;
    var _0x46eb8d = circlex + Math[_0x771e('0x74')](_0x20a663) * _0x1508e1;
    var _0x8cacdd = circley - Math['cos'](_0x20a663) * _0x1508e1;
    var _0x12b294 = circlex + Math[_0x771e('0x74')](_0x20a663) * _0x26cd39;
    var _0x29f25b = circley - Math[_0x771e('0x75')](_0x20a663) * _0x26cd39;
    var _0x3b79f1 = 'M' + _0x4bff4b + '\x20' + _0x232ee3 + 'L\x20' + _0x567959 + '\x20' + _0x1e06db + 'A' + _0x1508e1 + '\x20' + _0x1508e1 + _0x771e('0x76') + _0x46eb8d + '\x20' + _0x8cacdd + 'L' + _0x12b294 + '\x20' + _0x29f25b + 'A' + _0x26cd39 + '\x20' + _0x26cd39 + _0x771e('0x77') + _0x4bff4b + '\x20' + _0x232ee3;
    var _0x5cae23 = document[_0x771e('0x1')]('http://www.w3.org/2000/svg', _0x771e('0x78'));
    _0x5cae23[_0x771e('0x3')]('d', _0x3b79f1);
    var _0x44c9ca = document[_0x771e('0x1')](_0x771e('0x2'), _0x771e('0x79'));
    _0x44c9ca[_0x771e('0x3')]('x', circlex);
    _0x44c9ca[_0x771e('0x3')]('y', circley);
    _0x44c9ca[_0x771e('0x3')]('alignment-baseline', _0x771e('0x7a'));
    var _0x4614a5 = (fromStep + toStep) / steps * 0xb4 - 0x5a;
    let _0x5c9037 = _0x4614a5;
    if (_0x4614a5 > 0x5a) {
        _0x5c9037 = _0x4614a5 - 0.2;
    }
    var _0x34b1ae = _0x771e('0x7b') + _0x5c9037 + '\x20' + circlex + '\x20' + circley + '),';
    if (ring == 0x1) {
        let _0x462d1e = (_0x26cd39 + _0x1508e1) / 1.82;
        let _0xfde1fe = 0x0;
        _0x34b1ae += _0x771e('0x7c') + _0x462d1e + ')';
        if (_0x4614a5 > 0x0 && _0x4614a5 < 0xb4) {
            _0x34b1ae += 'rotate(-90\x20' + circlex + '\x20' + circley + ')';
            _0xfde1fe = -5.5;
        }
        if (_0x4614a5 > 0xb4 || _0x4614a5 < 0x0) {
            _0x34b1ae += _0x771e('0x7d') + circlex + '\x20' + circley + ')';
        }
        _0x44c9ca[_0x771e('0x3')](_0x771e('0x7e'), _0x771e('0x7a'));
        let _0x3c9fc8 = name[_0x771e('0x7f')]('/');
        if (_0x3c9fc8 == -0x1) {
            _0x44c9ca[_0x771e('0x8')] = name;
        } else {
            let _0x11b374 = name['substring'](0x0, _0x3c9fc8 + 0x1);
            let _0x27ee46 = name[_0x771e('0x80')](_0x3c9fc8 + 0x1, name[_0x771e('0x81')]);
            let _0x1a93d2 = document[_0x771e('0x1')](_0x771e('0x2'), _0x771e('0x82'));
            _0x1a93d2[_0x771e('0x8')] = _0x11b374;
            _0x1a93d2[_0x771e('0x3')]('x', circlex);
            _0x1a93d2[_0x771e('0x3')]('dy', _0xfde1fe);
            _0x44c9ca[_0x771e('0x7')](_0x1a93d2);
            let _0x534fa0 = document[_0x771e('0x1')](_0x771e('0x2'), _0x771e('0x82'));
            _0x534fa0[_0x771e('0x8')] = _0x27ee46;
            _0x534fa0[_0x771e('0x3')]('x', circlex);
            _0x534fa0[_0x771e('0x3')]('dy', '6');
            _0x44c9ca[_0x771e('0x7')](_0x534fa0);
        }
    } else {
        let _0x501e93 = _0x1508e1 - 0x3;
        _0x34b1ae += _0x771e('0x7c') + _0x501e93 + ')';
        if (_0x4614a5 > 0x5a) {
            let _0x501e93 = _0x1508e1 - 0x5;
            _0x34b1ae += _0x771e('0x83') + circlex + '\x20' + circley + ')';
        } else {
            _0x44c9ca[_0x771e('0x3')]('text-anchor', _0x771e('0x84'));
        }
        _0x44c9ca[_0x771e('0x8')] = name;
    }
    _0x44c9ca[_0x771e('0x3')](_0x771e('0x4'), _0x34b1ae);
    _0x44c9ca[_0x771e('0x85')][_0x771e('0x86')] = '0px';
    let _0x11f2c2 = _0x771e('0x87');
    if (isColorLight(color)) {
        _0x11f2c2 = _0x771e('0x88');
        _0x44c9ca[_0x771e('0x85')][_0x771e('0x86')] = _0x771e('0x89');
    }
    _0x44c9ca[_0x771e('0x85')][_0x771e('0x8a')] = _0x11f2c2;
    _0x44c9ca['style'][_0x771e('0x8b')] = _0x11f2c2;
    var _0x513406 = document[_0x771e('0x1')]('http://www.w3.org/2000/svg', 'g');
    _0x513406['setAttribute']('id', '' + id);
    _0x513406[_0x771e('0x3')]('class', 'slice');
    _0x513406['setAttribute'](_0x771e('0x8c'), _0x771e('0x8d'));
    _0x513406[_0x771e('0x85')][_0x771e('0x8b')] = 'white';
    _0x513406['style'][_0x771e('0x8a')] = color;
    _0x5cae23[_0x771e('0x85')][_0x771e('0x86')] = _0x771e('0x8e');
    _0x513406[_0x771e('0x7')](_0x5cae23);
    _0x513406[_0x771e('0x7')](_0x44c9ca);
    var _0x36a67d = 'g' + ring * 0x2;
    document[_0x771e('0x8f')](_0x36a67d)[_0x771e('0x7')](_0x513406);
};
const isColorLight = _0x19f58c => {
    let _0x377a45 = parseInt(_0x19f58c[_0x771e('0x80')](0x1, 0x3), 0x10);
    let _0x177acf = parseInt(_0x19f58c[_0x771e('0x80')](0x3, 0x5), 0x10);
    let _0xee32b = parseInt(_0x19f58c[_0x771e('0x80')](0x5, 0x7), 0x10);
    hsp = Math[_0x771e('0x90')](0.299 * (_0x377a45 * _0x377a45) + 0.587 * (_0x177acf * _0x177acf) + 0.114 * (_0xee32b * _0xee32b));
    return hsp > 0xd2;
};
const clickAction = _0x177486 => {
    isSelected(_0x177486) ? deselectSlice(_0x177486) : selectSlice(_0x177486);
    document[_0x771e('0x8f')](_0x771e('0x91'))[_0x771e('0x92')] = getSelectedFlavorIds();
};
const selectSlice = _0xd0b4a4 => {
    if (!isSelected(_0xd0b4a4)) {
        document[_0x771e('0x8f')](getHigherGroupId(_0xd0b4a4))[_0x771e('0x7')](_0xd0b4a4);
        selectedFlavors[_0x771e('0x93')](getFlavor(_0xd0b4a4));
        if (getGroupNumber(_0xd0b4a4) > 0x2 && parentSliceAutoSelect) {
            selectSlice(getParentSlice(_0xd0b4a4));
        }
    }
};
const deselectSlice = _0x5e0b90 => {
    document[_0x771e('0x8f')](getLowerGroupId(_0x5e0b90))[_0x771e('0x7')](_0x5e0b90);
    deselectFlavor(getFlavor(_0x5e0b90));
    if (childSliceAutoDeselect) {
        getSelectedChildrenSlices(_0x5e0b90)[_0x771e('0x73')](_0x1c98a5 => deselectSlice(_0x1c98a5));
    }
};
const resetWheel = () => {
    wheelSVG[_0x771e('0x8')] = SVGBackup;
    drawWheel();
};
const getGroupNumber = _0x33b2f5 => parseInt(_0x33b2f5[_0x771e('0x94')]['id'][_0x771e('0x95')]('g', ''));
const getHigherGroupId = _0x15ac31 => 'g' + (getGroupNumber(_0x15ac31) - 0x1);
const getLowerGroupId = _0x3acd1b => 'g' + (getGroupNumber(_0x3acd1b) + 0x1);
const isSelected = _0x2c1406 => getGroupNumber(_0x2c1406) % 0x2 > 0x0;
const getParentSliceID = _0x52e4a3 => {
    return flavorList[_0x771e('0x96')](_0x40fd85 => _0x40fd85['id'] == _0x52e4a3)[_0x771e('0x97')];
};
const getParentSlice = _0x22ca2b => document[_0x771e('0x8f')](getParentSliceID(_0x22ca2b['id']));
const deselectFlavor = _0x55d29f => {
    selectedFlavors = selectedFlavors[_0x771e('0x98')](_0xcadac6 => _0xcadac6 != _0x55d29f);
};
const getFlavor = _0x5d6f0d => {
    return flavorList[_0x771e('0x96')](_0x321fd6 => _0x321fd6['id'] == _0x5d6f0d['id']);
};
const getSelectedFlavorIds = () => {
    return selectedFlavors[_0x771e('0x73')](_0x322bdc => _0x322bdc['id']);
};
const getSelectedFlavorParentIds = () => {
    return selectedFlavors[_0x771e('0x73')](_0x4539b0 => _0x4539b0[_0x771e('0x97')]);
};
const getSelectedFlavorNames = () => {
    return selectedFlavors[_0x771e('0x73')](_0x245a49 => _0x245a49[_0x771e('0x99')]);
};
const getParentFlavor = _0x16397a => {
    return flavorList[_0x771e('0x96')](_0x347880 => _0x347880['id'] == _0x16397a[_0x771e('0x97')]);
};
const getSelectedFlavorBabies = () => {
    return selectedFlavors[_0x771e('0x98')](_0x513a48 => !getSelectedFlavorParentIds()[_0x771e('0x9a')](_0x513a48['id']));
};
const getSelectedFlavorString = () => {
    let _0x69d58e = '';
    getSelectedFlavorBabies()[_0x771e('0x73')](_0x331f53 => {
        _0x69d58e == '' ? _0x69d58e += _0x331f53['name'] : _0x69d58e += ',\x20' + _0x331f53[_0x771e('0x99')];
    });
    return _0x69d58e;
};
const getFlavorFamily = _0x4ec111 => {
    let _0x21cfff = _0x4ec111[_0x771e('0x99')];
    if (_0x4ec111[_0x771e('0x97')] != '0') {
        let _0x24113b = _0x21cfff;
        _0x21cfff = getFlavorFamily(getParentFlavor(_0x4ec111)) + '->' + _0x24113b;
    }
    return _0x21cfff;
};
const getSelectedFlavorStringLong = () => {
    return getSelectedFlavorBabies()[_0x771e('0x73')](_0x456997 => getFlavorFamily(_0x456997));
};
const getSelectedChildrenSlices = _0x1eb306 => {
    return flavorList['filter'](_0x3535e3 => _0x3535e3['parentID'] == _0x1eb306['id'])[_0x771e('0x73')](_0x5d4d7a => _0x5d4d7a['id'])[_0x771e('0x73')](_0x2bbd69 => document[_0x771e('0x8f')](_0x2bbd69))[_0x771e('0x98')](_0x5b23dc => isSelected(_0x5b23dc));
};
drawWheel();