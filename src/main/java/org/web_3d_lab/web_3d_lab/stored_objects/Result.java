package org.web_3d_lab.web_3d_lab.stored_objects;

public class Result {
    private int id;
    private float xValue;
    private float yValue;
    private float rValue;
    private boolean result;
    private String executionTime;
    private long requestTime;

    public Result(int id, float xValue, float yValue, float rValue, boolean result, String executionTime, long requestTime) {
        this.id = id;
        this.xValue = xValue;
        this.yValue = yValue;
        this.rValue = rValue;
        this.result = result;
        this.executionTime = executionTime;
        this.requestTime = requestTime;

    }

    public int getId() {
        return id;
    }

    public float getxValue(){
        return xValue;
    }

    public float getyValue(){
        return yValue;
    }

    public float getrValue(){
        return rValue;
    }

    public boolean getResult(){
        return result;
    }

    public String getExecutionTime(){
        return executionTime;
    }

    public long getRequestTime(){
        return requestTime;
    }

    @Override
    public String toString(){
        return "Result(" +
                "id: "+id+
                "\nxValue: "+xValue+
                "\nyValue: "+yValue+
                "\nrValue: "+rValue+
                "\nexecutionTime: "+executionTime+
                "\nrequestTime: "+requestTime+")";
    }
}
