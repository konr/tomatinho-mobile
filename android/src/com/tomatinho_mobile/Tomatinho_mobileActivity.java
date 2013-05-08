package com.tomatinho_mobile;

import android.view.Menu;
import android.view.MenuItem;
import android.os.Bundle;
import org.apache.cordova.*;
import android.os.Handler;

public class Tomatinho_mobileActivity extends DroidGap
{


    private Handler mHandler = new Handler();

    private Runnable mTick = new Runnable() {
            public void run() {
                mHandler.removeCallbacks(this);
                sendJavascript("javascript:tomatinho.core.tick();");
                mHandler.postDelayed(this, 1000);
            }
        };

    @Override
    public void onCreate(Bundle savedInstanceState){

        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
        mHandler.post(mTick);

    }

    //basic menu button support
    @Override
    public boolean onCreateOptionsMenu(Menu menu)
    {
        super.onCreateOptionsMenu(menu);
        MenuItem item;
        item = menu.add("Archive");
        item = menu.add("Reset");
        item = menu.add("Quit");
        return true;
    }


    //handle menu item selection
    public boolean onOptionsItemSelected(MenuItem item)
    {

        String selected = item.getTitle().toString();

        if (item.hasSubMenu() == false)
            {
                if(selected == "Quit")    finish();
                if(selected == "Archive") super.loadUrl("javascript:tomatinho.core.create_archive_popup();");
                if(selected == "Reset")   super.loadUrl("javascript:tomatinho.core.reset();");
            }
        return true;
    }

}
