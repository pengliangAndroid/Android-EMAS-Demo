package com.taobao.demo.weex.custom.component;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.provider.MediaStore;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;

import java.io.File;
import java.io.FileNotFoundException;
import java.lang.ref.WeakReference;

/**
 * 图片选择工具
 * 最后修改日期: 2017/11/1
 */


public class ImageChooseHelper {
    /**
     * 相机获取图片
     */
    private final int REQUEST_CODE_PHOTO = 1;
    /**
     * 图库获取图片
     */
    private final int REQUEST_CODE_ALBUM = 2;
    /**
     * 图片裁剪
     */
    private final int REQUEST_CODE_CROP = 3;

    /**
     * 头像文件
     */
    private File photoFile;
    private Uri corpFileUri;
    private File corpFile;

    /**
     * 是否开启裁剪
     * 默认开启
     */
    private boolean isCrop = true;
    /**
     * 使用弱引用保存Activity实例
     */
    private WeakReference<Activity> activityWeakReference;
    private WeakReference<FragmentActivity> fragmentActivityWeakReference;
    private WeakReference<Fragment> fragmentWeakReference;

    private OnCorpImageListener onCorpImageListener;
    private OnChooseImageListener onChooseImageListener;



    public ImageChooseHelper(Activity activity) {
        activityWeakReference = new WeakReference<>(activity);
    }

    public ImageChooseHelper(Fragment fragment) {
        fragmentWeakReference = new WeakReference<>(fragment);
        fragmentActivityWeakReference = new WeakReference<>(fragment.getActivity());
    }



    /**
     * 获取弱引用中的Activity实例
     *
     * @return activity
     */
    private Activity getActivity() {
        if (fragmentActivityWeakReference != null) {
            return fragmentActivityWeakReference.get();
        }
        return activityWeakReference.get();
    }

    /**
     * 初始化文件名
     */
    private File initFile(String fileName) {
        String dirPath = null;
        if(getActivity() != null){
            dirPath = getActivity().getExternalCacheDir().getAbsolutePath();
        }else{
            if(fragmentWeakReference.get() != null)
                dirPath = fragmentActivityWeakReference.get().getExternalCacheDir().getAbsolutePath();
        }

        File dirFile = new File(dirPath);
        if (!dirFile.exists())
            dirFile.mkdirs();

        return new File(dirPath, fileName);
    }


    /**
     * 设置是否开启裁剪
     *
     * @param isCrop
     */
    public void setCrop(boolean isCrop) {
        this.isCrop = isCrop;
    }

    /**
     * 进入相机
     */
    public void startCamera() {
        // 调用系统的拍照功能
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);

        intent.putExtra("camerasensortype", 2);// 调用前置摄像头
        intent.putExtra("autofocus", true);// 自动对焦
        intent.putExtra("fullScreen", false);// 全屏
        intent.putExtra("showActionIcons", false);
        intent.putExtra(MediaStore.Images.Media.ORIENTATION, 0);

        // 指定调用相机拍照后照片的储存路径
        File file = initFile(System.currentTimeMillis() + ".png");
        photoFile = file;

        intent.putExtra(MediaStore.EXTRA_OUTPUT, getUri(file));

