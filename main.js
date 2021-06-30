var nameofstudent=[];
function submit(){
    var name1=document.getElementById("name_1").value
    var name2=document.getElementById("name_2").value
    var name3=document.getElementById("name_3").value
    var name4=document.getElementById("name_4").value

    nameofstudent.push(name1,name2,name3,name4);
    console.log(nameofstudent);

    document.getElementById("display_name").innerHTML=nameofstudent;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    nameofstudent.sort()
    document.getElementById("display_name").innerHTML=nameofstudent;
}