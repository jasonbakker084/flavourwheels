let selectedFlavors = [];
var innerRadii = [50, 80, 145];
var outerRadii = [80, 145, 200];
var ringnr = 3;
var steps = 205;
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
        { ring: 1, fromStep: 0, toStep: 27, color: "#DCAD06", name: "Cereal", id: 14, parentID: 0 },
        { ring: 2, fromStep: 0, toStep: 5, color: "#EED47B", name: "Cooked Mash", id: 148, parentID: 14 },
        { ring: 3, fromStep: 0, toStep: 1, color: "#F5E5AE", name: "Porridge", id: 1184, parentID: 148 },
        { ring: 3, fromStep: 1, toStep: 2, color: "#F5E5AE", name: "Draff", id: 1185, parentID: 148 },
        { ring: 3, fromStep: 2, toStep: 3, color: "#F5E5AE", name: "Weetabix", id: 1186, parentID: 148 },
        { ring: 3, fromStep: 3, toStep: 4, color: "#F5E5AE", name: "Cooked Maize", id: 1187, parentID: 148 },
        { ring: 3, fromStep: 4, toStep: 5, color: "#F5E5AE", name: "Hen's Mash", id: 1188, parentID: 148 },
        { ring: 2, fromStep: 5, toStep: 9, color: "#EED47B", name: "Cooked Veg", id: 149, parentID: 14 },
        { ring: 3, fromStep: 5, toStep: 6, color: "#F5E5AE", name: "Mashed Potato", id: 1189, parentID: 149 },
        { ring: 3, fromStep: 6, toStep: 7, color: "#F5E5AE", name: "Potato Scones", id: 1190, parentID: 149 },
        { ring: 3, fromStep: 7, toStep: 8, color: "#F5E5AE", name: "Sweetcorn", id: 1191, parentID: 149 },
        { ring: 3, fromStep: 8, toStep: 9, color: "#F5E5AE", name: "Cooked Swede", id: 1192, parentID: 149 },
        { ring: 2, fromStep: 9, toStep: 15, color: "#EED47B", name: "Malt Extract", id: 150, parentID: 14 },
        { ring: 3, fromStep: 9, toStep: 10, color: "#F5E5AE", name: "Malted Milk", id: 1193, parentID: 150 },
        { ring: 3, fromStep: 10, toStep: 11, color: "#F5E5AE", name: "Horlicks", id: 1194, parentID: 150 },
        { ring: 3, fromStep: 11, toStep: 12, color: "#F5E5AE", name: "Marmite", id: 1195, parentID: 150 },
        { ring: 3, fromStep: 12, toStep: 13, color: "#F5E5AE", name: "Bran", id: 1196, parentID: 150 },
        { ring: 3, fromStep: 13, toStep: 14, color: "#F5E5AE", name: "Cattle", id: 1197, parentID: 150 },
        { ring: 3, fromStep: 14, toStep: 15, color: "#F5E5AE", name: "Cake", id: 1198, parentID: 150 },
        { ring: 2, fromStep: 15, toStep: 22, color: "#EED47B", name: "Husky", id: 151, parentID: 14 },
        { ring: 3, fromStep: 15, toStep: 16, color: "#F5E5AE", name: "Marmalade", id: 1199, parentID: 151 },
        { ring: 3, fromStep: 16, toStep: 17, color: "#F5E5AE", name: "Chaff-like", id: 1200, parentID: 151 },
        { ring: 3, fromStep: 17, toStep: 18, color: "#F5E5AE", name: "Dried Hops", id: 1201, parentID: 151 },
        { ring: 3, fromStep: 18, toStep: 19, color: "#F5E5AE", name: "Mousey", id: 1202, parentID: 151 },
        { ring: 3, fromStep: 19, toStep: 20, color: "#F5E5AE", name: "Pot", id: 1203, parentID: 151 },
        { ring: 3, fromStep: 20, toStep: 21, color: "#F5E5AE", name: "Ale", id: 1204, parentID: 151 },
        { ring: 3, fromStep: 21, toStep: 22, color: "#F5E5AE", name: "Iron Tonic", id: 1205, parentID: 151 },
        { ring: 2, fromStep: 22, toStep: 27, color: "#EED47B", name: "Yeasty", id: 152, parentID: 14 },
        { ring: 3, fromStep: 22, toStep: 23, color: "#F5E5AE", name: "Boiled Pork", id: 1206, parentID: 152 },
        { ring: 3, fromStep: 23, toStep: 24, color: "#F5E5AE", name: "Pork Sausages", id: 1207, parentID: 152 },
        { ring: 3, fromStep: 24, toStep: 25, color: "#F5E5AE", name: "Meaty", id: 1208, parentID: 152 },
        { ring: 3, fromStep: 25, toStep: 26, color: "#F5E5AE", name: "Gravy", id: 1209, parentID: 152 },
        { ring: 3, fromStep: 26, toStep: 27, color: "#F5E5AE", name: "Gralloch", id: 1210, parentID: 152 },
        { ring: 1, fromStep: 27, toStep: 60, color: "#DC7510", name: "Fruity", id: 15, parentID: 0 },
        { ring: 2, fromStep: 27, toStep: 34, color: "#F4B674", name: "Citric", id: 153, parentID: 15 },
        { ring: 3, fromStep: 27, toStep: 28, color: "#F8D5A7", name: "Oranges", id: 1211, parentID: 153 },
        { ring: 3, fromStep: 28, toStep: 29, color: "#F8D5A7", name: "Tangerine", id: 1212, parentID: 153 },
        { ring: 3, fromStep: 29, toStep: 30, color: "#F8D5A7", name: "Zest", id: 1213, parentID: 153 },
        { ring: 3, fromStep: 30, toStep: 31, color: "#F8D5A7", name: "Kiwi", id: 1214, parentID: 153 },
        { ring: 3, fromStep: 31, toStep: 32, color: "#F8D5A7", name: "Nectarines", id: 1215, parentID: 153 },
        { ring: 3, fromStep: 32, toStep: 33, color: "#F8D5A7", name: "Love Hearts", id: 1216, parentID: 153 },
        { ring: 3, fromStep: 33, toStep: 34, color: "#F8D5A7", name: "Lemon", id: 1217, parentID: 153 },
        { ring: 2, fromStep: 34, toStep: 41, color: "#F4B674", name: "Fresh Fruit", id: 154, parentID: 15 },
        { ring: 3, fromStep: 34, toStep: 35, color: "#F8D5A7", name: "Apples", id: 1218, parentID: 154 },
        { ring: 3, fromStep: 35, toStep: 36, color: "#F8D5A7", name: "Pears", id: 1219, parentID: 154 },
        { ring: 3, fromStep: 36, toStep: 37, color: "#F8D5A7", name: "Pear Drops", id: 1220, parentID: 154 },
        { ring: 3, fromStep: 37, toStep: 38, color: "#F8D5A7", name: "Peaches", id: 1221, parentID: 154 },
        { ring: 3, fromStep: 38, toStep: 39, color: "#F8D5A7", name: "Apricots", id: 1222, parentID: 154 },
        { ring: 3, fromStep: 39, toStep: 40, color: "#F8D5A7", name: "Fruit Salad", id: 1223, parentID: 154 },
        { ring: 3, fromStep: 40, toStep: 41, color: "#F8D5A7", name: "Soft Fruit", id: 1224, parentID: 154 },
        { ring: 2, fromStep: 41, toStep: 47, color: "#F4B674", name: "Cooked Fruit", id: 155, parentID: 15 },
        { ring: 3, fromStep: 41, toStep: 42, color: "#F8D5A7", name: "Stewed Apples", id: 1225, parentID: 155 },
        { ring: 3, fromStep: 42, toStep: 43, color: "#F8D5A7", name: "Marmalade", id: 1226, parentID: 155 },
        { ring: 3, fromStep: 43, toStep: 44, color: "#F8D5A7", name: "Jam", id: 1227, parentID: 155 },
        { ring: 3, fromStep: 44, toStep: 45, color: "#F8D5A7", name: "Barley Sugar", id: 1228, parentID: 155 },
        { ring: 3, fromStep: 45, toStep: 46, color: "#F8D5A7", name: "Candied Fruit", id: 1229, parentID: 155 },
        { ring: 2, fromStep: 47, toStep: 54, color: "#F4B674", name: "Dried Fruit", id: 156, parentID: 15 },
        { ring: 3, fromStep: 46, toStep: 47, color: "#F8D5A7", name: "Rum-Toft", id: 1230, parentID: 156 },
        { ring: 3, fromStep: 47, toStep: 48, color: "#F8D5A7", name: "Raisins", id: 1231, parentID: 156 },
        { ring: 3, fromStep: 48, toStep: 49, color: "#F8D5A7", name: "Figs", id: 1232, parentID: 156 },
        { ring: 3, fromStep: 49, toStep: 50, color: "#F8D5A7", name: "Apricots", id: 1233, parentID: 156 },
        { ring: 3, fromStep: 50, toStep: 51, color: "#F8D5A7", name: "Prunes", id: 1234, parentID: 156 },
        { ring: 3, fromStep: 51, toStep: 52, color: "#F8D5A7", name: "Mixed Peel", id: 1235, parentID: 156 },
        { ring: 3, fromStep: 52, toStep: 53, color: "#F8D5A7", name: "Fruit Cake", id: 1236, parentID: 156 },
        { ring: 3, fromStep: 53, toStep: 54, color: "#F8D5A7", name: "Mince Pies", id: 1237, parentID: 156 },
        { ring: 2, fromStep: 54, toStep: 60, color: "#F4B674", name: "Solvent", id: 157, parentID: 15 },
        { ring: 3, fromStep: 54, toStep: 55, color: "#F8D5A7", name: "Nail Varnish Remover", id: 1238, parentID: 157 },
        { ring: 3, fromStep: 55, toStep: 56, color: "#F8D5A7", name: "Bubble Gum", id: 1239, parentID: 157 },
        { ring: 3, fromStep: 56, toStep: 57, color: "#F8D5A7", name: "Brylbreem", id: 1240, parentID: 157 },
        { ring: 3, fromStep: 57, toStep: 58, color: "#F8D5A7", name: "Acid Drops", id: 1241, parentID: 157 },
        { ring: 3, fromStep: 58, toStep: 59, color: "#F8D5A7", name: "Turps", id: 1242, parentID: 157 },
        { ring: 3, fromStep: 59, toStep: 60, color: "#F8D5A7", name: "Paint", id: 1243, parentID: 157 },
        { ring: 1, fromStep: 60, toStep: 83, color: "#177768", name: "Floral", id: 16, parentID: 0 },
        { ring: 2, fromStep: 60, toStep: 66, color: "#87B0A7", name: "Fragrant", id: 158, parentID: 16 },
        { ring: 3, fromStep: 60, toStep: 61, color: "#B6CEC8", name: "Perfume", id: 1244, parentID: 158 },
        { ring: 3, fromStep: 61, toStep: 62, color: "#B6CEC8", name: "Fabric Softener", id: 1245, parentID: 158 },
        { ring: 3, fromStep: 62, toStep: 63, color: "#B6CEC8", name: "Barber's Shop", id: 1246, parentID: 158 },
        { ring: 3, fromStep: 63, toStep: 64, color: "#B6CEC8", name: "Carnation", id: 1247, parentID: 158 },
        { ring: 3, fromStep: 64, toStep: 65, color: "#B6CEC8", name: "Coconut", id: 1248, parentID: 158 },
        { ring: 3, fromStep: 65, toStep: 66, color: "#B6CEC8", name: "Lavender", id: 1249, parentID: 158 },
        { ring: 3, fromStep: 66, toStep: 67, color: "#BFDFB6", name: "Tomato", id: 104, parentID: 19 },
        { ring: 2, fromStep: 66, toStep: 70, color: "#87B0A7", name: "Green-House", id: 159, parentID: 16 },
        { ring: 3, fromStep: 66, toStep: 67, color: "#B6CEC8", name: "Geraniums", id: 1250, parentID: 159 },
        { ring: 3, fromStep: 67, toStep: 68, color: "#B6CEC8", name: "Green Tomatoes", id: 1251, parentID: 159 },
        { ring: 3, fromStep: 68, toStep: 69, color: "#B6CEC8", name: "Parmaviolets", id: 1252, parentID: 159 },
        { ring: 3, fromStep: 69, toStep: 70, color: "#B6CEC8", name: "Florists Shop", id: 1253, parentID: 159 },
        { ring: 1, fromStep: 83, toStep: 108, color: "#995310", name: "Peaty", id: 17, parentID: 0 },
        { ring: 2, fromStep: 70, toStep: 76, color: "#87B0A7", name: "Leafy", id: 160, parentID: 16 },
        { ring: 3, fromStep: 70, toStep: 71, color: "#B6CEC8", name: "Green Leaves", id: 1254, parentID: 160 },
        { ring: 3, fromStep: 71, toStep: 72, color: "#B6CEC8", name: "Lawn Clippings", id: 1255, parentID: 160 },
        { ring: 3, fromStep: 72, toStep: 73, color: "#B6CEC8", name: "Green Sticks", id: 1256, parentID: 160 },
        { ring: 3, fromStep: 73, toStep: 74, color: "#B6CEC8", name: "Pea Pods", id: 1257, parentID: 160 },
        { ring: 3, fromStep: 74, toStep: 75, color: "#B6CEC8", name: "Fir Trees", id: 1258, parentID: 160 },
        { ring: 3, fromStep: 75, toStep: 76, color: "#B6CEC8", name: "Pine Nuts", id: 1259, parentID: 160 },
        { ring: 2, fromStep: 76, toStep: 83, color: "#87B0A7", name: "Hay-Like", id: 161, parentID: 16 },
        { ring: 3, fromStep: 76, toStep: 77, color: "#B6CEC8", name: "Mown Hay", id: 1260, parentID: 161 },
        { ring: 3, fromStep: 77, toStep: 78, color: "#B6CEC8", name: "Dry Hay", id: 1261, parentID: 161 },
        { ring: 3, fromStep: 78, toStep: 79, color: "#B6CEC8", name: "Barns", id: 1262, parentID: 161 },
        { ring: 3, fromStep: 79, toStep: 80, color: "#B6CEC8", name: "Heather Flowers", id: 1263, parentID: 161 },
        { ring: 3, fromStep: 80, toStep: 81, color: "#B6CEC8", name: "Herbal", id: 1264, parentID: 161 },
        { ring: 3, fromStep: 81, toStep: 82, color: "#B6CEC8", name: "Sage", id: 1265, parentID: 161 },
        { ring: 3, fromStep: 82, toStep: 83, color: "#B6CEC8", name: "Mulch", id: 1266, parentID: 161 },
        { ring: 2, fromStep: 83, toStep: 93, color: "#CD9E69", name: "Medicinal", id: 162, parentID: 17 },
        { ring: 3, fromStep: 83, toStep: 84, color: "#E1C29A", name: "Creosote", id: 1267, parentID: 162 },
        { ring: 3, fromStep: 84, toStep: 85, color: "#E1C29A", name: "TCP", id: 1268, parentID: 162 },
        { ring: 3, fromStep: 85, toStep: 86, color: "#E1C29A", name: "Iodine", id: 1269, parentID: 162 },
        { ring: 1, fromStep: 108, toStep: 135, color: "#2C4796", name: "Feinty", id: 18, parentID: 0 },
        { ring: 3, fromStep: 86, toStep: 87, color: "#E1C29A", name: "Carbolic", id: 1270, parentID: 162 },
        { ring: 3, fromStep: 87, toStep: 88, color: "#E1C29A", name: "Hospitals", id: 1271, parentID: 162 },
        { ring: 3, fromStep: 88, toStep: 89, color: "#E1C29A", name: "Lint", id: 1272, parentID: 162 },
        { ring: 3, fromStep: 89, toStep: 90, color: "#E1C29A", name: "Tar", id: 1273, parentID: 162 },
        { ring: 3, fromStep: 90, toStep: 91, color: "#E1C29A", name: "Diesel", id: 1274, parentID: 162 },
        { ring: 3, fromStep: 91, toStep: 92, color: "#E1C29A", name: "Oil", id: 1275, parentID: 162 },
        { ring: 3, fromStep: 92, toStep: 93, color: "#E1C29A", name: "Sea-Weed", id: 12755, parentID: 162 }, // wrong count
        { ring: 2, fromStep: 93, toStep: 98, color: "#CD9E69", name: "Smokey", id: 163, parentID: 17 },
        { ring: 3, fromStep: 93, toStep: 94, color: "#E1C29A", name: "Lapsang Suchong", id: 1276, parentID: 163 },
        { ring: 3, fromStep: 94, toStep: 95, color: "#E1C29A", name: "Incense", id: 1277, parentID: 163 },
        { ring: 3, fromStep: 95, toStep: 96, color: "#E1C29A", name: "Peat-Reek", id: 1278, parentID: 163 },
        { ring: 3, fromStep: 96, toStep: 97, color: "#E1C29A", name: "Bonfires", id: 1279, parentID: 163 },
        { ring: 3, fromStep: 97, toStep: 98, color: "#E1C29A", name: "Burnt Sticks", id: 1280, parentID: 163 },
        { ring: 2, fromStep: 98, toStep: 103, color: "#CD9E69", name: "Kippery", id: 164, parentID: 17 },
        { ring: 3, fromStep: 98, toStep: 99, color: "#E1C29A", name: "Sea-Shells", id: 1281, parentID: 164 },
        { ring: 3, fromStep: 99, toStep: 100, color: "#E1C29A", name: "Dried Shellfish", id: 1282, parentID: 164 },
        { ring: 3, fromStep: 100, toStep: 101, color: "#E1C29A", name: "Smoked Oysters", id: 1283, parentID: 164 },
        { ring: 3, fromStep: 101, toStep: 102, color: "#E1C29A", name: "Smoked Salmon", id: 1284, parentID: 164 },
        { ring: 3, fromStep: 102, toStep: 103, color: "#E1C29A", name: "Anchovies", id: 1285, parentID: 164 },
        { ring: 2, fromStep: 103, toStep: 108, color: "#CD9E69", name: "Mossy", id: 165, parentID: 17 },
        { ring: 3, fromStep: 103, toStep: 104, color: "#E1C29A", name: "Moss Water", id: 1286, parentID: 165 },
        { ring: 3, fromStep: 104, toStep: 105, color: "#E1C29A", name: "Birchy Myrtle", id: 1287, parentID: 165 },
        { ring: 3, fromStep: 105, toStep: 106, color: "#E1C29A", name: "Earthy", id: 1288, parentID: 165 },
        { ring: 3, fromStep: 106, toStep: 107, color: "#E1C29A", name: "Hemp Ropes", id: 1289, parentID: 165 },
        { ring: 3, fromStep: 107, toStep: 108, color: "#E1C29A", name: "Fishing Nets", id: 1290, parentID: 165 },
        { ring: 2, fromStep: 108, toStep: 114, color: "#8C92C6", name: "Honey", id: 166, parentID: 18 },
        { ring: 3, fromStep: 108, toStep: 109, color: "#B8B8DE", name: "Polish", id: 1291, parentID: 166 },
        { ring: 3, fromStep: 109, toStep: 110, color: "#B8B8DE", name: "Beesway", id: 1292, parentID: 166 },
        { ring: 3, fromStep: 110, toStep: 111, color: "#B8B8DE", name: "Mead", id: 1293, parentID: 166 },
        { ring: 3, fromStep: 111, toStep: 112, color: "#B8B8DE", name: "Heather Honey", id: 1294, parentID: 166 },
        { ring: 3, fromStep: 112, toStep: 113, color: "#B8B8DE", name: "Pouring Honey", id: 1295, parentID: 166 },
        { ring: 3, fromStep: 113, toStep: 114, color: "#B8B8DE", name: "Clover Honey", id: 1296, parentID: 166 },
        { ring: 2, fromStep: 114, toStep: 119, color: "#8C92C6", name: "Leathery", id: 167, parentID: 18 },
        { ring: 3, fromStep: 114, toStep: 115, color: "#B8B8DE", name: "Digestive Biscuits", id: 1297, parentID: 167 },
        { ring: 3, fromStep: 115, toStep: 116, color: "#B8B8DE", name: "Mealy", id: 1298, parentID: 167 },
        { ring: 3, fromStep: 116, toStep: 117, color: "#B8B8DE", name: "New Cowhide", id: 1299, parentID: 167 },
        { ring: 3, fromStep: 117, toStep: 118, color: "#B8B8DE", name: "Libraries", id: 1300, parentID: 167 },
        { ring: 3, fromStep: 118, toStep: 119, color: "#B8B8DE", name: "Leather Upholstery", id: 1301, parentID: 167 },
        { ring: 2, fromStep: 119, toStep: 124, color: "#8C92C6", name: "Tobacco", id: 168, parentID: 18 },
        { ring: 3, fromStep: 119, toStep: 120, color: "#B8B8DE", name: "Tobacco-ash", id: 1302, parentID: 168 },
        { ring: 3, fromStep: 120, toStep: 121, color: "#B8B8DE", name: "Green Tobacco", id: 1303, parentID: 168 },
        { ring: 3, fromStep: 121, toStep: 122, color: "#B8B8DE", name: "Fresh Tobacco", id: 1304, parentID: 168 },
        { ring: 3, fromStep: 122, toStep: 123, color: "#B8B8DE", name: "Tea Pot", id: 1305, parentID: 168 },
        { ring: 3, fromStep: 123, toStep: 124, color: "#B8B8DE", name: "Dried Tea", id: 1306, parentID: 168 },
        { ring: 2, fromStep: 124, toStep: 130, color: "#8C92C6", name: "Sweaty", id: 169, parentID: 18 },
        { ring: 3, fromStep: 124, toStep: 125, color: "#B8B8DE", name: "Shoe-Polish", id: 1307, parentID: 169 },
        { ring: 3, fromStep: 125, toStep: 126, color: "#B8B8DE", name: "Old Gym Shoes", id: 1308, parentID: 169 },
        { ring: 3, fromStep: 126, toStep: 127, color: "#B8B8DE", name: "Sickly", id: 1309, parentID: 169 },
        { ring: 3, fromStep: 127, toStep: 128, color: "#B8B8DE", name: "Yeast", id: 1310, parentID: 169 },
        { ring: 3, fromStep: 128, toStep: 129, color: "#B8B8DE", name: "Cheese", id: 1311, parentID: 169 },
        { ring: 3, fromStep: 129, toStep: 130, color: "#B8B8DE", name: "Buttermilk", id: 1312, parentID: 169 },
        { ring: 2, fromStep: 130, toStep: 135, color: "#8C92C6", name: "Plastic", id: 170, parentID: 18 },
        { ring: 3, fromStep: 130, toStep: 131, color: "#B8B8DE", name: "Scorched Plastic", id: 1313, parentID: 170 },
        { ring: 3, fromStep: 131, toStep: 132, color: "#B8B8DE", name: "Oilskin", id: 1314, parentID: 170 },
        { ring: 3, fromStep: 132, toStep: 133, color: "#B8B8DE", name: "Plactic Rope", id: 1315, parentID: 170 },
        { ring: 3, fromStep: 133, toStep: 134, color: "#B8B8DE", name: "Plastic Bucket", id: 1316, parentID: 170 },
        { ring: 3, fromStep: 134, toStep: 135, color: "#B8B8DE", name: "Plastic Mac", id: 1317, parentID: 170 },
        { ring: 1, fromStep: 135, toStep: 156, color: "#6A6A6A", name: "Sulphury", id: 19, parentID: 0 },
        { ring: 2, fromStep: 135, toStep: 141, color: "#B4B4B4", name: "Sandy", id: 171, parentID: 19 },
        { ring: 3, fromStep: 135, toStep: 136, color: "#D3D3D3", name: "Element Sulphur", id: 1318, parentID: 171 },
        { ring: 3, fromStep: 136, toStep: 137, color: "#D3D3D3", name: "Hot Sand", id: 1319, parentID: 171 },
        { ring: 3, fromStep: 137, toStep: 138, color: "#D3D3D3", name: "Sandy Beach", id: 1320, parentID: 171 },
        { ring: 3, fromStep: 138, toStep: 139, color: "#D3D3D3", name: "Linen", id: 1321, parentID: 171 },
        { ring: 3, fromStep: 139, toStep: 140, color: "#D3D3D3", name: "Starch", id: 1322, parentID: 171 },
        { ring: 3, fromStep: 140, toStep: 141, color: "#D3D3D3", name: "Fresh Laundry", id: 1323, parentID: 171 },
        { ring: 2, fromStep: 141, toStep: 146, color: "#B4B4B4", name: "Rubbery", id: 172, parentID: 19 },
        { ring: 3, fromStep: 141, toStep: 142, color: "#D3D3D3", name: "Burnt Rubber", id: 1324, parentID: 172 },
        { ring: 3, fromStep: 142, toStep: 143, color: "#D3D3D3", name: "Electric Cables", id: 1325, parentID: 172 },
        { ring: 3, fromStep: 143, toStep: 144, color: "#D3D3D3", name: "Bakelite", id: 1326, parentID: 172 },
        { ring: 3, fromStep: 144, toStep: 145, color: "#D3D3D3", name: "New Rubber (Tyres)", id: 1327, parentID: 172 },
        { ring: 3, fromStep: 145, toStep: 146, color: "#D3D3D3", name: "Pencil Eraser", id: 1328, parentID: 172 },
        { ring: 2, fromStep: 146, toStep: 151, color: "#B4B4B4", name: "Coal-Gas", id: 173, parentID: 19 },
        { ring: 3, fromStep: 146, toStep: 147, color: "#D3D3D3", name: "Matchbox", id: 1329, parentID: 173 },
        { ring: 3, fromStep: 147, toStep: 148, color: "#D3D3D3", name: "Spent Matches", id: 1330, parentID: 173 },
        { ring: 3, fromStep: 148, toStep: 149, color: "#D3D3D3", name: "Spent Fireworks", id: 1331, parentID: 173 },
        { ring: 3, fromStep: 149, toStep: 150, color: "#D3D3D3", name: "Cordite", id: 1332, parentID: 173 },
        { ring: 3, fromStep: 150, toStep: 151, color: "#D3D3D3", name: "Carbine", id: 1333, parentID: 173 },
        { ring: 2, fromStep: 151, toStep: 156, color: "#B4B4B4", name: "Vegitative", id: 174, parentID: 19 },
        { ring: 3, fromStep: 151, toStep: 152, color: "#D3D3D3", name: "Marsh Gas", id: 1334, parentID: 174 },
        { ring: 3, fromStep: 152, toStep: 153, color: "#D3D3D3", name: "Stagnant", id: 1335, parentID: 174 },
        { ring: 3, fromStep: 153, toStep: 154, color: "#D3D3D3", name: "Turnips", id: 1336, parentID: 174 },
        { ring: 3, fromStep: 154, toStep: 155, color: "#D3D3D3", name: "Cabbage", id: 1337, parentID: 174 },
        { ring: 3, fromStep: 155, toStep: 156, color: "#D3D3D3", name: "Brackish", id: 1338, parentID: 174 },
        { ring: 1, fromStep: 156, toStep: 184, color: "#502E26", name: "Woody", id: 20, parentID: 0 },
        { ring: 2, fromStep: 156, toStep: 162, color: "#9F816A", name: "Toasted", id: 175, parentID: 20 },
        { ring: 3, fromStep: 156, toStep: 157, color: "#C4AE9C", name: "Liquorice", id: 1339, parentID: 175 },
        { ring: 3, fromStep: 157, toStep: 158, color: "#C4AE9C", name: "Aniseed", id: 1340, parentID: 175 },
        { ring: 3, fromStep: 158, toStep: 159, color: "#C4AE9C", name: "Fennel", id: 1341, parentID: 175 },
        { ring: 3, fromStep: 159, toStep: 160, color: "#C4AE9C", name: "Coffee Grounds", id: 1342, parentID: 175 },
        { ring: 3, fromStep: 160, toStep: 161, color: "#C4AE9C", name: "Burnt Toast", id: 1343, parentID: 175 },
        { ring: 3, fromStep: 161, toStep: 162, color: "#C4AE9C", name: "Rice Pudding", id: 4344, parentID: 175 },
        { ring: 2, fromStep: 162, toStep: 168, color: "#9F816A", name: "Vanilla", id: 176, parentID: 20 },
        { ring: 3, fromStep: 162, toStep: 163, color: "#C4AE9C", name: "Toffee", id: 1345, parentID: 176 },
        { ring: 3, fromStep: 163, toStep: 164, color: "#C4AE9C", name: "Madeira Cake", id: 1346, parentID: 176 },
        { ring: 3, fromStep: 164, toStep: 165, color: "#C4AE9C", name: "Sponge", id: 1347, parentID: 176 },
        { ring: 3, fromStep: 165, toStep: 166, color: "#C4AE9C", name: "Meringues", id: 1348, parentID: 176 },
        { ring: 3, fromStep: 166, toStep: 167, color: "#C4AE9C", name: "Creme Caramel", id: 1349, parentID: 176 },
        { ring: 3, fromStep: 167, toStep: 168, color: "#C4AE9C", name: "Custard", id: 1350, parentID: 176 },
        { ring: 2, fromStep: 168, toStep: 177, color: "#9F816A", name: "Old Wood", id: 177, parentID: 20 },
        { ring: 3, fromStep: 168, toStep: 169, color: "#C4AE9C", name: "Camphor", id: 1351, parentID: 177 },
        { ring: 3, fromStep: 169, toStep: 170, color: "#C4AE9C", name: "Metallic", id: 1352, parentID: 177 },
        { ring: 3, fromStep: 170, toStep: 171, color: "#C4AE9C", name: "Ink", id: 1353, parentID: 177 },
        { ring: 3, fromStep: 171, toStep: 172, color: "#C4AE9C", name: "Cork", id: 1354, parentID: 177 },
        { ring: 3, fromStep: 172, toStep: 173, color: "#C4AE9C", name: "Pencils", id: 1355, parentID: 177 },
        { ring: 3, fromStep: 173, toStep: 174, color: "#C4AE9C", name: "Cellars", id: 1356, parentID: 177 },
        { ring: 3, fromStep: 174, toStep: 175, color: "#C4AE9C", name: "Cork", id: 1357, parentID: 177 },
        { ring: 3, fromStep: 175, toStep: 176, color: "#C4AE9C", name: "Pencils", id: 1358, parentID: 177 },
        { ring: 3, fromStep: 176, toStep: 177, color: "#C4AE9C", name: "Cellars", id: 1359, parentID: 21778 },
        { ring: 2, fromStep: 177, toStep: 184, color: "#9F816A", name: "New Wood", id: 178, parentID: 20 },
        { ring: 3, fromStep: 177, toStep: 178, color: "#C4AE9C", name: "Nuttmet", id: 1360, parentID: 178 },
        { ring: 3, fromStep: 178, toStep: 179, color: "#C4AE9C", name: "Allspice", id: 1361, parentID: 178 },
        { ring: 3, fromStep: 179, toStep: 180, color: "#C4AE9C", name: "Pepper", id: 1362, parentID: 178 },
        { ring: 3, fromStep: 180, toStep: 181, color: "#C4AE9C", name: "Ginger", id: 1363, parentID: 178 },
        { ring: 3, fromStep: 181, toStep: 182, color: "#C4AE9C", name: "Sandalwood", id: 1364, parentID: 178 },
        { ring: 3, fromStep: 182, toStep: 183, color: "#C4AE9C", name: "Cigar Boxes", id: 1365, parentID: 178 },
        { ring: 3, fromStep: 183, toStep: 184, color: "#C4AE9C", name: "Resinous", id: 1366, parentID: 178 },
        { ring: 1, fromStep: 184, toStep: 205, color: "#CF1F3F", name: "Winey", id: 21, parentID: 0 },
        { ring: 2, fromStep: 184, toStep: 188, color: "#EC958A", name: "Oily", id: 179, parentID: 21 },
        { ring: 3, fromStep: 184, toStep: 185, color: "#F4BFB3", name: "Almond Oil", id: 1367, parentID: 179 },
        { ring: 3, fromStep: 185, toStep: 186, color: "#F4BFB3", name: "Suntan Oil", id: 1368, parentID: 179 },
        { ring: 3, fromStep: 186, toStep: 187, color: "#F4BFB3", name: "Candelwax", id: 1369, parentID: 179 },
        { ring: 3, fromStep: 187, toStep: 188, color: "#F4BFB3", name: "Linseed Oil", id: 1370, parentID: 179 },
        { ring: 2, fromStep: 188, toStep: 193, color: "#EC958A", name: "Chocolate", id: 180, parentID: 21 },
        { ring: 3, fromStep: 188, toStep: 189, color: "#F4BFB3", name: "Bitter Chocolate", id: 1371, parentID: 180 },
        { ring: 3, fromStep: 189, toStep: 190, color: "#F4BFB3", name: "Cocao", id: 1372, parentID: 180 },
        { ring: 3, fromStep: 190, toStep: 191, color: "#F4BFB3", name: "Milk Chocolate", id: 1373, parentID: 180 },
        { ring: 3, fromStep: 191, toStep: 192, color: "#F4BFB3", name: "Butter", id: 1374, parentID: 180 },
        { ring: 3, fromStep: 192, toStep: 193, color: "#F4BFB3", name: "Cream", id: 1375, parentID: 180 },
        { ring: 2, fromStep: 193, toStep: 198, color: "#EC958A", name: "Nutty", id: 181, parentID: 21 },
        { ring: 3, fromStep: 193, toStep: 194, color: "#F4BFB3", name: "Marzipan", id: 1376, parentID: 181 },
        { ring: 3, fromStep: 194, toStep: 195, color: "#F4BFB3", name: "Almonds", id: 1377, parentID: 181 },
        { ring: 3, fromStep: 195, toStep: 196, color: "#F4BFB3", name: "Praline", id: 1378, parentID: 181 },
        { ring: 3, fromStep: 196, toStep: 197, color: "#F4BFB3", name: "Hazel nuts", id: 1379, parentID: 181 },
        { ring: 3, fromStep: 197, toStep: 198, color: "#F4BFB3", name: "Walnuts", id: 1380, parentID: 181 },
        { ring: 2, fromStep: 198, toStep: 205, color: "#EC958A", name: "Sherried", id: 182, parentID: 21 },
        { ring: 3, fromStep: 198, toStep: 199, color: "#F4BFB3", name: "Marzipan", id: 1381, parentID: 182 },
        { ring: 3, fromStep: 199, toStep: 200, color: "#F4BFB3", name: "Almonds", id: 1382, parentID: 182 },
        { ring: 3, fromStep: 200, toStep: 201, color: "#F4BFB3", name: "Praline", id: 1383, parentID: 182 },
        { ring: 3, fromStep: 201, toStep: 202, color: "#F4BFB3", name: "Hazel nuts", id: 1384, parentID: 182 },
        { ring: 3, fromStep: 202, toStep: 203, color: "#F4BFB3", name: "Walnuts", id: 1385, parentID: 182 },
        { ring: 3, fromStep: 203, toStep: 204, color: "#F4BFB3", name: "Hazel nuts", id: 1386, parentID: 182 },
        { ring: 3, fromStep: 204, toStep: 205, color: "#F4BFB3", name: "Walnuts", id: 1387, parentID: 182 },
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
    document.getElementById("flavorsWhiskey").value = (getSelectedFlavorIds());
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
