package com.taobao.demo.weex.custom.component.base;

import android.content.Intent;

import com.taobao.weex.common.WXModule;

/**
 * @author pengl
 */
public abstract class WXModuleTemplate<T extends WXModulePresenter> extends WXModule {

    protected T basePresenter;

    public WXModuleTemplate(){
        basePresenter = createPresenter();
    }

    public abstract T createPresenter();

    /**
     * WXModule创建时mWXSDKInstance为空，直到js调用native代码时才会赋值，
     * 所以很多依赖Activity的组件需要延迟初始化
     */
    public void onJSCallStart(){
        basePresenter.onStart(mWXSDKInstance);
    }

    public void unregisterLifecycle(){
        basePresenter = null;
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data){
        if(basePresenter != null)
            basePresenter.onActivityResult(requestCode,resultCode,data);
    }

    public void onActivityDestroy(){
        if(basePresenter != null)
            basePresenter.onStop();

        if(basePresenter != null)
            basePresenter.detachView();

        unregisterLifecycle();
    }

    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if(basePresenter != null)
            basePresenter.onRequestPermissionsResult(requestCode,permissions,grantResults);
    }

    public T getPresenter() {
        return basePresenter;
    }
}
