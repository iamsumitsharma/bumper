

// // var alarmClock = {

// //     onHandler : function(e) {
// //         chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.2} );
// //                 window.close();
// //     },

// //     offHandler : function(e) {
// //         chrome.alarms.clear("myAlarm");
// //                 window.close();
// //     },

// //     setup: function() {
// //         var a = document.getElementById('submit');
// //         a.addEventListener('click',  alarmClock.onHandler );
// //       //  var a = document.getElementById('alarmOff');
// //       //  a.addEventListener('click',  alarmClock.offHandler );
// //     }
// // };

// // document.addEventListener('DOMContentLoaded', function () {
// // console.log("here")
// // });

chrome.runtime.onInstalled.addListener((reason) => {
    if (reason !== chrome.runtime.OnInstalledReason.INSTALL) { return }
  });

  let historyCache= new Promise(function(resolve, reject){
    chrome.storage.sync.get("historyList", (options) => {
        resolve(options);
    })
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    const audio = new Audio('./Old-alarm-clock-sound.mp3');
    audio.play();
    alert("Times Up for " + alarm.name + ", lets move to another agenda guys!!");
    const history = await historyCache;
    
  });

// // console.log("start");
// // throw new Error("lol");
// // console.log("end");