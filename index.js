const input = document.getElementById("input");
const output = document.getElementById("output");
const number = document.getElementById("number");
const sign = document.getElementById("sign");

let text = "";
let modtext = "";
let inputSign;

sign.addEventListener("click", (e) => {
  e.preventDefault();
  const sn = document.getElementById("sn").value;
  let modtext = "";
  text = input.value;
  let tx = text.split(/\n/g);
  inputSign = sn || "-";
  let newt = "";
  tx.forEach((item) => {
    if (item.match(/^\s*\S/)) {
      newt = `${inputSign} ` + item;
      newt = newt.replace(/$/g, ` <br> `);
      modtext += newt;
    }
  });
  output.innerHTML = modtext;
});

number.addEventListener("click", (e) => {
  e.preventDefault();
  let modtext = "";
  text = input.value;
  let tx = text.split(/\n/g);
  let size = 1;
  let newt = "";
  let b = parseInt(tx.length.toString().length);
  tx.forEach((item) => {
    if (item.match(/^\s*\S/)) {
      let s = parseInt(size.toString().length);
      let c = "";
      for (let i = 0; i < b - s; i++) {
        c += "0";
      }
      newt = `${c}${size}. ` + item;
      newt = newt.replace(/$/g, ` <br> `);
      modtext += newt;
      size++;
    }
  });
  output.innerHTML = modtext;
});
