package com.taobao.demo.weex.module;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.emas.weex.EmasWeex;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.appfram.navigator.WXNavigatorModule;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.utils.WXLogUtils;

public class EmasNavigatorModule extends WXNavigatorModule {

    private static final String TAG = "EmasNavigatorModule";
    @JSMethod
    @Override
    public void open(JSONObject options, JSCallback success, JSCallback failure) {
        if (options != null) {
            String url = options.getString("url");
            JSCallback callback = success;
            JSONObject result = new JSONObject();
            if (!TextUtils.isEmpty(url)) {
                Uri rawUri = Uri.parse(url);
                String scheme = rawUri.getScheme();

                //跳转H5
                if (("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme))
                        && TextUtils.isEmpty(rawUri.getQueryParameter(EmasWeex.URL_PARAM))) {
                    try {
                        Intent intent = new Intent();
                        intent.setClassName(mWXSDKInstance.getContext(), "com.taobao.demo.webview.WebViewSampleActivity");
                        intent.setData(rawUri);
                        mWXSDKInstance.getContext().startActivity(intent);
                        result.put("result", "WX_SUCCESS");
                    } catch (Throwable t) {
                        Log.e(TAG, "start SimpleBrowserActivity", t);
                        result.put("result", "WX_FAILED");
                        result.put("message", "Open h5 page failed.");
                        callback = failure;
                    }

                    if (callback != null) {
                        callback.invoke(result);
                    }
                    return;
                }
            }
        }

        super.open(options, success, failure);
    }

    @JSMethod
    @Override
    public void push(String param, JSCallback callback) {
        if (!TextUtils.isEmpty(param)) {
            if (WXSDKEngine.getActivityNavBarSetter() != null && WXSDKEngine.getActivityNavBarSetter().push(param)) {
                if (callback != null) {
                    callback.invoke("WX_SUCCESS");
                }

                return;
            }

            if (this.mWXSDKInstance.getContext() instanceof Activity) {
                Activity activity = (Activity)this.mWXSDKInstance.getContext();
                if (WXSDKEngine.getNavigator() != null && WXSDKEngine.getNavigator().push(activity, param)) {
                    if (callback != null) {
                        callback.invoke("WX_SUCCESS");
                    }

                    return;
                }
            }

            try {
                JSONObject jsonObject = JSON.parseObject(param);
                String url = jsonObject.getString("url");
                if (!TextUtils.isEmpty(url)) {
                    Uri rawUri = Uri.parse(url);
                    String scheme = rawUri.getScheme();
                    Uri.Builder builder = rawUri.buildUpon();
                    if (TextUtils.isEmpty(scheme)) {
                        builder.scheme("http");
                    }

                    Intent intent = new Intent("android.intent.action.VIEW", builder.build());
                    intent.setPackage(mWXSDKInstance.getContext().getPackageName());
                    intent.addCategory("com.taobao.android.intent.category.WEEX");
                    intent.putExtra("instanceId", this.mWXSDKInstance.getInstanceId());
                    this.mWXSDKInstance.getContext().startActivity(intent);
                    if (callback != null) {
                        callback.invoke("WX_SUCCESS");
                    }
                }
            } catch (Exception var9) {
                WXLogUtils.eTag("Navigator", var9);
                if (callback != null) {
                    callback.invoke("WX_FAILED");
                }
            }
        } else if (callback != null) {
            callback.invoke("WX_FAILED");
        }
    }

}
