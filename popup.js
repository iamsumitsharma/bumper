// // var reminderList = [];
// // var expiredList = [];

// // window.onload = function() {
// //     var loadedTime = Date();

// //     //onloading send a handshake to the background script
// //     chrome.runtime.sendMessage({msg: "handshake",cmd:"handshake", date: loadedTime},
// //         function (response) {
// //         });

// //     //now listen for the handshake to be received, should return all data stored
// //     chrome.runtime.onMessage.addListener(
// //         function(request, sender, sendResponse) {
// //             if (request.cmd == "sendAll"){
// //                 //clear both lists first
// //                 while (document.getElementById("reminders").firstChild) {
// //                     document.getElementById("reminders").removeChild(document.getElementById("reminders").firstChild);
// //                 }
// //                 while (document.getElementById("expRems").firstChild) {
// //                     document.getElementById("expRems").removeChild(document.getElementById("expRems").firstChild);
// //                 }

// //                 //now populate the list with all of the reminders
// //                 reminderList = request.allReminders;
// //                 expiredList = request.expiredReminders;

// //                 var btn;
// //                 //for each reminder, create a new text node in the list
// //                 for (var i = 0; i < reminderList.length; i++) {
// //                     var newElement = document.createElement("LI");

// //                     //also create a new delete button, one for each reminder
// //                     btn = document.createElement("BUTTON");
// //                     btn.appendChild(document.createTextNode('X'));

// //                     //set the new button id = to the reminder's unique timestamp
// //                     btn.id = reminderList[i].date;

// //                     //let the button be a child of the new reminder
// //                     newElement.appendChild(btn);
// //                     var newString = reminderList[i].expireDate.split("GMT");//add part of the timestamp to the reminder
// //                     newElement.appendChild(document.createTextNode(" " + reminderList[i].msg + " [Expires @]: " + newString[0]));
// //                     document.getElementById("reminders").appendChild(newElement);
// //                 }

// //                 var btn2;
// //                 //for each reminder, create a new text node in the list
// //                 if(expiredList.length>0) {
// //                     for (var i = 0; i < expiredList.length; i++) {
// //                         var newElement = document.createElement("LI");

// //                         //also create a new delete button, one for each reminder
// //                         btn2 = document.createElement("BUTTON");
// //                         btn2.appendChild(document.createTextNode('X'));

// //                         //set the new button id = to the reminder's unique timestamp
// //                         btn2.id = expiredList[i].date;

// //                         //let the button be a child of the new expired reminder
// //                         newElement.appendChild(btn2);
// //                         var newString = expiredList[i].expireDate.split("GMT");//add part of the timestamp to the reminder
// //                         newElement.appendChild(document.createTextNode(" " + expiredList[i].msg + " [Expired @]: " + newString[0]));
// //                         document.getElementById("expRems").appendChild(newElement);
// //                     }
// //                 }

// //                 //set a click event listener for the reminder List
// //                 document.getElementById("reminders").addEventListener("click", function (e) {
// //                     //if the target is one of the buttons, delete that child of the reminder List
// //                     if (e.target && (e.target.nodeName == "BUTTON" || e.target.nodeName == "I")) {
// //                         for(var i = 0; i < reminderList.length; i++){
// //                             if(reminderList[i].date == e.target.id){
// //                                 //remove the selected reminder from the reminderList and update the storage and list
// //                                 reminderList.splice(i,1);
// //                                 document.getElementById("reminders").removeChild(document.getElementById("reminders").childNodes[i]);

// //                                 //tell the background script to update the storage with the modified list
// //                                 chrome.runtime.sendMessage({newList: reminderList, cmd:"delete"},
// //                                     function (response) {
// //                                     });

// //                             }
// //                         }
// //                     }
// //                 });

// //                 //set a click event listener for the expired list
// //                 document.getElementById("expRems").addEventListener("click", function (e) {
// //                     //if the target is one of the buttons, delete that child of the reminder List
// //                     if (e.target && (e.target.nodeName == "BUTTON" || e.target.nodeName == "I")) {
// //                         for(var i = 0; i < expiredList.length; i++){
// //                             if(expiredList[i].date == e.target.id){
// //                                 //remove the selected reminder from the reminderList and update the storage and list
// //                                 expiredList.splice(i,1);
// //                                 document.getElementById("expRems").removeChild(document.getElementById("expRems").childNodes[i]);

// //                                 //tell the background script to update the storage with the modified list
// //                                 chrome.runtime.sendMessage({newExpiredList: expiredList, cmd:"deleteExp"},
// //                                     function (response) {
// //                                     });

// //                             }
// //                         }
// //                     }
// //                 });
// //             }
// //         }
// //     );
// // }

// // document.addEventListener('DOMContentLoaded', function() {
// //     //create an event listener after the DOM content has loaded to listen for when the submit button is pressed
// //     document.getElementById('submit').addEventListener('click', function() {
        
