package org.web_3d_lab.web_3d_lab.Services;

import org.web_3d_lab.web_3d_lab.stored_objects.Result;

public class PointChecker {
    private int counter = 0;
    private final DateFormer dateFormer= new DateFormer();

    public Result processPoint(float xValue, float yValue, float rValue){
        long start_time = System.nanoTime();
        boolean result = checkPoint(xValue, yValue, rValue);
        long execution_time = System.nanoTime() - start_time;
        return new Result(counter++, xValue, yValue ,rValue, result, dateFormer.getCurrentDate(), execution_time/100000000.0);
    }

    private boolean checkPoint(float x, float y, float r){
        boolean firstPart = (y<=x*2+r)&&(x<=0)&&(y>=0);
        boolean secondPart = (x*x+y*x<=r*r/4)&&(x>=0)&&(y>=0);
        boolean thirdPart = (x>=-r)&&(x<=0)&&(y<=0)&&(y>=-r);
        return firstPart || secondPart || thirdPart;
    }
}
