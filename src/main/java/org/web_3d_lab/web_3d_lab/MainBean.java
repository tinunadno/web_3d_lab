package org.web_3d_lab.web_3d_lab;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;
import org.web_3d_lab.web_3d_lab.stored_objects.Result;
import org.web_3d_lab.web_3d_lab.Services.PointChecker;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named("mainBean")
@SessionScoped
public class MainBean implements Serializable {
    private float xValue;
    private float yValue;
    private float radius = 2.5f; // значение по умолчанию
    private Result result;
    private List<Result> history = new ArrayList<>();
    private PointChecker pointChecker = new PointChecker();

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

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public List<Result> getHistory() {
        return history;
    }

    // Метод обработки запроса, привязанный к кнопке в форме
    public String processRequest() {
        try {
            result = pointChecker.processPoint(xValue, yValue, radius);

            // Создание новой записи для истории
            history.add(result); // добавление записи в историю

        } catch (NumberFormatException e) {
            result = null;
        }
        return null; // остаемся на той же странице после обработки
    }
}