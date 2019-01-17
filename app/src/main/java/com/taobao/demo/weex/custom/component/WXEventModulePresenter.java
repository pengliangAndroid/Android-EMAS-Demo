package com.taobao.demo.weex.custom.component;

import android.Manifest;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.support.v7.app.AlertDialog;
import android.util.Log;

import com.alibaba.fastjson.JSONObject;
import com.taobao.demo.weex.custom.component.base.BaseWXModulePresenter;
import com.taobao.demo.weex.custom.component.base.WXActUtils;
import com.taobao.demo.weex.custom.util.BitmapUtils;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.utils.WXFileUtils;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import io.reactivex.Observable;
import io.reactivex.Observer;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.Disposable;
import io.reactivex.functions.Function;
import io.reactivex.schedulers.Schedulers;


/**
 * @author pengl
 */
public class WXEventModulePresenter extends BaseWXModulePresenter<WXEventModuleView> {
    private static final String TAG = "WXEventModulePresenter";

    private static final int CAMERA_REQUEST_CODE = 100;

    private static final int READ_SD_REQUEST_CODE = 101;

    ImageChooseHelper imageChooseHelper;

    private JSCallback jsCallback;

    @Override
    protected void onJSCallFirstStart() {
        Log.d(TAG,"onJSCallFirstStart");
        initHelper();
    }

    private void initHelper() {
        if (getCurActivity() == null)
            return;

        imageChooseHelper = new ImageChooseHelper(getCurActivity());
        imageChooseHelper.setCrop(false);

        imageChooseHelper.setOnChooseImageListener(new ImageChooseHelper.OnChooseImageListener() {
            @Override
            public void onChooseImageFinish(Uri uri, File file) {
                Log.d(TAG, "selectImagePath:" + file.getPath());
                WXActUtils.showProgressDialog(getCurActivity(), "处理图片中...");

                startCompressBitmap(file);
            }
        });
    }
    /**
     * 显示选择图片选项框
     */
    public void displaySelectPhotoDialog(JSCallback jsCallback){
        if(getCurActivity() == null)
            return;

        this.jsCallback = jsCallback;

        String[] items = new String[]{"拍照","从相册选择图片","取消"};
        new AlertDialog.Builder(getCurActivity())
                .setTitle("选择")
                .setItems(items, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Runnable runnable;
                        if(which == 0){
                            runnable = new Runnable() {
                                @Override
                                public void run() {
                                    imageChooseHelper.startCamera();
                                }
                            };
                            checkPermission(CAMERA_REQUEST_CODE, Manifest.permission.CAMERA,runnable);

                        }else if(which == 1){
                            runnable = new Runnable() {
                                @Override
                                public void run() {
                                    imageChooseHelper.startImageChoose();
                                }
                            };

                            checkPermission(READ_SD_REQUEST_CODE, Manifest.permission.READ_EXTERNAL_STORAGE, runnable);
                        }
                    }
                })
                .setCancelable(true)
                .show();
    }

    private void startCompressBitmap(File file) {
        Observable.just(file)
                .map(new Function<File, String>() {
                    @Override
                    public String apply(File file) {
                        String dir = getCurActivity().getExternalCacheDir().getAbsolutePath();
                        String imageBase64 = compressImageToBase64(dir, file.getAbsolutePath());

                        File textFile = new File(dir,"text.txt");
                        WXFileUtils.saveFile(textFile.getAbsolutePath(),imageBase64.getBytes(),getCurActivity());
                        Log.d(TAG,imageBase64);
                        return imageBase64;
                    }
                })
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(new Observer<String>() {
                    @Override
                    public void onSubscribe(Disposable d) {

                    }

                    @Override
                    public void onNext(String o) {
                        WXActUtils.stopProgressDialog();
                        if(jsCallback != null) {
                            HashMap<String,Object> map = new HashMap<>();
                            map.put("result","0");
                            map.put("data",o);

                            //String str = JSONObject.toJSONString(map);
                            jsCallback.invoke(map);
                        }
                    }

                    @Override
                    public void onError(Throwable e) {
                        WXActUtils.stopProgressDialog();
                        if(jsCallback != null) {
                            HashMap<String,Object> map = new HashMap<>();
                            map.put("result","1");
                            String str = JSONObject.toJSONString(map);
                            jsCallback.invoke(map);
                        }
                    }

                    @Override
                    public void onComplete() {

                    }
                });
    }

    private String compressImageToBase64(String dirPath,String filePath){
        String base64 = "";
        try {
            String name;
            int index = filePath.lastIndexOf("/");
            if (index == -1) {
                name = System.currentTimeMillis() + ".png";
            } else {
                name = filePath.substring(index + 1);
            }
            Log.d(TAG,"saveFileName:" + name);


            String tmpPath = filePath;;
            if (!name.endsWith(".gif")) {
                tmpPath = dirPath + File.separator + name;
                BitmapUtils.compressAndGenImage(filePath, tmpPath, 1024, false);
            }
            Log.d(TAG,"path:" + tmpPath);

            base64 = BitmapUtils.decodeBitmapToBase64(tmpPath);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return base64;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        Log.d(TAG,"onRequestPermissionsResult");
        if (requestCode == CAMERA_REQUEST_CODE) {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                imageChooseHelper.startCamera();
            }
        } else if (requestCode == READ_SD_REQUEST_CODE) {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                imageChooseHelper.startImageChoose();
            }
        }
    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.d(TAG,"onActivityResult");
        if (imageChooseHelper != null) {
            imageChooseHelper.onActivityResult(requestCode, resultCode, data);
        }
    }



}
