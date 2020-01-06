let selectedFlavors = [];
var innerRadii = [60, 95, 145];
var outerRadii = [120, 145, 200];
var ringnr = 3;
var steps = 99.999;
var circlex = 230;
var circley = 230;
//gedraginstellingen
var parentSliceAutoSelect = true;		//hogere smaak gaat mee omhoog
var childSliceAutoDeselect = true;   //subsmaak gaat mee omlaag
var slowness = 1; //traagheid bij animatie opbouw wiel

var wheelSVG = document.getElementById("svgC");

/*hier gaan we voor elke ring twee groepen maken
even getallen voor onaangeklikten en oneven voor aangeklikten (met schaduw)
bij klikken springt een stukje van de Ã©Ã©n naar de ander.
door de volgorde van de groepen, valt schaduw alleen op een grotere ring	*/
for (let i = (ringnr * 2); i > 0; i--) {
    const id = "g" + (i);
    const newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    newGroup.setAttribute("id", (id));
    //alle oneven groepen krijgen schaduw en verschuiving.
    if (i % 2 > 0) {
        newGroup.setAttribute('transform', "scale(1.03), translate(-8,-8)");
        newGroup.setAttribute("filter", "url(#dropshadow)");
    }
    wheelSVG.appendChild(newGroup);

}
var SVGBackup = wheelSVG.innerHTML; //backup maken om snel het wiel te wissen
var flavorList =
    [
        { ring: 1, fromStep: 0, toStep: 2, color: "#BDFF6D", name: "Resinous", id: 200, parentID: 32 },
        { ring: 1, fromStep: 2, toStep: 6, color: "#A4FF6D", name: "Nutty", id: 201, parentID: 32 },
        { ring: 1, fromStep: 6, toStep: 8, color: "#8CFF6D", name: "Grassy", id: 202, parentID: 32 },
        { ring: 2, fromStep: 0, toStep: 8, color: "#57FF07", name: "Vegetal", id: 32, parentID: 0 },
        { ring: 3, fromStep: 0, toStep: 1, color: "#DFFFB2", name: "Piney", id: 1474, parentID: 200 },
        { ring: 3, fromStep: 1, toStep: 2, color: "#DBFFB2", name: "Woody", id: 1475, parentID: 200 },
        { ring: 3, fromStep: 2, toStep: 3, color: "#D6FFB2", name: "Walnut", id: 1476, parentID: 201 },
        { ring: 3, fromStep: 3, toStep: 4, color: "#D2FFB2", name: "Coconut", id: 1477, parentID: 201 },
        { ring: 3, fromStep: 4, toStep: 5, color: "#CEFFB2", name: "Beany", id: 1478, parentID: 201 },
        { ring: 3, fromStep: 5, toStep: 6, color: "#C9FFB2", name: "Almond", id: 1479, parentID: 201 },
        { ring: 3, fromStep: 6, toStep: 7, color: "#C5FFB2", name: "Freshly cut grass", id: 1480, parentID: 202 },
        { ring: 3, fromStep: 7, toStep: 8, color: "#C0FFB2", name: "Straw-like", id: 1481, parentID: 202 },
        { ring: 1, fromStep: 8, toStep: 11, color: "#78FF6D", name: "Grainy", id: 203, parentID: 33 },
        { ring: 1, fromStep: 11, toStep: 12, color: "#73FF75", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 12, toStep: 13, color: "#73FF7E", name: "", id: null, parentID: 0 },
        { ring: 2, fromStep: 8, toStep: 13, color: "#23FF09", name: "Cereal", id: 33, parentID: 0 },
        { ring: 3, fromStep: 8, toStep: 9, color: "#BCFFB2", name: "Husky", id: 1485, parentID: 203 },
        { ring: 3, fromStep: 9, toStep: 10, color: "#B7FFB2", name: "Corn grits", id: 1486, parentID: 203 },
        { ring: 3, fromStep: 10, toStep: 11, color: "#B4FFB3", name: "Mealy", id: 1482, parentID: 203 },
        { ring: 3, fromStep: 11, toStep: 12, color: "#73FF75", name: "Malty", id: 1483, parentID: 33 },
        { ring: 3, fromStep: 12, toStep: 13, color: "#73FF7E", name: "Worty", id: 1484, parentID: 33 },
        { ring: 1, fromStep: 13, toStep: 15, color: "#73FF89", name: "Caramel", id: 204, parentID: 34 },
        { ring: 1, fromStep: 15, toStep: 18, color: "#73FFA0", name: "Burnt", id: 205, parentID: 34 },
        { ring: 2, fromStep: 13, toStep: 18, color: "#22FF3F", name: "Maillard", id: 34, parentID: 0 },
        { ring: 3, fromStep: 13, toStep: 14, color: "#B4FFBF", name: "Molasses", id: 1487, parentID: 204 },
        { ring: 3, fromStep: 14, toStep: 15, color: "#B4FFC5", name: "Licorice", id: 1488, parentID: 204 },
        { ring: 3, fromStep: 15, toStep: 16, color: "#B4FFC9", name: "Bread crust", id: 1489, parentID: 205 },
        { ring: 3, fromStep: 16, toStep: 17, color: "#B4FFCD", name: "Roast barley", id: 1490, parentID: 205 },
        { ring: 3, fromStep: 17, toStep: 18, color: "#B4FFD3", name: "Smoky", id: 1491, parentID: 205 },
        { ring: 1, fromStep: 18, toStep: 23, color: "#22FF89", name: "Phenolic", id: 206, parentID: 35 },
        { ring: 2, fromStep: 18, toStep: 23, color: "#22FF89", name: "", id: 35, parentID: 206 },
        { ring: 3, fromStep: 18, toStep: 19, color: "#73FFB1", name: "Tarry", id: 1492, parentID: 206 },
        { ring: 3, fromStep: 19, toStep: 20, color: "#9BFFBA", name: "Bakelite", id: 1493, parentID: 206 },
        { ring: 3, fromStep: 20, toStep: 21, color: "#73FFC1", name: "Carbolic", id: 1494, parentID: 206 },
        { ring: 3, fromStep: 21, toStep: 22, color: "#73FFCB", name: "Chlorophenol", id: 1495, parentID: 206 },
        { ring: 3, fromStep: 22, toStep: 23, color: "#73FFD5", name: "Isodoform", id: 1496, parentID: 206 },
        { ring: 1, fromStep: 23, toStep: 27, color: "#73FFEC", name: "Fatty acid", id: 207, parentID: 36 },
        { ring: 2, fromStep: 23, toStep: 31, color: "#21FFFF", name: "Fatty", id: 36, parentID: 24 },
        { ring: 3, fromStep: 23, toStep: 24, color: "#B4FFEF", name: "Caprylic", id: 1497, parentID: 207 },
        { ring: 3, fromStep: 24, toStep: 25, color: "#B4FFF4", name: "Cheesy", id: 1498, parentID: 207 },
        { ring: 3, fromStep: 25, toStep: 26, color: "#B4FFF7", name: "Isovaleric", id: 1499, parentID: 207 },
        { ring: 3, fromStep: 26, toStep: 27, color: "#B4FFFD", name: "Butyric", id: 1500, parentID: 207 },
        { ring: 3, fromStep: 27, toStep: 28, color: "#72FBFF", name: "Diacetyl", id: 1501, parentID: 36 },
        { ring: 3, fromStep: 28, toStep: 29, color: "#72F2FF", name: "Rancid", id: 1502, parentID: 36 },
        { ring: 1, fromStep: 27, toStep: 28, color: "#72FBFF", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 28, toStep: 29, color: "#72F2FF", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 29, toStep: 31, color: "#71E4FF", name: "Oily", id: 208, parentID: 36 },
        { ring: 3, fromStep: 29, toStep: 30, color: "#B3F5FF", name: "Vegetable oil", id: 1503, parentID: 208 },
        { ring: 3, fromStep: 30, toStep: 31, color: "#B3EFFF", name: "Mineral oil", id: 1504, parentID: 208 },
        { ring: 1, fromStep: 31, toStep: 33, color: "#70D0FF", name: "Sulfidic", id: 209, parentID: 37 },
        { ring: 1, fromStep: 33, toStep: 40, color: "#6EA4FF", name: "Sulfidic", id: 210, parentID: 37 },
        { ring: 1, fromStep: 40, toStep: 46, color: "#6C6AFF", name: "Cooked vegetable", id: 211, parentID: 37 },
        { ring: 1, fromStep: 46, toStep: 47, color: "8264FF", name: "", id: null, parentID: 0 },
        { ring: 2, fromStep: 31, toStep: 47, color: "#0525FF", name: "Sulfury", id: 37, parentID: 25 },
        { ring: 3, fromStep: 31, toStep: 32, color: "#B3EAFF", name: "Striking match", id: 1505, parentID: 209 },
        { ring: 3, fromStep: 32, toStep: 33, color: "#B3E5FF", name: "Meaty", id: 1506, parentID: 209 },
        { ring: 3, fromStep: 33, toStep: 34, color: "#B3DFFF", name: "Hydrogen Sulfide", id: 1507, parentID: 210 },
        { ring: 3, fromStep: 34, toStep: 35, color: "#B3DBFF", name: "Mercaptan", id: 1508, parentID: 210 },
        { ring: 3, fromStep: 35, toStep: 36, color: "#B3D6FF", name: "Garlic", id: 1509, parentID: 210 },
        { ring: 3, fromStep: 36, toStep: 37, color: "#B3D2FF", name: "Lightstruck", id: 1510, parentID: 210 },
        { ring: 3, fromStep: 37, toStep: 38, color: "#B2CCFF", name: "Autolysed", id: 1511, parentID: 210 },
        { ring: 3, fromStep: 38, toStep: 39, color: "#B2C7FF", name: "Burnt rubber", id: 1512, parentID: 210 },
        { ring: 3, fromStep: 39, toStep: 40, color: "#B2C3FF", name: "Shrimp-like", id: 1513, parentID: 210 },
        { ring: 3, fromStep: 40, toStep: 41, color: "#B2BDFF", name: "Parsnip / Celery", id: 1514, parentID: 211 },
        { ring: 3, fromStep: 41, toStep: 42, color: "#B2BAFF", name: "Dimethyl sulfide", id: 1515, parentID: 211 },
        { ring: 3, fromStep: 42, toStep: 43, color: "#B2B4FF", name: "Cooked cabbage", id: 1516, parentID: 211 },
        { ring: 3, fromStep: 43, toStep: 44, color: "#B2B0FF", name: "Cooked sweet corn", id: 1517, parentID: 211 },
        { ring: 3, fromStep: 44, toStep: 45, color: "#B5AEFF", name: "Cooked tomato", id: 1518, parentID: 211 },
        { ring: 3, fromStep: 45, toStep: 46, color: "#B9AEFF", name: "Cooked onion", id: 1519, parentID: 211 },
        { ring: 3, fromStep: 46, toStep: 47, color: "#8264FF", name: "Yeasy", id: 1520, parentID: 37 },
        { ring: 1, fromStep: 47, toStep: 48, color: "#8A64FF", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 48, toStep: 49, color: "#9264FF", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 49, toStep: 50, color: "#9A64FF", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 50, toStep: 52, color: "#A864FF", name: "Moldy", id: 212, parentID: 38 },
        { ring: 2, fromStep: 47, toStep: 52, color: "#4500FF", name: "Stale", id: 38, parentID: 28 },
        { ring: 3, fromStep: 47, toStep: 48, color: "#8A64FF", name: "Catty", id: 1521, parentID: 38 },
        { ring: 3, fromStep: 48, toStep: 49, color: "#9264FF", name: "Papery", id: 1522, parentID: 38 },
        { ring: 3, fromStep: 49, toStep: 50, color: "#9A64FF", name: "Leathery", id: 1523, parentID: 38 },
        { ring: 3, fromStep: 50, toStep: 51, color: "#CFA3FA", name: "Earthy", id: 1524, parentID: 212 },
        { ring: 3, fromStep: 51, toStep: 52, color: "#D4AEFF", name: "Musty", id: 1525, parentID: 212 },
        { ring: 1, fromStep: 52, toStep: 54, color: "#A864FF", name: "Acidic", id: 213, parentID: 0 },
        { ring: 2, fromStep: 52, toStep: 54, color: "#A864FF", name: "", id: 39, parentID: 213 },
        { ring: 3, fromStep: 52, toStep: 53, color: "#B463FF", name: "Acetic", id: 1526, parentID: 39 },
        { ring: 3, fromStep: 53, toStep: 54, color: "#BE63FF", name: "Sour", id: 1527, parentID: 39 },
        { ring: 1, fromStep: 54, toStep: 60, color: "#BE00FF", name: "Sweet", id: 214, parentID: 0 },
        { ring: 2, fromStep: 54, toStep: 60, color: "#BE00FF", name: "", id: 40, parentID: 214 },
        { ring: 3, fromStep: 54, toStep: 55, color: "#C663FF", name: "Honey", id: 1528, parentID: 40 },
        { ring: 3, fromStep: 55, toStep: 56, color: "#CF62FF", name: "Jam-like", id: 1529, parentID: 40 },
        { ring: 3, fromStep: 56, toStep: 57, color: "#D962FF", name: "Vanilla", id: 1530, parentID: 40 },
        { ring: 3, fromStep: 57, toStep: 58, color: "#E162FF", name: "Primings", id: 1531, parentID: 40 },
        { ring: 3, fromStep: 58, toStep: 59, color: "#EB61FF", name: "Syrupy", id: 1532, parentID: 40 },
        { ring: 3, fromStep: 59, toStep: 60, color: "#F561FF", name: "Oversweet", id: 1533, parentID: 40 },
        { ring: 1, fromStep: 60, toStep: 61, color: "#FB00FD", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 61, toStep: 62, color: "#FB00E8", name: "", id: null, parentID: 0 },
        { ring: 2, fromStep: 60, toStep: 61, color: "#FB00FD", name: "", id: 41, parentID: 28 },
        { ring: 2, fromStep: 61, toStep: 62, color: "#FB00E8", name: "", id: 42, parentID: 28 },
        { ring: 3, fromStep: 60, toStep: 61, color: "#FB00FD", name: "Salty", id: 1534, parentID: 41 },
        { ring: 3, fromStep: 61, toStep: 62, color: "#FB00E8", name: "Bitter", id: 1535, parentID: 42 },
        { ring: 1, fromStep: 62, toStep: 63, color: "#FC62EB", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 63, toStep: 64, color: "#FC63E1", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 64, toStep: 65, color: "#FC63D7", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 65, toStep: 68, color: "#FC65C6", name: "Astringent", id: 215, parentID: 43 },
        { ring: 2, fromStep: 62, toStep: 73, color: "#FB007F", name: "Mouthfeel", id: 43, parentID: 28 },
        { ring: 3, fromStep: 62, toStep: 63, color: "#FC62EB", name: "Alkaline", id: 1536, parentID: 43 },
        { ring: 3, fromStep: 63, toStep: 64, color: "#FC63E1", name: "Mouthcoating", id: 1537, parentID: 43 },
        { ring: 3, fromStep: 64, toStep: 65, color: "#FC63D7", name: "Metallic", id: 1538, parentID: 43 },
        { ring: 3, fromStep: 65, toStep: 66, color: "#FDAEE6", name: "Drying", id: 1539, parentID: 215 },
        { ring: 3, fromStep: 66, toStep: 67, color: "#FDAEE3", name: "Tart", id: 1540, parentID: 215 },
        { ring: 3, fromStep: 67, toStep: 68, color: "#FDAEDD", name: "Puckering", id: 1541, parentID: 215 },
        { ring: 1, fromStep: 68, toStep: 69, color: "#FC65B4", name: "", id: null, parentID: 0 },
        { ring: 1, fromStep: 69, toStep: 71, color: "#FC65A6", name: "Carbonation", id: 216, parentID: 43 },
        { ring: 1, fromStep: 71, toStep: 73, color: "#FC6695", name: "Warming", id: 217, parentID: 43 },
        { ring: 3, fromStep: 68, toStep: 69, color: "#FC65B4", name: "Powdery", id: 1542, parentID: 43 },
        { ring: 3, fromStep: 69, toStep: 70, color: "#FDAFD4", name: "Flat", id: 1543, parentID: 216 },
        { ring: 3, fromStep: 70, toStep: 71, color: "#FDAFCE", name: "Gassy", id: 1544, parentID: 216 },
        { ring: 3, fromStep: 71, toStep: 72, color: "#FDAFCA", name: "Alcoholic", id: 1545, parentID: 217 },
        { ring: 3, fromStep: 72, toStep: 73, color: "#FDAFC7", name: "Piquant", id: 1546, parentID: 217 },
        { ring: 1, fromStep: 73, toStep: 77, color: "#FC677D", name: "Body", id: 218, parentID: 44 },
        { ring: 2, fromStep: 73, toStep: 77, color: "#FB0019", name: "Fullness", id: 44, parentID: 31 },
        { ring: 3, fromStep: 73, toStep: 74, color: "#FDAFC2", name: "Watery", id: 1547, parentID: 218 },
        { ring: 3, fromStep: 74, toStep: 75, color: "#FDB0BD", name: "Characterless", id: 1548, parentID: 218 },
        { ring: 3, fromStep: 75, toStep: 76, color: "#FDB0B8", name: "Satiating", id: 1549, parentID: 218 },
        { ring: 3, fromStep: 76, toStep: 77, color: "#FDB0B4", name: "Thick", id: 1550, parentID: 218 },
        { ring: 2, fromStep: 77, toStep: 100, color: "#FDA109", name: "Aromatic, Fragrant, Fruity, Floral", id: 45, parentID: 31 },
        { ring: 1, fromStep: 77, toStep: 79, color: "#FC706D", name: "Alcoholic", id: 219, parentID: 45 },
        { ring: 3, fromStep: 77, toStep: 78, color: "#FDB2B2", name: "Spicy", id: 1551, parentID: 219 },
        { ring: 3, fromStep: 78, toStep: 79, color: "#FDB7B2", name: "Vinous", id: 1552, parentID: 219 },
        { ring: 1, fromStep: 79, toStep: 82, color: "#FC866D", name: "Solvent-like", id: 220, parentID: 45 },
        { ring: 3, fromStep: 79, toStep: 80, color: "#FDBCB2", name: "Plastics", id: 1553, parentID: 220 },
        { ring: 3, fromStep: 80, toStep: 81, color: "#FDC1B2", name: "Can-liner", id: 1554, parentID: 220 },
        { ring: 3, fromStep: 81, toStep: 82, color: "#FEC5B2", name: "Laquer-like", id: 1555, parentID: 220 },
        { ring: 1, fromStep: 82, toStep: 85, color: "#FDA06D", name: "Estery", id: 221, parentID: 45 },
        { ring: 3, fromStep: 82, toStep: 83, color: "#FECABB", name: "Isoamyl acetate", id: 1556, parentID: 221 },
        { ring: 3, fromStep: 83, toStep: 84, color: "#FECEB2", name: "Ethyl hexanoate", id: 1557, parentID: 221 },
        { ring: 3, fromStep: 84, toStep: 85, color: "#FED4B2", name: "Etyl acetate", id: 1558, parentID: 221 },
        { ring: 1, fromStep: 85, toStep: 93, color: "#FED46E", name: "Fruity", id: 222, parentID: 45 },
        { ring: 3, fromStep: 85, toStep: 86, color: "#FED9B2", name: "Citrus", id: 1559, parentID: 222 },
        { ring: 3, fromStep: 86, toStep: 87, color: "#FEDEB2", name: "Apple", id: 1560, parentID: 222 },
        { ring: 3, fromStep: 87, toStep: 88, color: "#FEE3B2", name: "Banana", id: 1561, parentID: 222 },
        { ring: 3, fromStep: 88, toStep: 89, color: "#FEE7B2", name: "Black currant", id: 1562, parentID: 222 },
        { ring: 3, fromStep: 89, toStep: 90, color: "#FEECB2", name: "Melony", id: 1563, parentID: 222 },
        { ring: 3, fromStep: 90, toStep: 91, color: "#FFF2B2", name: "Pear", id: 1564, parentID: 222 },
        { ring: 3, fromStep: 91, toStep: 92, color: "#FFF6B2", name: "Raspberry", id: 1565, parentID: 222 },
        { ring: 3, fromStep: 92, toStep: 93, color: "#FFFCB2", name: "Strawberry", id: 1566, parentID: 222 },
        { ring: 1, fromStep: 93, toStep: 94, color: "#FFFF6E", name: "", id: null, parentID: 0 },
        { ring: 3, fromStep: 93, toStep: 94, color: "#FFFF6E", name: "Acetaldehyde", id: 1567, parentID: 45 },
        { ring: 1, fromStep: 94, toStep: 97, color: "#EEFF6E", name: "Floral", id: 223, parentID: 45 },
        { ring: 3, fromStep: 94, toStep: 95, color: "#FCFFB2", name: "2-Phenylethanol", id: 1568, parentID: 223 },
        { ring: 3, fromStep: 95, toStep: 96, color: "#F6FFB2", name: "Geraniol", id: 1569, parentID: 223 },
        { ring: 3, fromStep: 96, toStep: 97, color: "#F1FFB2", name: "Perfumy", id: 1570, parentID: 223 },
        { ring: 1, fromStep: 97, toStep: 100, color: "#D3FF6E", name: "Hoppy", id: 224, parentID: 45 },
        { ring: 3, fromStep: 97, toStep: 98, color: "#EEFFB2", name: "Kettle-hop", id: 1571, parentID: 224 },
        { ring: 3, fromStep: 98, toStep: 99, color: "#E9FFB2", name: "Dry-hop", id: 1572, parentID: 224 },
        { ring: 3, fromStep: 99, toStep: 100, color: "#E5FFB2", name: "Hop oil", id: 1573, parentID: 224 },
    ];

