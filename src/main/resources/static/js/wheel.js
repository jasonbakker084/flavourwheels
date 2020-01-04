var _0x3fea = ['find', 'includes', 'FFbcv', 'XBYSg', 'getElementById', 'svgC', 'http://www.w3.org/2000/svg', 'setAttribute', 'transform', 'scale(1.03),\x20translate(-8,-8)', 'filter', 'url(#dropshadow)', 'innerHTML', '#DA1D23', 'Fruity', '#DD4C51', 'Berry', '#3E0317', 'Blackberry', '#E52968', '#6469B0', 'Blueberry', '#EF2D36', 'Strawberry', '#C94A44', '#B53B54', 'Raisin', '#A5446F', 'Prune', '#F2684C', 'Other\x20Fruit', 'Coconut', '#E73451', 'Cherry', '#E65656', 'Pomegranate', '#F89A1C', 'Grape', '#4EB947', 'Apple', '#F68A5C', 'Pear', '#F7A129', '#F26355', '#E2631E', '#FDE402', 'Lemon', '#7EB138', 'Lime', '#EAB40C', '#E1C315', '#9EA718', 'Sour\x20Aromatics', '#94A770', 'Acetic\x20Acid', 'Butyric\x20Acid', '#8EB646', 'Isovaleric\x20Acid', '#FAEF08', 'Citric\x20Acid', '#C1BA09', 'Malic\x20Acid', '#B09733', '#8F1B53', 'Winey', '#B34039', 'Whiskey', '#BA9232', 'Fermented', '#8B6439', 'Overripe', '#197A2F', 'Green/vegetative', '#A2B028', '#708933', 'Raw', '#3AA255', 'Green\x20vegetative', '#A2BC2B', 'Under-ripe', '#62AA3C', 'Peapod', 'Fresh', '#048549', 'Dark\x20green', '#27B44B', 'Vegetative', '#A3A830', 'Hay-like', '#7AC141', '#5E9A80', 'Beany', '#0AA3B5', 'Other', '#9DB2B7', 'Papery/Musty', '#8B8C90', '#FEFEF4', 'Papery', '#744F02', 'Woody', '#A3A36F', 'Moldy/Damp', '#C9B583', '#988847', 'Animalic', 'Meaty/Brothy', '#DB646A', 'Phenolic', '#76C0CB', 'Chemical', '#80A89D', 'Bitter', 'Salty', 'Petroleum', 'Skunky', '#120C0C', 'Rubber', '#C94930', 'Roasted', 'Pipe\x20tobacco', 'Tobacco', '#BE8663', 'Burnt', '#B9A449', 'Acrid', '#899893', '#A1743B', 'Smoky', '#894810', 'Brown.\x20Roast', 'Cereal', 'Grain', '#EB9D5E', '#AE203E', 'Spices', '#794652', 'Pungent', '#CC3C42', 'Pepper', '#B14D57', 'Brown\x20Spice', '#C78935', '#E5762E', 'Cinnamon', '#A97B64', 'Nutty/Cocoa', '#C78869', 'Nutty', '#D4AD13', 'Peanuts', '#9D5433', 'Hazelnut', '#C89F83', 'Almond', '#BB764C', 'Cocoa', '#692A19', 'Chocolate', '#470603', 'Dark\x20chocolate', '#E55831', 'Sweet', '#D45A59', 'Brown\x20Sugar', 'Molasses', '#AE341F', '#D78823', '#DA5C1F', '#F89A80', 'Vanilla', '#F37674', 'Vanillin', '#E75B68', 'Overall\x20Sweet', 'Sweet\x20Aromatics', 'Floral', '#975E6D', 'Black\x20tea', '#E0719C', 'Chamomile', '#EF5A78', 'Rose', '#F99E1B', 'Jasmine', 'sin', 'cos', '\x201\x200\x201\x20', 'createElementNS', 'path', 'text', 'alignment-baseline', 'middle', 'rotate(', 'wqewd', 'translate(', 'rotate(-90\x20', 'rotate(90\x20', 'NAXTZ', 'PcPns', 'substring', 'lengt', 'tspan', 'appendChild', 'push', 'map', 'name', 'rotate(180\x20', 'end', 'style', 'strokeWidth', '0px', 'HcaIV', 'black', '0.3px', 'fill', 'stroke', 'class', 'slice', 'onclick', 'clickAction(this)', '0.5px', 'sqrt', 'flavorsCoffee', 'value', 'VuPFZ', 'text-anchor', 'VhfQP', 'HiOTV', 'parentNode', 'replace', 'parentID'];
(function (_0x36704f, _0x41da20) {
    var _0x223472 = function (_0x2f6be4) {
        while (--_0x2f6be4) {
            _0x36704f['push'](_0x36704f['shift']());
        }
    };
    _0x223472(++_0x41da20);
}(_0x3fea, 0xec));
var _0x5f36 = function (_0x36704f, _0x41da20) {
    _0x36704f = _0x36704f - 0x0;
    var _0x223472 = _0x3fea[_0x36704f];
    return _0x223472;
};
let selectedFlavors = [];
const innerRadii = [0x32, 0x50, 0x91];
const outerRadii = [0x50, 0x91, 0xc8];
const ringnr = 0x3;
const steps = 0x55;
const circlex = 0xdc;
const circley = 0xdc;
const parentSliceAutoSelect = !![];
const childSliceAutoDeselect = !![];
const wheelSVG = document[_0x5f36('0x0')](_0x5f36('0x1'));
for (let i = ringnr * 0x2; i > 0x0; i--) {
    const _0x133784 = 'g' + i;
    const _0x3954be = document['createElementNS'](_0x5f36('0x2'), 'g');
    _0x3954be[_0x5f36('0x3')]('id', _0x133784);
    if (i % 0x2 > 0x0) {
        _0x3954be[_0x5f36('0x3')](_0x5f36('0x4'), _0x5f36('0x5'));
        _0x3954be['setAttribute'](_0x5f36('0x6'), _0x5f36('0x7'));
    }
    wheelSVG['appendChild'](_0x3954be);
}
const SVGBackup = wheelSVG[_0x5f36('0x8')];
const flavorList = [{
    'ring': 0x1,
    'fromStep': 0x0,
    'toStep': 0x12,
    'color': _0x5f36('0x9'),
    'name': _0x5f36('0xa'),
    'id': 0x1,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x0,
    'toStep': 0x4,
    'color': _0x5f36('0xb'),
    'name': _0x5f36('0xc'),
    'id': 0x65,
    'parentID': 0x1
}, {
    'ring': 0x3,
    'fromStep': 0x0,
    'toStep': 0x1,
    'color': _0x5f36('0xd'),
    'name': _0x5f36('0xe'),
    'id': 0x3e9,
    'parentID': 0x65
}, {
    'ring': 0x3,
    'fromStep': 0x1,
    'toStep': 0x2,
    'color': _0x5f36('0xf'),
    'name': 'Raspberry',
    'id': 0x3ea,
    'parentID': 0x65
}, {
    'ring': 0x3,
    'fromStep': 0x2,
    'toStep': 0x3,
    'color': _0x5f36('0x10'),
    'name': _0x5f36('0x11'),
    'id': 0x3eb,
    'parentID': 0x65
}, {
    'ring': 0x3,
    'fromStep': 0x3,
    'toStep': 0x4,
    'color': _0x5f36('0x12'),
    'name': _0x5f36('0x13'),
    'id': 0x3ec,
    'parentID': 0x65
}, {
    'ring': 0x2,
    'fromStep': 0x4,
    'toStep': 0x6,
    'color': _0x5f36('0x14'),
    'name': 'Dried\x20fruit',
    'id': 0x66,
    'parentID': 0x1
}, {
    'ring': 0x3,
    'fromStep': 0x4,
    'toStep': 0x5,
    'color': _0x5f36('0x15'),
    'name': _0x5f36('0x16'),
    'id': 0x3ed,
    'parentID': 0x66
}, {
    'ring': 0x3,
    'fromStep': 0x5,
    'toStep': 0x6,
    'color': _0x5f36('0x17'),
    'name': _0x5f36('0x18'),
    'id': 0x3ee,
    'parentID': 0x66
}, {
    'ring': 0x2,
    'fromStep': 0x6,
    'toStep': 0xe,
    'color': _0x5f36('0x19'),
    'name': _0x5f36('0x1a'),
    'id': 0x67,
    'parentID': 0x1
}, {
    'ring': 0x3,
    'fromStep': 0x6,
    'toStep': 0x7,
    'color': '#D07C36',
    'name': _0x5f36('0x1b'),
    'id': 0x3ef,
    'parentID': 0x67
}, {
    'ring': 0x3,
    'fromStep': 0x7,
    'toStep': 0x8,
    'color': _0x5f36('0x1c'),
    'name': _0x5f36('0x1d'),
    'id': 0x3f0,
    'parentID': 0x67
}, {
    'ring': 0x3,
    'fromStep': 0x8,
    'toStep': 0x9,
    'color': _0x5f36('0x1e'),
    'name': _0x5f36('0x1f'),
    'id': 0x3f1,
    'parentID': 0x67
}, {
    'ring': 0x3,
    'fromStep': 0x9,
    'toStep': 0xa,
    'color': _0x5f36('0x20'),
    'name': 'Pineapple',
    'id': 0x3f2,
    'parentID': 0x67
}, {
    'ring': 0x3,
    'fromStep': 0xa,
    'toStep': 0xb,
    'color': '#AEB92C',
    'name': _0x5f36('0x21'),
    'id': 0x3f3,
    'parentID': 0x67
}, {
    'ring': 0x3,
    'fromStep': 0xb,
    'toStep': 0xc,
    'color': _0x5f36('0x22'),
    'name': _0x5f36('0x23'),
    'id': 0x3f4,
    'parentID': 0x67
}, {
    'ring': 0x3,
    'fromStep': 0xc,
    'toStep': 0xd,
    'color': _0x5f36('0x24'),
    'name': 'Peach',
    'id': 0x3f5,
    'parentID': 0x67
}, {
    'ring': 0x3,
    'fromStep': 0xd,
    'toStep': 0xe,
    'color': '#BAA635',
    'name': _0x5f36('0x25'),
    'id': 0x3f6,
    'parentID': 0x67
}, {
    'ring': 0x2,
    'fromStep': 0xe,
    'toStep': 0x12,
    'color': _0x5f36('0x26'),
    'name': 'Citrus\x20Fruit',
    'id': 0x68,
    'parentID': 0x1
}, {
    'ring': 0x3,
    'fromStep': 0xe,
    'toStep': 0xf,
    'color': _0x5f36('0x27'),
    'name': 'Grapefruit',
    'id': 0x3f7,
    'parentID': 0x68
}, {
    'ring': 0x3,
    'fromStep': 0xf,
    'toStep': 0x10,
    'color': _0x5f36('0x28'),
    'name': 'Orange',
    'id': 0x3f8,
    'parentID': 0x68
}, {
    'ring': 0x3,
    'fromStep': 0x10,
    'toStep': 0x11,
    'color': _0x5f36('0x29'),
    'name': _0x5f36('0x2a'),
    'id': 0x3f9,
    'parentID': 0x68
}, {
    'ring': 0x3,
    'fromStep': 0x11,
    'toStep': 0x12,
    'color': _0x5f36('0x2b'),
    'name': _0x5f36('0x2c'),
    'id': 0x3fa,
    'parentID': 0x68
}, {
    'ring': 0x1,
    'fromStep': 0x12,
    'toStep': 0x1c,
    'color': _0x5f36('0x2d'),
    'name': 'Sour/Fermented',
    'id': 0x2,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x12,
    'toStep': 0x18,
    'color': _0x5f36('0x2e'),
    'name': 'Sour',
    'id': 0x69,
    'parentID': 0x2
}, {
    'ring': 0x3,
    'fromStep': 0x12,
    'toStep': 0x13,
    'color': _0x5f36('0x2f'),
    'name': _0x5f36('0x30'),
    'id': 0x3fb,
    'parentID': 0x69
}, {
    'ring': 0x3,
    'fromStep': 0x13,
    'toStep': 0x14,
    'color': _0x5f36('0x31'),
    'name': _0x5f36('0x32'),
    'id': 0x3fc,
    'parentID': 0x69
}, {
    'ring': 0x3,
    'fromStep': 0x14,
    'toStep': 0x15,
    'color': '#D0B34F',
    'name': _0x5f36('0x33'),
    'id': 0x3fd,
    'parentID': 0x69
}, {
    'ring': 0x3,
    'fromStep': 0x15,
    'toStep': 0x16,
    'color': _0x5f36('0x34'),
    'name': _0x5f36('0x35'),
    'id': 0x3fe,
    'parentID': 0x69
}, {
    'ring': 0x3,
    'fromStep': 0x16,
    'toStep': 0x17,
    'color': _0x5f36('0x36'),
    'name': _0x5f36('0x37'),
    'id': 0x3ff,
    'parentID': 0x69
}, {
    'ring': 0x3,
    'fromStep': 0x17,
    'toStep': 0x18,
    'color': _0x5f36('0x38'),
    'name': _0x5f36('0x39'),
    'id': 0x400,
    'parentID': 0x69
}, {
    'ring': 0x2,
    'fromStep': 0x18,
    'toStep': 0x1c,
    'color': _0x5f36('0x3a'),
    'name': 'Alcohol/Fermented',
    'id': 0x6a,
    'parentID': 0x2
}, {
    'ring': 0x3,
    'fromStep': 0x18,
    'toStep': 0x19,
    'color': _0x5f36('0x3b'),
    'name': _0x5f36('0x3c'),
    'id': 0x401,
    'parentID': 0x6a
}, {
    'ring': 0x3,
    'fromStep': 0x19,
    'toStep': 0x1a,
    'color': _0x5f36('0x3d'),
    'name': _0x5f36('0x3e'),
    'id': 0x402,
    'parentID': 0x6a
}, {
    'ring': 0x3,
    'fromStep': 0x1a,
    'toStep': 0x1b,
    'color': _0x5f36('0x3f'),
    'name': _0x5f36('0x40'),
    'id': 0x403,
    'parentID': 0x6a
}, {
    'ring': 0x3,
    'fromStep': 0x1b,
    'toStep': 0x1c,
    'color': _0x5f36('0x41'),
    'name': _0x5f36('0x42'),
    'id': 0x404,
    'parentID': 0x6a
}, {
    'ring': 0x1,
    'fromStep': 0x1c,
    'toStep': 0x26,
    'color': _0x5f36('0x43'),
    'name': _0x5f36('0x44'),
    'id': 0x3,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x1c,
    'toStep': 0x1d,
    'color': _0x5f36('0x45'),
    'name': 'Olive\x20oil',
    'id': 0x6b,
    'parentID': 0x3
}, {
    'ring': 0x2,
    'fromStep': 0x1d,
    'toStep': 0x1e,
    'color': _0x5f36('0x46'),
    'name': _0x5f36('0x47'),
    'id': 0x6c,
    'parentID': 0x3
}, {
    'ring': 0x2,
    'fromStep': 0x1e,
    'toStep': 0x25,
    'color': _0x5f36('0x48'),
    'name': _0x5f36('0x49'),
    'id': 0x6d,
    'parentID': 0x3
}, {
    'ring': 0x3,
    'fromStep': 0x1e,
    'toStep': 0x1f,
    'color': _0x5f36('0x4a'),
    'name': _0x5f36('0x4b'),
    'id': 0x405,
    'parentID': 0x6d
}, {
    'ring': 0x3,
    'fromStep': 0x1f,
    'toStep': 0x20,
    'color': _0x5f36('0x4c'),
    'name': _0x5f36('0x4d'),
    'id': 0x406,
    'parentID': 0x6d
}, {
    'ring': 0x3,
    'fromStep': 0x20,
    'toStep': 0x21,
    'color': '#03A653',
    'name': _0x5f36('0x4e'),
    'id': 0x407,
    'parentID': 0x6d
}, {
    'ring': 0x3,
    'fromStep': 0x21,
    'toStep': 0x22,
    'color': _0x5f36('0x4f'),
    'name': _0x5f36('0x50'),
    'id': 0x408,
    'parentID': 0x6d
}, {
    'ring': 0x3,
    'fromStep': 0x22,
    'toStep': 0x23,
    'color': _0x5f36('0x51'),
    'name': _0x5f36('0x52'),
    'id': 0x409,
    'parentID': 0x6d
}, {
    'ring': 0x3,
    'fromStep': 0x23,
    'toStep': 0x24,
    'color': _0x5f36('0x53'),
    'name': _0x5f36('0x54'),
    'id': 0x40a,
    'parentID': 0x6d
}, {
    'ring': 0x3,
    'fromStep': 0x24,
    'toStep': 0x25,
    'color': _0x5f36('0x55'),
    'name': 'Herb-like',
    'id': 0x40b,
    'parentID': 0x6d
}, {
    'ring': 0x2,
    'fromStep': 0x25,
    'toStep': 0x26,
    'color': _0x5f36('0x56'),
    'name': _0x5f36('0x57'),
    'id': 0x6e,
    'parentID': 0x3
}, {
    'ring': 0x1,
    'fromStep': 0x26,
    'toStep': 0x36,
    'color': _0x5f36('0x58'),
    'name': _0x5f36('0x59'),
    'id': 0x4,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x26,
    'toStep': 0x30,
    'color': _0x5f36('0x5a'),
    'name': _0x5f36('0x5b'),
    'id': 0x6f,
    'parentID': 0x4
}, {
    'ring': 0x3,
    'fromStep': 0x26,
    'toStep': 0x27,
    'color': _0x5f36('0x5c'),
    'name': 'Stale',
    'id': 0x40c,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x27,
    'toStep': 0x28,
    'color': '#BDB175',
    'name': 'Cardboard',
    'id': 0x40d,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x28,
    'toStep': 0x29,
    'color': _0x5f36('0x5d'),
    'name': _0x5f36('0x5e'),
    'id': 0x40e,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x29,
    'toStep': 0x2a,
    'color': _0x5f36('0x5f'),
    'name': _0x5f36('0x60'),
    'id': 0x40f,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x2a,
    'toStep': 0x2b,
    'color': _0x5f36('0x61'),
    'name': _0x5f36('0x62'),
    'id': 0x410,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x2b,
    'toStep': 0x2c,
    'color': _0x5f36('0x63'),
    'name': 'Musty/Dusty',
    'id': 0x411,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x2c,
    'toStep': 0x2d,
    'color': _0x5f36('0x64'),
    'name': 'Musty/Earthy',
    'id': 0x412,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x2d,
    'toStep': 0x2e,
    'color': '#9D977F',
    'name': _0x5f36('0x65'),
    'id': 0x413,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x2e,
    'toStep': 0x2f,
    'color': '#CC7B6A',
    'name': _0x5f36('0x66'),
    'id': 0x414,
    'parentID': 0x6f
}, {
    'ring': 0x3,
    'fromStep': 0x2f,
    'toStep': 0x30,
    'color': _0x5f36('0x67'),
    'name': _0x5f36('0x68'),
    'id': 0x415,
    'parentID': 0x6f
}, {
    'ring': 0x2,
    'fromStep': 0x30,
    'toStep': 0x36,
    'color': _0x5f36('0x69'),
    'name': _0x5f36('0x6a'),
    'id': 0x70,
    'parentID': 0x4
}, {
    'ring': 0x3,
    'fromStep': 0x30,
    'toStep': 0x31,
    'color': _0x5f36('0x6b'),
    'name': _0x5f36('0x6c'),
    'id': 0x416,
    'parentID': 0x70
}, {
    'ring': 0x3,
    'fromStep': 0x31,
    'toStep': 0x32,
    'color': '#DEF2FD',
    'name': _0x5f36('0x6d'),
    'id': 0x417,
    'parentID': 0x70
}, {
    'ring': 0x3,
    'fromStep': 0x32,
    'toStep': 0x33,
    'color': '#7A9BAE',
    'name': 'Medicinal',
    'id': 0x418,
    'parentID': 0x70
}, {
    'ring': 0x3,
    'fromStep': 0x33,
    'toStep': 0x34,
    'color': '#039FB8',
    'name': _0x5f36('0x6e'),
    'id': 0x419,
    'parentID': 0x70
}, {
    'ring': 0x3,
    'fromStep': 0x34,
    'toStep': 0x35,
    'color': '#5E777B',
    'name': _0x5f36('0x6f'),
    'id': 0x41a,
    'parentID': 0x70
}, {
    'ring': 0x3,
    'fromStep': 0x35,
    'toStep': 0x36,
    'color': _0x5f36('0x70'),
    'name': _0x5f36('0x71'),
    'id': 0x41b,
    'parentID': 0x70
}, {
    'ring': 0x1,
    'fromStep': 0x36,
    'toStep': 0x3e,
    'color': _0x5f36('0x72'),
    'name': _0x5f36('0x73'),
    'id': 0x5,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x36,
    'toStep': 0x37,
    'color': '#CAA465',
    'name': _0x5f36('0x74'),
    'id': 0x71,
    'parentID': 0x5
}, {
    'ring': 0x2,
    'fromStep': 0x37,
    'toStep': 0x38,
    'color': '#DFBD7E',
    'name': _0x5f36('0x75'),
    'id': 0x72,
    'parentID': 0x5
}, {
    'ring': 0x2,
    'fromStep': 0x38,
    'toStep': 0x3c,
    'color': _0x5f36('0x76'),
    'name': _0x5f36('0x77'),
    'id': 0x73,
    'parentID': 0x5
}, {
    'ring': 0x3,
    'fromStep': 0x38,
    'toStep': 0x39,
    'color': _0x5f36('0x78'),
    'name': _0x5f36('0x79'),
    'id': 0x41c,
    'parentID': 0x73
}, {
    'ring': 0x3,
    'fromStep': 0x39,
    'toStep': 0x3a,
    'color': _0x5f36('0x7a'),
    'name': 'Ashy',
    'id': 0x41d,
    'parentID': 0x73
}, {
    'ring': 0x3,
    'fromStep': 0x3a,
    'toStep': 0x3b,
    'color': _0x5f36('0x7b'),
    'name': _0x5f36('0x7c'),
    'id': 0x41e,
    'parentID': 0x73
}, {
    'ring': 0x3,
    'fromStep': 0x3b,
    'toStep': 0x3c,
    'color': _0x5f36('0x7d'),
    'name': _0x5f36('0x7e'),
    'id': 0x41f,
    'parentID': 0x73
}, {
    'ring': 0x2,
    'fromStep': 0x3c,
    'toStep': 0x3e,
    'color': '#DDAF61',
    'name': _0x5f36('0x7f'),
    'id': 0x74,
    'parentID': 0x5
}, {
    'ring': 0x3,
    'fromStep': 0x3c,
    'toStep': 0x3d,
    'color': '#B7906F',
    'name': _0x5f36('0x80'),
    'id': 0x420,
    'parentID': 0x74
}, {
    'ring': 0x3,
    'fromStep': 0x3d,
    'toStep': 0x3e,
    'color': _0x5f36('0x81'),
    'name': 'Malt',
    'id': 0x421,
    'parentID': 0x74
}, {
    'ring': 0x1,
    'fromStep': 0x3e,
    'toStep': 0x44,
    'color': _0x5f36('0x82'),
    'name': _0x5f36('0x83'),
    'id': 0x6,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x3e,
    'toStep': 0x3f,
    'color': _0x5f36('0x84'),
    'name': _0x5f36('0x85'),
    'id': 0x75,
    'parentID': 0x6
}, {
    'ring': 0x2,
    'fromStep': 0x3f,
    'toStep': 0x40,
    'color': _0x5f36('0x86'),
    'name': _0x5f36('0x87'),
    'id': 0x76,
    'parentID': 0x6
}, {
    'ring': 0x2,
    'fromStep': 0x40,
    'toStep': 0x44,
    'color': _0x5f36('0x88'),
    'name': _0x5f36('0x89'),
    'id': 0x77,
    'parentID': 0x6
}, {
    'ring': 0x3,
    'fromStep': 0x40,
    'toStep': 0x41,
    'color': _0x5f36('0x8a'),
    'name': 'Anise',
    'id': 0x422,
    'parentID': 0x77
}, {
    'ring': 0x3,
    'fromStep': 0x41,
    'toStep': 0x42,
    'color': '#8C292C',
    'name': 'Nutmeg',
    'id': 0x423,
    'parentID': 0x77
}, {
    'ring': 0x3,
    'fromStep': 0x42,
    'toStep': 0x43,
    'color': _0x5f36('0x8b'),
    'name': _0x5f36('0x8c'),
    'id': 0x424,
    'parentID': 0x77
}, {
    'ring': 0x3,
    'fromStep': 0x43,
    'toStep': 0x44,
    'color': '#A16C5A',
    'name': 'Clove',
    'id': 0x425,
    'parentID': 0x77
}, {
    'ring': 0x1,
    'fromStep': 0x44,
    'toStep': 0x49,
    'color': _0x5f36('0x8d'),
    'name': _0x5f36('0x8e'),
    'id': 0x7,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x44,
    'toStep': 0x47,
    'color': _0x5f36('0x8f'),
    'name': _0x5f36('0x90'),
    'id': 0x78,
    'parentID': 0x7
}, {
    'ring': 0x3,
    'fromStep': 0x44,
    'toStep': 0x45,
    'color': _0x5f36('0x91'),
    'name': _0x5f36('0x92'),
    'id': 0x426,
    'parentID': 0x78
}, {
    'ring': 0x3,
    'fromStep': 0x45,
    'toStep': 0x46,
    'color': _0x5f36('0x93'),
    'name': _0x5f36('0x94'),
    'id': 0x427,
    'parentID': 0x78
}, {
    'ring': 0x3,
    'fromStep': 0x46,
    'toStep': 0x47,
    'color': _0x5f36('0x95'),
    'name': _0x5f36('0x96'),
    'id': 0x428,
    'parentID': 0x78
}, {
    'ring': 0x2,
    'fromStep': 0x47,
    'toStep': 0x49,
    'color': _0x5f36('0x97'),
    'name': _0x5f36('0x98'),
    'id': 0x79,
    'parentID': 0x7
}, {
    'ring': 0x3,
    'fromStep': 0x47,
    'toStep': 0x48,
    'color': _0x5f36('0x99'),
    'name': _0x5f36('0x9a'),
    'id': 0x429,
    'parentID': 0x79
}, {
    'ring': 0x3,
    'fromStep': 0x48,
    'toStep': 0x49,
    'color': _0x5f36('0x9b'),
    'name': _0x5f36('0x9c'),
    'id': 0x42a,
    'parentID': 0x79
}, {
    'ring': 0x1,
    'fromStep': 0x49,
    'toStep': 0x51,
    'color': _0x5f36('0x9d'),
    'name': _0x5f36('0x9e'),
    'id': 0x8,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x49,
    'toStep': 0x4d,
    'color': _0x5f36('0x9f'),
    'name': _0x5f36('0xa0'),
    'id': 0x7a,
    'parentID': 0x8
}, {
    'ring': 0x3,
    'fromStep': 0x49,
    'toStep': 0x4a,
    'color': '#310C0F',
    'name': _0x5f36('0xa1'),
    'id': 0x42b,
    'parentID': 0x7a
}, {
    'ring': 0x3,
    'fromStep': 0x4a,
    'toStep': 0x4b,
    'color': _0x5f36('0xa2'),
    'name': 'Maple\x20syrup',
    'id': 0x42c,
    'parentID': 0x7a
}, {
    'ring': 0x3,
    'fromStep': 0x4b,
    'toStep': 0x4c,
    'color': _0x5f36('0xa3'),
    'name': 'Caramelized',
    'id': 0x42d,
    'parentID': 0x7a
}, {
    'ring': 0x3,
    'fromStep': 0x4c,
    'toStep': 0x4d,
    'color': _0x5f36('0xa4'),
    'name': 'Honey',
    'id': 0x42e,
    'parentID': 0x7a
}, {
    'ring': 0x2,
    'fromStep': 0x4d,
    'toStep': 0x4e,
    'color': _0x5f36('0xa5'),
    'name': _0x5f36('0xa6'),
    'id': 0x7b,
    'parentID': 0x8
}, {
    'ring': 0x2,
    'fromStep': 0x4e,
    'toStep': 0x4f,
    'color': _0x5f36('0xa7'),
    'name': _0x5f36('0xa8'),
    'id': 0x7c,
    'parentID': 0x8
}, {
    'ring': 0x2,
    'fromStep': 0x4f,
    'toStep': 0x50,
    'color': _0x5f36('0xa9'),
    'name': _0x5f36('0xaa'),
    'id': 0x7d,
    'parentID': 0x8
}, {
    'ring': 0x2,
    'fromStep': 0x50,
    'toStep': 0x51,
    'color': '#D0545F',
    'name': _0x5f36('0xab'),
    'id': 0x7e,
    'parentID': 0x8
}, {
    'ring': 0x1,
    'fromStep': 0x51,
    'toStep': 0x55,
    'color': '#DB0D69',
    'name': _0x5f36('0xac'),
    'id': 0x9,
    'parentID': null
}, {
    'ring': 0x2,
    'fromStep': 0x51,
    'toStep': 0x52,
    'color': _0x5f36('0xad'),
    'name': _0x5f36('0xae'),
    'id': 0x7f,
    'parentID': 0x9
}, {
    'ring': 0x2,
    'fromStep': 0x52,
    'toStep': 0x55,
    'color': _0x5f36('0xaf'),
    'name': _0x5f36('0xac'),
    'id': 0x80,
    'parentID': 0x9
}, {
    'ring': 0x3,
    'fromStep': 0x52,
    'toStep': 0x53,
    'color': '#F7F1BD',
    'name': _0x5f36('0xb0'),
    'id': 0x42f,
    'parentID': 0x80
}, {
    'ring': 0x3,
    'fromStep': 0x53,
    'toStep': 0x54,
    'color': _0x5f36('0xb1'),
    'name': _0x5f36('0xb2'),
    'id': 0x430,
    'parentID': 0x80
}, {
    'ring': 0x3,
    'fromStep': 0x54,
    'toStep': 0x55,
    'color': _0x5f36('0xb3'),
    'name': _0x5f36('0xb4'),
    'id': 0x431,
    'parentID': 0x80
}];
const drawWheel = () => flavorList['map'](_0x441f42 => drawSlice(_0x441f42));
const drawSlice = ({ring, fromStep, toStep, color, name, id}) => {
    const _0xe0e094 = innerRadii[ring - 0x1];
    const _0x3d7130 = outerRadii[ring - 0x1];
    const _0x3b07d2 = fromStep / steps * 0x2 * Math['PI'];
    const _0x47c4fd = toStep / steps * 0x2 * Math['PI'];
    const _0x11df64 = circlex + Math[_0x5f36('0xb5')](_0x3b07d2) * _0xe0e094;
    const _0x6e3f55 = circley - Math[_0x5f36('0xb6')](_0x3b07d2) * _0xe0e094;
    const _0x2d00dd = circlex + Math[_0x5f36('0xb5')](_0x3b07d2) * _0x3d7130;
    const _0x25298a = circley - Math[_0x5f36('0xb6')](_0x3b07d2) * _0x3d7130;
    const _0x85ae8f = circlex + Math[_0x5f36('0xb5')](_0x47c4fd) * _0x3d7130;
    const _0x53e9e4 = circley - Math[_0x5f36('0xb6')](_0x47c4fd) * _0x3d7130;
    const _0x4454e3 = circlex + Math['sin'](_0x47c4fd) * _0xe0e094;
    const _0x592c9a = circley - Math[_0x5f36('0xb6')](_0x47c4fd) * _0xe0e094;
    const _0x1a09c4 = 'M' + _0x11df64 + '\x20' + _0x6e3f55 + 'L\x20' + _0x2d00dd + '\x20' + _0x25298a + 'A' + _0x3d7130 + '\x20' + _0x3d7130 + _0x5f36('0xb7') + _0x85ae8f + '\x20' + _0x53e9e4 + 'L' + _0x4454e3 + '\x20' + _0x592c9a + 'A' + _0xe0e094 + '\x20' + _0xe0e094 + '\x200\x200\x200\x20' + _0x11df64 + '\x20' + _0x6e3f55;
    const _0xc532a5 = document[_0x5f36('0xb8')](_0x5f36('0x2'), _0x5f36('0xb9'));
    _0xc532a5[_0x5f36('0x3')]('d', _0x1a09c4);
    const _0x5ab063 = document[_0x5f36('0xb8')](_0x5f36('0x2'), _0x5f36('0xba'));
    _0x5ab063[_0x5f36('0x3')]('x', circlex);
    _0x5ab063['setAttribute']('y', circley);
    _0x5ab063['setAttribute'](_0x5f36('0xbb'), _0x5f36('0xbc'));
    const _0xac8ff7 = (fromStep + toStep) / steps * 0xb4 - 0x5a;
    let _0x2966cb = _0xac8ff7;
    if (_0xac8ff7 > 0x5a) {
        _0x2966cb = _0xac8ff7 - 0.2;
    }
    var _0x29b46c = _0x5f36('0xbd') + _0x2966cb + '\x20' + circlex + '\x20' + circley + '),';
    if (ring == 0x1) {
        if (_0x5f36('0xbe') === _0x5f36('0xbe')) {
            let _0x37538e = (_0xe0e094 + _0x3d7130) / 1.82;
            let _0x566c3c = 0x0;
            _0x29b46c += _0x5f36('0xbf') + _0x37538e + ')';
            if (_0xac8ff7 > 0x0 && _0xac8ff7 < 0xb4) {
                _0x29b46c += _0x5f36('0xc0') + circlex + '\x20' + circley + ')';
                _0x566c3c = -5.5;
            }
            if (_0xac8ff7 > 0xb4 || _0xac8ff7 < 0x0) {
                _0x29b46c += _0x5f36('0xc1') + circlex + '\x20' + circley + ')';
            }
            _0x5ab063[_0x5f36('0x3')]('text-anchor', _0x5f36('0xbc'));
            let _0x50bee8 = name['indexOf']('/');
            if (_0x50bee8 == -0x1) {
                _0x5ab063[_0x5f36('0x8')] = name;
            } else {
                if (_0x5f36('0xc2') !== _0x5f36('0xc3')) {
                    let _0x42dcbd = name[_0x5f36('0xc4')](0x0, _0x50bee8 + 0x1);
                    let _0x20b07e = name[_0x5f36('0xc4')](_0x50bee8 + 0x1, name[_0x5f36('0xc5')]);
                    let _0x34d8fd = document['createElementNS']('http://www.w3.org/2000/svg', 'tspan');
                    _0x34d8fd[_0x5f36('0x8')] = _0x42dcbd;
                    _0x34d8fd[_0x5f36('0x3')]('x', circlex);
                    _0x34d8fd[_0x5f36('0x3')]('dy', _0x566c3c);
                    _0x5ab063['appendChild'](_0x34d8fd);
                    let _0x1b992b = document[_0x5f36('0xb8')](_0x5f36('0x2'), _0x5f36('0xc6'));
                    _0x1b992b[_0x5f36('0x8')] = _0x20b07e;
                    _0x1b992b[_0x5f36('0x3')]('x', circlex);
                    _0x1b992b[_0x5f36('0x3')]('dy', '6');
                    _0x5ab063[_0x5f36('0xc7')](_0x1b992b);
                } else {
                    if (!isSelected(slice)) {
                        document[_0x5f36('0x0')](getHigherGroupId(slice))[_0x5f36('0xc7')](slice);
                        selectedFlavors[_0x5f36('0xc8')](getFlavor(slice));
                        if (getGroupNumber(slice) > 0x2 && parentSliceAutoSelect) {
                            selectSlice(getParentSlice(slice));
                        }
                    }
                }
            }
        } else {
            let _0x322f63 = '';
            getSelectedFlavorBabies()[_0x5f36('0xc9')](_0xd0ca38 => {
                _0x322f63 == '' ? _0x322f63 += _0xd0ca38[_0x5f36('0xca')] : _0x322f63 += ',\x20' + _0xd0ca38[_0x5f36('0xca')];
            });
            return _0x322f63;
        }
    } else {
        let _0x231136 = _0x3d7130 - 0x3;
        _0x29b46c += _0x5f36('0xbf') + _0x231136 + ')';
        if (_0xac8ff7 > 0x5a) {
            let _0x231136 = _0x3d7130 - 0x5;
            _0x29b46c += _0x5f36('0xcb') + circlex + '\x20' + circley + ')';
        } else {
            _0x5ab063['setAttribute']('text-anchor', _0x5f36('0xcc'));
        }
        _0x5ab063[_0x5f36('0x8')] = name;
    }
    _0x5ab063['setAttribute'](_0x5f36('0x4'), _0x29b46c);
    _0x5ab063[_0x5f36('0xcd')][_0x5f36('0xce')] = _0x5f36('0xcf');
    let _0x5295e7 = 'white';
    if (isColorLight(color)) {
        if (_0x5f36('0xd0') === 'HcaIV') {
            _0x5295e7 = _0x5f36('0xd1');
            _0x5ab063[_0x5f36('0xcd')][_0x5f36('0xce')] = _0x5f36('0xd2');
        } else {
            let _0xf72186 = _0x3d7130 - 0x5;
            _0x29b46c += _0x5f36('0xcb') + circlex + '\x20' + circley + ')';
        }
    }
    _0x5ab063['style'][_0x5f36('0xd3')] = _0x5295e7;
    _0x5ab063[_0x5f36('0xcd')][_0x5f36('0xd4')] = _0x5295e7;
    var _0xdd3913 = document[_0x5f36('0xb8')](_0x5f36('0x2'), 'g');
    _0xdd3913[_0x5f36('0x3')]('id', '' + id);
    _0xdd3913[_0x5f36('0x3')](_0x5f36('0xd5'), _0x5f36('0xd6'));
    _0xdd3913[_0x5f36('0x3')](_0x5f36('0xd7'), _0x5f36('0xd8'));
    _0xdd3913[_0x5f36('0xcd')][_0x5f36('0xd4')] = 'white';
    _0xdd3913[_0x5f36('0xcd')][_0x5f36('0xd3')] = color;
    _0xc532a5['style'][_0x5f36('0xce')] = _0x5f36('0xd9');
    _0xdd3913[_0x5f36('0xc7')](_0xc532a5);
    _0xdd3913[_0x5f36('0xc7')](_0x5ab063);
    var _0x1337f9 = 'g' + ring * 0x2;
    document[_0x5f36('0x0')](_0x1337f9)[_0x5f36('0xc7')](_0xdd3913);
};
const isColorLight = _0x2b1e59 => {
    let _0x3fc6f5 = parseInt(_0x2b1e59[_0x5f36('0xc4')](0x1, 0x3), 0x10);
    let _0x28e09b = parseInt(_0x2b1e59['substring'](0x3, 0x5), 0x10);
    let _0x37d382 = parseInt(_0x2b1e59[_0x5f36('0xc4')](0x5, 0x7), 0x10);
    hsp = Math[_0x5f36('0xda')](0.299 * (_0x3fc6f5 * _0x3fc6f5) + 0.587 * (_0x28e09b * _0x28e09b) + 0.114 * (_0x37d382 * _0x37d382));
    return hsp > 0xd2;
};
const clickAction = _0x450908 => {
    isSelected(_0x450908) ? deselectSlice(_0x450908) : selectSlice(_0x450908);
    document['getElementById'](_0x5f36('0xdb'))[_0x5f36('0xdc')] = getSelectedFlavorIds();
};
const selectSlice = _0x36afb8 => {
    if (!isSelected(_0x36afb8)) {
        if ('VuPFZ' !== _0x5f36('0xdd')) {
            newText[_0x5f36('0x3')](_0x5f36('0xde'), _0x5f36('0xcc'));
        } else {
            document[_0x5f36('0x0')](getHigherGroupId(_0x36afb8))[_0x5f36('0xc7')](_0x36afb8);
            selectedFlavors[_0x5f36('0xc8')](getFlavor(_0x36afb8));
            if (getGroupNumber(_0x36afb8) > 0x2 && parentSliceAutoSelect) {
                selectSlice(getParentSlice(_0x36afb8));
            }
        }
    }
};
const deselectSlice = _0x2d8d1d => {
    document[_0x5f36('0x0')](getLowerGroupId(_0x2d8d1d))[_0x5f36('0xc7')](_0x2d8d1d);
    deselectFlavor(getFlavor(_0x2d8d1d));
    if (childSliceAutoDeselect) {
        if (_0x5f36('0xdf') !== _0x5f36('0xe0')) {
            getSelectedChildrenSlices(_0x2d8d1d)['map'](_0xc71e0e => deselectSlice(_0xc71e0e));
        } else {
            return flavorList['find'](_0x5a5990 => _0x5a5990['id'] == _0x2d8d1d['id']);
        }
    }
};
const resetWheel = () => {
    wheelSVG[_0x5f36('0x8')] = SVGBackup;
    drawWheel();
};
const getGroupNumber = _0x2b3aa4 => parseInt(_0x2b3aa4[_0x5f36('0xe1')]['id'][_0x5f36('0xe2')]('g', ''));
const getHigherGroupId = _0x3cdeb2 => 'g' + (getGroupNumber(_0x3cdeb2) - 0x1);
const getLowerGroupId = _0x4f6941 => 'g' + (getGroupNumber(_0x4f6941) + 0x1);
const isSelected = _0x132dba => getGroupNumber(_0x132dba) % 0x2 > 0x0;
const getParentSliceID = _0x433f0a => {
    return flavorList['find'](_0x116715 => _0x116715['id'] == _0x433f0a)[_0x5f36('0xe3')];
};
const getParentSlice = _0x4a9136 => document[_0x5f36('0x0')](getParentSliceID(_0x4a9136['id']));
const deselectFlavor = _0x3d3004 => {
    selectedFlavors = selectedFlavors[_0x5f36('0x6')](_0x304b9f => _0x304b9f != _0x3d3004);
};
const getFlavor = _0x5db502 => {
    return flavorList[_0x5f36('0xe4')](_0x23e476 => _0x23e476['id'] == _0x5db502['id']);
};
const getSelectedFlavorIds = () => {
    return selectedFlavors[_0x5f36('0xc9')](_0x399edd => _0x399edd['id']);
};
const getSelectedFlavorParentIds = () => {
    return selectedFlavors[_0x5f36('0xc9')](_0x4a1522 => _0x4a1522[_0x5f36('0xe3')]);
};
const getSelectedFlavorNames = () => {
    return selectedFlavors[_0x5f36('0xc9')](_0x2dfc4d => _0x2dfc4d[_0x5f36('0xca')]);
};
const getParentFlavor = _0x170ce7 => {
    return flavorList['find'](_0x1165af => _0x1165af['id'] == _0x170ce7[_0x5f36('0xe3')]);
};
const getSelectedFlavorBabies = () => {
    return selectedFlavors[_0x5f36('0x6')](_0x53bb7e => !getSelectedFlavorParentIds()[_0x5f36('0xe5')](_0x53bb7e['id']));
};
const getSelectedFlavorString = () => {
    let _0x67ad = '';
    getSelectedFlavorBabies()[_0x5f36('0xc9')](_0x305724 => {
        if (_0x5f36('0xe6') === _0x5f36('0xe7')) {
            return selectedFlavors[_0x5f36('0xc9')](_0x482089 => _0x482089[_0x5f36('0xe3')]);
        } else {
            _0x67ad == '' ? _0x67ad += _0x305724[_0x5f36('0xca')] : _0x67ad += ',\x20' + _0x305724[_0x5f36('0xca')];
        }
    });
    return _0x67ad;
};
const getFlavorFamily = _0x2811d6 => {
    let _0x2c4464 = _0x2811d6[_0x5f36('0xca')];
    if (_0x2811d6[_0x5f36('0xe3')] != '0') {
        let _0xede878 = _0x2c4464;
        _0x2c4464 = getFlavorFamily(getParentFlavor(_0x2811d6)) + '->' + _0xede878;
    }
    return _0x2c4464;
};
const getSelectedFlavorStringLong = () => {
    return getSelectedFlavorBabies()[_0x5f36('0xc9')](_0x14f3ae => getFlavorFamily(_0x14f3ae));
};
const getSelectedChildrenSlices = _0x3c5e09 => {
    return flavorList[_0x5f36('0x6')](_0x36b4f9 => _0x36b4f9[_0x5f36('0xe3')] == _0x3c5e09['id'])[_0x5f36('0xc9')](_0x2b1090 => _0x2b1090['id'])[_0x5f36('0xc9')](_0x49374f => document[_0x5f36('0x0')](_0x49374f))[_0x5f36('0x6')](_0x52b531 => isSelected(_0x52b531));
};
drawWheel();