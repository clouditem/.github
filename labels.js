/*
  Go on your labels page (https://github.com/user/repo/labels)
  Edit the following label array
  or
  Use this snippet to export github labels (https://gist.github.com/MoOx/93c2853fee760f42d97f)
  and replace it
  Paste this script in your console
  Press Enter!!
*/

[
  {
    "name": "bugfix",
    "color": "eb6420"
  },
  {
    "name": "feature",
    "color": "0e8a16"
  },
  {
    "name": "hotfix",
    "color": "e11d21"
  }
].forEach(function(label) {
  addLabel(label)
})

function updateLabel (label) {
  var flag = false;
  [].slice.call(document.querySelectorAll(".labels-list-item"))
  .forEach(function(element) {
    if (element.querySelector('.label-link').textContent.trim() === label.name) {
      flag = true
      element.querySelector('.js-edit-label').click()
      element.querySelector('.label-edit-name').value = label.name
      element.querySelector('.color-editor-input').value = '#' + label.color
      element.querySelector('.new-label-actions .btn-primary').click()
    }
  })
  return flag
}

function addNewLabel (label) {
  document.querySelector('.new-label input#label-').value = label.name
  document.querySelector('.new-label input#edit-label-color-new').value = '#' + label.color
  document.querySelector('.new-label-actions .btn-primary').click()
}

function addLabel (label) {
  if (!updateLabel(label)) addNewLabel(label)
}