//Teken het wiel, door voor elke flavor drawSlice() aan te roepen.
const drawWheel = () => flavorList.map(flavor => drawSlice(flavor));

// function drawWheel() {
//     for (let i = 0; i < flavorList.length; i++) {
//         if (slowness > 0) { //langzaam opbouwen
//             var testa = setTimeout(function () {
//                 drawSlice(flavorList[i].ring,
//                     flavorList[i].fromStep, flavorList[i].toStep, flavorList[i].color,
//                     flavorList[i].name, flavorList[i].id);
//             }, (slowness * i));
//         } else {
//             drawSlice(flavorList[i].ring,
//                 flavorList[i].fromStep, flavorList[i].toStep, flavorList[i].color,
//                 flavorList[i].name, flavorList[i].id);
//         }
//     }
// }

//Teken de slice
var drawSlice = ({ ring, fromStep, toStep, color, name, id }) => {
    //benoem in Ã©Ã©n keer 6 variabelen, uit de flavor te halen
    //name = name.toUpperCase();

    //Straal en hoeken bepalen.
    var innerRadius = innerRadii[ring - 1];			//straal van binnenste boog
    var outerRadius = outerRadii[ring - 1];			//straal van buitenste boog
    var Angle1 = (fromStep / steps) * 2 * Math.PI;	//hoek waar de slice begint
    var Angle2 = (toStep / steps) * 2 * Math.PI;		//hoek waar de slice eindigt

    //Elke slice heeft 4 punten/hoeken, dus 4 x,y coordinaten.
    var x1 = (circlex + (Math.sin(Angle1) * innerRadius));
    var y1 = (circley - (Math.cos(Angle1) * innerRadius));
    var x2 = (circlex + (Math.sin(Angle1) * outerRadius));
    var y2 = (circley - (Math.cos(Angle1) * outerRadius));
    var x3 = (circlex + (Math.sin(Angle2) * outerRadius));
    var y3 = (circley - (Math.cos(Angle2) * outerRadius));
    var x4 = (circlex + (Math.sin(Angle2) * innerRadius));
    var y4 = (circley - (Math.cos(Angle2) * innerRadius));

    //DE SVGCODE VOOR HET TEKENEN
    //1. ga naar punt 1 - M=move
    //2. trek vanaf daar een rechte lijn naar punt 2 - L=line
    //3. teken vanaf daar een grote boog naar punt 3 - A=arch
    //4. teken vanaf daar een rechte lijn naar punt 4 - L
    //5. teken vanaf daar een kleine boog terug naar punt 1 - A
    var pathString =
        "M" + x1 + " " + y1 +																						//1
        "L " + x2 + " " + y2 +																								//2
        "A" + outerRadius + " " + outerRadius + " 1 0 1 " + x3 + " " + y3 +	//3
        "L" + x4 + " " + y4 +																									//4
        "A" + innerRadius + " " + innerRadius + " 0 0 0 " + x1 + " " + y1;	//5

    //hier wordt het tekeningetje van de slice in elkaar gezet
    var newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    newPath.setAttribute("d", pathString);

    //HET MAKEN EN PLAATSEN VAN DE TEKST VAN DE NAMEN.
    //de tekst voor in de ringen word in verschillende stapppen gemaakt:
    //1. maak een elemeent met de text van de flavor
    var newText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    //2. zet de x en de y eerst het in het midden van het wiel
    newText.setAttribute("x", circlex);
    newText.setAttribute("y", circley);

    newText.setAttribute("alignment-baseline", "middle");

    //3. bepaal de hoek van de tekst
    //er wordt (ongeveer) 90 graden vanaf getrokken, omdat de tekst
    //natuurlijk eerst horizontaal staat, dus al 90 graden gedraaid.
    var angle = (((fromStep + toStep) / steps) * 180) - 90;
    let textAngle = angle;
    //4. kleine correctie voor de tekst die voorbij het onderste punt komt.
    if (angle > 90) {
        textAngle = angle - (0.2);
    }

    //5. Bepaal hoever de teks van het midden moet staan.

    //6. maak een string waarin de transformaties uit de vorige stappen staan
    var transformString = "rotate(" + textAngle + " " + circlex + " " + circley + "),";
    //transformString += "translate("+textX+")";
    //7. in de binnenste ring moet de tekst dwars staan, dus meer berekenigen
    if (ring == 2) {
        //8. verder van het midden af
        let textX = ((innerRadius + outerRadius) / 1.82)
        let textXCorrection = 0;
        transformString += "translate(" + textX + ")";

        //9. in de onderste helft moet alles een kwartslag terug
        if (angle > 0 && angle < 180) {
            transformString += "rotate(-90 " + circlex + " " + circley + ")";
            textXCorrection = -5.5;
        }
        //10. in de bovenste helft moet alles een kwartslag verder
        if (angle > 180 || angle < 0) {
            transformString += "rotate(90 " + circlex + " " + circley + ")";
            //	transformString += "translate(1)";
        }
        //11. de tekst moet in het midden worden uitgelijnd.
        newText.setAttribute("text-anchor", "middle");
        //12. Kijk of er een "/" in de naam staat.
        let division = name.indexOf("/");
        if (division == -1) {
            newText.innerHTML = name;
        }
        //13. Zo ja, breek hem af.
        else {
            let namepart1 = name.substring(0, division + 1);
            let namepart2 = name.substring(division + 1, name.length);
            //14. Zet eerst het eerste deel neer
            let newSpan1 = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
            newSpan1.innerHTML = namepart1;
            newSpan1.setAttribute("x", circlex);
            newSpan1.setAttribute("dy", textXCorrection);
            newText.appendChild(newSpan1);
            //newText.innerHTML = namepart1;
            //15. maak dan een apart vakje onder het eerste deel voor het tweede.
            let newSpan2 = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
            newSpan2.innerHTML = namepart2;
            newSpan2.setAttribute("x", circlex);
            newSpan2.setAttribute("dy", "6");
            newText.appendChild(newSpan2);
        }
    }
    //15. in andere ringen moet sommige tekst ook rechtopgedraaid worden
    else {
        let textX = outerRadius - 3
        transformString += "translate(" + textX + ")";
        //16. voorbij het onderste punt? dan op zijn kop zetten en
        //rechts uitlijnen in plaat van links
        if (angle > 90) {
            //newText.setAttribute("text-anchor", "start");
            let textX = outerRadius - 5

            transformString += "rotate(180 " + circlex + " " + circley + ")";
        }
        else {
            newText.setAttribute("text-anchor", "end");

        }
        newText.innerHTML = name;
    }

    //17. de transformatie toepassen. Lijndikte en kleur bepalen.
    newText.setAttribute('transform', transformString);

    newText.style.strokeWidth = "0px"; // geen lijn om tekst
    let lineAndTextColor = "black";
    // if (isColorLight(color)) {
    //     lineAndTextColor = "black";
    //     newText.style.strokeWidth = "0.3px";
    // }
    newText.style.fill = lineAndTextColor;
    newText.style.stroke = lineAndTextColor;

    //18. de Slice maken: maak de nieuwe groep aan met de id van de flavor
    var newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    newGroup.setAttribute("id", ("" + id));
    newGroup.setAttribute("class", "slice");
    newGroup.setAttribute("onclick", "clickAction(this)");
    newGroup.style.stroke = "white";
    newGroup.style.fill = color;
    newPath.style.strokeWidth = "0.5px";
    //19. zet de tekening en de tekst in deze groep
    newGroup.appendChild(newPath);
    newGroup.appendChild(newText);

    //20. Zet die groep vervolgens in de juiste ringgroep.
    var parentGroupID = ("g" + (ring * 2));
    document.getElementById(parentGroupID).appendChild(newGroup);
}

