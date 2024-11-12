package org.web_3d_lab.web_3d_lab.Services;

import org.web_3d_lab.web_3d_lab.stored_objects.Result;

public class PointChecker {
    private int counter = 0;
    private DateFormer dateFormer= new DateFormer();

    public Result processPoint(float xValue, float yValue, float rValue){
        return new Result(counter++, xValue, yValue ,rValue, checkPoint(xValue, yValue, rValue), dateFormer.getCurrentDate(), System.nanoTime());
    }

    private boolean checkPoint(float x, float y, float r){
        boolean firstPart = (y<x*2+r)&&(x<0)&&(y>0);
        boolean secondPart = (x*x+y*x<r*r/4)&&(x>0)&&(y>0);
        boolean thirdPart = (x>-r)&&(x<0)&&(y<0)&&(y>-r);
        return firstPart || secondPart || thirdPart;
    }
}
