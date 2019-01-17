package com.taobao.demo.weex.custom.component.base;

import android.app.Activity;
import android.content.DialogInterface;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;

import com.emas.demo.poc.light.R;
import com.taobao.demo.weex.custom.util.DialogUtil;

/**
 * @author pengl
 */
public class WXActUtils {
    public static void checkPermission(Activity activity,int requestCode, String permission, Runnable runnable){
        if(activity == null)
            return;

        if (ActivityCompat.checkSelfPermission(activity, permission) != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(activity, permission)) {
                shouldShowRationale(activity,requestCode,permission);
            } else {
                ActivityCompat.requestPermissions(activity, new String[]{permission}, requestCode);
            }
        } else {
            if (runnable != null)
                runnable.run();
        }
    }

    private static void shouldShowRationale(final Activity activity, final int requestCode, final String requestPermission) {
        DialogUtil.showOk(activity, R.string.permission_tip_title,R.string.permission_denied_hint,R.string.permission_ok, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                ActivityCompat.requestPermissions(activity,
                        new String[]{requestPermission}, requestCode);
            }
        },null);
    }

    public static void showProgressDialog(Activity activity,String message){
        showProgressDialog(activity,message,true);
    }

    public static void showProgressDialog(Activity activity,String message,boolean cancelable) {
        DialogUtil.showProgressDialog(activity,message,cancelable);
    }

    public static void stopProgressDialog(){
        DialogUtil.stopProgressDialog();
    }
}
