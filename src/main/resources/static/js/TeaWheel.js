let selectedFlavors = [];
var innerRadii = [50, 80, 145];
var outerRadii = [80, 145, 200];
var ringnr = 3;
var steps = 86;
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
        { ring: 1, fromStep: 0, toStep: 17, color: "#727F39", name: "Plants / herbaceous", id: 22, parentID: 0 },

        { ring: 2, fromStep: 0, toStep: 3, color: "#727F39", name: "Grass", id: 183, parentID: 22 },

        { ring: 3, fromStep: 0, toStep: 1, color: "#727F39", name: "Fresh cut grass", id: 1388, parentID: 183 },
        { ring: 3, fromStep: 1, toStep: 2, color: "#727F39", name: "Hay", id: 1389, parentID: 183 },
        { ring: 3, fromStep: 2, toStep: 3, color: "#727F39", name: "Bamboo", id: 1390, parentID: 183 },

        { ring: 2, fromStep: 3, toStep: 10, color: "#939D61", name: "Vegetables", id: 184, parentID: 22 },

        { ring: 3, fromStep: 3, toStep: 4, color: "#939D61", name: "Butternut", id: 1391, parentID: 184 },
        { ring: 3, fromStep: 4, toStep: 5, color: "#939D61", name: "Spinach", id: 1392, parentID: 184 },
        { ring: 3, fromStep: 5, toStep: 6, color: "#939D61", name: "Bean sprouts", id: 1393, parentID: 184 },
        { ring: 3, fromStep: 6, toStep: 7, color: "#939D61", name: "Aspargus", id: 1394, parentID: 184 },
        { ring: 3, fromStep: 7, toStep: 8, color: "#939D61", name: "Peas", id: 1395, parentID: 184 },
        { ring: 3, fromStep: 8, toStep: 9, color: "#939D61", name: "Alfalfa", id: 1396, parentID: 184 },
        { ring: 3, fromStep: 9, toStep: 10, color: "#939D61", name: "Green beans", id: 1397, parentID: 184 },

        { ring: 2, fromStep: 10, toStep: 17, color: "#727F39", name: "Herbs", id: 185, parentID: 22 },

        { ring: 3, fromStep: 10, toStep: 11, color: "#727F39", name: "Basil", id: 1398, parentID: 185 },
        { ring: 3, fromStep: 11, toStep: 12, color: "#727F39", name: "Parsley", id: 1399, parentID: 185 },
        { ring: 3, fromStep: 12, toStep: 13, color: "#727F39", name: "Mint", id: 1400, parentID: 185 },
        { ring: 3, fromStep: 13, toStep: 14, color: "#727F39", name: "Lavender", id: 1401, parentID: 185 },
        { ring: 3, fromStep: 14, toStep: 15, color: "#727F39", name: "Sage", id: 1402, parentID: 185 },
        { ring: 3, fromStep: 15, toStep: 16, color: "#727F39", name: "Thyme", id: 1403, parentID: 185 },
        { ring: 3, fromStep: 16, toStep: 17, color: "#727F39", name: "Fennel", id: 1404, parentID: 185 },

        { ring: 1, fromStep: 17, toStep: 24, color: "#E2B027", name: "Floral", id: 23, parentID: 0 },

        { ring: 2, fromStep: 17, toStep: 20, color: "#E2B027", name: "Summer meadow", id: 186, parentID: 23 },


        { ring: 3, fromStep: 17, toStep: 18, color: "#E2B027", name: "Osmanthus", id: 1405, parentID: 186 },
        { ring: 3, fromStep: 18, toStep: 19, color: "#E2B027", name: "Jasmine", id: 1406, parentID: 186 },
        { ring: 3, fromStep: 19, toStep: 20, color: "#E2B027", name: "Chrysantemum", id: 1407, parentID: 186 },

        { ring: 2, fromStep: 20, toStep: 24, color: "#EFD051", name: "Garden flowers", id: 187, parentID: 23 },

        { ring: 3, fromStep: 20, toStep: 21, color: "#EFD051", name: "Rose", id: 1408, parentID: 187 },
        { ring: 3, fromStep: 21, toStep: 22, color: "#EFD051", name: "Peony", id: 1409, parentID: 187 },
        { ring: 3, fromStep: 22, toStep: 23, color: "#EFD051", name: "Honeysuckle", id: 1410, parentID: 187 },
        { ring: 3, fromStep: 23, toStep: 24, color: "#EFD051", name: "Gardenia", id: 1411, parentID: 187 },

        { ring: 1, fromStep: 24, toStep: 29, color: "#977334", name: "Nutty / milky", id: 24, parentID: 0 },

        { ring: 2, fromStep: 24, toStep: 29, color: "#977334", name: "", id: 188, parentID: 24 },

        { ring: 3, fromStep: 24, toStep: 25, color: "#977334", name: "Creamy", id: 1412, parentID: 188 },
        { ring: 3, fromStep: 25, toStep: 26, color: "#977334", name: "Fresh butter", id: 1413, parentID: 188 },
        { ring: 3, fromStep: 26, toStep: 27, color: "#977334", name: "Almond", id: 1414, parentID: 188 },
        { ring: 3, fromStep: 27, toStep: 28, color: "#977334", name: "Chestnut", id: 1415, parentID: 188 },
        { ring: 3, fromStep: 28, toStep: 29, color: "#977334", name: "Roasted nuts", id: 1416, parentID: 188 },

        { ring: 1, fromStep: 29, toStep: 36, color: "#7A74AC", name: "Sweet", id: 25, parentID: 0 },

        { ring: 2, fromStep: 29, toStep: 36, color: "#7A74AC", name: "", id: 189, parentID: 25 },

        { ring: 3, fromStep: 29, toStep: 30, color: "#7A74AC", name: "Malt", id: 1417, parentID: 189 },
        { ring: 3, fromStep: 30, toStep: 31, color: "#7A74AC", name: "Honey/beewax", id: 1418, parentID: 189 },
        { ring: 3, fromStep: 31, toStep: 32, color: "#7A74AC", name: "Caramel", id: 1419, parentID: 189 },
        { ring: 3, fromStep: 32, toStep: 33, color: "#7A74AC", name: "Syrup", id: 1420, parentID: 189 },
        { ring: 3, fromStep: 33, toStep: 34, color: "#7A74AC", name: "Toffee", id: 1421, parentID: 189 },
        { ring: 3, fromStep: 34, toStep: 35, color: "#7A74AC", name: "Brown sugar", id: 1422, parentID: 189 },
        { ring: 3, fromStep: 35, toStep: 36, color: "#7A74AC", name: "Vanilla", id: 1423, parentID: 189 },

        { ring: 1, fromStep: 36, toStep: 41, color: "#AA604A", name: "Fire / animal", id: 26, parentID: 0 },

        { ring: 2, fromStep: 36, toStep: 41, color: "#AA604A", name: "", id: 190, parentID: 26 },

        { ring: 3, fromStep: 36, toStep: 37, color: "#AA604A", name: "Stable", id: 1424, parentID: 190 },
        { ring: 3, fromStep: 37, toStep: 38, color: "#AA604A", name: "Toast", id: 1425, parentID: 190 },
        { ring: 3, fromStep: 38, toStep: 39, color: "#AA604A", name: "Smoke", id: 1426, parentID: 190 },
        { ring: 3, fromStep: 39, toStep: 40, color: "#AA604A", name: "Tobacco", id: 1427, parentID: 190 },
        { ring: 3, fromStep: 40, toStep: 41, color: "#AA604A", name: "Leather", id: 1428, parentID: 190 },

        { ring: 1, fromStep: 41, toStep: 49, color: "#D48E45", name: "Spicy", id: 27, parentID: 0 },

        { ring: 2, fromStep: 41, toStep: 49, color: "#D48E45", name: "Hot / cooling", id: 191, parentID: 27 },

        { ring: 3, fromStep: 41, toStep: 42, color: "#D48E45", name: "Cinnamon", id: 1429, parentID: 191 },
        { ring: 3, fromStep: 42, toStep: 43, color: "#D48E45", name: "Nutmeg", id: 1430, parentID: 191 },
        { ring: 3, fromStep: 43, toStep: 44, color: "#D48E45", name: "Pepper", id: 1431, parentID: 191 },
        { ring: 3, fromStep: 44, toStep: 45, color: "#D48E45", name: "Clove", id: 1432, parentID: 191 },
        { ring: 3, fromStep: 45, toStep: 46, color: "#D48E45", name: "Cardamom", id: 1333, parentID: 191 },
        { ring: 3, fromStep: 46, toStep: 47, color: "#D48E45", name: "Licorice", id: 1334, parentID: 191 },
        { ring: 3, fromStep: 47, toStep: 48, color: "#D48E45", name: "Star anise", id: 1335, parentID: 191 },
        { ring: 3, fromStep: 48, toStep: 49, color: "#D48E45", name: "Ginger", id: 1336, parentID: 191 },

        { ring: 1, fromStep: 49, toStep: 68, color: "#8A5372", name: "Fresh / candied fruit", id: 28, parentID: 0 },

        { ring: 2, fromStep: 49, toStep: 53, color: "#8A5372", name: "Tropical", id: 192, parentID: 28 },

        { ring: 3, fromStep: 49, toStep: 50, color: "#8A5372", name: "Pineapple", id: 1337, parentID: 192 },
        { ring: 3, fromStep: 50, toStep: 51, color: "#8A5372", name: "Banana", id: 1338, parentID: 192 },
        { ring: 3, fromStep: 51, toStep: 52, color: "#8A5372", name: "Melon", id: 1339, parentID: 192 },
        { ring: 3, fromStep: 52, toStep: 53, color: "#8A5372", name: "Mango", id: 1340, parentID: 192 },

        { ring: 2, fromStep: 53, toStep: 59, color: "#AB849D", name: "Stone and vine fruit", id: 193, parentID: 28 },

        { ring: 3, fromStep: 53, toStep: 54, color: "#AB849D", name: "Apple", id: 1341, parentID: 193 },
        { ring: 3, fromStep: 54, toStep: 55, color: "#AB849D", name: "Apricot", id: 1342, parentID: 193 },
        { ring: 3, fromStep: 55, toStep: 56, color: "#AB849D", name: "Pear", id: 1343, parentID: 193 },
        { ring: 3, fromStep: 56, toStep: 57, color: "#AB849D", name: "Peach", id: 1344, parentID: 193 },
        { ring: 3, fromStep: 57, toStep: 58, color: "#AB849D", name: "Grape", id: 1345, parentID: 193 },
        { ring: 3, fromStep: 58, toStep: 59, color: "#AB849D", name: "Muscatel", id: 1346, parentID: 193 },



        { ring: 2, fromStep: 59, toStep: 64, color: "#8A5372", name: "Citrus", id: 194, parentID: 28 },

        { ring: 3, fromStep: 59, toStep: 60, color: "#8A5372", name: "Mandarine", id: 1347, parentID: 194 },
        { ring: 3, fromStep: 60, toStep: 61, color: "#8A5372", name: "Orange", id: 1348, parentID: 194 },
        { ring: 3, fromStep: 61, toStep: 62, color: "#8A5372", name: "Lemon", id: 1349, parentID: 194 },
        { ring: 3, fromStep: 62, toStep: 63, color: "#8A5372", name: "Bergamot", id: 1450, parentID: 194 },
        { ring: 3, fromStep: 63, toStep: 64, color: "#8A5372", name: "Lime", id: 1451, parentID: 194 },

        { ring: 2, fromStep: 64, toStep: 68, color: "#AB849D", name: "Berry", id: 195, parentID: 28 },

        { ring: 3, fromStep: 64, toStep: 65, color: "#AB849D", name: "Blueberry", id: 1452, parentID: 195 },
        { ring: 3, fromStep: 65, toStep: 66, color: "#AB849D", name: "Raspberry", id: 1453, parentID: 195 },
        { ring: 3, fromStep: 66, toStep: 67, color: "#AB849D", name: "Strawberry", id: 144, parentID: 195 },
        { ring: 3, fromStep: 67, toStep: 68, color: "#AB849D", name: "Blackcurrant", id: 1455, parentID: 195 },


        { ring: 1, fromStep: 68, toStep: 71, color: "#6D99CD", name: "", id: 29, parentID: 0 },

        { ring: 2, fromStep: 68, toStep: 71, color: "#6D99CD", name: "Marine", id: 196, parentID: 29 },

        { ring: 3, fromStep: 68, toStep: 69, color: "#6D99CD", name: "Seaweed / fish", id: 1456, parentID: 196 },
        { ring: 3, fromStep: 69, toStep: 70, color: "#6D99CD", name: "Oyster / shrimps", id: 1457, parentID: 196 },
        { ring: 3, fromStep: 70, toStep: 71, color: "#6D99CD", name: "Seasalt", id: 1458, parentID: 196 },

        { ring: 1, fromStep: 71, toStep: 74, color: "#878C8D", name: "", id: 30, parentID: 0 },

        { ring: 2, fromStep: 71, toStep: 74, color: "#878C8D", name: "Mineral", id: 197, parentID: 30 },


        { ring: 3, fromStep: 71, toStep: 72, color: "#878C8D", name: "Volcanic", id: 1459, parentID: 197 },
        { ring: 3, fromStep: 72, toStep: 73, color: "#878C8D", name: "Chalk", id: 1460, parentID: 197 },
        { ring: 3, fromStep: 73, toStep: 74, color: "#878C8D", name: "Granite", id: 1461, parentID: 197 },

        { ring: 1, fromStep: 74, toStep: 86, color: "#706456", name: "Earthy", id: 31, parentID: 0 },


        { ring: 2, fromStep: 74, toStep: 79, color: "#706456", name: "Forest", id: 198, parentID: 31 },

        { ring: 3, fromStep: 74, toStep: 75, color: "#706456", name: "Forest floor", id: 1462, parentID: 198 },
        { ring: 3, fromStep: 75, toStep: 76, color: "#706456", name: "Musty / humus", id: 1463, parentID: 198 },
        { ring: 3, fromStep: 76, toStep: 77, color: "#706456", name: "Moss / care", id: 1464, parentID: 198 },
        { ring: 3, fromStep: 77, toStep: 78, color: "#706456", name: "Compost", id: 1465, parentID: 198 },
        { ring: 3, fromStep: 78, toStep: 79, color: "#706456", name: "Wet leaves", id: 1466, parentID: 198 },

        { ring: 2, fromStep: 79, toStep: 86, color: "#8E8477", name: "Wood", id: 199, parentID: 31 },

        { ring: 3, fromStep: 79, toStep: 80, color: "#8E8477", name: "Pine", id: 1467, parentID: 199 },
        { ring: 3, fromStep: 80, toStep: 81, color: "#8E8477", name: "Wet wood", id: 1468, parentID: 199 },
        { ring: 3, fromStep: 81, toStep: 82, color: "#8E8477", name: "Sawdust", id: 1469, parentID: 199 },
        { ring: 3, fromStep: 82, toStep: 83, color: "#8E8477", name: "Cedar", id: 1470, parentID: 199 },
        { ring: 3, fromStep: 83, toStep: 84, color: "#8E8477", name: "Oak", id: 1471, parentID: 199 },
        { ring: 3, fromStep: 84, toStep: 85, color: "#8E8477", name: "Mahogany", id: 1472, parentID: 199 },
        { ring: 3, fromStep: 85, toStep: 86, color: "#8E8477", name: "Eucalypt", id: 1473, parentID: 199 },


        // { ring: 2, fromStep: 90, toStep: 92, color: "#D37228", name: "General Aging", id: 23, parentID: 3 },
        // { ring: 3, fromStep: 86, toStep: 87, color: "#F1C192", name: "Dried Fruit", id: 125, parentID: 23 },
        // { ring: 3, fromStep: 87, toStep: 88, color: "#F1C192", name: "Nuts", id: 126, parentID: 23 },
        // { ring: 3, fromStep: 88, toStep: 89, color: "#F1C192", name: "Tobacco", id: 127, parentID: 23 },
        // { ring: 3, fromStep: 89, toStep: 90, color: "#F1C192", name: "Coffee", id: 128, parentID: 23 },
        // { ring: 3, fromStep: 90, toStep: 91, color: "#F1C192", name: "Cocoa", id: 129, parentID: 23 },
        // { ring: 3, fromStep: 91, toStep: 92, color: "#F1C192", name: "Leather", id: 130, parentID: 23 },
        // { ring: 2, fromStep: 92, toStep: 94, color: "#B36D5F", name: "TCA (Corked)", id: 24, parentID: 4 },
        // { ring: 3, fromStep: 92, toStep: 93, color: "#E4BDB1", name: "Musty Cardboard", id: 131, parentID: 24 },
        // { ring: 3, fromStep: 93, toStep: 94, color: "#E4BDB1", name: "Wet Dog", id: 132, parentID: 24 },
        // { ring: 2, fromStep: 94, toStep: 101, color: "#BA5B33", name: "Sulfid & Mercaptans", id: 25, parentID: 4 },
        // { ring: 3, fromStep: 94, toStep: 95, color: "#E6B396", name: "Cured Meat", id: 133, parentID: 25 },
        // { ring: 3, fromStep: 95, toStep: 96, color: "#E6B396", name: "Boiled Eggs", id: 134, parentID: 25 },
        // { ring: 3, fromStep: 96, toStep: 97, color: "#E6B396", name: "Burnt Rubber", id: 135, parentID: 25 },
        // { ring: 3, fromStep: 97, toStep: 98, color: "#E6B396", name: "Match Box", id: 136, parentID: 25 },
        // { ring: 3, fromStep: 98, toStep: 99, color: "#E6B396", name: "Garlic", id: 137, parentID: 25 },
        // { ring: 3, fromStep: 99, toStep: 100, color: "#E6B396", name: "Onion", id: 138, parentID: 25 },
        // { ring: 3, fromStep: 100, toStep: 101, color: "#E6B396", name: "Cat Pee", id: 139, parentID: 25 },
        // { ring: 2, fromStep: 101, toStep: 105, color: "#A5383D", name: "Brettanomyces", id: 26, parentID: 4 },
        // { ring: 3, fromStep: 101, toStep: 102, color: "#DEA39B", name: "Black Cardamon", id: 140, parentID: 26 },
        // { ring: 3, fromStep: 102, toStep: 103, color: "#DEA39B", name: "Band-Aid", id: 141, parentID: 26 },
        // { ring: 3, fromStep: 103, toStep: 104, color: "#DEA39B", name: "Sweaty Leather Saddle", id: 142, parentID: 26 },
        // { ring: 3, fromStep: 104, toStep: 105, color: "#DEA39B", name: "Horse Manure", id: 143, parentID: 26 },
        // { ring: 2, fromStep: 105, toStep: 107, color: "#A81D64", name: "Cooked", id: 27, parentID: 4 },
        // { ring: 3, fromStep: 105, toStep: 106, color: "#D798AF", name: "Stewed Fruit", id: 144, parentID: 27 },
        // { ring: 3, fromStep: 106, toStep: 107, color: "#D798AF", name: "Toffee", id: 145, parentID: 27 },
        // { ring: 2, fromStep: 107, toStep: 109, color: "#87338C", name: "Volatile Acidity", id: 28, parentID: 4 },
        // { ring: 3, fromStep: 107, toStep: 108, color: "#C99EC7", name: "Balsamic", id: 146, parentID: 28 },
        // { ring: 3, fromStep: 108, toStep: 109, color: "#C99EC7", name: "Vinegar", id: 147, parentID: 28 },
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
    if (ring == 1) {
        //8. verder van het midden af
        let textX = ((innerRadius + outerRadius) / 1.82)
        let textXCorrection = 0;
        transformString += "translate(" + textX + ")";

        //9. in de onderste helft moet alles een kwartslag terug
        if (angle > 0 && angle < 180) {
            transformString += "rotate(-90 " + circlex + " " + circley + ")";
            textXCorrection = -5.5
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
            let namepart2 = name.substring(division + 1, name.lengt);
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
    let lineAndTextColor = "white";
    if (isColorLight(color)) {
        lineAndTextColor = "black";
        newText.style.strokeWidth = "0.3px";
    }
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
    document.getElementById("flavorsTea").value = (getSelectedFlavorIds());
}

//selecteren van een slice = in een group plaatsen met hoger nummer
const selectSlice = (slice) => {
    if (!isSelected(slice)) {
        document.getElementById(getHigherGroupId(slice)).appendChild(slice);
        selectedFlavors.push(getFlavor(slice));
        //Heeft ie een parent? en staat de optie op true, dan ook selecteren:
        if (getGroupNumber(slice) > 2 && parentSliceAutoSelect) {
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
