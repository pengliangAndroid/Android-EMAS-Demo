package com.taobao.demo.weex.custom.util;

import android.app.AlertDialog;
import android.app.Dialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.text.Html;
import android.view.View;


public class DialogUtil {

    private static Dialog progressDialog;

    public static AlertDialog.Builder dialogBuilder(Context context, String title, String msg) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context/*, AlertDialog.THEME_HOLO_LIGHT*/);
        if (msg != null) {
            builder.setMessage(msg);
        }
        if (title != null) {
            builder.setTitle(title);
        }
        return builder;
    }

    public static AlertDialog.Builder dialogBuilder(Context context, String title, String msg, boolean isHtml) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context/*, AlertDialog.THEME_HOLO_LIGHT*/);
        if (msg != null) {
            builder.setMessage(Html.fromHtml(msg));
        }
        if (title != null) {
            builder.setTitle(title);
        }
        return builder;
    }


    public static AlertDialog.Builder dialogBuilder(Context context, int title, View view) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context/*, AlertDialog.THEME_HOLO_LIGHT*/);
        if (view != null) {
            builder.setView(view);
        }
        if (title > 0) {
            builder.setTitle(title);
        }
        return builder;
    }

    public static AlertDialog.Builder dialogBuilder(Context context, int titleResId, int msgResId) {
        String title = titleResId > 0 ? context.getResources().getString(titleResId) : null;
        String msg = msgResId > 0 ? context.getResources().getString(msgResId) : null;
        return dialogBuilder(context, title, msg);
    }

    public static Dialog showTips(Context context, String title, String des) {
        return showTips(context, title, des, null, null);
    }

    public static Dialog showTips(Context context, int title, int des) {
        return showTips(context, context.getString(title), context.getString(des));
    }

    public static Dialog showOk(Context context, int title, int des, int btn, DialogInterface.OnClickListener positiveListener,
                                      DialogInterface.OnDismissListener dismissListener) {
        return showOk(context, context.getString(title), context.getString(des), context.getString(btn),positiveListener, dismissListener);
    }

    public static Dialog showOk(Context context, String title, String des, String btn, DialogInterface.OnClickListener positiveListener,
                                DialogInterface.OnDismissListener dismissListener) {
        AlertDialog.Builder builder = dialogBuilder(context, title, des);
        builder.setCancelable(true);
        builder.setPositiveButton(btn, positiveListener);
        Dialog dialog = builder.show();
        dialog.setCanceledOnTouchOutside(true);
        dialog.setOnDismissListener(dismissListener);
        return dialog;
    }

    public static Dialog showTips(Context context, int title, int des, int btn, DialogInterface.OnDismissListener dismissListener) {
        return showTips(context, context.getString(title), context.getString(des), context.getString(btn), dismissListener);
    }

    public static Dialog showTips(Context context, String title, String des, String btn, DialogInterface.OnDismissListener dismissListener) {
        AlertDialog.Builder builder = dialogBuilder(context, title, des);
        builder.setCancelable(true);
        builder.setPositiveButton(btn, null);
        Dialog dialog = builder.show();
        dialog.setCanceledOnTouchOutside(true);
        dialog.setOnDismissListener(dismissListener);
        return dialog;
    }

    public static void showProgressDialog(Context context, String message, boolean cancelable) {
        progressDialog = ProgressDialog.show(context,"",message);
        progressDialog.setCancelable(cancelable);
    }

    public static void stopProgressDialog() {
        if(progressDialog != null) {
            progressDialog.dismiss();
            progressDialog = null;
        }
    }

    /*public static void showCustomProgressDialog(Context context) {
        showCustomProgressDialog(context, R.string.msg_loading);
    }

    public static void showCustomProgressDialog(Context context, int msgId) {
        showCustomProgressDialog(context,context.getString(msgId),false);
    }

    public static void showCustomProgressDialog(Context context, String msg) {
        showCustomProgressDialog(context,msg,false);
    }

    public static void showCustomProgressDialog(Context context, String msg,boolean cancelable) {
        if (progressDialog == null) {
            progressDialog = new Dialog(context, R.style.ProgressDialogStyle);
            progressDialog.setContentView(R.layout.dialog_custom_loading_v2);
//            progressDialog.setCancelable(cancelable);
            progressDialog.setCanceledOnTouchOutside(cancelable);
            progressDialog.getWindow().setBackgroundDrawableResource(
                    android.R.color.transparent);

        }

        TextView text = (TextView) progressDialog
                .findViewById(R.id.tv_loading_msg);
        text.setText(msg);
        if(!progressDialog.isShowing())
            progressDialog.show();
    }*/

}