        if (fragmentWeakReference != null) {
            fragmentWeakReference.get().startActivityForResult(intent, REQUEST_CODE_PHOTO);
        } else {
            if (getActivity() != null) {
                getActivity().startActivityForResult(intent, REQUEST_CODE_PHOTO);
            }
        }

    }

    /**
     * 进入图库选图
     * fix by Sai on 2018.03.21. 解决No Activity found to handle Intent { act=android.intent.action.PICK dat=content://media/external/images/media typ=image/* }
     */
    public void startImageChoose() {
        Intent intent = new Intent(Intent.ACTION_PICK, null);
        intent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                "image/*");

        if (intent.resolveActivity(getActivity().getPackageManager()) != null) {
            //进入选图
            if (fragmentWeakReference != null) {
                fragmentWeakReference.get().startActivityForResult(intent, REQUEST_CODE_ALBUM);
            } else {
                getActivity().startActivityForResult(intent, REQUEST_CODE_ALBUM);
            }
        }
    }

    /**
     * 获取真实图片路径
     *
     * @param contentUri
     * @return
     */
    public String getRealPathFromURI(Uri contentUri) {
        String res = null;
        String[] proj = {MediaStore.Images.Media.DATA};
        Cursor cursor = getActivity().getContentResolver().query(contentUri, proj, null, null, null);
        if (cursor.moveToFirst()) {
            int column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
            res = cursor.getString(column_index);
        }
        cursor.close();
        return res;
    }

    /**
     * 获取图片的ContextUri
     *
     * @param imageFile 图片文件
     * @return ContextUri
     */
    public Uri getImageContentUri(File imageFile) {
        if (imageFile==null){
            return null;
        }
        String filePath = imageFile.getAbsolutePath();
        Cursor cursor = getActivity().getContentResolver().query(
                MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                new String[]{MediaStore.Images.Media._ID},
                MediaStore.Images.Media.DATA + "=? ",
                new String[]{filePath}, null);

        if (cursor != null && cursor.moveToFirst()) {
            int id = cursor.getInt(cursor
                    .getColumnIndex(MediaStore.MediaColumns._ID));
            cursor.close();
            Uri baseUri = Uri.parse("content://media/external/images/media");
            return Uri.withAppendedPath(baseUri, "" + id);
        } else {
            if (imageFile.exists()) {
                ContentValues values = new ContentValues();
                values.put(MediaStore.Images.Media.DATA, filePath);
                return getActivity().getContentResolver().insert(
                        MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
            } else {
                return null;
            }
        }
    }

    /**
     * 裁剪照片
     *
     * @param uri 裁剪uri
     */
    private void startPhotoZoom(Uri uri) {
        Intent intent = new Intent("com.android.camera.action.CROP");
        intent.setDataAndType(uri, "image/*");
        // crop为true是设置在开启的intent中设置显示的view可以剪裁
        intent.putExtra("crop", "true");

        // aspectX aspectY 是宽高的比例
        intent.putExtra("aspectX", 480);
        intent.putExtra("aspectY", 480);

        // outputX,outputY 是剪裁图片的宽高
        intent.putExtra("outputX", 480);
        intent.putExtra("outputY", 480);
        intent.putExtra("return-data", false);

        corpFile = initFile("cropImg.png");

        corpFileUri = Uri.fromFile(photoFile);
        intent.putExtra(MediaStore.EXTRA_OUTPUT, corpFileUri);
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION); //添加这一句表示对目标应用临时授权该Uri所代表的文件
        intent.putExtra("outputFormat", Bitmap.CompressFormat.PNG.toString());

        /*String cropTempName = Environment.getExternalStorageDirectory().getPath()
                + "/" +"crop" + "/"
                + System.currentTimeMillis() + "_crop_temp.jpg";
        intent.putExtra(MediaStore.EXTRA_OUTPUT, Uri.fromFile(new File(cropTempName)));
        intent.putExtra("outputFormat", Bitmap.CompressFormat.JPEG.toString());*/
        if (fragmentWeakReference != null) {
            fragmentWeakReference.get().startActivityForResult(intent, REQUEST_CODE_CROP);
        } else {
            getActivity().startActivityForResult(intent, REQUEST_CODE_CROP);
        }
    }

    /**
     * 结果处理
     *
     * @param requestCode
     * @param resultCode
     * @param data
     */
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case REQUEST_CODE_PHOTO:
                if (isCrop) {
                    startPhotoZoom(getImageContentUri(photoFile));
                } else {
                    if (onChooseImageListener != null) {
                        //相机，不裁剪,直接返回Uri和照片文件
                        onChooseImageListener.onChooseImageFinish(getImageContentUri(photoFile), photoFile);
                    }
                }
                break;
            case REQUEST_CODE_ALBUM:
                if (data == null) {
                    return;
                }
                if (isCrop) {
                    startPhotoZoom(data.getData());
                } else {
                    if (onChooseImageListener != null) {
                        //不裁剪,直接返回Uri
                        onChooseImageListener.onChooseImageFinish(data.getData(), new File(getRealPathFromURI(data.getData())));
                    }
                }
                break;
            case REQUEST_CODE_CROP:
               /* if (data == null) {
                    return;
                }
                if (data.getExtras() != null) {
                    Bundle bundle = data.getExtras();
                    Bitmap photo = bundle.getParcelable("data");
                    ByteArrayOutputStream baos = new ByteArrayOutputStream();
                    if (photo != null) {
                        photo.compress(Bitmap.CompressFormat.PNG, getImageConfigProvider().getCompressQuality(), baos);
                    }

                    FileOutputStream fos = null;
                    if (mOnFinishChooseAndCropImageListener != null) {

                        try {
                            if (file != null) {
                                file.getParentFile().delete();//删除照片
                            }
                            //将裁剪出来的Bitmap转换成本地文件
                            File file = initFile(String.valueOf(System.currentTimeMillis()/1000)+"temp.png");
                            fos = new FileOutputStream(file);
                            fos.write(baos.toByteArray());
                            fos.flush();
                            //通知图库有更新
                            getActivity().sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.parse("file://" + file.getPath())));

                            //裁剪过后返回Bitmap,处理生成文件用来上传
                            mOnFinishChooseAndCropImageListener.onFinish(photo, file);
                        } catch (IOException e) {
                            e.printStackTrace();
                        } finally {
                            if (fos != null)
                                try {
                                    fos.close();
                                } catch (IOException e) {
                                    e.printStackTrace();
                                }
                            if (baos != null)
                                try {
                                    baos.close();
                                } catch (IOException e) {
                                    e.printStackTrace();
                                }


                        }
                    }

                }*/
               if (corpFileUri != null){
                   try {
                       Bitmap bitmap = BitmapFactory.decodeStream(getActivity().getContentResolver().openInputStream(corpFileUri));
                       onCorpImageListener.onCorpImageFinish(bitmap,corpFile);
                   } catch (FileNotFoundException e) {
                       e.printStackTrace();
                   }
               }
                break;
        }
    }

    /**
     * 图片裁剪返回监听
     *
     * @param listener
     */
    public void setOnChooseImageListener(OnChooseImageListener listener) {
        this.onChooseImageListener = listener;
    }

    /**
     * 设置选图裁剪回调监听
     *
     * @param listener 选图裁剪回调监听
     */
    public void setOnCropImageListener(OnCorpImageListener listener) {
        onCorpImageListener = listener;
    }


    /**
     * Android N下获取文件Uri的正确姿势
     *
     * @param file 文件
     * @return
     */
    private Uri getUri(File file) {
        if (file == null)
            throw new NullPointerException("文件不存在");
        /*if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            return FileProvider.getUriForFile(getActivity(),
                    getActivity().getPackageName()+".FileProvider", file);
        } */else {
            return Uri.fromFile(file);
        }
    }


    /**
     * 裁剪图片完成回调监听
     */
    public interface OnCorpImageListener {
        void onCorpImageFinish(Bitmap bitmap, File file);
    }

    /**
     * 仅选图完成回调监听
     */
    public interface OnChooseImageListener {
        void onChooseImageFinish(Uri uri, File file);
    }


}
