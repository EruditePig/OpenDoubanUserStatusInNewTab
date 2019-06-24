// ==UserScript==
// @name            在豆瓣主页点击其他用户发表的某个状态，在新Tab页打开详细页面
// @namespace       http://tampermonkey.net/
// @description     Test
// @version         0.0.1
// @author          EruditePig
// @include         https://www.douban.com/*
// ==/UserScript==]


(function() {
    'use strict';

function OpenDoubanUserStatusInNewTab() 
{
    console.log("here");
    douban_status_id = this.getAttributeNode("data-sid").value;
    douban_user_id = this.getAttributeNode("data-uid").value;
    var url = "https://www.douban.com/people/" + douban_user_id + "/status/" + douban_status_id;
    window.open(url, '_blank');
};
var elems = document.getElementsByClassName("status-item");

Array.from(elems).forEach((el) => {
    // Do stuff here
    el.addEventListener("click", OpenDoubanUserStatusInNewTab);
});

})();
