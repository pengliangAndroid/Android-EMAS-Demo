package com.taobao.demo;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.emas.demo.poc.light.R;
import com.taobao.demo.weex.custom.WXPageActivity;

import java.lang.reflect.Method;

public class LandingActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_landing);
        //Toast.makeText(this,"New新版本New新版本",Toast.LENGTH_SHORT).show();


        setCustomActionBar();
        setActionBarTitle(R.string.title);
        hideBack();
        showScan();
        Toast.makeText(this,"New新版本New新版本",Toast.LENGTH_SHORT).show();

        Class<?> clazz = null;
        try {
            clazz = Class.forName("test.android.taobao.com.firstlib.TestUtil");
            if(clazz != null){
                //Object instance = clazz.newInstance();
                Method method = clazz.getDeclaredMethod("getData",null);
                Object retVal = method.invoke(null, null);
                Toast.makeText(this,"模块调用返回值:" + retVal,Toast.LENGTH_SHORT).show();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        findViewById(R.id.btn_native).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(LandingActivity.this, NativeDemoActivity.class);
                startActivity(intent);
            }
        });
        findViewById(R.id.btn_weex).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(LandingActivity.this, WXPageActivity.class);
                //intent.setData(Uri.parse("http://cdn.emas-poc.com/material/yanpeicpf/index.html?_wx_tpl=http://cdn.emas-poc.com/app/yanpeicpf-bbb/pages/index/entry.js"));
                startActivity(intent);
            }
        });
        findViewById(R.id.btn_h5).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Intent.ACTION_VIEW);
                intent.setData(Uri.parse("http://cdn.emas-poc.com/app/yanpeicpf-aaa/index.html"));
                intent.setPackage(getPackageName());
                intent.addCategory("com.emas.android.intent.category.HYBRID");
                if (null != intent.resolveActivity(getPackageManager())) {
                    startActivity(intent);
                }
            }
        });

        int scaffoldType = getIntent().getIntExtra("scaffoldType", 1);
//        if ((scaffoldType & 1) != 1) {
//            findViewById(R.id.btn_native).setVisibility(View.GONE);
//        }
        if ((scaffoldType & 2) != 2) {
            findViewById(R.id.btn_weex).setVisibility(View.GONE);
        }
        if ((scaffoldType & 4) != 4) {
            findViewById(R.id.btn_h5).setVisibility(View.GONE);
        }
    }
}
