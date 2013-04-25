package mobi.konr.tomatinho;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.*;

public class TomatinhoActivity extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
