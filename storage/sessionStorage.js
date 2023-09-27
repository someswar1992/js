/*
Session Storage object is used much less often than local storage.

Properties and methods are the same, but its much more limited :
1- The Session storage exists only within the current browser tab.
    Another tab with the same page will have different storage.
    but it is shared b/w iframes in the same tab (Assuming they come from same origin)
2- The data survives page refresh, but not closing/opening the tab.

*/ 