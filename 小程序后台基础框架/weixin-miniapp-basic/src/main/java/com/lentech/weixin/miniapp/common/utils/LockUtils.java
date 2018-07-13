package com.lentech.weixin.miniapp.common.utils;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import com.lentech.weixin.miniapp.common.exception.RepeatNotifyExecption;


/**
 * 支付回调高并发简单处理
 * (同一订单号重复回调)
 * @author 殷雷雷
 *
 */
public class LockUtils {
	private static final Set<String> orders = new HashSet<String>();
    private static Lock  lock = new ReentrantLock();
	

	public static void addQueue(String out_trade_no) throws  RepeatNotifyExecption{
		
		if (lock.tryLock()) {
            try {
            	if (orders.contains(out_trade_no)) {
            		 throw new RepeatNotifyExecption("重复回调"); 
    			}
    			orders.add(out_trade_no); 
            } catch (Exception e) {            	
            	 throw new RepeatNotifyExecption("重复回调"); 
              
            } finally {   
            	
                lock.unlock();
            }
        } else {
        	 throw new RepeatNotifyExecption("重复回调"); 
        }

	}

	public static void removeQueue(String out_trade_no) {
		orders.remove(out_trade_no);
	}
	public static void main(String[] args) {
		   new Thread("第一个线程  ") {

	            @Override
	            public void run() {
	            	try {
						addQueue("1");
					} catch (RepeatNotifyExecption e) {
						System.out.println(e.getMessage());
					}
	            }
	        }.start();
	        new Thread("第一个线程  ") {

	            @Override
	            public void run() {
	            	try {
						addQueue("1");
					} catch (RepeatNotifyExecption e) {
						System.out.println(e.getMessage());
					}
	            }
	        }.start();
	        System.out.println(orders);
	}

}
