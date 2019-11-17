// select button (select all)
function toggle(source) {
  checkboxes = document.getElementsByName('checkbox');
  for(var i=0, n=checkboxes.length;i<n;i++) {
   checkboxes[i].checked = source.checked;
 }
}
// check the check boxes and return the IDs
// return an array with all the days selected and there data
function check() {
  checkboxes = document.getElementsByName('checkbox');

  var days = [];
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
      days[i]=day;
    }

   //checkboxes[i].checked = source.checked;
 }
alert(days.length);
 return days;
}
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
  var segId = document.getElementById(val);

  if(flag == 0){
    segVal = segments_percent[segId.value];
  }else if (flag == 1){
    segVal = segments_val[segId.value];
  }

  return segVal;
}

function budget(dayBudget, segments){
  var seg = getSegmentVal(segments,'0').split(',');
  var target = document.getElementById(dayBudget).value;
  var i;
  var bud = [];
  for(i = 0; i<seg.length; i++){
    bud[i]= Math.round((seg[i]*target)/100);
  }
  alert(bud);
  alert(target);
  // array of the calculated bugets for every segment
  // by the defult %
  return bud;
}
