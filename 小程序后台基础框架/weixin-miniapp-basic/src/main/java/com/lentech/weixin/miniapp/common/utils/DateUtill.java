package com.lentech.weixin.miniapp.common.utils;

import java.sql.Time;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtill {
	public static final String YYYY_MM_DD_HH_MM_SS="yyyy-MM-dd hh:mm:ss";
	public static final String YYYYMMDDHHMMSS="yyyyMMddhhmmss";
	public static final String YYMMDD="yyyyMMdd";
	public static final String YY_MM_DD="yyyy-MM-dd";
	public static final String HHMM="HH:mm";
	 /** 
	 * 获得指定日期的后n天 
	 * @param specifiedDay 
	 * @return 
	 * @throws Exception 
	 */ 
	 public static String getSpecifiedDayAfter(Date date,Integer dayBefore){ 
	 Calendar c = Calendar.getInstance(); 
	 c.setTime(date); 
	 int day=c.get(Calendar.DATE); 
	 c.set(Calendar.DATE,day+dayBefore); 
	 String dayStr=new SimpleDateFormat("MM-dd").format(c.getTime()); 
	 return dayStr; 
	 }
	 /** 
		 * 获得指定日期的后n天 
		 * @param specifiedDay 
		 * @return 
		 * @throws Exception 
		 */ 
		 public static String getSpecifiedDayAfterForYMD(Date date,Integer dayBefore){		
		 Calendar c = Calendar.getInstance(); 
		 c.setTime(date); 
		 int day=c.get(Calendar.DATE); 
		 c.set(Calendar.DATE,day+dayBefore); 
		 String dayStr=new SimpleDateFormat("yyyyMMdd").format(c.getTime()); 
		 return dayStr; 
		 }

	public static String getWeek(Date date, Integer dayBefore) {
		 String[] weekDays = { "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" };  
		 Calendar c = Calendar.getInstance(); 
		 c.setTime(date); 
		 int day=c.get(Calendar.DATE); 
		 c.set(Calendar.DATE,day+dayBefore); 
	        int w = c.get(Calendar.DAY_OF_WEEK) - 1;  
	        if (w < 0)  
	            w = 0;  
	        return weekDays[w]; 
	}
	/**
	 * 字符串转date
	 * @param datesrt
	 * @param conversion
	 * @return
	 */
	public static Date conversionTODate(String datesrt,String conversionStr) {
		DateFormat fmt =new SimpleDateFormat(conversionStr);
		Date date = null;
		try {
			date = fmt.parse(datesrt);
		} catch (ParseException e) {
			
		}
		return date;
	}
	public static Time conversionTOTime(String timeStr,String conversionStr) {
		SimpleDateFormat sdf = new SimpleDateFormat(conversionStr);
		Time btime = null;
		try {
			 btime=new Time(sdf.parse(timeStr).getTime());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return btime;
	}
	public static String conversionTimeToString(Time time,String conversionStr) {
		SimpleDateFormat sdf = new SimpleDateFormat(conversionStr);
		String result=sdf.format(time);
		return result;
	}
	public static String conversionString(Date date,String conversionStr) {
		SimpleDateFormat sdf = new SimpleDateFormat(conversionStr);
		String strBeginDate = sdf.format(date);
		return strBeginDate;
	}
	public static String conversionStringTOString(String dateStr,String oldConversionStr,String conversionStr) {
		Date date=conversionTODate(dateStr, oldConversionStr);
		return conversionString(date, conversionStr);
	}
	public static boolean isBefore(Date date) {
		Date dateNow=new Date();
		String tempDateStr=conversionString(date,YY_MM_DD)+" 07:30:00";		
		Date tempDate= conversionTODate(tempDateStr, YYYY_MM_DD_HH_MM_SS);
		if(tempDate.getTime()>dateNow.getTime()) {
			return true;
		}else {
			return false;
		}
	}
	public static void main(String[] args) {
		Date date=DateUtill.conversionTODate("2018-06-01 20:17:00", DateUtill.YYYY_MM_DD_HH_MM_SS);
		System.out.println(isBefore(date));
	
		
	}
}
