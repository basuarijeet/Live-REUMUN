var inid = window.setInterval(everySecond, 1000);
var sec, min, hr, day; 
var secq=true, minq=true, hrq=true, dayq=true, changed=false;
var time, startDate, endDate;
function everySecond(){
 if(secq) {
  if(sec==null) {
   sec = document.getElementById('clock-sec');
   min = document.getElementById('clock-minutes');
   hr = document.getElementById('clock-hours');
   day = document.getElementById('clock-days');
   startDate = new Date(2023, 10, 7, 9, 0);
   endDate = new Date(2023, 10, 8, 19, 0);
  }
  time = startDate-new Date();
  if(time/1000 <= 0) {
   secq = false;
   if(minq)
   {
    var mintemp = document.getElementById('mins');
    mintemp.parentNode.removeChild(mintemp);
    minq = false;
    var hrtemp = document.getElementById('hrs');
    hrtemp.parentNode.removeChild(hrtemp);
    hrq = false;
    var daytemp = document.getElementById('days');
    daytemp.parentNode.removeChild(daytemp);
    dayq = false;
   }
   var tt = document.getElementById('secs');
   tt.style.fontSize = '20px';
   tt.innerHTML = 'REUMUN 2023 has commenced. Wishing all the best to every delegate!';
  }
  else
  {
   time = Math.floor(time/1000);
   sec.innerHTML = ''+(time%60);
   if(minq) {
    time = Math.floor(time/60);
    if(time > 0)
    {
     min.innerHTML = ''+(time%60);
     if(hrq)
     {
      time = Math.floor(time/60);
      if(time > 0)
      {
       hr.innerHTML = ''+(time%24);
       if(dayq)
       {
        time = Math.floor(time/24);
        if(time>0)
        {
         day.innerHTML = ''+(time);
        }
        else 
        {
         var daytemp = document.getElementById('days');
         daytemp.parentNode.removeChild(daytemp);
         dayq = false;
        }
       }
      }
      else
      {
       var hrtemp = document.getElementById('hrs');
       hrtemp.parentNode.removeChild(hrtemp);
       hrq = false;
       if(dayq)
       {
        var daytemp = document.getElementById('days');
        daytemp.parentNode.removeChild(daytemp);
        dayq = false;
       }
      }
     }
    }
    else
    {
     var mintemp = document.getElementById('mins');
     mintemp.parentNode.removeChild(mintemp);
     minq = false;
     if(hrq)
     {
      var hrtemp = document.getElementById('hrs');
      hrtemp.parentNode.removeChild(hrtemp);
      hrq = false;
      var daytemp = document.getElementById('days');
      daytemp.parentNode.removeChild(daytemp);
      dayq = false;
 }}}}}
 else if(!changed && endDate-new Date() < 0)
 {
  var tt = document.getElementById('secs');
  tt.style.fontSize = '20px';
  tt.style.fontFamily = 'Kalam';
  tt.style.textAlign = 'left';
  tt.style.padding = '20px';
  tt.style.border = '2px dashed #202020';
  tt.style.backgroundColor = 'white';
  secs.style.color = 'black';
  tt.innerHTML = "8th November, 2023<br><br>Dear delegate,<br><br>If you're reading this, it can only mean one thing. REUMUN 2023 has concluded. It's not like a motion to suspend formal debate (which y'all evidently love). This is the real thing.<br><br>We're sure you must be feeling a lot of emotions right now - you probably have a smile on your face, remembering the great moments you shared with your friends. You might have won an award, and are really excited. Or maybe you didn't. That's alright.<br>If you have come out of this event a better person, you have already won.<br><br>Alright, time to make this extra sappy. An enormous thank you to all our marketing heads for scoring such amazing sponsors. To the members of the Logistics Team, thank you so much for reading all our delegates' chits and relaying the juicy gossip to us. And to all the unsung heroes who worked tirelessly to make this edition of REUMUN the best it could be, your contribution is priceless.<br><br>Are we done? Did we get everybody? Good. Well, peace out. We hope to see you again next year.<br><br>Oh, and may the decorum be with you.<br><br>Our regards,<br>The REUMUN Team.";
  changed = true;
 }
}