// //         console.log("i am hereee");
// //         //once the submit button is pressed, grab the value from the text field and reset the value
// //         // var newReminder = document.getElementById("reminder").value;
// //         // var expirationTime = document.getElementById("expireTime").value;
// //         // var expDateStr = String(new Date(expirationTime));
// //         var timeStamp = Date();
// //         var timeDifference = 1652390310;
// //         //get the time that the user wants the reminder to be set for an find out if it is in the future

// //         //ensure no fields are left invalid
// //         if(true){
// //          //   alert("Enter a Note and a DateTime!");
// //         }else{
// //             if(newReminder == ""){
// //                 alert("Enter a Note!");
// //             }
// //             if(expirationTime == ""){
// //                 alert("Enter a DateTime!");
// //             }
// //             if(timeDifference >= 0){
// //                 alert("Plan a Reminder for the Future!");
// //             }
// //         }
// //         //if the newReminder is not empty add it to the list of reminders
// //         if(true){
// //           //  document.getElementById("reminder").value = "";
// //          //   document.getElementById("expireTime").value = "";

// //             //send the reminder to the background
// //             chrome.alarms.onAlarm.addListener( function (alarm) {
  
// //                 // Clear any notification with the same name
// //                 chrome.notifications.clear('take-a-break-notification')
                
// //                 var notification = chrome.notifications.create(
// //                   'take-a-break-notification', {
// //                     type: 'basic',
// //                     iconUrl: 'notif-icon.png', // Replace with your own image
              
// //                     // Customize either the notification title or message
// //                     title: 'Take a break!',
// //                     message: 'Look away from your computer screen and focus on a spot 20 feet away for 20 seconds.'
// //                   },
              
// //                   function () {}
              
// //                 );
// //               });



// //             chrome.tabs.sendMessage({msg: newReminder},
// //                 function (response) {
// //                     alert("Enter a Note and a DateTime!");
// //                     console.log("inside", response);
// //                 });

// //             //once the new reminder has been sent, refresh the popup's reminderList
// //             console.log("here", chrome);
// //             chrome.runtime.onMessage.addListener(
// //                 function(request, sender, sendResponse) {
// //                     if (request.cmd == "refresh") {
// //                         //now populate the list with all of the reminders
// //                         reminderList = request.allReminders.uniqKey;
// //                         while (document.getElementById("reminders").firstChild) {
// //                             document.getElementById("reminders").removeChild(document.getElementById("reminders").firstChild);
// //                         }
// //                         var btn;
// //                         //for each reminder, create a new text node in the list

// //                         for (var i = 0; i < reminderList.length; i++) {
// //                             var newElement = document.createElement("LI");

// //                             //also create a new delete button, one for each reminder
// //                             btn = document.createElement("BUTTON");
// //                             btn.appendChild(document.createTextNode('X'));

// //                             //set the new button id = to the reminder's unique timestamp
// //                             btn.id = reminderList[i].date;

// //                             //let the button be a child of the new reminder
// //                             newElement.appendChild(btn);
// //                             var newString = reminderList[i].expireDate.split("GMT");//add part of the timestamp to the reminder
// //                             newElement.appendChild(document.createTextNode(" " + reminderList[i].msg + " [Expires @]: " + newString[0]));
// //                             document.getElementById("reminders").appendChild(newElement);
// //                         }
// //                     }
// //                 });


// //         }
// //     });

// //     //event for clicking the dismiss all expired reminders button
// //     document.getElementById('dismiss').addEventListener('click', function() {
// //         chrome.runtime.sendMessage({cmd: "dismissAll"},
// //             function (response) {
// //                 //clear the expired list
// //                 while (document.getElementById("expRems").firstChild) {
// //                     document.getElementById("expRems").removeChild(document.getElementById("expRems").firstChild);
// //                 }
// //             });
// //     });
// // });

async function manageHistoryStorage(key) {
    let historyCache= new Promise(function(resolve, reject){
        chrome.storage.sync.get("historyList", function(options){
            resolve(options);
        })
    });

    let entries = await historyCache;
    console.log(entries);
    if(entries && entries['historyList']) {
        entries = JSON.parse(entries.historyList);
        entries.push(...key);
        chrome.storage.sync.set({"historyList": JSON.stringify(entries)});
    } else {
        chrome.storage.sync.set({"historyList": JSON.stringify(key)});
    }
}

