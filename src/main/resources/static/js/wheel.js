let selectedFlavors = [];
const innerRadii =[50,80,145];
const outerRadii =[80,145,200];
const ringnr = 3;
const steps =85;
const circlex=220;
const circley=220;
//gedraginstellingen
const parentSliceAutoSelect = true;		//hogere smaak gaat mee omhoog
const childSliceAutoDeselect = true;   //subsmaak gaat mee omlaag

const wheelSVG = document.getElementById("svgC");

/*hier gaan we voor elke ring twee groepen maken
even getallen voor onaangeklikten en oneven voor aangeklikten (met schaduw)
bij klikken springt een stukje van de één naar de ander.
door de volgorde van de groepen, valt schaduw alleen op een grotere ring	*/
for (let i = (ringnr*2); i > 0; i--){
    const id = "g"+(i);
    const newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    newGroup.setAttribute("id", (id));
    //alle oneven groepen krijgen schaduw en verschuiving.
    if (i%2 >0){
        newGroup.setAttribute('transform', "scale(1.03), translate(-8,-8)");
        newGroup.setAttribute("filter", "url(#dropshadow)");
    }
    wheelSVG.appendChild(newGroup);

}
const SVGBackup = wheelSVG.innerHTML; //backup maken om snel het wiel te wissen
const flavorList =
    [
        {ring:1, fromStep:0, toStep:18, color:"#DA1D23", name:"Fruity", id:1, parentID: null},

        {ring:2, fromStep:0, toStep:4, color:"#DD4C51", name:"Berry", id:101, parentID:1},

        {ring:3, fromStep:0, toStep:1, color:"#3E0317", name:"Blackberry", id:1001, parentID:101},
        {ring:3, fromStep:1, toStep:2, color:"#E52968", name:"Raspberry", id:1002, parentID:101},
        {ring:3, fromStep:2, toStep:3, color:"#6469B0", name:"Blueberry", id:1003, parentID:101},
        {ring:3, fromStep:3, toStep:4, color:"#EF2D36", name:"Strawberry", id:1004, parentID:101},

        {ring:2, fromStep:4, toStep:6, color:"#C94A44", name:"Dried fruit", id:102, parentID:1},

        {ring:3, fromStep:4, toStep:5, color:"#B53B54", name:"Raisin", id:1005, parentID:102},
        {ring:3, fromStep:5, toStep:6, color:"#A5446F", name:"Prune", id:1006, parentID:102},

        {ring:2, fromStep:6, toStep:14, color:"#F2684C", name:"Other Fruit", id:103, parentID:1},

        {ring:3, fromStep:6, toStep:7, color:"#D07C36", name:"Coconut", id:1007, parentID:103},
        {ring:3, fromStep:7, toStep:8, color:"#E73451", name:"Cherry", id:1008, parentID:103},
        {ring:3, fromStep:8, toStep:9, color:"#E65656", name:"Pomegranate", id:1009, parentID:103},
        {ring:3, fromStep:9, toStep:10, color:"#F89A1C", name:"Pineapple", id:1010, parentID:103},
        {ring:3, fromStep:10, toStep:11, color:"#AEB92C", name:"Grape", id:1011, parentID:103},
        {ring:3, fromStep:11, toStep:12, color:"#4EB947", name:"Apple", id:1012, parentID:103},
        {ring:3, fromStep:12, toStep:13, color:"#F68A5C", name:"Peach", id:1013, parentID:103},
        {ring:3, fromStep:13, toStep:14, color:"#BAA635", name:"Pear", id:1014, parentID:103},

        {ring:2, fromStep:14, toStep:18, color:"#F7A129", name:"Citrus Fruit", id:104, parentID:1},

        {ring:3, fromStep:14, toStep:15, color:"#F26355", name:"Grapefruit", id:1015, parentID:104},
        {ring:3, fromStep:15, toStep:16, color:"#E2631E", name:"Orange", id:1016, parentID:104},
        {ring:3, fromStep:16, toStep:17, color:"#FDE402", name:"Lemon", id:1017, parentID:104},
        {ring:3, fromStep:17, toStep:18, color:"#7EB138", name:"Lime", id:1018, parentID:104},

        {ring:1, fromStep:18, toStep:28, color:"#EAB40C", name:"Sour/Fermented", id:2, parentID: null},

        {ring:2, fromStep:18, toStep:24, color:"#E1C315", name:"Sour", id:105, parentID:2},

        {ring:3, fromStep:18, toStep:19, color:"#9EA718", name:"Sour Aromatics", id:1019, parentID:105},
        {ring:3, fromStep:19, toStep:20, color:"#94A770", name:"Acetic Acid", id:1020, parentID:105},
        {ring:3, fromStep:20, toStep:21, color:"#D0B34F", name:"Butyric Acid", id:1021, parentID:105},
        {ring:3, fromStep:21, toStep:22, color:"#8EB646", name:"Isovaleric Acid", id:1022, parentID:105},
        {ring:3, fromStep:22, toStep:23, color:"#FAEF08", name:"Citric Acid", id:1023, parentID:105},
        {ring:3, fromStep:23, toStep:24, color:"#C1BA09", name:"Malic Acid", id:1024, parentID:105},

        {ring:2, fromStep:24, toStep:28, color:"#B09733", name:"Alcohol/Fermented", id:106, parentID:2},

        {ring:3, fromStep:24, toStep:25, color:"#8F1B53", name:"Winey", id:1025, parentID:106},
        {ring:3, fromStep:25, toStep:26, color:"#B34039", name:"Whiskey", id:1026, parentID:106},
        {ring:3, fromStep:26, toStep:27, color:"#BA9232", name:"Fermented", id:1027, parentID:106},
        {ring:3, fromStep:27, toStep:28, color:"#8B6439", name:"Overripe", id:1028, parentID:106},

        {ring:1, fromStep:28, toStep:38, color:"#197A2F", name:"Green/vegetative", id:3, parentID: null},

        {ring:2, fromStep:28, toStep:29, color:"#A2B028", name:"Olive oil", id:107, parentID:3},

        {ring:2, fromStep:29, toStep:30, color:"#708933", name:"Raw", id:108, parentID:3},

        {ring:2, fromStep:30, toStep:37, color:"#3AA255", name:"Green vegetative", id:109, parentID:3},

        {ring:3, fromStep:30, toStep:31, color:"#A2BC2B", name:"Under-ripe", id:1029, parentID:109},
        {ring:3, fromStep:31, toStep:32, color:"#62AA3C", name:"Peapod", id:1030, parentID:109},
        {ring:3, fromStep:32, toStep:33, color:"#03A653", name:"Fresh", id:1031, parentID:109},
        {ring:3, fromStep:33, toStep:34, color:"#048549", name:"Dark green", id:1032, parentID:109},
        {ring:3, fromStep:34, toStep:35, color:"#27B44B", name:"Vegetative", id:1033, parentID:109},
        {ring:3, fromStep:35, toStep:36, color:"#A3A830", name:"Hay-like", id:1034, parentID:109},
        {ring:3, fromStep:36, toStep:37, color:"#7AC141", name:"Herb-like", id:1035, parentID:109},

        {ring:2, fromStep:37, toStep:38, color:"#5E9A80", name:"Beany", id:110, parentID:3},

        {ring:1, fromStep:38, toStep:54, color:"#0AA3B5", name:"Other", id:4, parentID: null},

        {ring:2, fromStep:38, toStep:48, color:"#9DB2B7", name:"Papery/Musty", id:111, parentID:4},

        {ring:3, fromStep:38, toStep:39, color:"#8B8C90", name:"Stale", id:1036, parentID:111},
        {ring:3, fromStep:39, toStep:40, color:"#BDB175", name:"Cardboard", id:1037, parentID:111},
        {ring:3, fromStep:40, toStep:41, color:"#FEFEF4", name:"Papery", id:1038, parentID:111},
        {ring:3, fromStep:41, toStep:42, color:"#744F02", name:"Woody", id:1039, parentID:111},
        {ring:3, fromStep:42, toStep:43, color:"#A3A36F", name:"Moldy/Damp", id:1040, parentID:111},
        {ring:3, fromStep:43, toStep:44, color:"#C9B583", name:"Musty/Dusty", id:1041, parentID:111},
        {ring:3, fromStep:44, toStep:45, color:"#988847", name:"Musty/Earthy", id:1042, parentID:111},
        {ring:3, fromStep:45, toStep:46, color:"#9D977F", name:"Animalic", id:1043, parentID:111},
        {ring:3, fromStep:46, toStep:47, color:"#CC7B6A", name:"Meaty/Brothy", id:1044, parentID:111},
        {ring:3, fromStep:47, toStep:48, color:"#DB646A", name:"Phenolic", id:1045, parentID:111},

        {ring:2, fromStep:48, toStep:54, color:"#76C0CB", name:"Chemical", id:112, parentID:4},

        {ring:3, fromStep:48, toStep:49, color:"#80A89D", name:"Bitter", id:1046, parentID:112},
        {ring:3, fromStep:49, toStep:50, color:"#DEF2FD", name:"Salty", id:1047, parentID:112},
        {ring:3, fromStep:50, toStep:51, color:"#7A9BAE", name:"Medicinal", id:1048, parentID:112},
        {ring:3, fromStep:51, toStep:52, color:"#039FB8", name:"Petroleum", id:1049, parentID:112},
        {ring:3, fromStep:52, toStep:53, color:"#5E777B", name:"Skunky", id:1050, parentID:112},
        {ring:3, fromStep:53, toStep:54, color:"#120C0C", name:"Rubber", id:1051, parentID:112},

        {ring:1, fromStep:54, toStep:62, color:"#C94930", name:"Roasted", id:5, parentID: null},

        {ring:2, fromStep:54, toStep:55, color:"#CAA465", name:"Pipe tobacco", id:113, parentID:5},

        {ring:2, fromStep:55, toStep:56, color:"#DFBD7E", name:"Tobacco", id:114, parentID:5},

        {ring:2, fromStep:56, toStep:60, color:"#BE8663", name:"Burnt", id:115, parentID:5},

        {ring:3, fromStep:56, toStep:57, color:"#B9A449", name:"Acrid", id:1052, parentID:115},
        {ring:3, fromStep:57, toStep:58, color:"#899893", name:"Ashy", id:1053, parentID:115},
        {ring:3, fromStep:58, toStep:59, color:"#A1743B", name:"Smoky", id:1054, parentID:115},
        {ring:3, fromStep:59, toStep:60, color:"#894810", name:"Brown. Roast", id:1055, parentID:115},

        {ring:2, fromStep:60, toStep:62, color:"#DDAF61", name:"Cereal", id:116, parentID:5},

        {ring:3, fromStep:60, toStep:61, color:"#B7906F", name:"Grain", id:1056, parentID:116},
        {ring:3, fromStep:61, toStep:62, color:"#EB9D5E", name:"Malt", id:1057, parentID:116},

        {ring:1, fromStep:62, toStep:68, color:"#AE203E", name:"Spices", id:6, parentID: null},

        {ring:2, fromStep:62, toStep:63, color:"#794652", name:"Pungent", id:117, parentID:6},

        {ring:2, fromStep:63, toStep:64, color:"#CC3C42", name:"Pepper", id:118, parentID:6},

        {ring:2, fromStep:64, toStep:68, color:"#B14D57", name:"Brown Spice", id:119, parentID:6},

        {ring:3, fromStep:64, toStep:65, color:"#C78935", name:"Anise", id:1058, parentID:119},
        {ring:3, fromStep:65, toStep:66, color:"#8C292C", name:"Nutmeg", id:1059, parentID:119},
        {ring:3, fromStep:66, toStep:67, color:"#E5762E", name:"Cinnamon", id:1060, parentID:119},
        {ring:3, fromStep:67, toStep:68, color:"#A16C5A", name:"Clove", id:1061, parentID:119},

        {ring:1, fromStep:68, toStep:73, color:"#A97B64", name:"Nutty/Cocoa", id:7, parentID: null},

        {ring:2, fromStep:68, toStep:71, color:"#C78869", name:"Nutty", id:120, parentID:7},

        {ring:3, fromStep:68, toStep:69, color:"#D4AD13", name:"Peanuts", id:1062, parentID:120},
        {ring:3, fromStep:69, toStep:70, color:"#9D5433", name:"Hazelnut", id:1063, parentID:120},
        {ring:3, fromStep:70, toStep:71, color:"#C89F83", name:"Almond", id:1064, parentID:120},

        {ring:2, fromStep:71, toStep:73, color:"#BB764C", name:"Cocoa", id:121, parentID:7},

        {ring:3, fromStep:71, toStep:72, color:"#692A19", name:"Chocolate", id:1065, parentID:121},
        {ring:3, fromStep:72, toStep:73, color:"#470603", name:"Dark chocolate", id:1066, parentID:121},

        {ring:1, fromStep:73, toStep:81, color:"#E55831", name:"Sweet", id:8, parentID: null},

        {ring:2, fromStep:73, toStep:77, color:"#D45A59", name:"Brown Sugar", id:122, parentID:8},

        {ring:3, fromStep:73, toStep:74, color:"#310C0F", name:"Molasses", id:1067, parentID:122},
        {ring:3, fromStep:74, toStep:75, color:"#AE341F", name:"Maple syrup", id:1068, parentID:122},
        {ring:3, fromStep:75, toStep:76, color:"#D78823", name:"Caramelized", id:1069, parentID:122},
        {ring:3, fromStep:76, toStep:77, color:"#DA5C1F", name:"Honey", id:1070, parentID:122},

        {ring:2, fromStep:77, toStep:78, color:"#F89A80", name:"Vanilla", id:123, parentID:8},

        {ring:2, fromStep:78, toStep:79, color:"#F37674", name:"Vanillin", id:124, parentID:8},

        {ring:2, fromStep:79, toStep:80, color:"#E75B68", name:"Overall Sweet", id:125, parentID:8},

        {ring:2, fromStep:80, toStep:81, color:"#D0545F", name:"Sweet Aromatics", id:126, parentID:8},

        {ring:1, fromStep:81, toStep:85, color:"#DB0D69", name:"Floral", id:9, parentID: null},

        {ring:2, fromStep:81, toStep:82, color:"#975E6D", name:"Black tea", id:127, parentID:9},

        {ring:2, fromStep:82, toStep:85, color:"#E0719C", name:"Floral", id:128, parentID:9},

        {ring:3, fromStep:82, toStep:83, color:"#F7F1BD", name:"Chamomile", id:1071, parentID:128},
        {ring:3, fromStep:83, toStep:84, color:"#EF5A78", name:"Rose", id:1072, parentID:128},
        {ring:3, fromStep:84, toStep:85, color:"#F99E1B", name:"Jasmine", id:1073, parentID:128},
    ];

