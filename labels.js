/*
  Go on your labels page (https://github.com/user/repo/labels)
  Paste this script in your console
  add extract_labels(); to extract github labels
  add upsert_labels(); to update github labels
  Press Enter!!
*/

const extracted_labels = [
  {
    "name": "Project",
    "description": null,
    "color": "0052cc"
  },
  {
    "name": "Stahl Gmbh",
    "description": null,
    "color": "b60205"
  },
  {
    "name": "Wertstoffhof",
    "description": null,
    "color": "5319e7"
  },
   {
    "name": "01-workdays",
    "description": null,
    "color": "00ff00"
  },
  {
    "name": "02-workdays",
    "description": null,
    "color": "22dd00"
  },
  {
    "name": "03-workdays",
    "description": null,
    "color": "44bb00"
  },
  {
    "name": "05-workdays",
    "description": null,
    "color": "779900"
  },
  {
    "name": "08-workdays",
    "description": null,
    "color": "aa7700"
  },
  {
    "name": "13-workdays",
    "description": null,
    "color": "cc5500"
  },
  {
    "name": "20-workdays",
    "description": null,
    "color": "ee3300"
  },
  {
    "name": "40-workdays",
    "description": null,
    "color": "ff0000"
  },
  {
    "name": "99-workdays",
    "description": null,
    "color": "ff0055"
  },
  {
    "name": "effort-estimate-1",
    "description": null,
    "color": "00ff00"
  },
  {
    "name": "effort-estimate-100",
    "description": null,
    "color": "ff0055"
  },
  {
    "name": "effort-estimate-13",
    "description": null,
    "color": "cc5500"
  },
  {
    "name": "effort-estimate-2",
    "description": null,
    "color": "22dd00"
  },
  {
    "name": "effort-estimate-20",
    "description": null,
    "color": "ee3300"
  },
  {
    "name": "effort-estimate-3",
    "description": null,
    "color": "44bb00"
  },
  {
    "name": "effort-estimate-40",
    "description": null,
    "color": "ff0000"
  },
  {
    "name": "effort-estimate-5",
    "description": null,
    "color": "779900"
  },
  {
    "name": "effort-estimate-8",
    "description": null,
    "color": "aa7700"
  },
  {
    "name": "value-estimate-1",
    "description": null,
    "color": "000000"
  },
  {
    "name": "value-estimate-100",
    "description": null,
    "color": "ffffff"
  },
  {
    "name": "value-estimate-13",
    "description": null,
    "color": "999999"
  },
  {
    "name": "value-estimate-2",
    "description": null,
    "color": "111111"
  },
  {
    "name": "value-estimate-20",
    "description": null,
    "color": "bbbbbb"
  },
  {
    "name": "value-estimate-3",
    "description": null,
    "color": "333333"
  },
  {
    "name": "value-estimate-40",
    "description": null,
    "color": "dddddd"
  },
  {
    "name": "value-estimate-5",
    "description": null,
    "color": "555555"
  },
  {
    "name": "value-estimate-8",
    "description": null,
    "color": "777777"
  }
];

function upsert_labels (){
  
function updateLabel(label) {
  var flag = false;
  [].slice
    .call(document.querySelectorAll(".js-labels-list-item"))
    .forEach(function (element) {
      if (
        element.querySelector(".js-label-link").textContent.trim() === label.name
      ) {
        flag = true;
        element.querySelector(".js-edit-label").click();
        element.querySelector(".js-new-label-name-input").value = label.name;
        element.querySelector(".js-new-label-description-input").value = label.description;
        element.querySelector(".js-new-label-color-input").value = "#" + label.color;
        element.querySelector(".js-edit-label-cancel ~ .btn-primary").click();
      }
    });
  return flag;
}

function addNewLabel(label) {
  document.querySelector(".js-new-label-name-input").value = label.name;
  document.querySelector(".js-new-label-description-input").value = label.description;
  document.querySelector(".js-new-label-color-input").value = "#" + label.color;
  document.querySelector(".js-details-target ~ .btn-primary").disabled = false;
  document.querySelector(".js-details-target ~ .btn-primary").click();
}

function addLabel(label) {
  if (!updateLabel(label)) addNewLabel(label);
}
  
  extracted_labels.forEach(function (label) {
    addLabel(label);
  });
  
}

// Your labels



function extract_labels  (){
  
var labels = [];
function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
}
function rgba2hex(rgba) {
    rgba = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.*\d+)?\)$/);
    return hex(rgba[1]) + hex(rgba[2]) + hex(rgba[3]);
}
[].slice.call(document.querySelectorAll(".js-label-link"))
    .forEach(function (element) {
        labels.push({
            name: element.textContent.trim(),
            description: element.getAttribute("title"),
            color: rgba2hex(window.getComputedStyle(element).getPropertyValue("background-color")),
        })
    });
console.log(JSON.stringify(labels, null, 2));
  
}

//extract_labels();
//upsert_labels();
