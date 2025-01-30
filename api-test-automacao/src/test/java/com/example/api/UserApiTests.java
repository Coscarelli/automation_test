package com.example.api;

import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class UserApiTests {

    private final String BASE_URL = "https://serverest.dev";
    private final String TOKEN = "<JWT_TOKEN>"; // Substitua pelo token JWT válido

    @Test
    public void testGetUsers() {
        given()
            .header("Authorization", "Bearer " + TOKEN)
        .when()
            .get(BASE_URL + "/users")
        .then()
            .statusCode(200)
            .body("size()", greaterThan(0));
    }

    @Test
    public void testCreateUser() {
        String newUserJson = "{" +
                "\"nome\": \"Test User\"," +
                "\"email\": \"testuser@domain.com\"," +
                "\"password\": \"password123\"," +
                "\"administrador\": \"false\"}";

        given()
            .header("Authorization", "Bearer " + TOKEN)
            .contentType("application/json")
            .body(newUserJson)
        .when()
            .post(BASE_URL + "/users")
        .then()
            .statusCode(201)
            .body("nome", equalTo("Test User"))
            .body("email", equalTo("testuser@domain.com"));
    }

    @Test
    public void testGetUserById() {
        String userId = "123"; // Substitua por um ID válido

        given()
            .header("Authorization", "Bearer " + TOKEN)
        .when()
            .get(BASE_URL + "/users/" + userId)
        .then()
            .statusCode(200)
            .body("id", equalTo(userId));
    }

    @Test
    public void testUpdateUser() {
        String userId = "123"; // Substitua por um ID válido
        String updatedUserJson = "{" +
                "\"nome\": \"Updated User\"," +
                "\"email\": \"updateduser@domain.com\"," +
                "\"password\": \"newpassword123\"," +
                "\"administrador\": \"true\"}";

        given()
            .header("Authorization", "Bearer " + TOKEN)
            .contentType("application/json")
            .body(updatedUserJson)
        .when()
            .put(BASE_URL + "/users/" + userId)
        .then()
            .statusCode(200)
            .body("nome", equalTo("Updated User"))
            .body("email", equalTo("updateduser@domain.com"));
    }

    @Test
    public void testDeleteUser() {
        String userId = "123"; // Substitua por um ID válido

        given()
            .header("Authorization", "Bearer " + TOKEN)
        .when()
            .delete(BASE_URL + "/users/" + userId)
        .then()
            .statusCode(200);
    }
}
