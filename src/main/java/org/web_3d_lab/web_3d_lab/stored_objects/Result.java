package org.web_3d_lab.web_3d_lab.stored_objects;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;

@Entity
@Table(name = "result")

public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "x_value")
    private float xValue;
    @Column(name = "y_value")
    private float yValue;
    @Column(name = "r_value")
    private float rValue;
    @Column(name = "result")
    private boolean result;
    @Column(name = "request_time")
    private String requestTime;
    @Column(name = "execution_time")
    private double executionTime;

    public Result(int id, float xValue, float yValue, float rValue, boolean result, String requestTime, double executionTime) {
        this.id = id;
        this.xValue = xValue;
        this.yValue = yValue;
        this.rValue = rValue;
        this.result = result;
        this.executionTime = executionTime;
        this.requestTime = requestTime;

    }

    public Result() {}

    public int getId() {
        return id;
    }

    public float getxValue() {
        return xValue;
    }

    public float getyValue() {
        return yValue;
    }

    public float getrValue() {
        return rValue;
    }

    public boolean getResult() {
        return result;
    }

    public double getExecutionTime() {
        return executionTime;
    }

    public String getRequestTime() {
        return requestTime;
    }

    @Override
    public String toString() {
        if (result) {
            return "point belongs to function";
        } else {
            return "point doesnt belongs to function";
        }
    }
}
