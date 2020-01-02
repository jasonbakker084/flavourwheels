package com.teamflavour.flavourwheels;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FlavourwheelsApplication {

    public static void main(String[] args) {
        SpringApplication.run(FlavourwheelsApplication.class, args);
    }

//    private static Connection getConnection() throws URISyntaxException, SQLException {
//        URI jdbUri = new URI(System.getenv("JAWSDB_URL"));
//
//        String username = jdbUri.getUserInfo().split(":")[0];
//        String password = jdbUri.getUserInfo().split(":")[1];
//        String port = String.valueOf(jdbUri.getPort());
//        String jdbUrl = "jdbc:mysql://" + jdbUri.getHost() + ":" + port + jdbUri.getPath();
//
//        return DriverManager.getConnection(jdbUrl, username, password);
//    }

}
