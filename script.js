const p1 = document.getElementsByTagName("p")[0];
const p2 = document.getElementsByTagName("p")[1];
const p3 = document.getElementsByTagName("p")[2];
const p4 = document.getElementsByTagName("p")[3];

const h3_1 = document.getElementsByTagName("h3")[0];
const h3_2 = document.getElementsByTagName("h3")[1];
const h3_3 = document.getElementsByTagName("h3")[2];
const h3_4 = document.getElementsByTagName("h3")[3];

window.onresize = function(event){
  let innerWidth = window.innerWidth;
  innerWidth <= "767" ? p1.style.display = "none" : p1.style.display = "block"; 
  innerWidth <= "767" ? p2.style.display = "none" : p2.style.display = "block"; 
  innerWidth <= "767" ? p3.style.display = "none" : p3.style.display = "block"; 
  innerWidth <= "767" ? p4.style.display = "none" : p4.style.display = "block"; 
  innerWidth > "767" ? h3_1.style.display = "none" : h3_1.style.display = "block"; 
  innerWidth > "767" ? h3_2.style.display = "none" : h3_2.style.display = "block"; 
  innerWidth > "767" ? h3_3.style.display = "none" : h3_3.style.display = "block"; 
  innerWidth > "767" ? h3_4.style.display = "none" : h3_4.style.display = "block"; 
}
