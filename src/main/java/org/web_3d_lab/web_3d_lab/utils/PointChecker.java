package org.web_3d_lab.web_3d_lab.utils;

import org.web_3d_lab.web_3d_lab.stored_objects.Result;

public class PointChecker {
    private int counter = 0;
    private DateFormer dateFormer= new DateFormer();
    public Result processPoint(float xValue, float yValue, float rValue){
        return new Result(counter++, xValue, yValue ,rValue, true, dateFormer.getCurrentDate(), System.nanoTime());
    }
}
