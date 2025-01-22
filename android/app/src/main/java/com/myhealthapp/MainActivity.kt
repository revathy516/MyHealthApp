package com.myhealthapp

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.swmansion.gesturehandler.react.GestureHandlerRootView // Correct import
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Use GestureHandlerRootView instead of RNGestureHandlerEnabledRootView
        setContentView(GestureHandlerRootView(this))
    }

    override fun getMainComponentName(): String = "MyHealthApp"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
