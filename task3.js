let output = document.getElementById('output')
let inputname = document.getElementById('nametxt')
let inputemail = document.getElementById('mailtxt')
let submitbtn = document.getElementById('submit')
let clearbtn = document.getElementById('clear')
let inputdob = document.getElementById('dobtxt')
let inputimg = document.getElementById('imgtxt')
let obj = document.querySelectorAll('.cls')
let radios = document.querySelectorAll('.radiobtn')
let checkbox = document.querySelectorAll('.checkbox')
let flag = 0
let uploaded = ''


inputimg.addEventListener('change', function () {
  var reader = new FileReader()
  reader.addEventListener('load', function () {
    uploaded = reader.result
  })
  reader.readAsDataURL(this.files[0])
})

submitbtn.onclick = function () {
  for (i = 0; i < document.querySelectorAll('.inputclass').length; i++) {
    if (document.querySelectorAll('.inputclass')[i].value == '') {
      alert('Fill Details!')
      flag = 1
      break
    }
  }
  if (flag == 1) {
    flag = 0
    return
  } else {
    let divData = document.createElement('div')
    let divImg = document.createElement('div')
    divData.className = 'data'
    divImg.className = 'img'

    let selected
    for (i = 0; i < obj.length; i += 1) {
      if (radios[i].checked == true) {
        selected = radios[i].value
      }
    }

    divImg.innerHTML =
      '<div style="display:flex; margin-top:5% ; border-style: solid;" ><div style="margin:auto 2.5%; "> <img class="display" width="100rem" src="' +
      uploaded +
      '" /></div> <div style="margin-top:1.5%"> <p>Name : ' +
      inputname.value +
      '</p><p>Email : ' +
      inputemail.value +
      '</p><p>DOB : ' +
      inputdob.value +
      '</p><p>Gender : ' +
      selected +
      '</p> </div></div>'
    divData.innerHTML = '<div class="info"></div></div>'
    divData.appendChild(divImg)
    output.appendChild(divData)
  }
}
clearbtn.onclick = function () {
  for (i = 0; i < obj.length; i += 1) {
    obj[i].value = ''
  }
  for (i = 0; i < obj.length; i += 1) {
    radios[i].checked = false
  }
  uploaded = ''
  inputimg.value = ''
}

var list1 = []
var list2 = []

var n = 1
var x = 0

function AddRow() {
  var AddRown = document.getElementById('show')
  var NewRow = AddRown.insertRow(n)

  list1[x] = document.getElementById(
    'nametxt',
    'mailtxt',
    'dobtxt',
    'sex',
    'ski',
  ).value
  list2[x] = document.getElementById('imgtxt').value

  var cel1 = NewRow.insertCell(0)
  var cel2 = NewRow.insertCell(1)

  cel1.innerHTML = list1[x]
  cel2.innerHTML = list2[x]

  n++
  x++
}
