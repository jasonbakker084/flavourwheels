package com.teamflavour.flavourwheels.springsecurity;


import com.teamflavour.flavourwheels.model.*;
import com.teamflavour.flavourwheels.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Component
public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {

    private boolean alreadySetup = false;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PrivilegeRepository privilegeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private FlavorCoffeeRepository flavorCoffeeRepository;

    @Autowired
    private FlavorWineRepository flavorWineRepository;

    @Autowired
    private FlavorWhiskeyRepository flavorWhiskeyRepository;

    @Autowired
    private FlavorTeaRepository flavorTeaRepository;

    @Autowired
    private FlavorBeerRepository flavorBeerRepository;

    // API

    @Override
    @Transactional
    public void onApplicationEvent(final ContextRefreshedEvent event) {
        if (alreadySetup) {
            return;
        }

        // == create initial privileges
        final Privilege readPrivilege = createPrivilegeIfNotFound("READ_PRIVILEGE");
        final Privilege writePrivilege = createPrivilegeIfNotFound("WRITE_PRIVILEGE");
        final Privilege passwordPrivilege = createPrivilegeIfNotFound("CHANGE_PASSWORD_PRIVILEGE");

        // == create initial roles
        final List<Privilege> adminPrivileges = new ArrayList<Privilege>(Arrays.asList(readPrivilege, writePrivilege, passwordPrivilege));
        final List<Privilege> userPrivileges = new ArrayList<Privilege>(Arrays.asList(readPrivilege, passwordPrivilege));
        final Role adminRole = createRole("ROLE_ADMIN", adminPrivileges);
        final Role userRole = createRole("ROLE_USER", userPrivileges);
        //createRoleIfNotFound("ROLE_USER", userPrivileges);

        // == create initial user
        createUserIfNotFound("admin@gmail.com", "Admin", "Admin", "AdminKoffie", new ArrayList<Role>(Arrays.asList(adminRole)));
//        createUserIfNotFound("testuser@testuser.com", "Test", "User", "test", new ArrayList<Role>(Arrays.asList(userRole)));
        alreadySetup = true;

        createFlavorsCoffeeIfNotFound();
        createFlavorsWineIfNotFound();
        createFlavorsWhiskeyIfNotFound();
        createFlavorsTeaIfNotFound();
        createFlavorsBeerIfNotFound();

    }

    private void createFlavorsCoffeeIfNotFound() {
        addFlavorCoffeeIfNotFound("Empty", "#111111", 0, 0);
        addFlavorCoffeeIfNotFound("Fruity", "#DA1D23", 1, 0);
        addFlavorCoffeeIfNotFound("Sour/Fermented", "#EAB40C", 2, 0);
        addFlavorCoffeeIfNotFound("Green/vegetative", "#197A2F", 3, 0);
        addFlavorCoffeeIfNotFound("Other", "#0AA3B5", 4, 0);
        addFlavorCoffeeIfNotFound("Roasted", "#C94930", 5, 0);
        addFlavorCoffeeIfNotFound("Spices", "#AE203E", 6, 0);
        addFlavorCoffeeIfNotFound("Nutty/Cocoa", "#A97B64", 7, 0);
        addFlavorCoffeeIfNotFound("Sweet", "#E55831", 8, 0);
        addFlavorCoffeeIfNotFound("Floral", "#DB0D69", 9, 0);
        addFlavorCoffeeIfNotFound("Berry", "#DD4C51", 101, 1);
        addFlavorCoffeeIfNotFound("Dried fruit", "#C94A44", 102, 1);
        addFlavorCoffeeIfNotFound("Other Fruit", "#F2684C", 103, 1);
        addFlavorCoffeeIfNotFound("Citrus Fruit", "#F7A129", 104, 1);
        addFlavorCoffeeIfNotFound("Sour", "#E1C315", 105, 2);
        addFlavorCoffeeIfNotFound("Alcohol/Fermented", "#B09733", 106, 2);
        addFlavorCoffeeIfNotFound("Olive oil", "#A2B028", 107, 3);
        addFlavorCoffeeIfNotFound("Raw", "#708933", 108, 3);
        addFlavorCoffeeIfNotFound("Green vegetative", "#3AA255", 109, 3);
        addFlavorCoffeeIfNotFound("Beany", "#5E9A80", 110, 3);
        addFlavorCoffeeIfNotFound("Papery/Musty", "#9DB2B7", 111, 4);
        addFlavorCoffeeIfNotFound("Chemical", "#76C0CB", 112, 4);
        addFlavorCoffeeIfNotFound("Pipe tobacco", "#CAA465", 113, 5);
        addFlavorCoffeeIfNotFound("Tobacco", "#DFBD7E", 114, 5);
        addFlavorCoffeeIfNotFound("Burnt", "#BE8663", 115, 5);
        addFlavorCoffeeIfNotFound("Cereal", "#DDAF61", 116, 5);
        addFlavorCoffeeIfNotFound("Pungent", "#794652", 117, 6);
        addFlavorCoffeeIfNotFound("Pepper", "#CC3C42", 118, 6);
        addFlavorCoffeeIfNotFound("Brown Spice", "#B14D57", 119, 6);
        addFlavorCoffeeIfNotFound("Nutty", "#C78869", 120, 7);
        addFlavorCoffeeIfNotFound("Cocoa", "#BB764C", 121, 7);
        addFlavorCoffeeIfNotFound("Brown Sugar", "#D45A59", 122, 8);
        addFlavorCoffeeIfNotFound("Vanilla", "#F89A80", 123, 8);
        addFlavorCoffeeIfNotFound("Vanillin", "#F37674", 124, 8);
        addFlavorCoffeeIfNotFound("Overall Sweet", "#E75B68", 125, 8);
        addFlavorCoffeeIfNotFound("Sweet Aromatics", "#D0545F", 126, 8);
        addFlavorCoffeeIfNotFound("Black Tea", "#975E6D", 127, 9);
        addFlavorCoffeeIfNotFound("Floral", "#E0719C", 128, 9);
        addFlavorCoffeeIfNotFound("Blackberry", "#3E0317", 1001, 101);
        addFlavorCoffeeIfNotFound("Raspberry", "#E52968", 1002, 101);
        addFlavorCoffeeIfNotFound("Blueberry", "#6469B0", 1003, 101);
        addFlavorCoffeeIfNotFound("Strawberry", "#EF2D36", 1004, 101);
        addFlavorCoffeeIfNotFound("Raisin", "#B53B54", 1005, 102);
        addFlavorCoffeeIfNotFound("Prune", "#A5446F", 1006, 102);
        addFlavorCoffeeIfNotFound("Coconut", "#D07C36", 1007, 103);
        addFlavorCoffeeIfNotFound("Cherry", "#E73451", 1008, 103);
        addFlavorCoffeeIfNotFound("Pomegranate", "#E65656", 1009, 103);
        addFlavorCoffeeIfNotFound("Pineapple", "#F89A1C", 1010, 103);
        addFlavorCoffeeIfNotFound("Grape", "#AEB92C", 1011, 103);
        addFlavorCoffeeIfNotFound("Apple", "#4EB947", 1012, 103);
        addFlavorCoffeeIfNotFound("Peach", "#F68A5C", 1013, 103);
        addFlavorCoffeeIfNotFound("Pear", "#BAA635", 1014, 103);
        addFlavorCoffeeIfNotFound("Grapefruit", "#F26355", 1015, 104);
        addFlavorCoffeeIfNotFound("Orange", "#E2631E", 1016, 104);
        addFlavorCoffeeIfNotFound("Lemon", "#FDE402", 1017, 104);
        addFlavorCoffeeIfNotFound("Lime", "#7EB138", 1018, 104);
        addFlavorCoffeeIfNotFound("Sour Aromatics", "#9EA718", 1019, 105);
        addFlavorCoffeeIfNotFound("Acetic Acid", "#94A770", 1020, 105);
        addFlavorCoffeeIfNotFound("Butyric Acid", "#D0B34F", 1021, 105);
        addFlavorCoffeeIfNotFound("Isovaleric Acid", "#8EB646", 1022, 105);
        addFlavorCoffeeIfNotFound("Citric Acid", "#FAEF08", 1023, 105);
        addFlavorCoffeeIfNotFound("Malic Acid", "#C1BA09", 1024, 105);
        addFlavorCoffeeIfNotFound("Winey", "#8F1B53", 1025, 106);
        addFlavorCoffeeIfNotFound("Whiskey", "#B34039", 1026, 106);
        addFlavorCoffeeIfNotFound("Fermented", "#BA9232", 1027, 106);
        addFlavorCoffeeIfNotFound("Overripe", "#8B6439", 1028, 106);
        addFlavorCoffeeIfNotFound("Under-ripe", "#A2BC2B", 1029, 109);
        addFlavorCoffeeIfNotFound("Peapod", "#62AA3C", 1030, 109);
        addFlavorCoffeeIfNotFound("Fresh", "#03A653", 1031, 109);
        addFlavorCoffeeIfNotFound("Dark green", "#048549", 1032, 109);
        addFlavorCoffeeIfNotFound("Vegetative", "#27B44B", 1033, 109);
        addFlavorCoffeeIfNotFound("Hay-like", "#A3A830", 1034, 109);
        addFlavorCoffeeIfNotFound("Herb-like", "#7AC141", 1035, 109);
        addFlavorCoffeeIfNotFound("Stale", "#8B8C90", 1036, 111);
        addFlavorCoffeeIfNotFound("Cardboard", "#BDB175", 1037, 111);
        addFlavorCoffeeIfNotFound("Papery", "#FEFEF4", 1038, 111);
        addFlavorCoffeeIfNotFound("Woody", "#744F02", 1039, 111);
        addFlavorCoffeeIfNotFound("Moldy/Damp", "#A3A36F", 1040, 111);
        addFlavorCoffeeIfNotFound("Musty/Dusty", "#C9B583", 1041, 111);
        addFlavorCoffeeIfNotFound("Musty/Earthy", "#988847", 1042, 111);
        addFlavorCoffeeIfNotFound("Animalic", "#9D977F", 1043, 111);
        addFlavorCoffeeIfNotFound("Meaty/Brothy", "#CC7B6A", 1044, 111);
        addFlavorCoffeeIfNotFound("Phenolic", "#DB646A", 1045, 111);
        addFlavorCoffeeIfNotFound("Bitter", "#80A89D", 1046, 112);
        addFlavorCoffeeIfNotFound("Salty", "#DEF2FD", 1047, 112);
        addFlavorCoffeeIfNotFound("Medicinal", "#7A9BAE", 1048, 112);
        addFlavorCoffeeIfNotFound("Petroleum", "#039FB8", 1049, 112);
        addFlavorCoffeeIfNotFound("Skunky", "#5E777B", 1050, 112);
        addFlavorCoffeeIfNotFound("Rubber", "#120C0C", 1051, 112);
        addFlavorCoffeeIfNotFound("Acrid", "#B9A449", 1052, 115);
        addFlavorCoffeeIfNotFound("Ashy", "#899893", 1053, 115);
        addFlavorCoffeeIfNotFound("Smoky", "#A1743B", 1054, 115);
        addFlavorCoffeeIfNotFound("Brown. Roast", "#894810", 1055, 115);
        addFlavorCoffeeIfNotFound("Grain", "#B7906F", 1056, 116);
        addFlavorCoffeeIfNotFound("Malt", "#EB9D5E", 1057, 116);
        addFlavorCoffeeIfNotFound("Anise", "#C78935", 1058, 119);
        addFlavorCoffeeIfNotFound("Nutmeg", "#8C292C", 1059, 119);
        addFlavorCoffeeIfNotFound("Cinnamon", "#E5762E", 1060, 119);
        addFlavorCoffeeIfNotFound("Clove", "#A16C5A", 1061, 119);
        addFlavorCoffeeIfNotFound("Peanuts", "#D4AD13", 1062, 120);
        addFlavorCoffeeIfNotFound("Hazelnut", "#9D5433", 1063, 120);
        addFlavorCoffeeIfNotFound("Almond", "#C89F83", 1064, 120);
        addFlavorCoffeeIfNotFound("Chocolate", "#692A19", 1065, 121);
        addFlavorCoffeeIfNotFound("Dark chocolate", "#470603", 1066, 121);
        addFlavorCoffeeIfNotFound("Molasses", "#310C0F", 1067, 122);
        addFlavorCoffeeIfNotFound("Maple syrup", "#AE341F", 1068, 122);
        addFlavorCoffeeIfNotFound("Caramelized", "#D78823", 1069, 122);
        addFlavorCoffeeIfNotFound("Honey", "#DA5C1F", 1070, 122);
        addFlavorCoffeeIfNotFound("Chamomile", "#F7F1BD", 1071, 128);
        addFlavorCoffeeIfNotFound("Rose", "#EF5A78", 1072, 128);
        addFlavorCoffeeIfNotFound("Jasmine", "#F99E1B", 1073, 128);
    }

    private void createFlavorsWineIfNotFound() {
        addFlavorWineIfNotFound("Primary Aromas", "#C6D0E3", 10, 0);
        addFlavorWineIfNotFound("Flower", "#555CA6", 129, 10);
        addFlavorWineIfNotFound("Iris", "#ACB0D8", 1074, 129);
        addFlavorWineIfNotFound("Peony", "#ACB0D8", 1075, 129);
        addFlavorWineIfNotFound("Elderflower", "#ACB0D8", 1076, 129);
        addFlavorWineIfNotFound("Acacai", "#ACB0D8", 1077, 129);
        addFlavorWineIfNotFound("Jasmine", "#ACB0D8", 1078, 129);
        addFlavorWineIfNotFound("Honeysuckle", "#ACB0D8", 1079, 129);
        addFlavorWineIfNotFound("Voilet", "#ACB0D8", 1080, 129);
        addFlavorWineIfNotFound("Lavender", "#ACB0D8", 1081, 129);
        addFlavorWineIfNotFound("Rose", "#ACB0D8", 1082, 129);
        addFlavorWineIfNotFound("Potpourri", "#ACB0D8", 1083, 129);
        addFlavorWineIfNotFound("Hibiscus", "#ACB0D8", 1084, 129);
        addFlavorWineIfNotFound("Citrus", "#72B635", 130, 10);
        addFlavorWineIfNotFound("Lime", "#C4DFA3", 1085, 130);
        addFlavorWineIfNotFound("Lemon", "#C4DFA3", 1086, 130);
        addFlavorWineIfNotFound("Grapefruit", "#C4DFA3", 1087, 130);
        addFlavorWineIfNotFound("Orange", "#C4DFA3", 1088, 130);
        addFlavorWineIfNotFound("Marmalade", "#C4DFA3", 1089, 130);
        addFlavorWineIfNotFound("Tree Fruit", "#E99243", 131, 10);
        addFlavorWineIfNotFound("Quince", "#FAD1A6", 1090, 131);
        addFlavorWineIfNotFound("Apple", "#FAD1A6", 1091, 131);
        addFlavorWineIfNotFound("Pear", "#FAD1A6", 1092, 131);
        addFlavorWineIfNotFound("Nectarine", "#FAD1A6", 1093, 131);
        addFlavorWineIfNotFound("Peach", "#FAD1A6", 1094, 131);
        addFlavorWineIfNotFound("Apricote", "#FAD1A6", 1095, 131);
        addFlavorWineIfNotFound("Persimmon", "#FAD1A6", 1096, 131);
        addFlavorWineIfNotFound("Tropical Fruit", "#EB4423", 132, 10);
        addFlavorWineIfNotFound("Pineapple", "#F6AC8C", 1097, 132);
        addFlavorWineIfNotFound("Mango", "#F6AC8C", 1098, 132);
        addFlavorWineIfNotFound("Guava", "#F6AC8C", 1099, 132);
        addFlavorWineIfNotFound("Kiwi", "#F6AC8C", 1100, 132);
        addFlavorWineIfNotFound("Lychee", "#F6AC8C", 1101, 132);
        addFlavorWineIfNotFound("Bubblegum", "#F6AC8C", 1102, 132);
        addFlavorWineIfNotFound("Primary Aromas", "#C6D0E3", 10, 0);
        addFlavorWineIfNotFound("Red Fruit", "#B20E1F", 133, 10);
        addFlavorWineIfNotFound("Cranberry", "#DF947E", 1103, 133);
        addFlavorWineIfNotFound("Red Plum", "#DF947E", 1104, 133);
        addFlavorWineIfNotFound("Pomegranate", "#DF947E", 1105, 133);
        addFlavorWineIfNotFound("Sour Cherry", "#DF947E", 1106, 133);
        addFlavorWineIfNotFound("Strawberry", "#DF947E", 1107, 133);
        addFlavorWineIfNotFound("Cherry", "#DF947E", 1108, 133);
        addFlavorWineIfNotFound("Raspberry", "#DF947E", 1109, 133);
        addFlavorWineIfNotFound("Black Fruit", "#7E0E2A", 134, 10);
        addFlavorWineIfNotFound("Boysenberry", "#E59596", 1110, 134);
        addFlavorWineIfNotFound("Black Currant", "#E59596", 1111, 134);
        addFlavorWineIfNotFound("Black Cherry", "#E59596", 1112, 134);
        addFlavorWineIfNotFound("Plum", "#E59596", 1113, 134);
        addFlavorWineIfNotFound("Blackberry", "#E59596", 1114, 134);
        addFlavorWineIfNotFound("Olive", "#E59596", 1115, 134);
        addFlavorWineIfNotFound("Dried Fruit", "#B34C7E", 135, 10);
        addFlavorWineIfNotFound("Raisin", "#E3AFC6", 1116, 135);
        addFlavorWineIfNotFound("Fig", "#E3AFC6", 1117, 135);
        addFlavorWineIfNotFound("Date", "#E3AFC6", 1118, 135);
        addFlavorWineIfNotFound("Fruitcake", "#E3AFC6", 1119, 135);
        addFlavorWineIfNotFound("Noble Rot", "#3185C8", 136, 10);
        addFlavorWineIfNotFound("Beeswax", "#A7C5E8", 1120, 136);
        addFlavorWineIfNotFound("Ginger", "#A7C5E8", 1121, 136);
        addFlavorWineIfNotFound("Saffron", "#A7C5E8", 1122, 136);
        addFlavorWineIfNotFound("Spice", "#19AEA0", 137, 10);
        addFlavorWineIfNotFound("White Pepper", "#B8E1DF", 1123, 137);
        addFlavorWineIfNotFound("Red Pepper", "#B8E1DF", 1124, 137);
        addFlavorWineIfNotFound("Black Pepper", "#B8E1DF", 1125, 137);
        addFlavorWineIfNotFound("Cinnamon", "#B8E1DF", 1126, 137);
        addFlavorWineIfNotFound("Anice", "#B8E1DF", 1127, 137);
        addFlavorWineIfNotFound("Asian 5-Spice", "#B8E1DF", 1128, 137);
        addFlavorWineIfNotFound("Fennel", "#B8E1DF", 1129, 137);
        addFlavorWineIfNotFound("Eucalyptus", "#B8E1DF", 1130, 137);
        addFlavorWineIfNotFound("Mint", "#B8E1DF", 1131, 137);
        addFlavorWineIfNotFound("Thyme", "#B8E1DF", 1132, 137);
        addFlavorWineIfNotFound("Secondary", "#A3B4CA", 11, 0);
        addFlavorWineIfNotFound("Vegetable", "#218538", 138, 10);
        addFlavorWineIfNotFound("Grass", "#BFDFB6", 1133, 138);
        addFlavorWineIfNotFound("Tomato Leaf", "#BFDFB6", 1134, 138);
        addFlavorWineIfNotFound("Bell Pepper", "#BFDFB6", 1135, 138);
        addFlavorWineIfNotFound("Jalapeno", "#BFDFB6", 1136, 138);
        addFlavorWineIfNotFound("Green Almond", "#BFDFB6", 1137, 138);
        addFlavorWineIfNotFound("Tomato", "#BFDFB6", 1140, 138);
        addFlavorWineIfNotFound("Sun dried Tom", "#BFDFB6", 1139, 138);
        addFlavorWineIfNotFound("Gooseberry", "#BFDFB6", 1138, 138);
        addFlavorWineIfNotFound("Black Tea", "#BFDFB6", 1141, 138);
        addFlavorWineIfNotFound("Tertiary", "#C6D0E3", 12, 0);
        addFlavorWineIfNotFound("Earth", "#679833", 139, 1);
        addFlavorWineIfNotFound("Clay Pot", "#D1E7AE", 1142, 20);
        addFlavorWineIfNotFound("Red Beet", "#D1E7AE", 1143, 20);
        addFlavorWineIfNotFound("Volcanic Rocks", "#D1E7AE", 1144, 20);
        addFlavorWineIfNotFound("Petroleum", "#D1E7AE", 1145, 20);
        addFlavorWineIfNotFound("Slate", "#D1E7AE", 1146, 20);
        addFlavorWineIfNotFound("Wet Gravel", "#D1E7AE", 1147, 20);
        addFlavorWineIfNotFound("Potting Soil", "#D1E7AE", 1148, 20);
        addFlavorWineIfNotFound("Faults", "#E55831", 13, 0);
        addFlavorWineIfNotFound("Microbial", "#B3B326", 140, 11);
        addFlavorWineIfNotFound("Butter", "#E9EAA3", 1149, 21);
        addFlavorWineIfNotFound("Cream", "#E9EAA3", 1150, 21);
        addFlavorWineIfNotFound("Sourdough", "#E9EAA3", 1151, 21);
        addFlavorWineIfNotFound("Lager", "#E9EAA3", 1152, 21);
        addFlavorWineIfNotFound("Truffle", "#E9EAA3", 1153, 21);
        addFlavorWineIfNotFound("Mushroom", "#E9EAA3", 1154, 21);
        addFlavorWineIfNotFound("Oak Aging", "#B08022", 141, 121);
        addFlavorWineIfNotFound("Vanilla", "#E1C892", 1155, 141);
        addFlavorWineIfNotFound("Coconut", "#E1C892", 1156, 141);
        addFlavorWineIfNotFound("Baking Spices", "#E1C892", 1157, 141);
        addFlavorWineIfNotFound("Cigar Box", "#E1C892", 1158, 141);
        addFlavorWineIfNotFound("Smoke", "#E1C892", 1159, 141);
        addFlavorWineIfNotFound("Dill", "#E1C892", 1160, 141);
        addFlavorWineIfNotFound("General Aging", "#D37228", 142, 12);
        addFlavorWineIfNotFound("Dried Fruit", "#F1C192", 1161, 142);
        addFlavorWineIfNotFound("Nuts", "#F1C192", 1162, 142);
        addFlavorWineIfNotFound("Tobacco", "#F1C192", 1163, 142);
        addFlavorWineIfNotFound("Coffee", "#F1C192", 1164, 142);
        addFlavorWineIfNotFound("Cocoa", "#F1C192", 1165, 142);
        addFlavorWineIfNotFound("Leather", "#F1C192", 1166, 142);
        addFlavorWineIfNotFound("TCA (Corked)", "#B36D5F", 143, 13);
        addFlavorWineIfNotFound("Musty Cardboard", "#E4BDB1", 1167, 143);
        addFlavorWineIfNotFound("Wet Dog", "#E4BDB1", 1168, 143);
        addFlavorWineIfNotFound("Sulfid & Mercaptans", "#BA5B33", 144, 13);
        addFlavorWineIfNotFound("Cured Meat", "#E6B396", 1169, 144);
        addFlavorWineIfNotFound("Boiled Eggs", "#E6B396", 1170, 144);
        addFlavorWineIfNotFound("Burnt Rubber", "#E6B396", 1171, 144);
        addFlavorWineIfNotFound("Match Box", "#E6B396", 1172, 144);
        addFlavorWineIfNotFound("Garlic", "#E6B396", 1173, 144);
        addFlavorWineIfNotFound("Onion", "#E6B396", 1174, 144);
        addFlavorWineIfNotFound("Cat Pee", "#E6B396", 1175, 144);
        addFlavorWineIfNotFound("Brettanomyces", "#A5383D", 145, 13);
        addFlavorWineIfNotFound("Black Cardamon", "#DEA39B", 1176, 145);
        addFlavorWineIfNotFound("Band-Aid", "#DEA39B", 1177, 145);
        addFlavorWineIfNotFound("Sweaty Leather Saddle", "#DEA39B", 1178, 145);
        addFlavorWineIfNotFound("Horse Manure", "#DEA39B", 1179, 145);
        addFlavorWineIfNotFound("Cooked", "#A81D64", 146, 13);
        addFlavorWineIfNotFound("Stewed Fruit", "#D798AF", 1180, 146);
        addFlavorWineIfNotFound("Toffee", "#D798AF", 1181, 146);
        addFlavorWineIfNotFound("Volatile Acidity", "#87338C", 147, 13);
        addFlavorWineIfNotFound("Balsamic", "#C99EC7", 1182, 147);
        addFlavorWineIfNotFound("Vinegar", "#C99EC7", 1183, 147);
    }

    private void createFlavorsWhiskeyIfNotFound() {
        addFlavorWhiskeyIfNotFound("Cereal", "#DCAD06", 14, 0);
        addFlavorWhiskeyIfNotFound("Cooked Mash", "#EED47B", 148, 14);
        addFlavorWhiskeyIfNotFound("Porridge", "#F5E5AE", 1184, 148);
        addFlavorWhiskeyIfNotFound("Draff", "#F5E5AE", 1185, 148);
        addFlavorWhiskeyIfNotFound("Weetabix", "#F5E5AE", 1186, 148);
        addFlavorWhiskeyIfNotFound("Cooked Maize", "#F5E5AE", 1187, 148);
        addFlavorWhiskeyIfNotFound("Hen's Mash", "#F5E5AE", 1188, 148);
        addFlavorWhiskeyIfNotFound("Cooked Veg", "#EED47B", 149, 14);
        addFlavorWhiskeyIfNotFound("Mashed Potato", "#F5E5AE", 1189, 149);
        addFlavorWhiskeyIfNotFound("Potato Scones", "#F5E5AE", 1190, 149);
        addFlavorWhiskeyIfNotFound("Sweetcorn", "#F5E5AE", 1191, 149);
        addFlavorWhiskeyIfNotFound("Cooked Swede", "#F5E5AE", 1192, 149);
        addFlavorWhiskeyIfNotFound("Malt Extract", "#EED47B", 150, 14);
        addFlavorWhiskeyIfNotFound("Malted Milk", "#F5E5AE", 1193, 150);
        addFlavorWhiskeyIfNotFound("Horlicks", "#F5E5AE", 1194, 150);
        addFlavorWhiskeyIfNotFound("Marmite", "#F5E5AE", 1195, 150);
        addFlavorWhiskeyIfNotFound("Bran", "#F5E5AE", 1196, 150);
        addFlavorWhiskeyIfNotFound("Cattle", "#F5E5AE", 1197, 150);
        addFlavorWhiskeyIfNotFound("Cake", "#F5E5AE", 1198, 150);
        addFlavorWhiskeyIfNotFound("Husky", "#EED47B", 151, 14);
        addFlavorWhiskeyIfNotFound("Marmalade", "#F5E5AE", 1199, 151);
        addFlavorWhiskeyIfNotFound("Chaff-like", "#F5E5AE", 1200, 151);
        addFlavorWhiskeyIfNotFound("Dried Hops", "#F5E5AE", 1201, 151);
        addFlavorWhiskeyIfNotFound("Mousey", "#F5E5AE", 1202, 151);
        addFlavorWhiskeyIfNotFound("Pot", "#F5E5AE", 1203, 151);
        addFlavorWhiskeyIfNotFound("Ale", "#F5E5AE", 1204, 151);
        addFlavorWhiskeyIfNotFound("Iron Tonic", "#F5E5AE", 1205, 151);
        addFlavorWhiskeyIfNotFound("Yeasty", "#EED47B", 152, 14);
        addFlavorWhiskeyIfNotFound("Boiled Pork", "#F5E5AE", 1206, 152);
        addFlavorWhiskeyIfNotFound("Pork Sausages", "#F5E5AE", 1207, 152);
        addFlavorWhiskeyIfNotFound("Meaty", "#F5E5AE", 1208, 152);
        addFlavorWhiskeyIfNotFound("Gravy", "#F5E5AE", 1209, 152);
        addFlavorWhiskeyIfNotFound("Gralloch", "#F5E5AE", 1210, 152);
        addFlavorWhiskeyIfNotFound("Fruity", "#DC7510", 15, 0);
        addFlavorWhiskeyIfNotFound("Citric", "#F4B674", 153, 15);
        addFlavorWhiskeyIfNotFound("Oranges", "#F8D5A7", 1211, 153);
        addFlavorWhiskeyIfNotFound("Tangerine", "#F8D5A7", 1212, 153);
        addFlavorWhiskeyIfNotFound("Zest", "#F8D5A7", 1213, 153);
        addFlavorWhiskeyIfNotFound("Kiwi", "#F8D5A7", 1214, 153);
        addFlavorWhiskeyIfNotFound("Nectarines", "#F8D5A7", 1215, 153);
        addFlavorWhiskeyIfNotFound("Love Hearts", "#F8D5A7", 1216, 153);
        addFlavorWhiskeyIfNotFound("Lemon", "#F8D5A7", 1217, 153);
        addFlavorWhiskeyIfNotFound("Fresh Fruit", "#F4B674", 154, 15);
        addFlavorWhiskeyIfNotFound("Apples", "#F8D5A7", 1218, 154);
        addFlavorWhiskeyIfNotFound("Pears", "#F8D5A7", 1219, 154);
        addFlavorWhiskeyIfNotFound("Pear Drops", "#F8D5A7", 1220, 154);
        addFlavorWhiskeyIfNotFound("Peaches", "#F8D5A7", 1221, 154);
        addFlavorWhiskeyIfNotFound("Apricots", "#F8D5A7", 1222, 154);
        addFlavorWhiskeyIfNotFound("Fruit Salad", "#F8D5A7", 1223, 154);
        addFlavorWhiskeyIfNotFound("Soft Fruit", "#F8D5A7", 1224, 154);
        addFlavorWhiskeyIfNotFound("Cooked Fruit", "#F4B674", 155, 15);
        addFlavorWhiskeyIfNotFound("Stewed Apples", "#F8D5A7", 1225, 155);
        addFlavorWhiskeyIfNotFound("Marmalade", "#F8D5A7", 1226, 155);
        addFlavorWhiskeyIfNotFound("Jam", "#F8D5A7", 1227, 155);
        addFlavorWhiskeyIfNotFound("Barley Sugar", "#F8D5A7", 1228, 155);
        addFlavorWhiskeyIfNotFound("Candied Fruit", "#F8D5A7", 1229, 155);
        addFlavorWhiskeyIfNotFound("Dried Fruit", "#F4B674", 156, 15);
        addFlavorWhiskeyIfNotFound("Rum-Toft", "#F8D5A7", 1230, 156);
        addFlavorWhiskeyIfNotFound("Raisins", "#F8D5A7", 1231, 156);
        addFlavorWhiskeyIfNotFound("Figs", "#F8D5A7", 1232, 156);
        addFlavorWhiskeyIfNotFound("Apricots", "#F8D5A7", 1233, 156);
        addFlavorWhiskeyIfNotFound("Prunes", "#F8D5A7", 1234, 156);
        addFlavorWhiskeyIfNotFound("Mixed Peel", "#F8D5A7", 1235, 156);
        addFlavorWhiskeyIfNotFound("Fruit Cake", "#F8D5A7", 1236, 156);
        addFlavorWhiskeyIfNotFound("Mince Pies", "#F8D5A7", 1237, 156);
        addFlavorWhiskeyIfNotFound("Solvent", "#F4B674", 157, 15);
        addFlavorWhiskeyIfNotFound("Nail Varnish Remover", "#F8D5A7", 1238, 157);
        addFlavorWhiskeyIfNotFound("Bubble Gum", "#F8D5A7", 1239, 157);
        addFlavorWhiskeyIfNotFound("Brylbreem", "#F8D5A7", 1240, 157);
        addFlavorWhiskeyIfNotFound("Ac Drops", "#F8D5A7", 1241, 157);
        addFlavorWhiskeyIfNotFound("Turps", "#F8D5A7", 1242, 157);
        addFlavorWhiskeyIfNotFound("Paint", "#F8D5A7", 1243, 157);
        addFlavorWhiskeyIfNotFound("Floral", "#177768", 16, 0);
        addFlavorWhiskeyIfNotFound("Fragrant", "#87B0A7", 158, 16);
        addFlavorWhiskeyIfNotFound("Perfume", "#B6CEC8", 1244, 158);
        addFlavorWhiskeyIfNotFound("Fabric Softener", "#B6CEC8", 1245, 158);
        addFlavorWhiskeyIfNotFound("Barber's Shop", "#B6CEC8", 1246, 158);
        addFlavorWhiskeyIfNotFound("Carnation", "#B6CEC8", 1247, 158);
        addFlavorWhiskeyIfNotFound("Coconut", "#B6CEC8", 1248, 158);
        addFlavorWhiskeyIfNotFound("Lavender", "#B6CEC8", 1249, 158);
        addFlavorWhiskeyIfNotFound("Tomato", "#B6CEC8", 104, 19);
        addFlavorWhiskeyIfNotFound("Green-House", "#87B0A7", 159, 16);
        addFlavorWhiskeyIfNotFound("Geraniums", "#B6CEC8", 1250, 159);
        addFlavorWhiskeyIfNotFound("Green Tomatoes", "#B6CEC8", 1251, 159);
        addFlavorWhiskeyIfNotFound("Parmaviolets", "#B6CEC8", 1252, 159);
        addFlavorWhiskeyIfNotFound("Florists Shop", "#B6CEC8", 1253, 159);
        addFlavorWhiskeyIfNotFound("Peaty", "#995310", 17, 0);
        addFlavorWhiskeyIfNotFound("Leafy", "#87B0A7", 160, 16);
        addFlavorWhiskeyIfNotFound("Green Leaves", "#B6CEC8", 1254, 160);
        addFlavorWhiskeyIfNotFound("Lawn Clippings", "#B6CEC8", 1255, 160);
        addFlavorWhiskeyIfNotFound("Green Sticks", "#B6CEC8", 1256, 160);
        addFlavorWhiskeyIfNotFound("Pea Pods", "#B6CEC8", 1257, 160);
        addFlavorWhiskeyIfNotFound("Fir Trees", "#B6CEC8", 1258, 160);
        addFlavorWhiskeyIfNotFound("Pine Nuts", "#B6CEC8", 1259, 160);
        addFlavorWhiskeyIfNotFound("Hay-Like", "#87B0A7", 161, 16);
        addFlavorWhiskeyIfNotFound("Mown Hay", "#B6CEC8", 1260, 161);
        addFlavorWhiskeyIfNotFound("Dry Hay", "#B6CEC8", 1261, 161);
        addFlavorWhiskeyIfNotFound("Barns", "#B6CEC8", 1262, 161);
        addFlavorWhiskeyIfNotFound("Heather Flowers", "#B6CEC8", 1263, 161);
        addFlavorWhiskeyIfNotFound("Herbal", "#B6CEC8", 1264, 161);
        addFlavorWhiskeyIfNotFound("Sage", "#B6CEC8", 1265, 161);
        addFlavorWhiskeyIfNotFound("Mulch", "#B6CEC8", 1266, 161);
        addFlavorWhiskeyIfNotFound("Medicinal", "#CD9E69", 162, 17);
        addFlavorWhiskeyIfNotFound("Creosote", "#E1C29A", 1267, 162);
        addFlavorWhiskeyIfNotFound("TCP", "#E1C29A", 1268, 162);
        addFlavorWhiskeyIfNotFound("Iodine", "#E1C29A", 1269, 162);
        addFlavorWhiskeyIfNotFound("Feinty", "#2C4796", 18, 0);
        addFlavorWhiskeyIfNotFound("Carbolic", "#E1C29A", 1270, 162);
        addFlavorWhiskeyIfNotFound("Hospitals", "#E1C29A", 1271, 162);
        addFlavorWhiskeyIfNotFound("Lint", "#E1C29A", 1272, 162);
        addFlavorWhiskeyIfNotFound("Tar", "#E1C29A", 1273, 162);
        addFlavorWhiskeyIfNotFound("Diesel", "#E1C29A", 1274, 162);
        addFlavorWhiskeyIfNotFound("Oil", "#E1C29A", 1275, 162);
        addFlavorWhiskeyIfNotFound("Sea-Weed", "#E1C29A", 12755, 162); // wrong count
        addFlavorWhiskeyIfNotFound("Smokey", "#CD9E69", 163, 17);
        addFlavorWhiskeyIfNotFound("Lapsang Suchong", "#E1C29A", 1276, 163);
        addFlavorWhiskeyIfNotFound("Incense", "#E1C29A", 1277, 163);
        addFlavorWhiskeyIfNotFound("Peat-Reek", "#E1C29A", 1278, 163);
        addFlavorWhiskeyIfNotFound("Bonfires", "#E1C29A", 1279, 163);
        addFlavorWhiskeyIfNotFound("Burnt Sticks", "#E1C29A", 1280, 163);
        addFlavorWhiskeyIfNotFound("Kippery", "#CD9E69", 164, 17);
        addFlavorWhiskeyIfNotFound("Sea-Shells", "#E1C29A", 1281, 164);
        addFlavorWhiskeyIfNotFound("Dried Shellfish", "#E1C29A", 1282, 164);
        addFlavorWhiskeyIfNotFound("Smoked Oysters", "#E1C29A", 1283, 164);
        addFlavorWhiskeyIfNotFound("Smoked Salmon", "#E1C29A", 1284, 164);
        addFlavorWhiskeyIfNotFound("Anchovies", "#E1C29A", 1285, 164);
        addFlavorWhiskeyIfNotFound("Mossy", "#CD9E69", 165, 17);
        addFlavorWhiskeyIfNotFound("Moss Water", "#E1C29A", 1286, 165);
        addFlavorWhiskeyIfNotFound("Birchy Myrtle", "#E1C29A", 1287, 165);
        addFlavorWhiskeyIfNotFound("Earthy", "#E1C29A", 1288, 165);
        addFlavorWhiskeyIfNotFound("Hemp Ropes", "#E1C29A", 1289, 165);
        addFlavorWhiskeyIfNotFound("Fishing Nets", "#E1C29A", 1290, 165);
        addFlavorWhiskeyIfNotFound("Honey", "#8C92C6", 166, 18);
        addFlavorWhiskeyIfNotFound("Polish", "#B8B8DE", 1291, 166);
        addFlavorWhiskeyIfNotFound("Beesway", "#B8B8DE", 1292, 166);
        addFlavorWhiskeyIfNotFound("Mead", "#B8B8DE", 1293, 166);
        addFlavorWhiskeyIfNotFound("Heather Honey", "#B8B8DE", 1294, 166);
        addFlavorWhiskeyIfNotFound("Pouring Honey", "#B8B8DE", 1295, 166);
        addFlavorWhiskeyIfNotFound("Clover Honey", "#B8B8DE", 1296, 166);
        addFlavorWhiskeyIfNotFound("Leathery", "#8C92C6", 167, 18);
        addFlavorWhiskeyIfNotFound("Digestive Biscuits", "#B8B8DE", 1297, 167);
        addFlavorWhiskeyIfNotFound("Mealy", "#B8B8DE", 1298, 167);
        addFlavorWhiskeyIfNotFound("New Cowhide", "#B8B8DE", 1299, 167);
        addFlavorWhiskeyIfNotFound("Libraries", "#B8B8DE", 1300, 167);
        addFlavorWhiskeyIfNotFound("Leather Upholstery", "#B8B8DE", 1301, 167);
        addFlavorWhiskeyIfNotFound("Tobacco", "#8C92C6", 168, 18);
        addFlavorWhiskeyIfNotFound("Tobacco-ash", "#B8B8DE", 1302, 168);
        addFlavorWhiskeyIfNotFound("Green Tobacco", "#B8B8DE", 1303, 168);
        addFlavorWhiskeyIfNotFound("Fresh Tobacco", "#B8B8DE", 1304, 168);
        addFlavorWhiskeyIfNotFound("Tea Pot", "#B8B8DE", 1305, 168);
        addFlavorWhiskeyIfNotFound("Dried Tea", "#B8B8DE", 1306, 168);
        addFlavorWhiskeyIfNotFound("Sweaty", "#8C92C6", 169, 18);
        addFlavorWhiskeyIfNotFound("Shoe-Polish", "#B8B8DE", 1307, 169);
        addFlavorWhiskeyIfNotFound("Old Gym Shoes", "#B8B8DE", 1308, 169);
        addFlavorWhiskeyIfNotFound("Sickly", "#B8B8DE", 1309, 169);
        addFlavorWhiskeyIfNotFound("Yeast", "#B8B8DE", 1310, 169);
        addFlavorWhiskeyIfNotFound("Cheese", "#B8B8DE", 1311, 169);
        addFlavorWhiskeyIfNotFound("Buttermilk", "#B8B8DE", 1312, 169);
        addFlavorWhiskeyIfNotFound("Plastic", "#8C92C6", 170, 18);
        addFlavorWhiskeyIfNotFound("Scorched Plastic", "#B8B8DE", 1313, 170);
        addFlavorWhiskeyIfNotFound("Oilskin", "#B8B8DE", 1314, 170);
        addFlavorWhiskeyIfNotFound("Plactic Rope", "#B8B8DE", 1315, 170);
        addFlavorWhiskeyIfNotFound("Plastic Bucket", "#B8B8DE", 1316, 170);
        addFlavorWhiskeyIfNotFound("Plastic Mac", "#B8B8DE", 1317, 170);
        addFlavorWhiskeyIfNotFound("Sulphury", "#6A6A6A", 19, 0);
        addFlavorWhiskeyIfNotFound("Sandy", "#B4B4B4", 171, 19);
        addFlavorWhiskeyIfNotFound("Element Sulphur", "#D3D3D3", 1318, 171);
        addFlavorWhiskeyIfNotFound("Hot Sand", "#D3D3D3", 1319, 171);
        addFlavorWhiskeyIfNotFound("Sandy Beach", "#D3D3D3", 1320, 171);
        addFlavorWhiskeyIfNotFound("Linen", "#D3D3D3", 1321, 171);
        addFlavorWhiskeyIfNotFound("Starch", "#D3D3D3", 1322, 171);
        addFlavorWhiskeyIfNotFound("Fresh Laundry", "#D3D3D3", 1323, 171);
        addFlavorWhiskeyIfNotFound("Rubbery", "#B4B4B4", 172, 19);
        addFlavorWhiskeyIfNotFound("Burnt Rubber", "#D3D3D3", 1324, 172);
        addFlavorWhiskeyIfNotFound("Electric Cables", "#D3D3D3", 1325, 172);
        addFlavorWhiskeyIfNotFound("Bakelite", "#D3D3D3", 1326, 172);
        addFlavorWhiskeyIfNotFound("New Rubber (Tyres)", "#D3D3D3", 1327, 172);
        addFlavorWhiskeyIfNotFound("Pencil Eraser", "#D3D3D3", 1328, 172);
        addFlavorWhiskeyIfNotFound("Coal-Gas", "#B4B4B4", 173, 19);
        addFlavorWhiskeyIfNotFound("Matchbox", "#D3D3D3", 1329, 173);
        addFlavorWhiskeyIfNotFound("Spent Matches", "#D3D3D3", 1330, 173);
        addFlavorWhiskeyIfNotFound("Spent Fireworks", "#D3D3D3", 1331, 173);
        addFlavorWhiskeyIfNotFound("Cordite", "#D3D3D3", 1332, 173);
        addFlavorWhiskeyIfNotFound("Carbine", "#D3D3D3", 1333, 173);
        addFlavorWhiskeyIfNotFound("Vegitative", "#B4B4B4", 174, 19);
        addFlavorWhiskeyIfNotFound("Marsh Gas", "#D3D3D3", 1334, 174);
        addFlavorWhiskeyIfNotFound("Stagnant", "#D3D3D3", 1335, 174);
        addFlavorWhiskeyIfNotFound("Turnips", "#D3D3D3", 1336, 174);
        addFlavorWhiskeyIfNotFound("Cabbage", "#D3D3D3", 1337, 174);
        addFlavorWhiskeyIfNotFound("Brackish", "#D3D3D3", 1338, 174);
        addFlavorWhiskeyIfNotFound("Woody", "#502E26", 20, 0);
        addFlavorWhiskeyIfNotFound("Toasted", "#9F816A", 175, 20);
        addFlavorWhiskeyIfNotFound("Liquorice", "#C4AE9C", 1339, 175);
        addFlavorWhiskeyIfNotFound("Aniseed", "#C4AE9C", 1340, 175);
        addFlavorWhiskeyIfNotFound("Fennel", "#C4AE9C", 1341, 175);
        addFlavorWhiskeyIfNotFound("Coffee Grounds", "#C4AE9C", 1342, 175);
        addFlavorWhiskeyIfNotFound("Burnt Toast", "#C4AE9C", 1343, 175);
        addFlavorWhiskeyIfNotFound("Rice Pudding", "#C4AE9C", 4344, 175);
        addFlavorWhiskeyIfNotFound("Vanilla", "#9F816A", 176, 20);
        addFlavorWhiskeyIfNotFound("Toffee", "#C4AE9C", 1345, 176);
        addFlavorWhiskeyIfNotFound("Madeira Cake", "#C4AE9C", 1346, 176);
        addFlavorWhiskeyIfNotFound("Sponge", "#C4AE9C", 1347, 176);
        addFlavorWhiskeyIfNotFound("Meringues", "#C4AE9C", 1348, 176);
        addFlavorWhiskeyIfNotFound("Creme Caramel", "#C4AE9C", 1349, 176);
        addFlavorWhiskeyIfNotFound("Custard", "#C4AE9C", 1350, 176);
        addFlavorWhiskeyIfNotFound("Old Wood", "#9F816A", 177, 20);
        addFlavorWhiskeyIfNotFound("Camphor", "#C4AE9C", 1351, 177);
        addFlavorWhiskeyIfNotFound("Metallic", "#C4AE9C", 1352, 177);
        addFlavorWhiskeyIfNotFound("Ink", "#C4AE9C", 1353, 177);
        addFlavorWhiskeyIfNotFound("Cork", "#C4AE9C", 1354, 177);
        addFlavorWhiskeyIfNotFound("Pencils", "#C4AE9C", 1355, 177);
        addFlavorWhiskeyIfNotFound("Cellars", "#C4AE9C", 1356, 177);
        addFlavorWhiskeyIfNotFound("Cork", "#C4AE9C", 1357, 177);
        addFlavorWhiskeyIfNotFound("Pencils", "#C4AE9C", 1358, 177);
        addFlavorWhiskeyIfNotFound("Cellars", "#C4AE9C", 1359, 21778);
        addFlavorWhiskeyIfNotFound("New Wood", "#9F816A", 178, 20);
        addFlavorWhiskeyIfNotFound("Nuttmet", "#C4AE9C", 1360, 178);
        addFlavorWhiskeyIfNotFound("Allspice", "#C4AE9C", 1361, 178);
        addFlavorWhiskeyIfNotFound("Pepper", "#C4AE9C", 1362, 178);
        addFlavorWhiskeyIfNotFound("Ginger", "#C4AE9C", 1363, 178);
        addFlavorWhiskeyIfNotFound("Sandalwood", "#C4AE9C", 1364, 178);
        addFlavorWhiskeyIfNotFound("Cigar Boxes", "#C4AE9C", 1365, 178);
        addFlavorWhiskeyIfNotFound("Resinous", "#C4AE9C", 1366, 178);
        addFlavorWhiskeyIfNotFound("Winey", "#CF1F3F", 21, 0);
        addFlavorWhiskeyIfNotFound("Oily", "#EC958A", 179, 21);
        addFlavorWhiskeyIfNotFound("Almond Oil", "#F4BFB3", 1367, 179);
        addFlavorWhiskeyIfNotFound("Suntan Oil", "#F4BFB3", 1368, 179);
        addFlavorWhiskeyIfNotFound("Candelwax", "#F4BFB3", 1369, 179);
        addFlavorWhiskeyIfNotFound("Linseed Oil", "#F4BFB3", 1370, 179);
        addFlavorWhiskeyIfNotFound("Chocolate", "#EC958A", 180, 21);
        addFlavorWhiskeyIfNotFound("Bitter Chocolate", "#F4BFB3", 1371, 180);
        addFlavorWhiskeyIfNotFound("Cocao", "#F4BFB3", 1372, 180);
        addFlavorWhiskeyIfNotFound("Milk Chocolate", "#F4BFB3", 1373, 180);
        addFlavorWhiskeyIfNotFound("Butter", "#F4BFB3", 1374, 180);
        addFlavorWhiskeyIfNotFound("Cream", "#F4BFB3", 1375, 180);
        addFlavorWhiskeyIfNotFound("Nutty", "#EC958A", 181, 21);
        addFlavorWhiskeyIfNotFound("Marzipan", "#F4BFB3", 1376, 181);
        addFlavorWhiskeyIfNotFound("Almonds", "#F4BFB3", 1377, 181);
        addFlavorWhiskeyIfNotFound("Praline", "#F4BFB3", 1378, 181);
        addFlavorWhiskeyIfNotFound("Hazel nuts", "#F4BFB3", 1379, 181);
        addFlavorWhiskeyIfNotFound("Walnuts", "#F4BFB3", 1380, 181);
        addFlavorWhiskeyIfNotFound("Sherried", "#EC958A", 182, 21);
        addFlavorWhiskeyIfNotFound("Marzipan", "#F4BFB3", 1381, 182);
        addFlavorWhiskeyIfNotFound("Almonds", "#F4BFB3", 1382, 182);
        addFlavorWhiskeyIfNotFound("Praline", "#F4BFB3", 1383, 182);
        addFlavorWhiskeyIfNotFound("Hazel nuts", "#F4BFB3", 1384, 182);
        addFlavorWhiskeyIfNotFound("Walnuts", "#F4BFB3", 1385, 182);
        addFlavorWhiskeyIfNotFound("Hazel nuts", "#F4BFB3", 1386, 182);
        addFlavorWhiskeyIfNotFound("Walnuts", "#F4BFB3", 1387, 182);
    }

    public void createFlavorsTeaIfNotFound() {
        addFlavorTeaIfNotFound("Plants / herbaceous", "#727F39", 22, 0);
        addFlavorTeaIfNotFound("Grass", "#727F39", 183, 22);
        addFlavorTeaIfNotFound("Fresh cut grass", "#727F39", 1388, 183);
        addFlavorTeaIfNotFound("Hay", "#727F39", 1389, 183);
        addFlavorTeaIfNotFound("Bamboo", "#727F39", 1390, 183);
        addFlavorTeaIfNotFound("Vegetables", "#939D61", 184, 22);
        addFlavorTeaIfNotFound("Butternut", "#939D61", 1391, 184);
        addFlavorTeaIfNotFound("Spinach", "#939D61", 1392, 184);
        addFlavorTeaIfNotFound("Bean sprouts", "#939D61", 1393, 184);
        addFlavorTeaIfNotFound("Aspargus", "#939D61", 1394, 184);
        addFlavorTeaIfNotFound("Peas", "#939D61", 1395, 184);
        addFlavorTeaIfNotFound("Alfalfa", "#939D61", 1396, 184);
        addFlavorTeaIfNotFound("Green beans", "#939D61", 1397, 184);
        addFlavorTeaIfNotFound("Herbs", "#727F39", 185, 22);
        addFlavorTeaIfNotFound("Basil", "#727F39", 1398, 185);
        addFlavorTeaIfNotFound("Parsley", "#727F39", 1399, 185);
        addFlavorTeaIfNotFound("Mint", "#727F39", 1400, 185);
        addFlavorTeaIfNotFound("Lavender", "#727F39", 1401, 185);
        addFlavorTeaIfNotFound("Sage", "#727F39", 1402, 185);
        addFlavorTeaIfNotFound("Thyme", "#727F39", 1403, 185);
        addFlavorTeaIfNotFound("Fennel", "#727F39", 1404, 185);
        addFlavorTeaIfNotFound("Floral", "#E2B027", 23, 0);
        addFlavorTeaIfNotFound("Summer meadow", "#E2B027", 186, 23);
        addFlavorTeaIfNotFound("Osmanthus", "#E2B027", 1405, 186);
        addFlavorTeaIfNotFound("Jasmine", "#E2B027", 1406, 186);
        addFlavorTeaIfNotFound("Chrysantemum", "#E2B027", 1407, 186);
        addFlavorTeaIfNotFound("Garden flowers", "#EFD051", 187, 23);
        addFlavorTeaIfNotFound("Rose", "#EFD051", 1408, 187);
        addFlavorTeaIfNotFound("Peony", "#EFD051", 1409, 187);
        addFlavorTeaIfNotFound("Honeysuckle", "#EFD051", 1410, 187);
        addFlavorTeaIfNotFound("Gardenia", "#EFD051", 1411, 187);
        addFlavorTeaIfNotFound("Nutty / milky", "#977334", 24, 0);
        addFlavorTeaIfNotFound("", "#977334", 188, 24);
        addFlavorTeaIfNotFound("Creamy", "#977334", 1412, 188);
        addFlavorTeaIfNotFound("Fresh butter", "#977334", 1413, 188);
        addFlavorTeaIfNotFound("Almond", "#977334", 1414, 188);
        addFlavorTeaIfNotFound("Chestnut", "#977334", 1415, 188);
        addFlavorTeaIfNotFound("Roasted nuts", "#977334", 1416, 188);
        addFlavorTeaIfNotFound("Sweet", "#7A74AC", 25, 0);
        addFlavorTeaIfNotFound("", "#7A74AC", 189, 25);
        addFlavorTeaIfNotFound("Malt", "#7A74AC", 1417, 189);
        addFlavorTeaIfNotFound("Honey/beewax", "#7A74AC", 1418, 189);
        addFlavorTeaIfNotFound("Caramel", "#7A74AC", 1419, 189);
        addFlavorTeaIfNotFound("Syrup", "#7A74AC", 1420, 189);
        addFlavorTeaIfNotFound("Toffee", "#7A74AC", 1421, 189);
        addFlavorTeaIfNotFound("Brown sugar", "#7A74AC", 1422, 189);
        addFlavorTeaIfNotFound("Vanilla", "#7A74AC", 1423, 189);
        addFlavorTeaIfNotFound("Fire / animal", "#AA604A", 26, 0);
        addFlavorTeaIfNotFound("", "#AA604A", 190, 26);
        addFlavorTeaIfNotFound("Stable", "#AA604A", 1424, 190);
        addFlavorTeaIfNotFound("Toast", "#AA604A", 1425, 190);
        addFlavorTeaIfNotFound("Smoke", "#AA604A", 1426, 190);
        addFlavorTeaIfNotFound("Tobacco", "#AA604A", 1427, 190);
        addFlavorTeaIfNotFound("Leather", "#AA604A", 1428, 190);
        addFlavorTeaIfNotFound("Spicy", "#D48E45", 27, 0);
        addFlavorTeaIfNotFound("Hot / cooling", "#D48E45", 191, 27);
        addFlavorTeaIfNotFound("Cinnamon", "#D48E45", 1429, 191);
        addFlavorTeaIfNotFound("Nutmeg", "#D48E45", 1430, 191);
        addFlavorTeaIfNotFound("Pepper", "#D48E45", 1431, 191);
        addFlavorTeaIfNotFound("Clove", "#D48E45", 1432, 191);
        addFlavorTeaIfNotFound("Cardamom", "#D48E45", 1333, 191);
        addFlavorTeaIfNotFound("Licorice", "#D48E45", 1334, 191);
        addFlavorTeaIfNotFound("Star anise", "#D48E45", 1335, 191);
        addFlavorTeaIfNotFound("Ginger", "#D48E45", 1336, 191);
        addFlavorTeaIfNotFound("Fresh / candied fruit", "#8A5372", 28, 0);
        addFlavorTeaIfNotFound("Tropical", "#8A5372", 192, 28);
        addFlavorTeaIfNotFound("Pineapple", "#8A5372", 1337, 192);
        addFlavorTeaIfNotFound("Banana", "#8A5372", 1338, 192);
        addFlavorTeaIfNotFound("Melon", "#8A5372", 1339, 192);
        addFlavorTeaIfNotFound("Mango", "#8A5372", 1340, 192);
        addFlavorTeaIfNotFound("Stone and vine fruit", "#AB849D", 193, 28);
        addFlavorTeaIfNotFound("Apple", "#AB849D", 1341, 193);
        addFlavorTeaIfNotFound("Apricot", "#AB849D", 1342, 193);
        addFlavorTeaIfNotFound("Pear", "#AB849D", 1343, 193);
        addFlavorTeaIfNotFound("Peach", "#AB849D", 1344, 193);
        addFlavorTeaIfNotFound("Grape", "#AB849D", 1345, 193);
        addFlavorTeaIfNotFound("Muscatel", "#AB849D", 1346, 193);
        addFlavorTeaIfNotFound("Citrus", "#8A5372", 194, 28);
        addFlavorTeaIfNotFound("Mandarine", "#8A5372", 1347, 194);
        addFlavorTeaIfNotFound("Orange", "#8A5372", 1348, 194);
        addFlavorTeaIfNotFound("Lemon", "#8A5372", 1349, 194);
        addFlavorTeaIfNotFound("Bergamot", "#8A5372", 1450, 194);
        addFlavorTeaIfNotFound("Lime", "#8A5372", 1451, 194);
        addFlavorTeaIfNotFound("Berry", "#AB849D", 195, 28);
        addFlavorTeaIfNotFound("Blueberry", "#AB849D", 1452, 195);
        addFlavorTeaIfNotFound("Raspberry", "#AB849D", 1453, 195);
        addFlavorTeaIfNotFound("Strawberry", "#AB849D", 144, 195);
        addFlavorTeaIfNotFound("Blackcurrant", "#AB849D", 1455, 195);
        addFlavorTeaIfNotFound("", "#6D99CD", 29, 0);
        addFlavorTeaIfNotFound("Marine", "#6D99CD", 196, 29);
        addFlavorTeaIfNotFound("Seaweed / fish", "#6D99CD", 1456, 196);
        addFlavorTeaIfNotFound("Oyster / shrimps", "#6D99CD", 1457, 196);
        addFlavorTeaIfNotFound("Seasalt", "#6D99CD", 1458, 196);
        addFlavorTeaIfNotFound("", "#878C8D", 30, 0);
        addFlavorTeaIfNotFound("Mineral", "#878C8D", 197, 30);
        addFlavorTeaIfNotFound("Volcanic", "#878C8D", 1459, 197);
        addFlavorTeaIfNotFound("Chalk", "#878C8D", 1460, 197);
        addFlavorTeaIfNotFound("Granite", "#878C8D", 1461, 197);
        addFlavorTeaIfNotFound("Earthy", "#706456", 31, 0);
        addFlavorTeaIfNotFound("Forest", "#706456", 198, 31);
        addFlavorTeaIfNotFound("Forest floor", "#706456", 1462, 198);
        addFlavorTeaIfNotFound("Musty / humus", "#706456", 1463, 198);
        addFlavorTeaIfNotFound("Moss / care", "#706456", 1464, 198);
        addFlavorTeaIfNotFound("Compost", "#706456", 1465, 198);
        addFlavorTeaIfNotFound("Wet leaves", "#706456", 1466, 198);
        addFlavorTeaIfNotFound("Wood", "#8E8477", 199, 31);
        addFlavorTeaIfNotFound("Pine", "#8E8477", 1467, 199);
        addFlavorTeaIfNotFound("Wet wood", "#8E8477", 1468, 199);
        addFlavorTeaIfNotFound("Sawdust", "#8E8477", 1469, 199);
        addFlavorTeaIfNotFound("Cedar", "#8E8477", 1470, 199);
        addFlavorTeaIfNotFound("Oak", "#8E8477", 1471, 199);
        addFlavorTeaIfNotFound("Mahogany", "#8E8477", 1472, 199);
        addFlavorTeaIfNotFound("Eucalypt", "#8E8477", 1473, 199);
    }

    public void createFlavorsBeerIfNotFound() {
        addFlavorBeerIfNotFound("Resinous", "#BDFF6D", 200, 32);
        addFlavorBeerIfNotFound("Nutty", "#A4FF6D", 201, 32);
        addFlavorBeerIfNotFound("Grassy", "#8CFF6D", 202, 32);
        addFlavorBeerIfNotFound("Vegetal", "#57FF07", 32, 0);
        addFlavorBeerIfNotFound("Piney", "#DFFFB2", 1474, 200);
        addFlavorBeerIfNotFound("Woody", "#DBFFB2", 1475, 200);
        addFlavorBeerIfNotFound("Walnut", "#D6FFB2", 1476, 201);
        addFlavorBeerIfNotFound("Coconut", "#D2FFB2", 1477, 201);
        addFlavorBeerIfNotFound("Beany", "#CEFFB2", 1478, 201);
        addFlavorBeerIfNotFound("Almond", "#C9FFB2", 1479, 201);
        addFlavorBeerIfNotFound("Freshly cut grass", "#C5FFB2", 1480, 202);
        addFlavorBeerIfNotFound("Straw-like", "#C0FFB2", 1481, 202);
        addFlavorBeerIfNotFound("Grainy", "#78FF6D", 203, 33);
        addFlavorBeerIfNotFound("", "#73FF75", 0, 0);
        addFlavorBeerIfNotFound("", "#73FF7E", 0, 0);
        addFlavorBeerIfNotFound("Cereal", "#23FF09", 33, 0);
        addFlavorBeerIfNotFound("Husky", "#BCFFB2", 1485, 203);
        addFlavorBeerIfNotFound("Corn grits", "#B7FFB2", 1486, 203);
        addFlavorBeerIfNotFound("Mealy", "#B4FFB3", 1482, 203);
        addFlavorBeerIfNotFound("Malty", "#73FF75", 1483, 33);
        addFlavorBeerIfNotFound("Worty", "#73FF7E", 1484, 33);
        addFlavorBeerIfNotFound("Caramel", "#73FF89", 204, 34);
        addFlavorBeerIfNotFound("Burnt", "#73FFA0", 205, 34);
        addFlavorBeerIfNotFound("Maillard", "#22FF3F", 34, 0);
        addFlavorBeerIfNotFound("Molasses", "#B4FFBF", 1487, 204);
        addFlavorBeerIfNotFound("Licorice", "#B4FFC5", 1488, 204);
        addFlavorBeerIfNotFound("Bread crust", "#B4FFC9", 1489, 205);
        addFlavorBeerIfNotFound("Roast barley", "#B4FFCD", 1490, 205);
        addFlavorBeerIfNotFound("Smoky", "#B4FFD3", 1491, 205);
        addFlavorBeerIfNotFound("Phenolic", "#22FF89", 206, 35);
        addFlavorBeerIfNotFound("", "#22FF89", 35, 206);
        addFlavorBeerIfNotFound("Tarry", "#73FFB1", 1492, 206);
        addFlavorBeerIfNotFound("Bakelite", "#9BFFBA", 1493, 206);
        addFlavorBeerIfNotFound("Carbolic", "#73FFC1", 1494, 206);
        addFlavorBeerIfNotFound("Chlorophenol", "#73FFCB", 1495, 206);
        addFlavorBeerIfNotFound("Isodoform", "#73FFD5", 1496, 206);
        addFlavorBeerIfNotFound("Fatty acid", "#73FFEC", 207, 36);
        addFlavorBeerIfNotFound("Fatty", "#21FFFF", 36, 24);
        addFlavorBeerIfNotFound("Caprylic", "#B4FFEF", 1497, 207);
        addFlavorBeerIfNotFound("Cheesy", "#B4FFF4", 1498, 207);
        addFlavorBeerIfNotFound("Isovaleric", "#B4FFF7", 1499, 207);
        addFlavorBeerIfNotFound("Butyric", "#B4FFFD", 1500, 207);
        addFlavorBeerIfNotFound("Diacetyl", "#72FBFF", 1501, 36);
        addFlavorBeerIfNotFound("Rancid", "#72F2FF", 1502, 36);
        addFlavorBeerIfNotFound("", "#72FBFF", 0, 0);
        addFlavorBeerIfNotFound("", "#72F2FF", 0, 0);
        addFlavorBeerIfNotFound("Oily", "#71E4FF", 208, 36);
        addFlavorBeerIfNotFound("Vegetable oil", "#B3F5FF", 1503, 208);
        addFlavorBeerIfNotFound("Mineral oil", "#B3EFFF", 1504, 208);
        addFlavorBeerIfNotFound("Sulfidic", "#70D0FF", 209, 37);
        addFlavorBeerIfNotFound("Sulfidic", "#6EA4FF", 210, 37);
        addFlavorBeerIfNotFound("Cooked vegetable", "#6C6AFF", 211, 37);
        addFlavorBeerIfNotFound("", "8264FF", 0, 0);
        addFlavorBeerIfNotFound("Sulfury", "#0525FF", 37, 25);
        addFlavorBeerIfNotFound("Striking match", "#B3EAFF", 1505, 209);
        addFlavorBeerIfNotFound("Meaty", "#B3E5FF", 1506, 209);
        addFlavorBeerIfNotFound("Hydrogen Sulfide", "#B3DFFF", 1507, 210);
        addFlavorBeerIfNotFound("Mercaptan", "#B3DBFF", 1508, 210);
        addFlavorBeerIfNotFound("Garlic", "#B3D6FF", 1509, 210);
        addFlavorBeerIfNotFound("Lightstruck", "#B3D2FF", 1510, 210);
        addFlavorBeerIfNotFound("Autolysed", "#B2CCFF", 1511, 210);
        addFlavorBeerIfNotFound("Burnt rubber", "#B2C7FF", 1512, 210);
        addFlavorBeerIfNotFound("Shrimp-like", "#B2C3FF", 1513, 210);
        addFlavorBeerIfNotFound("Parsnip / Celery", "#B2BDFF", 1514, 211);
        addFlavorBeerIfNotFound("Dimethyl sulfide", "#B2BAFF", 1515, 211);
        addFlavorBeerIfNotFound("Cooked cabbage", "#B2B4FF", 1516, 211);
        addFlavorBeerIfNotFound("Cooked sweet corn", "#B2B0FF", 1517, 211);
        addFlavorBeerIfNotFound("Cooked tomato", "#B5AEFF", 1518, 211);
        addFlavorBeerIfNotFound("Cooked onion", "#B9AEFF", 1519, 211);
        addFlavorBeerIfNotFound("Yeasy", "#8264FF", 1520, 37);
        addFlavorBeerIfNotFound("", "#8A64FF", 0, 0);
        addFlavorBeerIfNotFound("", "#9264FF", 0, 0);
        addFlavorBeerIfNotFound("", "#9A64FF", 0, 0);
        addFlavorBeerIfNotFound("Moldy", "#A864FF", 212, 38);
        addFlavorBeerIfNotFound("Stale", "#4500FF", 38, 28);
        addFlavorBeerIfNotFound("Catty", "#8A64FF", 1521, 38);
        addFlavorBeerIfNotFound("Papery", "#9264FF", 1522, 38);
        addFlavorBeerIfNotFound("Leathery", "#9A64FF", 1523, 38);
        addFlavorBeerIfNotFound("Earthy", "#CFA3FA", 1524, 212);
        addFlavorBeerIfNotFound("Musty", "#D4AEFF", 1525, 212);
        addFlavorBeerIfNotFound("Acidic", "#A864FF", 213, 0);
        addFlavorBeerIfNotFound("", "#A864FF", 39, 213);
        addFlavorBeerIfNotFound("Acetic", "#B463FF", 1526, 39);
        addFlavorBeerIfNotFound("Sour", "#BE63FF", 1527, 39);
        addFlavorBeerIfNotFound("Sweet", "#BE00FF", 214, 0);
        addFlavorBeerIfNotFound("", "#BE00FF", 40, 214);
        addFlavorBeerIfNotFound("Honey", "#C663FF", 1528, 40);
        addFlavorBeerIfNotFound("Jam-like", "#CF62FF", 1529, 40);
        addFlavorBeerIfNotFound("Vanilla", "#D962FF", 1530, 40);
        addFlavorBeerIfNotFound("Primings", "#E162FF", 1531, 40);
        addFlavorBeerIfNotFound("Syrupy", "#EB61FF", 1532, 40);
        addFlavorBeerIfNotFound("Oversweet", "#F561FF", 1533, 40);
        addFlavorBeerIfNotFound("", "#FB00FD", 0, 0);
        addFlavorBeerIfNotFound("", "#FB00E8", 0, 0);
        addFlavorBeerIfNotFound("", "#FB00FD", 41, 28);
        addFlavorBeerIfNotFound("", "#FB00E8", 42, 28);
        addFlavorBeerIfNotFound("Salty", "#FB00FD", 1534, 41);
        addFlavorBeerIfNotFound("Bitter", "#FB00E8", 1535, 42);
        addFlavorBeerIfNotFound("", "#FC62EB", 0, 0);
        addFlavorBeerIfNotFound("", "#FC63E1", 0, 0);
        addFlavorBeerIfNotFound("", "#FC63D7", 0, 0);
        addFlavorBeerIfNotFound("Astringent", "#FC65C6", 215, 43);
        addFlavorBeerIfNotFound("Mouthfeel", "#FB007F", 43, 28);
        addFlavorBeerIfNotFound("Alkaline", "#FC62EB", 1536, 43);
        addFlavorBeerIfNotFound("Mouthcoating", "#FC63E1", 1537, 43);
        addFlavorBeerIfNotFound("Metallic", "#FC63D7", 1538, 43);
        addFlavorBeerIfNotFound("Drying", "#FDAEE6", 1539, 215);
        addFlavorBeerIfNotFound("Tart", "#FDAEE3", 1540, 215);
        addFlavorBeerIfNotFound("Puckering", "#FDAEDD", 1541, 215);
        addFlavorBeerIfNotFound("", "#FC65B4", 0, 0);
        addFlavorBeerIfNotFound("Carbonation", "#FC65A6", 216, 43);
        addFlavorBeerIfNotFound("Warming", "#FC6695", 217, 43);
        addFlavorBeerIfNotFound("Powdery", "#FC65B4", 1542, 43);
        addFlavorBeerIfNotFound("Flat", "#FDAFD4", 1543, 216);
        addFlavorBeerIfNotFound("Gassy", "#FDAFCE", 1544, 216);
        addFlavorBeerIfNotFound("Alcoholic", "#FDAFCA", 1545, 217);
        addFlavorBeerIfNotFound("Piquant", "#FDAFC7", 1546, 217);
        addFlavorBeerIfNotFound("Body", "#FC677D", 218, 44);
        addFlavorBeerIfNotFound("Fullness", "#FB0019", 44, 31);
        addFlavorBeerIfNotFound("Watery", "#FDAFC2", 1547, 218);
        addFlavorBeerIfNotFound("Characterless", "#FDB0BD", 1548, 218);
        addFlavorBeerIfNotFound("Satiating", "#FDB0B8", 1549, 218);
        addFlavorBeerIfNotFound("Thick", "#FDB0B4", 1550, 218);
        addFlavorBeerIfNotFound("Aromatic, Fragrant, Fruity, Floral", "#FDA109", 45, 31);
        addFlavorBeerIfNotFound("Alcoholic", "#FC706D", 219, 45);
        addFlavorBeerIfNotFound("Spicy", "#FDB2B2", 1551, 219);
        addFlavorBeerIfNotFound("Vinous", "#FDB7B2", 1552, 219);
        addFlavorBeerIfNotFound("Solvent-like", "#FC866D", 220, 45);
        addFlavorBeerIfNotFound("Plastics", "#FDBCB2", 1553, 220);
        addFlavorBeerIfNotFound("Can-liner", "#FDC1B2", 1554, 220);
        addFlavorBeerIfNotFound("Laquer-like", "#FEC5B2", 1555, 220);
        addFlavorBeerIfNotFound("Estery", "#FDA06D", 221, 45);
        addFlavorBeerIfNotFound("Isoamyl acetate", "#FECABB", 1556, 221);
        addFlavorBeerIfNotFound("Ethyl hexanoate", "#FECEB2", 1557, 221);
        addFlavorBeerIfNotFound("Etyl acetate", "#FED4B2", 1558, 221);
        addFlavorBeerIfNotFound("Fruity", "#FED46E", 222, 45);
        addFlavorBeerIfNotFound("Citrus", "#FED9B2", 1559, 222);
        addFlavorBeerIfNotFound("Apple", "#FEDEB2", 1560, 222);
        addFlavorBeerIfNotFound("Banana", "#FEE3B2", 1561, 222);
        addFlavorBeerIfNotFound("Black currant", "#FEE7B2", 1562, 222);
        addFlavorBeerIfNotFound("Melony", "#FEECB2", 1563, 222);
        addFlavorBeerIfNotFound("Pear", "#FFF2B2", 1564, 222);
        addFlavorBeerIfNotFound("Raspberry", "#FFF6B2", 1565, 222);
        addFlavorBeerIfNotFound("Strawberry", "#FFFCB2", 1566, 222);
        addFlavorBeerIfNotFound("", "#FFFF6E", 0, 0);
        addFlavorBeerIfNotFound("Acetaldehyde", "#FFFF6E", 1567, 45);
        addFlavorBeerIfNotFound("Floral", "#EEFF6E", 223, 45);
        addFlavorBeerIfNotFound("2-Phenylethanol", "#FCFFB2", 1568, 223);
        addFlavorBeerIfNotFound("Geraniol", "#F6FFB2", 1569, 223);
        addFlavorBeerIfNotFound("Perfumy", "#F1FFB2", 1570, 223);
        addFlavorBeerIfNotFound("Hoppy", "#D3FF6E", 224, 45);
        addFlavorBeerIfNotFound("Kettle-hop", "#EEFFB2", 1571, 224);
        addFlavorBeerIfNotFound("Dry-hop", "#E9FFB2", 1572, 224);
        addFlavorBeerIfNotFound("Hop oil", "#E5FFB2", 1573, 224);

    }


    @Transactional
    public void addFlavorCoffeeIfNotFound(String name, String color, int id, int parentID) {
        FlavorCoffee newFlavorCoffee = flavorCoffeeRepository.findFirstByID(id);
        if (newFlavorCoffee == null) {
            newFlavorCoffee = new FlavorCoffee(name, color, id, parentID);
            flavorCoffeeRepository.save(newFlavorCoffee);
        }
    }

    @Transactional
    public void addFlavorWineIfNotFound(String name, String color, int id, int parentID) {
        FlavorWine newFlavorWine = flavorWineRepository.findFirstByID(id);
        if (newFlavorWine == null) {
            newFlavorWine = new FlavorWine(name, color, id, parentID);
            flavorWineRepository.save(newFlavorWine);
        }
    }

    @Transactional
    public void addFlavorWhiskeyIfNotFound(String name, String color, int id, int parentID) {
        FlavorWhiskey newFlavorWhiskey = flavorWhiskeyRepository.findFirstByID(id);
        if (newFlavorWhiskey == null) {
            newFlavorWhiskey = new FlavorWhiskey(name, color, id, parentID);
            flavorWhiskeyRepository.save(newFlavorWhiskey);
        }
    }

    @Transactional
    public void addFlavorTeaIfNotFound(String name, String color, int id, int parentID) {
        FlavorTea newFlavorTea = flavorTeaRepository.findFirstByID(id);
        if (newFlavorTea == null) {
            newFlavorTea = new FlavorTea(name, color, id, parentID);
            flavorTeaRepository.save(newFlavorTea);
        }
    }

    @Transactional
    public void addFlavorBeerIfNotFound(String name, String color, int id, int parentID) {
        FlavorBeer newFlavorBeer = flavorBeerRepository.findFirstByID(id);
        if (newFlavorBeer == null) {
            newFlavorBeer = new FlavorBeer(name, color, id, parentID);
            flavorBeerRepository.save(newFlavorBeer);
        }
    }

    @Transactional
    Privilege createPrivilegeIfNotFound(final String name) {
        Privilege privilege = privilegeRepository.findByName(name);
        if (privilege == null) {
            privilege = new Privilege(name);
            privilege = privilegeRepository.save(privilege);
        }
        return privilege;
    }

    @Transactional
    Role createRole(final String name, final Collection<Privilege> privileges) {
        Role role = roleRepository.findFirstByName(name);
        if (role == null) {
            role = new Role(name);
        }
        role.setPrivileges(privileges);
        role = roleRepository.save(role);
        return role;
    }

    @Transactional
    User createUserIfNotFound(final String email, final String firstName, final String lastName,
                              final String password, final Collection<Role> roles) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            user = new User();
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setPassword(passwordEncoder.encode(password));
            user.setEmail(email);
            user.setEnabled(true);
            user.setRoles(roles);
            user = userRepository.save(user);
        }
        return user;
    }

}
