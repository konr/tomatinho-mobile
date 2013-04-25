package com.tomatinho_mobile;

import java.util.Timer;
import java.util.TimerTask;
import android.view.Menu;
import android.view.MenuItem;
import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.*;
import org.acra.*;
import org.acra.annotation.*;
import android.os.PowerManager.WakeLock;
import android.os.PowerManager;
import android.content.Context;

public class Tomatinho_mobileActivity extends DroidGap
{


    //public PowerManager.WakeLock wl;

    @Override
    public void onCreate(Bundle savedInstanceState){

        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");

        TimerTask task = new TimerTask() {
                public void run() {

                    runOnUiThread(new Runnable() {
                            public void run() {
                                sendJavascript("javascript:tomatinho.core.tick();");
                            }
                        });
                }
            };
        (new Timer()).scheduleAtFixedRate(task, 0, 1000);

        //PowerManager pm = (PowerManager)getSystemService(Context.POWER_SERVICE);
        //wl = pm.newWakeLock(pm.PARTIAL_WAKE_LOCK, "TomatinhoWakeLock");

        //wl.acquire();
    }


    @Override
    public void onDestroy(){
        //wl.release();


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
                if(selected == "Quit") {
                    finish();
                }
                if(selected == "Archive") {
                    super.loadUrl("javascript:tomatinho.core.create_archive_popup();");
                }
                if(selected == "Reset") {
                    super.loadUrl("javascript:tomatinho.core.reset();");
                    super.loadUrl("file:///android_asset/www/index.html");
                }
            }
        return true;
    }

}