var alarmClock = {

    onHandler : (e) =>  {

        {
            let minutesToAddList = document.getElementsByName("timeAlloted");
            let agendaList = document.getElementsByName('agenda');
            let counter = 0;
            let historyList = [];
            chrome.storage.sync.get("historyList", function (obj) {
                console.log(obj);
            });
            agendaList.forEach(agendaValue => {
                let stringNewDate = String(new Date());
               let minutesToAdd = minutesToAddList[counter].value;
               console.log(minutesToAdd);
               //let minutesToAdd  = 2;
                const agenda = agendaValue.value;
                let currentDateTime = new Date();
                let finalDate = new Date(currentDateTime.getTime() + minutesToAdd*60000);
                const time = minutesToAdd;
             //   const time = minutesToAdd;
                // to be made a function
                console.log(time);
                stringNewDate = stringNewDate.slice(0, stringNewDate.indexOf(new Date().getFullYear()) + 5) + time + ':00' + ' ' + stringNewDate.slice(stringNewDate.indexOf('GMT'));
        
                console.log('newDate', stringNewDate);
        
                chrome.alarms.create(agenda, {
                    when: new Date(stringNewDate).getTime()
                });
                historyList.push({'minute': time, 'task':agenda});
                counter++;
            })
            manageHistoryStorage(historyList);
        }
  
        // let stringNewDate = String(new Date()); // it will return date as e.g Tue Feb 27 2019 11:10:45 GMT+0530 (India Standard Time)

        // let minutesToAdd = document.getElementById('timeAlloted').value;
        // const agenda = document.getElementById('agenda').value;
        // let currentDateTime = new Date();
        // let finalDate = new Date(currentDateTime.getTime() + minutesToAdd*60000);
        // const time = finalDate.getHours() + ':' + finalDate.getMinutes();
        // // to be made a function
        // console.log(time);
        // stringNewDate = stringNewDate.slice(0, stringNewDate.indexOf(new Date().getFullYear()) + 5) + time + ':00' + ' ' + stringNewDate.slice(stringNewDate.indexOf('GMT'));

        // console.log('newDate', stringNewDate);

        // chrome.alarms.create(agenda, {
        //     when: new Date(stringNewDate).getTime()
        // });
        // function gotAll(alarms) {
        //     for (let alarm of alarms) {
        //       console.log(alarm.name);
        //     }
        //   }
          
        //   let getAlarms = chrome.alarms.getAll();
        //   getAlarms.then(gotAll);
    },

    offHandler : function(e) {
        chrome.alarms.clear("myAlarm");
                window.close();
    },

    handleTime : (e) => {
        e.target.value = new Date().getHours() + ':';
    },

    validateTime: (e) => {
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(e.target.value);

        if (!isValid) {
            e.target.style.backgroundColor = '#fba';
            document.getElementById("alarmOn").disabled = true;
        } else {
            e.target.style.backgroundColor = '#fff';
            document.getElementById("alarmOn").disabled = false;
        }
       
    },

    setup: async function() {
        var max_fields = 10; //maximum input boxes allowed
var wrapper = document.getElementById("mainContainer"); //Fields wrapper
var add_button = document.getElementsByClassName("add_field_button"); //Add button ID
var addFields =  document.getElementById("letsGo").addEventListener("click", myFunction);

chrome.storage.sync.get("historyList", function (obj) {
    console.log(obj);
});
let historyCache= new Promise(function(resolve, reject){
    chrome.storage.sync.get("historyList", (options) => {
        resolve(options);
    })
});

let entries = await historyCache;
let histroyWrapper = document.getElementById("historyContent");
let historyDiv = [];
if(entries && entries['historyList']) {
    entries = JSON.parse(entries.historyList);
} else {
    entries = [];
}
entries.forEach(entry => {
    const historyHtml= `<div class="dkh-form-body additional-body">${entry.task} at ${entry.minute}</div>`
    historyDiv.push(historyHtml);
});

histroyWrapper.insertAdjacentHTML("beforeend", historyDiv.toString());   
var x = 1; 

const myFunction = (e) => {
  e.preventDefault();
  if (x < max_fields) {
    x++;
    const formElementHtml = `<div class="dkh-form-body additional-body"><div class="dkh-form-field"><input autofocus class="dkh-form-field__input" type="text" name="agenda" id="agenda" placeholder="Agenda"></div><div class="dkh-form-field"><input class="dkh-form-field__input" name="timeAlloted_${x}" type="number" id="timeAlloted" placeholder="TimeAlloted(Mins)"></div></div>`;
    wrapper.insertAdjacentHTML("beforeend", formElementHtml);
    document
      .getElementsByName(`timeAlloted_${x}`)[0]
      .addEventListener("focus", alarmClock.handleTime);
    // timeEvent.onfocus =  alarmClock.handleTime;
    // timeEvent.addEventListener('onfocus', alarmClock.handleTime);
    // timeEvent.addEventListener('change', alarmClock.validateTime);
  }
};
        let alarmElement = document.getElementById('alarmOn');
        alarmElement.addEventListener('click',  alarmClock.onHandler);

        const timeEvent = document.querySelector('input[id="timeAlloted"]');
        console.log(timeEvent);
        // timeEvent.addEventListener('focus', alarmClock.handleTime);
        // timeEvent.addEventListener('change', alarmClock.validateTime);
        // var a = document.getElementById('alarmOff');
        // a.addEventListener('click',  alarmClock.offHandler );
    }
};

document.addEventListener('DOMContentLoaded', function () {
alarmClock.setup();
});