//Bepaal of een kleur licht is (zodat witte letters er niet op te lezen zijn)
//naar voorbeeld: https://awik.io/determine-color-bright-dark-using-javascript/
const isColorLight = (color) => {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );
    return (hsp > 210);
}

//Klikactie voor een slice: moet ie geselecteerd worden of geDEselecteerd?
const clickAction = (slice) => {
    (isSelected(slice)) ? deselectSlice(slice) : selectSlice(slice);
    //document.getElementById("userNotes").innerText = getSelectedFlavorString();
    document.getElementById("flavorsBeer").value = (getSelectedFlavorIds());
}

//selecteren van een slice = in een group plaatsen met hoger nummer
const selectSlice = (slice) => {
    if (!isSelected(slice)) {
        document.getElementById(getHigherGroupId(slice)).appendChild(slice);
        selectedFlavors.push(getFlavor(slice));
        //Heeft ie een parent? en staat de optie op true, dan ook selecteren:
        if (getGroupNumber(slice) > 0 && parentSliceAutoSelect) {
            selectSlice(getParentSlice(slice));
        }
    }
}

//Deselecteren van een slice = in een group plaatsen met lager nummer
const deselectSlice = (slice) => {
    document.getElementById(getLowerGroupId(slice)).appendChild(slice);
    deselectFlavor(getFlavor(slice));
    //staat de optie aan om children ook te Deselecteren, doe die dan ook.
    if (childSliceAutoDeselect) {
        getSelectedChildrenSlices(slice).map((ChildSlice) => deselectSlice(ChildSlice));
    }
}

