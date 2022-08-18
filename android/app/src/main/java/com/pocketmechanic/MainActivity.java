package com.pocketmechanic;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  //  add a third parameter (true) in SplashScreen.show()
   @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this, R.style.SplashStatusBarTheme, true);
    super.onCreate(savedInstanceState);
  }
  
  @Override
  protected String getMainComponentName() {
    return "PocketMechanic";
  }
}
