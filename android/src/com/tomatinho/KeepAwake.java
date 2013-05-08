package com.tomatinho;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.os.PowerManager.WakeLock;
import android.os.PowerManager;
import android.content.Context;

/**
 * This class echoes a string called from JavaScript.
 */
public class KeepAwake extends Plugin {



    public PowerManager.WakeLock wl;

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action        The action to execute.
     * @param args          JSONArry of arguments for the plugin.
     * @param callbackId    The callback id used when calling back into JavaScript.
     * @return              A PluginResult object with a status and message.
     */
    public PluginResult execute(String action, JSONArray args, String callbackId) {
        try {
            if (action.equals("keep_awake")) {
                Integer time = Integer.parseInt(args.getString(0));
                if (time > 0) {

                    PowerManager pm = (PowerManager)this.cordova.getActivity().getSystemService(Context.POWER_SERVICE);
                    wl = pm.newWakeLock(pm.PARTIAL_WAKE_LOCK, "TomatinhoWakeLock");

                    wl.acquire(time);

                    return new PluginResult(PluginResult.Status.OK, time);
                } else {
                    return new PluginResult(PluginResult.Status.ERROR);
                }

            } else {
                return new PluginResult(PluginResult.Status.INVALID_ACTION);
            }
        } catch (JSONException e) {
            return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
        }
    }
}