//backup HTML in SVG terugzetten = leegmaken en dan opnieuw tekenen
const resetWheel = () => {
    wheelSVG.innerHTML = SVGBackup;
    drawWheel();
}

//het nummer van de groep. Ze heten "g1", "g2", etc, dus hak de "g" eraf.
const getGroupNumber = (slice) => parseInt((slice.parentNode.id).replace("g", ""));

//Het id van een groep hoger. g2=g1, etc
const getHigherGroupId = (slice) => `g${getGroupNumber(slice) - 1}`;

//Het id van een groep lager. g1=g2, etc
const getLowerGroupId = (slice) => `g${getGroupNumber(slice) + 1}`;

//is deze geselecteerd? dat ziet ie door een oneven groepnummer
const isSelected = (slice) => getGroupNumber(slice) % 2 > 0;

//zoekt in flavorList naar ID van de parentSlice
const getParentSliceID = (sliceID) => {
    return (flavorList.find((listpart) =>
        listpart.id == sliceID
    ).parentID);
}

//Zoek het daadwerkelijke element van de parent.
const getParentSlice = (slice) => document.getElementById(getParentSliceID(slice.id));

//haal flavor uit lijst met geselecteerde flavors
const deselectFlavor = (deselectedFlavor) => {
    selectedFlavors = selectedFlavors.filter((flavor) => flavor != deselectedFlavor);
}

