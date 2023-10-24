var y, yy;
function checkHeader(){
 var x = window.scrollY;
 if(y==null)
  y = document.getElementById('header');
 if(yy==null)
  yy = document.getElementById('titleBar');
 if(x > 10){
  if(y!=null) y.style.backgroundColor = 'rgba(0, 0, 0, 0.79)';
  if(yy!=null) yy.style.backgroundColor = 'rgba(0, 0, 0, 1)';
 }
 else{
  if(y!=null) y.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  if(yy!=null) yy.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
 }
}
window.addEventListener('scroll', checkHeader);