//Teken het wiel, door voor elke flavor drawSlice() aan te roepen.
const drawWheel = () => flavorList.map( flavor => drawSlice(flavor) );

//Teken de slice
const drawSlice = ( {ring, fromStep,toStep, color, name, id} ) => {
    //benoem in één keer 6 variabelen, uit de flavor te halen
    //name = name.toUpperCase();

    //Staal en hoeken bepalen.
    const innerRadius = innerRadii[ring-1];			//straal van binnenste boog
    const outerRadius = outerRadii[ring-1];			//straal van buitenste boog
    const Angle1 = (fromStep/steps)*2*Math.PI;	//hoek waar de slice begint
    const Angle2 = (toStep/steps)*2*Math.PI;		//hoek waar de slice eindigt

    //Elke slice heeft 4 punten/hoeken, dus 4 x,y coordinaten.
    const x1 = (circlex + (Math.sin(Angle1)*innerRadius));
    const y1 = (circley - (Math.cos(Angle1)*innerRadius));
    const x2 = (circlex + (Math.sin(Angle1)*outerRadius));
    const y2 = (circley - (Math.cos(Angle1)*outerRadius));
    const x3 = (circlex + (Math.sin(Angle2)*outerRadius));
    const y3 = (circley - (Math.cos(Angle2)*outerRadius));
    const x4 = (circlex + (Math.sin(Angle2)*innerRadius));
    const y4 = (circley - (Math.cos(Angle2)*innerRadius));

    //DE SVGCODE VOOR HET TEKENEN
    //1. ga naar punt 1 - M=move
    //2. trek vanaf daar een rechte lijn naar punt 2 - L=line
    //3. teken vanaf daar een grote boog naar punt 3 - A=arch
    //4. teken vanaf daar een rechte lijn naar punt 4 - L
    //5. teken vanaf daar een kleine boog terug naar punt 1 - A
    const pathString =
        "M" + x1 + " " +y1 +																						//1
        "L "+x2+" "+y2 +																								//2
        "A"+ outerRadius + 		" "+outerRadius + " 1 0 1 "+x3 + " "+y3 +	//3
        "L"+x4+" "+y4 +																									//4
        "A"+ innerRadius +" " + innerRadius+ " 0 0 0 " + x1 + " " +y1;	//5

    //hier wordt het tekeningetje van de slice in elkaar gezet
    const newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    newPath.setAttribute("d", pathString);

    //HET MAKEN EN PLAATSEN VAN DE TEKST VAN DE NAMEN.
    //de tekst voor in de ringen word in verschillende stapppen gemaakt:
    //1. maak een elemeent met de text van de flavor
    const newText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    //2. zet de x en de y eerst het in het midden van het wiel
    newText.setAttribute("x", circlex);
    newText.setAttribute("y", circley);

    newText.setAttribute("alignment-baseline", "middle");

    //3. bepaal de hoek van de tekst
    //er wordt (ongeveer) 90 graden vanaf getrokken, omdat de tekst
    //natuurlijk eerst horizontaal staat, dus al 90 graden gedraaid.
    const angle = (((fromStep+toStep)/steps)*180)-90;
    let textAngle = angle;
    //4. kleine correctie voor de tekst die voorbij het onderste punt komt.
    if(angle>90){
        textAngle=angle-(0.2);
    }

    //5. Bepaal hoever de teks van het midden moet staan.

    //6. maak een string waarin de transformaties uit de vorige stappen staan
    var transformString = "rotate("+textAngle+" "+circlex+" "+circley+"),";
    //transformString += "translate("+textX+")";
    //7. in de binnenste ring moet de tekst dwars staan, dus meer berekenigen
    if (ring==1){
        //8. verder van het midden af
        let textX= ((innerRadius+outerRadius)/1.82	)
        let textXCorrection = 0;
        transformString += "translate("+textX+")";

        //9. in de onderste helft moet alles een kwartslag terug
        if (angle > 0 && angle < 180 ){
            transformString += "rotate(-90 "+circlex+" "+circley+")";
            textXCorrection = -5.5
        }
        //10. in de bovenste helft moet alles een kwartslag verder
        if (angle > 180 || angle < 0 ){
            transformString += "rotate(90 "+circlex+" "+circley+")";
            //	transformString += "translate(1)";
        }
        //11. de tekst moet in het midden worden uitgelijnd.
        newText.setAttribute("text-anchor", "middle");
        //12. Kijk of er een "/" in de naam staat.
        let division = name.indexOf("/");
        if (division ==-1){
            newText.innerHTML = name;
        }
        //13. Zo ja, breek hem af.
        else {
            let namepart1 = name.substring(0,division+1);
            let namepart2 = name.substring(division+1,name.lengt);
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
    else{
        let textX= outerRadius-3
        transformString += "translate("+textX+")";
        //16. voorbij het onderste punt? dan op zijn kop zetten en
        //rechts uitlijnen in plaat van links
        if(angle>90){
            //newText.setAttribute("text-anchor", "start");
            let textX= outerRadius-5

            transformString += "rotate(180 "+circlex+" "+circley+")";
        }
        else{
            newText.setAttribute("text-anchor", "end");

        }
        newText.innerHTML = name;
    }

    //17. de transformatie toepassen. Lijndikte en kleur bepalen.
    newText.setAttribute('transform', transformString);

    newText.style.strokeWidth = "0px"; // geen lijn om tekst
    let lineAndTextColor = "white";
    if (isColorLight(color)){
        lineAndTextColor = "black";
        newText.style.strokeWidth = "0.3px";
    }
    newText.style.fill = lineAndTextColor;
    newText.style.stroke = lineAndTextColor;

    //18. de Slice maken: maak de nieuwe groep aan met de id van de flavor
    var newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    newGroup.setAttribute("id", (""+id));
    newGroup.setAttribute("class", "slice");
    newGroup.setAttribute("onclick","clickAction(this)");
    newGroup.style.stroke = "white";
    newGroup.style.fill = color;
    newPath.style.strokeWidth = "0.5px";
    //19. zet de tekening en de tekst in deze groep
    newGroup.appendChild(newPath);
    newGroup.appendChild(newText);

    //20. Zet die groep vervolgens in de juiste ringgroep.
    var parentGroupID = ("g"+(ring*2));
    document.getElementById(parentGroupID).appendChild(newGroup);
}

//Bepaal of een kleur licht is (zodat witte letters er niet op te lezen zijn)
//naar voorbeeld: https://awik.io/determine-color-bright-dark-using-javascript/
const isColorLight = (color) => {
    let r = parseInt(color.substring(1,3), 16);
    let g = parseInt(color.substring(3,5), 16);
    let b = parseInt(color.substring(5,7), 16);
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );
    return (hsp>210);
}

//Klikactie voor een slice: moet ie geselecteerd worden of geDEselecteerd?
const clickAction = (slice) => {
    (isSelected(slice)) ? deselectSlice(slice) : selectSlice(slice);
    //document.getElementById("userNotes").innerText = getSelectedFlavorString();
    document.getElementById("flavorsCoffee").value = (getSelectedFlavorIds());
}

//selecteren van een slice = in een group plaatsen met hoger nummer
const selectSlice = (slice) => {
    if (!isSelected(slice)){
        document.getElementById(getHigherGroupId(slice)).appendChild(slice);
        selectedFlavors.push(getFlavor(slice));
        //Heeft ie een parent? en staat de optie op true, dan ook selecteren:
        if (getGroupNumber(slice)>2 && parentSliceAutoSelect){
            selectSlice(getParentSlice(slice));
        }
    }
}

//Deselecteren van een slice = in een group plaatsen met lager nummer
const deselectSlice = (slice) => {
    document.getElementById(getLowerGroupId(slice)).appendChild(slice);
    deselectFlavor(getFlavor(slice));
    //staat de optie aan om children ook te Deselecteren, doe die dan ook.
    if (childSliceAutoDeselect){
        getSelectedChildrenSlices(slice).map( (ChildSlice) => deselectSlice(ChildSlice));
    }
}

//backup HTML in SVG terugzetten = leegmaken en dan opnieuw tekenen
const resetWheel= () => {
    wheelSVG.innerHTML = SVGBackup;
    drawWheel();
}

//het nummer van de groep. Ze heten "g1", "g2", etc, dus hak de "g" eraf.
const getGroupNumber = (slice) =>  parseInt((slice.parentNode.id).replace("g",""));

//Het id van een groep hoger. g2=g1, etc
const getHigherGroupId = (slice) => `g${getGroupNumber(slice)-1}`;

//Het id van een groep lager. g1=g2, etc
const getLowerGroupId = (slice) => `g${getGroupNumber(slice)+1}`;

//is deze geselecteerd? dat ziet ie door een oneven groepnummer
const isSelected = (slice) => getGroupNumber(slice)%2>0;

//zoekt in flavorList naar ID van de parentSlice
const getParentSliceID = (sliceID) => {
    return (flavorList.find( (listpart) =>
        listpart.id == sliceID
    ).parentID);
}

//Zoek het daadwerkelijke element van de parent.
const getParentSlice = (slice) => document.getElementById(getParentSliceID(slice.id));

//haal flavor uit lijst met geselecteerde flavors
const deselectFlavor = (deselectedFlavor) => {
    selectedFlavors = selectedFlavors.filter ( (flavor) => flavor != deselectedFlavor) ;
}

//geef flavor van een slice
const getFlavor = (slice) => {
    return (flavorList.find( (flavor) => flavor.id == slice.id));
}

//geef de ID-nummers van de geselecteerde flavors
const getSelectedFlavorIds = () => {
    return (selectedFlavors.map ( (flavor) => flavor.id ));
}

//geef de parentID-nummers van de geselecteerde flavors
const getSelectedFlavorParentIds = () => {
    return (selectedFlavors.map ( (flavor) => flavor.parentID ));
}

//geef de namen van de geselecteerde flavors
const getSelectedFlavorNames = () => {
    return (selectedFlavors.map ( (flavor) => flavor.name ));
}

//Geef de parentflavor
const getParentFlavor = (childFlavor) => {
    return flavorList.find( (flavor) => flavor.id == childFlavor.parentID);
}

//geef geselecteerde "babies" = flavors met op dit moment geen geselecteerde children
const getSelectedFlavorBabies = () => {
    return (selectedFlavors.filter ( (flavor) => !(getSelectedFlavorParentIds().includes(flavor.id) ) ) ) ;
}

//geef een string met alle namen van geselecteerde flavors
//wordt misschein later gebruikt om ergens in het formulier te laten zien.
const getSelectedFlavorString = () => {
    let result = "";
    getSelectedFlavorBabies().map ( (flavor) => {
        (result == "") ? result += flavor.name : result += ", "+ flavor.name;
    } );
    return result;
}

//Geeft voor een gegeven flavor een string met zijn voorouders
//in "familieopmaak", bijvoorbeeld voor berry 'Fruity->Berry'
const getFlavorFamily = (flavor) => {
    let result = flavor.name;
    if (flavor.parentID != '0'){
        let temp = result;
        result = getFlavorFamily(getParentFlavor(flavor)) + "->" + temp;
    }
    return result;
}

//geef een string met alle namen van geselecteerde flavors in "familieopmaak"
//wordt misschein later gebruikt om ergens in het formulier te laten zien.
const getSelectedFlavorStringLong = () => {
    return getSelectedFlavorBabies().map ( (flavor) => getFlavorFamily(flavor));
}

//Onderstaande functie krijgt een slice mee en geeft een lijst terug met
//de children van deze slice die geselecteerd zijn. Dat gaat zo:
//1. neem de flavorList en filter daar alleen de flavors uit die
//onder deze vallen (ParentID == sliceid).
//2. neem daarvan niet de hele flavor, maar de id
//3. zoek de daadwerkelijke elementen met die id.
//4. filter alleen de elementen die geselecteerd zijn.
const getSelectedChildrenSlices = (slice) => {
    return flavorList.filter( (flavor) =>  flavor.parentID == slice.id ) 	//1
        .map( (flavor) =>  flavor.id )										//2
            .map ( (id) => document.getElementById(id) )					//3
                .filter( (element) => isSelected(element) );				//4
}
drawWheel();