//geef flavor van een slice
const getFlavor = (slice) => {
    return (flavorList.find((flavor) => flavor.id == slice.id));
}

//geef de ID-nummers van de geselecteerde flavors
const getSelectedFlavorIds = () => {
    return (selectedFlavors.map((flavor) => flavor.id));
}

//geef de parentID-nummers van de geselecteerde flavors
const getSelectedFlavorParentIds = () => {
    return (selectedFlavors.map((flavor) => flavor.parentID));
}

//geef de namen van de geselecteerde flavors
const getSelectedFlavorNames = () => {
    return (selectedFlavors.map((flavor) => flavor.name));
}

//Geef de parentflavor
const getParentFlavor = (childFlavor) => {
    return flavorList.find((flavor) => flavor.id == childFlavor.parentID);
}

//geef geselecteerde "babies" = flavors met op dit moment geen geselecteerde children
const getSelectedFlavorBabies = () => {
    return (selectedFlavors.filter((flavor) => !(getSelectedFlavorParentIds().includes(flavor.id))));
}

//geef een string met alle namen van geselecteerde flavors
//wordt misschein later gebruikt om ergens in het formulier te laten zien.
const getSelectedFlavorString = () => {
    let result = "";
    getSelectedFlavorBabies().map((flavor) => {
        (result == "") ? result += flavor.name : result += ", " + flavor.name;
    });
    return result;
}

