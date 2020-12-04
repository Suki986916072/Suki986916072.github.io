var names = []; //课程名字
var scores = [];//学分
var hours = [];//学时

var $ = function (id) { return document.getElementById(id); };

var transformation = function(){
    var lettergrade = $("grade").value;
    if(lettergrade == "a" || "A"){
        scores = 4.0;
    }
    else if(lettergrade == "b" || "B"){
        scores = 3.0;
    }
    else if(lettergrade == "c" || "C"){
        scores = 2.0;
    }
    else if(lettergrade == "d" || "D"){
        scores = 1.0;
    }
    else if(lettergrade == "e" || "E"){
        scores = 0.0;
    }
}

var addtoTranscript = function(){         //添加课程
    var name = $("name").value;
    var grade = $("grade").value;
    var hour = $("hour").value;
    
    names[names.length] = name;
    scores[scores.length] = parseFloat(grade);
    hours[hours.length] = parseInt(hour);
}

var GPA = function(){                   //展示GPA
    var weightedscore = 0; //加权分数
    var sum = 0;            //加权分数的和
    var sumhours = 0;        //总学时
    for(i=0; i<scores.length;i++){
        weightedscore = scores[i] * hours[i];
        sum = sum + weightedscore;
        sumhours = sumhours + hours[i];
        
    }
    var gpa = sum / sumhours;
    $("results").innerHTML = "<br><h2>Results</h2><p>Weighted Score="+ sum + "</p><p>GPA = " + gpa + "<p>"
}
    

var Display_Transcript = function(){  //展示成绩单
    var html = "<h2>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTranscript</h2><tr><td><b>Course Name</b></td><td><b>Credit</b></td><td><b>Class Hour</b></td></tr>"
    for(var i=0; i<scores.length;i++){
        html = html + "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td><td>" + hours[i] + "</td></tr>";
    }
    
    $("Transcript").innerHTML = html;
}
window.onload = function () {
	$("add").onclick = addtoTranscript;                     //添加课程
	$("Display_GPA").onclick = GPA;                         //展示GPA
	$("Display_Transcript").onclick = Display_Transcript;   //展示成绩单
};