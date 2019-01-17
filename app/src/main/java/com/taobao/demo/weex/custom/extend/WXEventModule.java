package com.taobao.demo.weex.custom.extend;

import android.content.Intent;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;

import com.taobao.demo.weex.custom.WXPageActivity;
import com.taobao.demo.weex.custom.component.WXEventModulePresenter;
import com.taobao.demo.weex.custom.component.WXEventModuleView;
import com.taobao.demo.weex.custom.component.base.WXModuleTemplate;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;


public class WXEventModule extends WXModuleTemplate<WXEventModulePresenter> implements WXEventModuleView {
    private static final String TAG = "WXEventModule";

    @Override
    public WXEventModulePresenter createPresenter() {
        WXEventModulePresenter presenter = new WXEventModulePresenter();
        presenter.attachView(this);
        return presenter;
    }

    @JSMethod()
    public void openURL(String url) {
        Log.d("WXEventModule", "openURL");
        if (TextUtils.isEmpty(url)) {
            return;
        }
        Uri uri = Uri.parse(url);
        String scheme = uri.getScheme();

        if (scheme.equals("http") || scheme.equals("https") || scheme.equals("file")) {
            Intent renderIntent = new Intent(mWXSDKInstance.getContext(), WXPageActivity.class);
            renderIntent.setData(uri);
            mWXSDKInstance.getContext().startActivity(renderIntent);
        } else {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(uri);
            mWXSDKInstance.getContext().startActivity(intent);
        }
    }

    @JSMethod()
    public void openCameraFront(String item, JSCallback jsCallback) {
        Log.d(TAG, "openCameraFront:" /*+ item*/);
        //Log.d(TAG, "openCameraFront:" + this.toString());

        onJSCallStart();
        basePresenter.displaySelectPhotoDialog(jsCallback);
    }


}
