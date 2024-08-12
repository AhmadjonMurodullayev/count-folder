let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let allPlus = document.getElementById("allPlus");
let allMinus = document.getElementById("allMinus");
let pilus = document.getElementById("pilus")
let minus = document.getElementById("minus")

allPlus.addEventListener("click", (e) => {
  e.preventDefault();
  Allcountplus();
});
allMinus.addEventListener("click", (e) => {
  e.preventDefault();
  AllcountMinus();
});
pilus.addEventListener("click",(e) =>{
   e.preventDefault()
   PilusA()
   PilusB()
   PilusC()
})
minus.addEventListener("click",(e) =>{
   e.preventDefault()
   Minus()
})

let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let totalA = 0;
let totalB = 0;
let totalC = 0;
let totalD = 0;

function PilusA(){
  totalA++;
  num1.textContent = totalA;
  console.log(num1.textContent);
  console.log(totalA);
}
function PilusB(){
  totalB++;
  num2.textContent = totalB;
  console.log(num2.textContent);
  console.log(totalB);
}
function PilusC(){
  totalC++;
  num3.textContent = totalC;
  console.log(num3.textContent);
  console.log(totalC);
}
function Minus(){
  totalA--;
  num1.textContent = totalA;
  console.log(num1.textContent);
  console.log(totalA);
}

function Allcountplus() {
  total1++;
  total2++;
  total3++;
  total4++;
  num1.textContent = total1;
  num2.textContent = total2;
  num3.textContent = total3;
  num4.textContent = total4;
  console.log(num2.textContent);
  console.log(total1);
}

function AllcountMinus() {
  total1--;
  total2--;
  total3--;
  total4--;
  num1.textContent = total1;
  num2.textContent = total2;
  num3.textContent = total3;
  num4.textContent = total4;
  console.log(total1, total2, total3, total4);
}

function AcountPlus() {
  total1++;
  num1.textContent = total1;
  console.log(num2.textContent);
  console.log(total1);
}

function AcountMinus() {
  total1--;
  num1.textContent = total1;
  console.log(num1.textContent);
  console.log(total1);
}

function BcountPlus() {
  total2++;
  num2.textContent = total2;
  console.log(num2.textContent);
  console.log(total2);
}
function BcountMinus() {
  total2--;
  num2.textContent = total2;
  console.log(num2.textContent);
  console.log(total2);
}

function CcountPlus() {
  total3++;
  num3.textContent = total3;
  console.log(num3.textContent);
  console.log(total3);
}
function CcountMinus() {
  total3--;
  num3.textContent = total3;
  console.log(num3.textContent);
  console.log(total3);
}

function DcountPlus() {
  total4++;
  num4.textContent = total4;
  console.log(num4.textContent);
  console.log(total4);
}
function DcountMinus() {
  total4--;
  num4.textContent = total4;
  console.log(num4.textContent);
  console.log(total4);
}





























document.querySelectorAll('.add-task').forEach(button => {
  button.addEventListener('click', function() {
      const columnId = this.getAttribute('data-column');
      const taskList = document.getElementById(columnId);
      const newTask = document.createElement('div');
      newTask.classList.add('bg-blue-100', 'p-2', 'rounded', 'hover:bg-blue-200');
      newTask.textContent = `New Task ${taskList.children.length + 1}`;
      taskList.appendChild(newTask);
  });
});
