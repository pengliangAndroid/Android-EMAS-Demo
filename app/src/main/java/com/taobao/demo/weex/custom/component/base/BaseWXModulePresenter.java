package com.taobao.demo.weex.custom.component.base;

import android.app.Activity;
import android.content.Intent;

import com.taobao.weex.WXSDKInstance;

/**
 * @author pengl
 */
public abstract class BaseWXModulePresenter<T extends WXModuleView> implements WXModulePresenter<T> {
    protected WXSDKInstance wxsdkInstance;
    protected T mvpView;
    protected volatile boolean isStart;

    @Override
    public void attachView(T mvpView) {
        this.mvpView = mvpView;
    }

    @Override
    public void detachView() {
        mvpView = null;
    }

    protected abstract void onJSCallFirstStart();

    public void onStart(WXSDKInstance instance){
        this.wxsdkInstance = instance;

        if(!isStart) {
            isStart = true;
            onJSCallFirstStart();
        }
    }

    public void onStop(){
        wxsdkInstance = null;
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data){

    }

    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {

    }

    public boolean isViewAttached() {
        return mvpView != null;
    }

    public T getMvpView() {
        return mvpView;
    }

    protected void checkPermission(int requestCode, String permission, Runnable runnable){
        WXActUtils.checkPermission(getCurActivity(),requestCode,permission,runnable);
    }

    protected Activity getCurActivity(){
        if(wxsdkInstance == null)
            return null;

        if(wxsdkInstance.getContext() instanceof Activity){
            return (Activity) wxsdkInstance.getContext();
        }

        return null;
    }

    public boolean isStart() {
        return isStart;
    }
}
