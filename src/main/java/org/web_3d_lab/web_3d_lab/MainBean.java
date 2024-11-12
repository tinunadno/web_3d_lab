package org.web_3d_lab.web_3d_lab;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named("mainBean")
@SessionScoped
public class MainBean implements Serializable {
    private float xValue;
    private float yValue;
    private float radius = 2.5f; // значение по умолчанию
    private String result;
    private List<String> history = new ArrayList<>();

    // Геттеры и сеттеры для полей xValue, yValue, radius, result и history
    public float getxValue() {
        return xValue;
    }

    public void setxValue(float xValue) {
        this.xValue = xValue;
    }

    public float getyValue() {
        return yValue;
    }

    public void setyValue(float yValue) {
        this.yValue = yValue;
    }

    public float getRadius() {
        return radius;
    }

    public void setRadius(float radius) {
        this.radius = radius;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public List<String> getHistory() {
        return history;
    }

    // Метод обработки запроса, привязанный к кнопке в форме
    public String processRequest() {
        try {
            result = "Выполнено! X: " + xValue + ", Y: " + yValue + ", R: " + radius;

            // Создание новой записи для истории
            history.add(result); // добавление записи в историю

        } catch (NumberFormatException e) {
            result = "Ошибка: Y должно быть числом!";
        }
        return null; // остаемся на той же странице после обработки
    }
}