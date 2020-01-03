let selectedFlavors = [];
var innerRadii = [50, 80, 145];
var outerRadii = [80, 145, 200];
var ringnr = 3;
var steps = 109;
var circlex = 230;
var circley = 230;
//gedraginstellingen
var parentSliceAutoSelect = true;		//hogere smaak gaat mee omhoog
var childSliceAutoDeselect = true;   //subsmaak gaat mee omlaag
var slowness = 1; //traagheid bij animatie opbouw wiel

var wheelSVG = document.getElementById("svgC");

/*hier gaan we voor elke ring twee groepen maken
even getallen voor onaangeklikten en oneven voor aangeklikten (met schaduw)
bij klikken springt een stukje van de één naar de ander.
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
        {ring: 1, fromStep: 0, toStep: 49, color: "#C6D0E3", name: "Primary Aromas", id: 10, parentID: null},
        {ring: 2, fromStep: 0, toStep: 11, color: "#555CA6", name: "Flower", id: 129, parentID: 10},
        {ring: 3, fromStep: 0, toStep: 1, color: "#ACB0D8", name: "Iris", id: 1074, parentID: 129},
        {ring: 3, fromStep: 1, toStep: 2, color: "#ACB0D8", name: "Peony", id: 1075, parentID: 129},
        {ring: 3, fromStep: 2, toStep: 3, color: "#ACB0D8", name: "Elderflower", id: 1076, parentID: 129},
        {ring: 3, fromStep: 3, toStep: 4, color: "#ACB0D8", name: "Acacai", id: 1077, parentID: 129},
        {ring: 3, fromStep: 4, toStep: 5, color: "#ACB0D8", name: "Jasmine", id: 1078, parentID: 129},
        {ring: 3, fromStep: 5, toStep: 6, color: "#ACB0D8", name: "Honeysuckle", id: 1079, parentID: 129},
        {ring: 3, fromStep: 6, toStep: 7, color: "#ACB0D8", name: "Voilet", id: 1080, parentID: 129},
        {ring: 3, fromStep: 7, toStep: 8, color: "#ACB0D8", name: "Lavender", id: 1081, parentID: 129},
        {ring: 3, fromStep: 8, toStep: 9, color: "#ACB0D8", name: "Rose", id: 1082, parentID: 129},
        {ring: 3, fromStep: 9, toStep: 10, color: "#ACB0D8", name: "Potpourri", id: 1083, parentID: 129},
        {ring: 3, fromStep: 10, toStep: 11, color: "#ACB0D8", name: "Hibiscus", id: 1084, parentID: 129},
        {ring: 2, fromStep: 11, toStep: 16, color: "#72B635", name: "Citrus", id: 130, parentID: 10},
        {ring: 3, fromStep: 11, toStep: 12, color: "#C4DFA3", name: "Lime", id: 1085, parentID: 130},
        {ring: 3, fromStep: 12, toStep: 13, color: "#C4DFA3", name: "Lemon", id: 1086, parentID: 130},
        {ring: 3, fromStep: 13, toStep: 14, color: "#C4DFA3", name: "Grapefruit", id: 1087, parentID: 130},
        {ring: 3, fromStep: 14, toStep: 15, color: "#C4DFA3", name: "Orange", id: 1088, parentID: 130},
        {ring: 3, fromStep: 15, toStep: 16, color: "#C4DFA3", name: "Marmalade", id: 1089, parentID: 130},
        {ring: 2, fromStep: 16, toStep: 23, color: "#E99243", name: "Tree Fruit", id: 131, parentID: 10},
        {ring: 3, fromStep: 16, toStep: 17, color: "#FAD1A6", name: "Quince", id: 1090, parentID: 131},
        {ring: 3, fromStep: 17, toStep: 18, color: "#FAD1A6", name: "Apple", id: 1091, parentID: 131},
        {ring: 3, fromStep: 18, toStep: 19, color: "#FAD1A6", name: "Pear", id: 1092, parentID: 131},
        {ring: 3, fromStep: 19, toStep: 20, color: "#FAD1A6", name: "Nectarine", id: 1093, parentID: 131},
        {ring: 3, fromStep: 20, toStep: 21, color: "#FAD1A6", name: "Peach", id: 1094, parentID: 131},
        {ring: 3, fromStep: 21, toStep: 22, color: "#FAD1A6", name: "Apricote", id: 1095, parentID: 131},
        {ring: 3, fromStep: 22, toStep: 23, color: "#FAD1A6", name: "Persimmon", id: 1096, parentID: 131},
        {ring: 2, fromStep: 23, toStep: 29, color: "#EB4423", name: "Tropical Fruit", id: 132, parentID: 10},
        {ring: 3, fromStep: 23, toStep: 24, color: "#F6AC8C", name: "Pineapple", id: 1097, parentID: 132},
        {ring: 3, fromStep: 24, toStep: 25, color: "#F6AC8C", name: "Mango", id: 1098, parentID: 132},
        {ring: 3, fromStep: 25, toStep: 26, color: "#F6AC8C", name: "Guava", id: 1099, parentID: 132},
        {ring: 3, fromStep: 26, toStep: 27, color: "#F6AC8C", name: "Kiwi", id: 1100, parentID: 132},
        {ring: 3, fromStep: 27, toStep: 28, color: "#F6AC8C", name: "Lychee", id: 1101, parentID: 132},
        {ring: 3, fromStep: 28, toStep: 29, color: "#F6AC8C", name: "Bubblegum", id: 1102, parentID: 132},
        {ring: 1, fromStep: 49, toStep: 74, color: "#C6D0E3", name: "Primary Aromas", id: 10, parentID: null},
        {ring: 2, fromStep: 29, toStep: 36, color: "#B20E1F", name: "Red Fruit", id: 133, parentID: 10},
        {ring: 3, fromStep: 29, toStep: 30, color: "#DF947E", name: "Cranberry", id: 1103, parentID: 133},
        {ring: 3, fromStep: 30, toStep: 31, color: "#DF947E", name: "Red Plum", id: 1104, parentID: 133},
        {ring: 3, fromStep: 31, toStep: 32, color: "#DF947E", name: "Pomegranate", id: 1105, parentID: 133},
        {ring: 3, fromStep: 32, toStep: 33, color: "#DF947E", name: "Sour Cherry", id: 1106, parentID: 133},
        {ring: 3, fromStep: 33, toStep: 34, color: "#DF947E", name: "Strawberry", id: 1107, parentID: 133},
        {ring: 3, fromStep: 34, toStep: 35, color: "#DF947E", name: "Cherry", id: 1108, parentID: 133},
        {ring: 3, fromStep: 35, toStep: 36, color: "#DF947E", name: "Raspberry", id: 1109, parentID: 133},
        {ring: 2, fromStep: 36, toStep: 42, color: "#7E0E2A", name: "Black Fruit", id: 134, parentID: 10},
        {ring: 3, fromStep: 36, toStep: 37, color: "#E59596", name: "Boysenberry", id: 1110, parentID: 134},
        {ring: 3, fromStep: 37, toStep: 38, color: "#E59596", name: "Black Currant", id: 1111, parentID: 134},
        {ring: 3, fromStep: 38, toStep: 39, color: "#E59596", name: "Black Cherry", id: 1112, parentID: 134},
        {ring: 3, fromStep: 39, toStep: 40, color: "#E59596", name: "Plum", id: 1113, parentID: 134},
        {ring: 3, fromStep: 40, toStep: 41, color: "#E59596", name: "Blackberry", id: 1114, parentID: 134},
        {ring: 3, fromStep: 41, toStep: 42, color: "#E59596", name: "Olive", id: 1115, parentID: 134},
        {ring: 2, fromStep: 42, toStep: 46, color: "#B34C7E", name: "Dried Fruit", id: 135, parentID: 10},
        {ring: 3, fromStep: 42, toStep: 43, color: "#E3AFC6", name: "Raisin", id: 1116, parentID: 135},
        {ring: 3, fromStep: 43, toStep: 44, color: "#E3AFC6", name: "Fig", id: 1117, parentID: 135},
        {ring: 3, fromStep: 44, toStep: 45, color: "#E3AFC6", name: "Date", id: 1118, parentID: 135},
        {ring: 3, fromStep: 45, toStep: 46, color: "#E3AFC6", name: "Fruitcake", id: 1119, parentID: 135},
        {ring: 2, fromStep: 46, toStep: 49, color: "#3185C8", name: "Noble Rot", id: 136, parentID: 10},
        {ring: 3, fromStep: 46, toStep: 47, color: "#A7C5E8", name: "Beeswax", id: 1120, parentID: 136},
        {ring: 3, fromStep: 47, toStep: 48, color: "#A7C5E8", name: "Ginger", id: 1121, parentID: 136},
        {ring: 3, fromStep: 48, toStep: 49, color: "#A7C5E8", name: "Saffron", id: 1122, parentID: 136},
        {ring: 2, fromStep: 49, toStep: 59, color: "#19AEA0", name: "Spice", id: 137, parentID: 10},
        {ring: 3, fromStep: 49, toStep: 50, color: "#B8E1DF", name: "White Pepper", id: 1123, parentID: 137},
        {ring: 3, fromStep: 50, toStep: 51, color: "#B8E1DF", name: "Red Pepper", id: 1124, parentID: 137},
        {ring: 3, fromStep: 51, toStep: 52, color: "#B8E1DF", name: "Black Pepper", id: 1125, parentID: 137},
        {ring: 3, fromStep: 52, toStep: 53, color: "#B8E1DF", name: "Cinnamon", id: 1126, parentID: 137},
        {ring: 3, fromStep: 53, toStep: 54, color: "#B8E1DF", name: "Anice", id: 1127, parentID: 137},
        {ring: 3, fromStep: 54, toStep: 55, color: "#B8E1DF", name: "Asian 5-Spice", id: 1128, parentID: 137},
        {ring: 3, fromStep: 55, toStep: 56, color: "#B8E1DF", name: "Fennel", id: 1129, parentID: 137},
        {ring: 3, fromStep: 56, toStep: 57, color: "#B8E1DF", name: "Eucalyptus", id: 1130, parentID: 137},
        {ring: 3, fromStep: 57, toStep: 58, color: "#B8E1DF", name: "Mint", id: 1131, parentID: 137},
        {ring: 3, fromStep: 58, toStep: 59, color: "#B8E1DF", name: "Thyme", id: 1132, parentID: 137},
        {ring: 1, fromStep: 74, toStep: 80, color: "#A3B4CA", name: "Secondary", id: 11, parentID: null},
        {ring: 2, fromStep: 59, toStep: 67, color: "#218538", name: "Vegetable", id: 138, parentID: 1},
        {ring: 3, fromStep: 59, toStep: 60, color: "#BFDFB6", name: "Grass", id: 1133, parentID: 138},
        {ring: 3, fromStep: 60, toStep: 61, color: "#BFDFB6", name: "Tomato Leaf", id: 1134, parentID: 138},
        {ring: 3, fromStep: 61, toStep: 62, color: "#BFDFB6", name: "Bell Pepper", id: 1135, parentID: 138},
        {ring: 3, fromStep: 62, toStep: 63, color: "#BFDFB6", name: "Jalapeno", id: 1136, parentID: 138},
        {ring: 3, fromStep: 63, toStep: 64, color: "#BFDFB6", name: "Green Almond", id: 1137, parentID: 138},
        {ring: 3, fromStep: 64, toStep: 65, color: "#BFDFB6", name: "Gooseberry", id: 1138, parentID: 138},
        {ring: 3, fromStep: 65, toStep: 66, color: "#BFDFB6", name: "Sun dried Tom", id: 1139, parentID: 138},
        {ring: 3, fromStep: 66, toStep: 67, color: "#BFDFB6", name: "Tomato", id: 1140, parentID: 138},
        {ring: 3, fromStep: 66, toStep: 67, color: "#BFDFB6", name: "Black Tea", id: 1141, parentID: 138},
        {ring: 1, fromStep: 80, toStep: 92, color: "#C6D0E3", name: "Tertiary", id: 12, parentID: 0},
        {ring: 2, fromStep: 67, toStep: 74, color: "#679833", name: "Earth", id: 139, parentID: 10},
        {ring: 3, fromStep: 67, toStep: 68, color: "#D1E7AE", name: "Clay Pot", id: 1142, parentID: 139},
        {ring: 3, fromStep: 71, toStep: 72, color: "#D1E7AE", name: "Red Beet", id: 1143, parentID: 139},
        {ring: 3, fromStep: 72, toStep: 73, color: "#D1E7AE", name: "Volcanic Rocks", id: 1144, parentID: 139},
        {ring: 3, fromStep: 73, toStep: 74, color: "#D1E7AE", name: "Petroleum", id: 1145, parentID: 139},
        {ring: 3, fromStep: 68, toStep: 69, color: "#D1E7AE", name: "Slate", id: 1146, parentID: 139},
        {ring: 3, fromStep: 69, toStep: 70, color: "#D1E7AE", name: "Wet Gravel", id: 1147, parentID: 139},
        {ring: 3, fromStep: 70, toStep: 71, color: "#D1E7AE", name: "Potting Soil", id: 1148, parentID: 139},
        {ring: 1, fromStep: 92, toStep: 109, color: "#E55831", name: "Faults", id: 13, parentID: 0},
        {ring: 2, fromStep: 74, toStep: 80, color: "#B3B326", name: "Microbial", id: 140, parentID: 11},
        {ring: 3, fromStep: 74, toStep: 75, color: "#E9EAA3", name: "Butter", id: 1149, parentID: 140},
        {ring: 3, fromStep: 75, toStep: 76, color: "#E9EAA3", name: "Cream", id: 1150, parentID: 140},
        {ring: 3, fromStep: 76, toStep: 77, color: "#E9EAA3", name: "Sourdough", id: 1151, parentID: 140},
        {ring: 3, fromStep: 77, toStep: 78, color: "#E9EAA3", name: "Lager", id: 1152, parentID: 140},
        {ring: 3, fromStep: 78, toStep: 79, color: "#E9EAA3", name: "Truffle", id: 1153, parentID: 140},
        {ring: 3, fromStep: 79, toStep: 80, color: "#E9EAA3", name: "Mushroom", id: 1154, parentID: 140},
        {ring: 2, fromStep: 80, toStep: 86, color: "#B08022", name: "Oak Aging", id: 141, parentID: 12},
        {ring: 3, fromStep: 80, toStep: 81, color: "#E1C892", name: "Vanilla", id: 1155, parentID: 141},
        {ring: 3, fromStep: 81, toStep: 82, color: "#E1C892", name: "Coconut", id: 1156, parentID: 141},
        {ring: 3, fromStep: 82, toStep: 83, color: "#E1C892", name: "Baking Spices", id: 1157, parentID: 141},
        {ring: 3, fromStep: 83, toStep: 84, color: "#E1C892", name: "Cigar Box", id: 1158, parentID: 141},
        {ring: 3, fromStep: 84, toStep: 85, color: "#E1C892", name: "Smoke", id: 1159, parentID: 141},
        {ring: 3, fromStep: 85, toStep: 86, color: "#E1C892", name: "Dill", id: 1160, parentID: 141},
        {ring: 2, fromStep: 86, toStep: 92, color: "#D37228", name: "General Aging", id: 142, parentID: 12},
        {ring: 3, fromStep: 86, toStep: 87, color: "#F1C192", name: "Dried Fruit", id: 1161, parentID: 142},
        {ring: 3, fromStep: 87, toStep: 88, color: "#F1C192", name: "Nuts", id: 1162, parentID: 142},
        {ring: 3, fromStep: 88, toStep: 89, color: "#F1C192", name: "Tobacco", id: 1163, parentID: 142},
        {ring: 3, fromStep: 89, toStep: 90, color: "#F1C192", name: "Coffee", id: 1164, parentID: 142},
        {ring: 3, fromStep: 90, toStep: 91, color: "#F1C192", name: "Cocoa", id: 1165, parentID: 142},
        {ring: 3, fromStep: 91, toStep: 92, color: "#F1C192", name: "Leather", id: 1166, parentID: 142},
        {ring: 2, fromStep: 92, toStep: 94, color: "#B36D5F", name: "TCA (Corked)", id: 143, parentID: 13},
        {ring: 3, fromStep: 92, toStep: 93, color: "#E4BDB1", name: "Musty Cardboard", id: 1167, parentID: 143},
        {ring: 3, fromStep: 93, toStep: 94, color: "#E4BDB1", name: "Wet Dog", id: 1168, parentID: 143},
        {ring: 2, fromStep: 94, toStep: 101, color: "#BA5B33", name: "Sulfid & Mercaptans", id: 144, parentID: 13},
        {ring: 3, fromStep: 94, toStep: 95, color: "#E6B396", name: "Cured Meat", id: 1169, parentID: 144},
        {ring: 3, fromStep: 95, toStep: 96, color: "#E6B396", name: "Boiled Eggs", id: 1170, parentID: 144},
        {ring: 3, fromStep: 96, toStep: 97, color: "#E6B396", name: "Burnt Rubber", id: 1171, parentID: 144},
        {ring: 3, fromStep: 97, toStep: 98, color: "#E6B396", name: "Match Box", id: 1172, parentID: 144},
        {ring: 3, fromStep: 98, toStep: 99, color: "#E6B396", name: "Garlic", id: 1173, parentID: 144},
        {ring: 3, fromStep: 99, toStep: 100, color: "#E6B396", name: "Onion", id: 1174, parentID: 144},
        {ring: 3, fromStep: 100, toStep: 101, color: "#E6B396", name: "Cat Pee", id: 1175, parentID: 144},
        {ring: 2, fromStep: 101, toStep: 105, color: "#A5383D", name: "Brettanomyces", id: 145, parentID: 13},
        {ring: 3, fromStep: 101, toStep: 102, color: "#DEA39B", name: "Black Cardamon", id: 1176, parentID: 145},
        {ring: 3, fromStep: 102, toStep: 103, color: "#DEA39B", name: "Band-Aid", id: 1177, parentID: 145},
        {ring: 3, fromStep: 103, toStep: 104, color: "#DEA39B", name: "Sweaty Leather Saddle", id: 1178, parentID: 145},
        {ring: 3, fromStep: 104, toStep: 105, color: "#DEA39B", name: "Horse Manure", id: 1179, parentID: 145},
        {ring: 2, fromStep: 105, toStep: 107, color: "#A81D64", name: "Cooked", id: 146, parentID: 13},
        {ring: 3, fromStep: 105, toStep: 106, color: "#D798AF", name: "Stewed Fruit", id: 1180, parentID: 146},
        {ring: 3, fromStep: 106, toStep: 107, color: "#D798AF", name: "Toffee", id: 1181, parentID: 146},
        {ring: 2, fromStep: 107, toStep: 109, color: "#87338C", name: "Volatile Acidity", id: 147, parentID: 13},
        {ring: 3, fromStep: 107, toStep: 108, color: "#C99EC7", name: "Balsamic", id: 1182, parentID: 147},
        {ring: 3, fromStep: 108, toStep: 109, color: "#C99EC7", name: "Vinegar", id: 1183, parentID: 147},
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
var drawSlice = ({ring, fromStep, toStep, color, name, id}) => {
    //benoem in één keer 6 variabelen, uit de flavor te halen
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
        } else {
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
    newPath.style.strokeWidth = "1px";
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
    document.getElementById("flavorsWine").value = (getSelectedFlavorIds());
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
    return flavorList.filter((flavor) => flavor.parentID == slice.id)    //1
        .map((flavor) => flavor.id)                                        //2
        .map((id) => document.getElementById(id))                    //3
        .filter((element) => isSelected(element));				//4
};

drawWheel();

// resetWheel();