//Geeft voor een gegeven flavor een string met zijn voorouders
//in "familieopmaak", bijvoorbeeld voor berry 'Fruity->Berry'
const getFlavorFamily = (flavor) => {
    let result = flavor.name;
    if (flavor.parentID != '0') {
        let temp = result;
        result = getFlavorFamily(getParentFlavor(flavor)) + "->" + temp;
    }
    return result;
}

//geef een string met alle namen van geselecteerde flavors in "familieopmaak"
//wordt misschein later gebruikt om ergens in het formulier te laten zien.
const getSelectedFlavorStringLong = () => {
    return getSelectedFlavorBabies().map((flavor) => getFlavorFamily(flavor));
}

//Onderstaande functie krijgt een slice mee en geeft een lijst terug met
//de children van deze slice die geselecteerd zijn. Dat gaat zo:
//1. neem de flavorList en filter daar alleen de flavors uit die
//onder deze vallen (ParentID == sliceid).
//2. neem daarvan niet de hele flavor, maar de id
//3. zoek de daadwerkelijke elementen met die id.
//4. filter alleen de elementen die geselecteerd zijn.
const getSelectedChildrenSlices = (slice) => {
    return flavorList.filter((flavor) => flavor.parentID == slice.id) 	//1
        .map((flavor) => flavor.id)										//2
        .map((id) => document.getElementById(id))					//3
        .filter((element) => isSelected(element));				//4
};

drawWheel();

// resetWheel();
