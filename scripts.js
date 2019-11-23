// select button (select all)
function toggle(source) {
  checkboxes = document.getElementsByName('checkbox');
  for(var i=0, n=checkboxes.length;i<n;i++) {
   checkboxes[i].checked = source.checked;
 }
}
//var checkbox = document.querySelector("input[name=checkbox]");
function toggleRequired() {

    if (textInput.hasAttribute('required') !== true) {
        textInput.setAttribute('required','required');
    }

    else {
        textInput.removeAttribute('required');
    }
}

//checkbox.addEventListener('change',toggleRequired,false);

// check the check boxes and return the IDs
// return an array with all the days selected and there data
function check() {
  checkboxes = document.getElementsByName('checkbox');

  var days = [];
  var count = 0;
  for(var i=0, n=checkboxes.length;i<n;i++) {
    if (checkboxes[i].checked){
      var day = [];
      var name = checkboxes[i].id;
      day[0]=name;
      for(var j=0; j<classList.length; j++){

        day[j+1]= document.getElementById(name.concat(classList[j])).value;
        //alert(day);
      }

      //alert(name.concat('Target'));
      days[count]=day;
      count ++;
    }

   //checkboxes[i].checked = source.checked;
 }
//alert(days.length);
 return days;
}
// to build the names to get the elements
var classList = [];
classList["0"] = 'Date';
classList["1"] = 'Target';
classList["2"] = 'Transactions';
classList["3"] = 'Shoes';
classList["4"] = 'Segments';
classList["5"] = 'ST';
classList["6"] = 'ET';
// array for the segmants ti be used for the timce calculations
var segments_val = [];
segments_val["0"]='2,3,3';
segments_val["1"]='3,3,3';
segments_val["2"]='2,3,3,3';
segments_val["3"]='2,2,2,2';
segments_val["4"]='3,3,3,3';
// array for the segmants to calculate percentages
var segments_percent = [];
segments_percent["0"]='18,44,38';
segments_percent["1"]='20,42,38';
segments_percent["2"]='18,33,33,16';
segments_percent["3"]='18,33,31,18';
segments_percent["4"]='20,31,31,18';
// a function to get the values of the segments
// val is the drop list's Id
// flag is for % or values if zero % if 1 values
function getSegmentVal(val,flag){

  var segVal = '';
  var segId = val;

  if(flag == 0){
    segVal = segments_percent[segId];
  }else if (flag == 1){
    segVal = segments_val[segId];
  }

  return segVal;
}

function budget(dayBudget, segments,flag){
  var seg = getSegmentVal(segments,flag).split(',');
  //var target = document.getElementById(dayBudget).value;
  var target = dayBudget;

  var bud = [];
  for(var i = 0; i<seg.length; i++){
    var n = Math.round((seg[i]*target)/100);
    bud[i]= n.toString();
  }
  //alert(bud);
  //alert(target);
  // array of the calculated bugets for every segment
  // by the defult %
  return bud;
}
function seg_time(startTime,endTime, segments,flag){

  var sTimes = [];
  var t = startTime;
  var temp = 0;
  var newT = '';
  var seg = getSegmentVal(segments,flag).split(',');
  for(var i = 0; i<seg.length; i++){
    var times =[];

    if (i ==0){
      newT = t;
    }
    temp = +temp + +seg[i];
    times[0] = newT;
    if (i == (seg.length-1)){
      times[1] = endTime;
    }else{
      times[1] = moment(t,"HH:mm").add(temp,'hours').format("HH:mm");
    }
    newT = times[1];
    //alert(times);

    sTimes[i]=times;
  }
  //alert(t);
  //alert(temp);
  //alert(sTimes);
  return sTimes;

}
