package com.taobao.demo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;

import com.alibaba.fastjson.JSONObject;

public class SplashActivity extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        JSONObject jobj = Utils.getWeexContainerJobj(this.getApplicationContext());
        int scaffoldType = jobj == null ? 1 : jobj.getIntValue("ScaffoldType");

        if ((scaffoldType & 2) == 2) {
            // weex page
            final int tabSize = jobj == null ? -1 : jobj.getIntValue("TabSize");
            if (tabSize > 0) {
                getWindow().getDecorView().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent();
                        switch (tabSize) {
                            case 1:
                                intent.setClassName(SplashActivity.this, "com.taobao.demo.weex.WeexIndexActivity");
                                break;
                            default:
                                intent.setClassName(SplashActivity.this, "com.taobao.demo.weex.WeexTabActivity");
                                break;
                        }
                        startActivity(intent);
                        finish();
                    }
                }, 1000);
            } else {
                showLandingPage(scaffoldType);
            }
        } else {
           showLandingPage(scaffoldType);
        }
    }

    private void showLandingPage(int scaffoldType) {
        Intent intent = new Intent(SplashActivity.this, LandingActivity.class);
        intent.putExtra("scaffoldType", scaffoldType);
        startActivity(intent);
        finish();
    }
}
