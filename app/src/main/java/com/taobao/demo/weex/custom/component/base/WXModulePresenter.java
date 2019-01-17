package com.taobao.demo.weex.custom.component.base;

import android.content.Intent;

import com.taobao.weex.WXSDKInstance;

/**
 * @author pengl
 */
public interface WXModulePresenter<T extends WXModuleView> {

    void attachView(T view);

    void detachView();

    /**
     * WXModule创建时mWXSDKInstance为空，直到js调用native代码时才会赋值，
     * 所以很多依赖Activity的组件需要延迟初始化
     */
    void onStart(WXSDKInstance instance);

    void onStop();

    void onActivityResult(int requestCode, int resultCode, Intent data);

    void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults);
}
