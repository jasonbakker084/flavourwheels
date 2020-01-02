(function () {
    "use strict";
}());


const flavours = {
    sweet: {
        name: "Sweet",
        color: "Orange Nectar",
        subFlavours: {
            brownSugar: {
                name: "Brown sugar",
                color: "Raspberry Blush",
                descriptors: {
                    molasses: {
                        name: "Molasses",
                        color: "Wenge",
                    },
                    mapleSyrup: {
                        name: "Maple Syrup",
                        color: "Heritage red",
                    },
                    caramelized: {
                        name: "Caramelized",
                        color: "Pumpkin Blush",
                    },
                    honey: {
                        name: "Honey",
                        color: "Fireball Orange",
                    },
                },
            },
            vanilla: {
                name: "Vanilla",
                color: "Salmon Run",
            },
            vanillin: {
                name: "Vanillin",
                color: "Tucson Coral",
            },
            overallSweet: {
                name: "Overall sweet",
                color: "Red Tulip",
            },
            sweetAromatics: {
                name: "Sweet aromatics",
                color: "Raspberry Pudding",
            },
        },
    },
    floral: {
        name: "Floral",
        color: "Gipsy Pink",
        subFlavours: {
            blackTea: {
                name: "Black Tea",
                color: "Bottle of Bordeaux",
            },
            floral: {
                name: "Floral",
                color: "Deep Carnation",
                descriptors: {
                    chamomile: {
                        name: "Chamomile",
                        color: "Desert Sunset",
                    },
                    rose: {
                        name: "Rose",
                        color: "Cactus Flower",
                    },
                    jasmine: {
                        name: "Jasmine",
                        color: "Light Yellow",
                    },
                },
            },
        },

    },
    fruity: {
        name: "Fruity",
        color: "Redstone",
        subFlavours: {
            berry: {
                name: "Berry",
                color: "Spring Tulips",
                descriptors: {
                    blackberry: {
                        name: "Blackberry",
                        color: "Bucktrout Brown",
                    },
                    raspberry: {
                        name: "Raspberry",
                        color: "Rosy Blush",
                    },
                    blueberry: {
                        name: "Blueberry",
                        color: "Seduction",
                    },
                    strawberry: {
                        name: "Strawberry",
                        color: "Marquee Red",
                    },

                },
            },
            driedFruit: {
                name: "Dried Fruit",
                color: "Claret Rose",
                descriptors: {
                    raisin: {
                        name: "Raisin",
                        color: "Fuchsine",
                    },
                    prune: {
                        name: "Prune",
                        color: "Pink Corsage",
                    },
                },
            },
            otherFruit: {
                name: "Other Fruit",
                color: "Jeweled Peach",
                descriptors: {
                    coconut: {
                        name: "Coconut",
                        color: "Golden Dunes",
                    },
                    cherry: {
                        name: "Cherry",
                        color: "Bull's Eye Red",
                    },
                    pomegranate: {
                        name: "Pomegranate",
                        color: "Starburst Orange",
                    },
                    pineapple: {
                        name: "Pineapple",
                        color: "Gold Mine",
                    },
                    grape: {
                        name: "Grape",
                        color: "Tequila Lime",
                    },
                    apple: {
                        name: "Apple",
                        color: "Fresh Scent Green",
                    },
                    peach: {
                        name: "Peach",
                        color: "Tangerine Fushion",
                    },
                    pear: {
                        name: "Pear",
                        color: "Forest Moss",
                    },
                },
            },
            citrusFruit: {
                name: "Citrus Fruit",
                color: "Citrus Blast",
                descriptors: {
                    grapefruit: {
                        name: "Grapefruit",
                        color: "Tangerine Dream",
                    },
                    orange: {
                        name: "Orange",
                        color: "Electric Orange",
                    },
                    lemon: {
                        name: "Lemon",
                        color: "Sun Porch",
                    },
                    lime: {
                        name: "Lime",
                        color: "Lucky Charm Green",
                    },
                },
            },
        },

    },
    sourFermented: {
        name: "Sour/Fermented",
        color: "Yolk",
        subFlavours: {
            sour: {
                name: "Sour",
                color: "Citron",
                descriptors: {
                    sourAromatics: {
                        name: "Sour Aromatics",
                        color: "Douglas Fir",
                    },
                    aceticAcid: {
                        name: "Acetic Acid",
                        color: "Kiwi",
                    },
                    butyricAcid: {
                        name: "Butyric Acid",
                        color: "Bright Gold",
                    },
                    isovalericAcid: {
                        name: "Isovaleric Acid",
                        color: "Apple Lime Cocktail",
                    },
                    citricAcid: {
                        name: "Citric Acid",
                        color: "New Lime",
                    },
                    malicAcid: {
                        name: "Malic Acid",
                        color: "Yew Green",
                    },
                },
            },
            alcoholFermented: {
                name: "Alcohol/Fermented",
                color: "Lichen Green",
                descriptors: {
                    winey: {
                        name: "Winey",
                        color: "Magenta",
                    },
                    whiskey: {
                        name: "Whiskey",
                        color: "Rhubarb",
                    },
                    fermented: {
                        name: "Fermented",
                        color: "Yellow Oxide",
                    },
                    overRipe: {
                        name: "Overripe",
                        color: "Toasted Marshmallow",
                    },

                }
            }
        },
    },
    greenVegetative: {
        name: "Green Vegetative",
        color: "Amazon Moss",
        subFlavours: {
            greenVegetative_1: {
                name: "Green Vegetative",
                color: "Spring Grass",
                descriptors: {
                    underRipe: {
                        name: "Under Ripe",
                        color: "Douglas Fir",
                    },
                    peaPod: {
                        name: "Pea Pod",
                        color: "Sullivan Green",
                    },
                    fresh: {
                        name: "Fresh",
                        color: "Leprechaun",
                    },
                    darkGreen: {
                        name: "Dark Green",
                        color: "Irish Clover",
                    },
                    vegetative: {
                        name: "Vegetative",
                        color: "Kelly Green",
                    },
                    hayLike: {
                        name: "Hay-Like",
                        color: "Huntington Green",
                    },
                    herbLike: {
                        name: "Herb-Like",
                        color: "Lucky Charm Green",
                    },
                },
                oliveOil: {
                    name: "Olive Oil",
                    color: "Sweet Pea",
                },
                raw: {
                    name: "Raw",
                    color: "Avocado",
                },
                beany: {
                    name: "Beany",
                    color: "Alpine Trail",
                },
            },
        },
    },
    other: {
        name: "Other",
        color: "Dream I Can Fly",
        subFlavours: {
            chemical: {
                name: "Chemical",
                color: "Burbank Blue",
                descriptors: {
                    rubber: {
                        name: "Rubber",
                        color: "Black",
                    },
                    skunky: {
                        name: "Skunky",
                        color: "Nocturnal Gray",
                    },
                    petroleum: {
                        name: "Petroleum",
                        color: "Blue Spruce",
                    },
                    medicinal: {
                        name: "Medicinal",
                        color: "Niagara Falls",
                    },
                    salty: {
                        name: "Salty",
                        color: "White Satin",
                    },
                    bitter: {
                        name: "Bitter",
                        color: "Mill Spings Blue",
                    },

                },
            },
            paperMusty: {
                name: "Paper / Musty",
                color: "Little Falls",
                descriptors: {
                    phenolic: {
                        name: "Phenolic",
                        color: "Milano Red",
                    },
                    meatyBrothy: {
                        name: "Meaty Brothy",
                        color: "Golden Gate"
                    },
                    animalic: {
                        name: "Animalic",
                        color: "Cole Stone",
                    },
                    mustyEarthy: {
                        name: "Musty Earthy",
                        color: "G.I. Green",
                    },
                    mustyDusty: {
                        name: "Musty Dusty",
                        color: "Timothy Straw",
                    },
                    moldyDamp: {
                        name: "Moldy Damp",
                        color: "Fraser Fir",
                    },
                    woody: {
                        name: "Woody",
                        color: "Burnt Cinnamon",
                    },
                    papery: {
                        name: "Papery",
                        color: "Chantilly Lace",
                    },
                    cardboard: {
                        name: "Cardboard",
                        color: "Parrot Green",
                    },
                    stale: {
                        name: "Stale",
                        color: "Whale Gray",
                    },
                },
            },

        },
    },
    roasted: {
        name: "Roasted",
        color: "Tomato Tango",
        subFlavours: {
            pipeTobacco: {
                name: "Pipe Tobacco",
                color: "Camel Back",
            },
            tobacco: {
                name: "Tobacco",
                color: "Wythe Gold",
            },
            burnt: {
                name: "Burnt",
                color: "Cappuccino Muffin",
                descriptors: {
                    acrid: {
                        name: "Acrid",
                        color: "Jalapeno Pepper",
                    },
                    ashy: {
                        name: "Ashy",
                        color: "Gray Pinstripe",
                    },
                    smoky: {
                        name: "Smoky",
                        color: "Coppertone",
                    },
                    brownRoast: {
                        name: "Brown Roast",
                        color: "Warmed Cognac",
                    },

                },
            },
            cereal: {
                name: "Cereal",
                color: "Yellowstone",
                descriptors: {
                    grain: {
                        name: "Grain",
                        color: "Tuscany",
                    },
                    malt: {
                        name: "Malt",
                        color: "Nordic Salmon"
                    },
                },
            },
        },
    },
    spices: {
        name: "Spices",
        color: "Candy Cane Red",
        subFlavours: {
            brownSpice: {
                name: "Brown Spice",
                color: "Travers Red",
                descriptors: {
                    clove: {
                        name: "Clove",
                        color: "Toasted Pecan",
                    },
                    cinnamon: {
                        name: "Cinnamon",
                        color: "Orange Burst",
                    },
                    nutmeg: {
                        name: "Nutmeg",
                        color: "Caliente",
                    },
                    anise: {
                        name: "Anise",
                        color: "Dash of Curry",
                    },
                },
            },
            pepper: {
                name: "Pepper",
                color: "Tricycle Red",
            },
            pungent: {
                name: "Pungent",
                color: "Carter Plum",
            },
        },
    },
    nuttyCocoa: {
        name: "Nutty/Cocoa",
        color: "Amaretto",
        subFlavours: {
            cocoa: {
                name: "Cocoa",
                color: "Masada",
                descriptors: {
                    darkChocolate: {
                        name: "Dark Chocolate",
                        color: "Wenge",
                    },
                    chocolate: {
                        name: "Chocolate",
                        color: "Cottage Red",
                    },
                },
            },
            nutty: {
                name: "Nutty",
                color: "Mexican Tile",
                descriptors: {
                    almond: {
                        name: "Almond",
                        color: "Grazing Fawn",
                    },
                    hazelnut: {
                        name: "Hazelnut",
                        color: "Tea",
                    },
                    peanuts: {
                        name: "Peanuts",
                        color: "Eve Green",
                    },
                },
            },
        },
    },
}