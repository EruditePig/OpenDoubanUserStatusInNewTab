// ==UserScript==
// @name            在豆瓣主页点击其他用户发表的某个状态，在新Tab页打开详细页面
// @namespace       http://tampermonkey.net/
// @description     Test
// @version         0.0.6
// @author          EruditePig
// @include         /^https://www\.douban\.com/(\?p=[0-9]+)*$/
// ==/UserScript==]


(function() {
    'use strict';

function OpenDoubanUserStatusInNewTab() 
{
    var douban_status_id = this.parentElement.parentElement.parentElement.getAttributeNode("data-sid").value;
    var douban_user_id = this.parentElement.parentElement.parentElement.getAttributeNode("data-uid").value;
    var url = "https://www.douban.com/people/" + douban_user_id + "/status/" + douban_status_id;
    window.open(url, '_blank');
};
var elems = document.getElementsByClassName("new-status");

Array.from(elems).forEach((el) => {
    // Do stuff here
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "NewTabOpen";                   // Insert text
    btn.onclick = OpenDoubanUserStatusInNewTab;
    btn.className = "erebor-ad";
    var children = el.getElementsByClassName("hd");

    children[0].appendChild(btn);
});

})();
