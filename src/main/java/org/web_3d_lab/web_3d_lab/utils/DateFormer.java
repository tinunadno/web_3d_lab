package org.web_3d_lab.web_3d_lab.utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class DateFormer {
    public String getCurrentDate(){
        return  new SimpleDateFormat("dd.MM.yyyy HH:mm:ss").format(Calendar.getInstance().getTime());
    }
}