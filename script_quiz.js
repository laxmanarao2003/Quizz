let i=1;
 
    
   /* let none_val=document.getElementById("none");
    if(none_val.innerHTML==1)
    {
        let starttime=10;
        let time=starttime*10;
    }
        let t=document.getElementById("time_limit");
        let min=time/60;
        let sec=time%60;
        sec<10 ? "0"+sec:sec;
        t.innerHTML="00"+":"+min+":"+sec;
        time--;
        none_val.innerHTML="0";
        */
 
 function after_load()
 {
    document.getElementById("question1").style.display="block";
    document.getElementById("question2").style.display="none";
    document.getElementById("question3").style.display="none";
    document.getElementById("question4").style.display="none";
    document.getElementById("question5").style.display="none";
    document.getElementById("question6").style.display="none";
    document.getElementById("question7").style.display="none";
    document.getElementById("question8").style.display="none";
    document.getElementById("question9").style.display="none";
    document.getElementById("question10").style.display="none";
    document.getElementById("question11").style.display="none";
    document.getElementById("question12").style.display="none";
    document.getElementById("question13").style.display="none";
    document.getElementById("question14").style.display="none";
    document.getElementById("question15").style.display="none";
    document.getElementById("instructions").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById("profile").style.display="none";
    document.getElementById("quiz_qns").style.display="none";
    document.getElementById("result").style.display="none";
 }
function start_quiz()
{
   
    let btn_span1=document.getElementById("btn_span1");
    btn_span1.classList.add("spinner-border");
    btn_span1.classList.add("text-primary");
    btn_span1.classList.add("spinner-border-sm");
    btn_span1.classList.add("ms-2");
    setTimeout(func2,2000);
}
function func2()
{
    let instr=document.getElementById("instructions");
    let start_btn=document.getElementById("start");
    let btn=document.getElementById("strt_btn1");
    start_btn.classList.remove("bg_img");
    btn.style.display="none";
    instr.style.display="block";
}
function start_btn1()
{
    let btn_span2=document.getElementById("btn_span2");
    let inp1=document.form1.name.value;
    let check=document.getElementById("check");
    if(check.checked==true && inp1.length!=0 && inp1.length<18)
    {   
        btn_span2.classList.add("spinner-border");
        btn_span2.classList.add("text-success");
        btn_span2.classList.add("spinner-border-sm");
        btn_span2.classList.add("ms-2");
        setTimeout(start_btn2,2000);
    }
    else
    {
        window.alert("You must Enter valid Name and \n agree with the instructions");
    }
}

function start_btn2()
{
    let form1=document.form1.name.value;
    let check=document.getElementById("check");
    if(check.checked==true && form1.length!=0 && form1.length<18)
    {
        document.getElementById("user_name").innerHTML=form1.toUpperCase();
        document.getElementById("instructions").style.display="none";
        document.getElementById("profile").style.display="block";
        document.getElementById("quiz_qns").classList.add("d-flex");
        document.getElementById("quiz_qns").classList.add("flex-row");
        document.getElementById("quiz_qns").style.display="block";
    }
}

/****************** Navigating to Next Question ********************/
function next()
{
    let qtn1=document.getElementById("question1");
    let qtn2=document.getElementById("question2");
    let qtn3=document.getElementById("question3");
    let qtn4=document.getElementById("question4");
    let qtn5=document.getElementById("question5");
    let qtn6=document.getElementById("question6");
    let qtn7=document.getElementById("question7");
    let qtn8=document.getElementById("question8");
    let qtn9=document.getElementById("question9");
    let qtn10=document.getElementById("question10");
    let qtn11=document.getElementById("question11");
    let qtn12=document.getElementById("question12");
    let qtn13=document.getElementById("question13");
    let qtn14=document.getElementById("question14");
    let qtn15=document.getElementById("question15");

    if(qtn1.style.display=="block")
    {
        qtn1.style.display="none";
        qtn2.style.display="block";
    }
    else if(qtn2.style.display=="block")
    {
        qtn2.style.display="none";
        qtn3.style.display="block";
    }
    else if(qtn3.style.display=="block")
    {
        qtn3.style.display="none";
        qtn4.style.display="block";
    }
    else if(qtn4.style.display=="block")
    {
        qtn4.style.display="none";
        qtn5.style.display="block";
    }
    else if(qtn5.style.display=="block")
    {
        qtn5.style.display="none";
        qtn6.style.display="block";
    }
    else if(qtn6.style.display=="block")
    {
        qtn6.style.display="none";
        qtn7.style.display="block";
    }
    else if(qtn7.style.display=="block")
    {
        qtn7.style.display="none";
        qtn8.style.display="block";
    }
    else if(qtn8.style.display=="block")
    {
        qtn8.style.display="none";
        qtn9.style.display="block";
    }
    else if(qtn9.style.display=="block")
    {
        qtn9.style.display="none";
        qtn10.style.display="block";
    }
    else if(qtn10.style.display=="block")
    {
        qtn10.style.display="none";
        qtn11.style.display="block";
    }
    else if(qtn11.style.display=="block")
    {
        qtn11.style.display="none";
        qtn12.style.display="block";
    }
    else if(qtn12.style.display=="block")
    {
        qtn12.style.display="none";
        qtn13.style.display="block";
    }
    else if(qtn13.style.display=="block")
    {
        qtn13.style.display="none";
        qtn14.style.display="block";
    }
    else
    {
        qtn14.style.display="none";
        qtn15.style.display="block";
    }
}
/****************** Navigating to Next Question **********************/

/****************** Navigating to Previous Question ***************************/
function prev()
{   
    let qtn1=document.getElementById("question1");
    let qtn2=document.getElementById("question2");
    let qtn3=document.getElementById("question3");
    let qtn4=document.getElementById("question4");
    let qtn5=document.getElementById("question5");
    let qtn6=document.getElementById("question6");
    let qtn7=document.getElementById("question7");
    let qtn8=document.getElementById("question8");
    let qtn9=document.getElementById("question9");
    let qtn10=document.getElementById("question10");
    let qtn11=document.getElementById("question11");
    let qtn12=document.getElementById("question12");
    let qtn13=document.getElementById("question13");
    let qtn14=document.getElementById("question14");
    let qtn15=document.getElementById("question15");

    if(qtn2.style.display=="block")
    {
        qtn2.style.display="none";
        qtn1.style.display="block";
    }
    else if(qtn3.style.display=="block")
    {
        qtn3.style.display="none";
        qtn2.style.display="block";
    }
    else if(qtn4.style.display=="block")
    {
        qtn4.style.display="none";
        qtn3.style.display="block";
    }
    else if(qtn5.style.display=="block")
    {
        qtn5.style.display="none";
        qtn4.style.display="block";
    }
    else if(qtn6.style.display=="block")
    {
        qtn6.style.display="none";
        qtn5.style.display="block";
    }
    else if(qtn7.style.display=="block")
    {
        qtn7.style.display="none";
        qtn6.style.display="block";
    }
    else if(qtn8.style.display=="block")
    {
        qtn8.style.display="none";
        qtn7.style.display="block";
    }
    else if(qtn9.style.display=="block")
    {
        qtn9.style.display="none";
        qtn8.style.display="block";
    }
    else if(qtn10.style.display=="block")
    {
        qtn10.style.display="none";
        qtn9.style.display="block";
    }
    else if(qtn11.style.display=="block")
    {
        qtn11.style.display="none";
        qtn10.style.display="block";
    }
    else if(qtn12.style.display=="block")
    {
        qtn12.style.display="none";
        qtn11.style.display="block";
    }
    else if(qtn13.style.display=="block")
    {
        qtn13.style.display="none";
        qtn12.style.display="block";
    }
    else if(qtn14.style.display=="block")
    {
        qtn14.style.display="none";
        qtn13.style.display="block";
    }
    else if(qtn15.style.display=="block")
    {
        qtn15.style.display="none";
        qtn14.style.display="block";
    }
}
/****************** Navigating to Previous Question ***************************/

/****************** For changing bg when option is clicked ***************************/
function selection()
{
    if(document.getElementById("instructions").style.display=="none")
    {
        let no=document.getElementById("time_limit");
        no.innerHTML=i+" "+"sec";
        if(document.getElementById("quiz_qns").style.display=="block")
        {
            i=i+1;
        }
        else
        {
            document.getElementById("res_time").innerHTML=i+" "+"sec";
        }
    }

    let qtn1_opt1=document.getElementById("qtn1_opt1");
    let qtn1_opt2=document.getElementById("qtn1_opt2");
    let qtn1_opt3=document.getElementById("qtn1_opt3");
    let qtn1_opt4=document.getElementById("qtn1_opt4");
    
    let qtn2_opt1=document.getElementById("qtn2_opt1");
    let qtn2_opt2=document.getElementById("qtn2_opt2");
    let qtn2_opt3=document.getElementById("qtn2_opt3");
    let qtn2_opt4=document.getElementById("qtn2_opt4");

    let qtn3_opt1=document.getElementById("qtn3_opt1");
    let qtn3_opt2=document.getElementById("qtn3_opt2");
    let qtn3_opt3=document.getElementById("qtn3_opt3");
    let qtn3_opt4=document.getElementById("qtn3_opt4");

    let qtn4_opt1=document.getElementById("qtn4_opt1");
    let qtn4_opt2=document.getElementById("qtn4_opt2");
    let qtn4_opt3=document.getElementById("qtn4_opt3");
    let qtn4_opt4=document.getElementById("qtn4_opt4");

    let qtn5_opt1=document.getElementById("qtn5_opt1");
    let qtn5_opt2=document.getElementById("qtn5_opt2");
    let qtn5_opt3=document.getElementById("qtn5_opt3");
    let qtn5_opt4=document.getElementById("qtn5_opt4");

    let qtn6_opt1=document.getElementById("qtn6_opt1");
    let qtn6_opt2=document.getElementById("qtn6_opt2");
    let qtn6_opt3=document.getElementById("qtn6_opt3");
    let qtn6_opt4=document.getElementById("qtn6_opt4");

    let qtn7_opt1=document.getElementById("qtn7_opt1");
    let qtn7_opt2=document.getElementById("qtn7_opt2");
    let qtn7_opt3=document.getElementById("qtn7_opt3");
    let qtn7_opt4=document.getElementById("qtn7_opt4");

    let qtn8_opt1=document.getElementById("qtn8_opt1");
    let qtn8_opt2=document.getElementById("qtn8_opt2");
    let qtn8_opt3=document.getElementById("qtn8_opt3");
    let qtn8_opt4=document.getElementById("qtn8_opt4");

    let qtn9_opt1=document.getElementById("qtn9_opt1");
    let qtn9_opt2=document.getElementById("qtn9_opt2");
    let qtn9_opt3=document.getElementById("qtn9_opt3");
    let qtn9_opt4=document.getElementById("qtn9_opt4");

    let qtn10_opt1=document.getElementById("qtn10_opt1");
    let qtn10_opt2=document.getElementById("qtn10_opt2");
    let qtn10_opt3=document.getElementById("qtn10_opt3");
    let qtn10_opt4=document.getElementById("qtn10_opt4");

    let qtn11_opt1=document.getElementById("qtn11_opt1");
    let qtn11_opt2=document.getElementById("qtn11_opt2");
    let qtn11_opt3=document.getElementById("qtn11_opt3");
    let qtn11_opt4=document.getElementById("qtn11_opt4");

    let qtn12_opt1=document.getElementById("qtn12_opt1");
    let qtn12_opt2=document.getElementById("qtn12_opt2");
    let qtn12_opt3=document.getElementById("qtn12_opt3");
    let qtn12_opt4=document.getElementById("qtn12_opt4");

    let qtn13_opt1=document.getElementById("qtn13_opt1");
    let qtn13_opt2=document.getElementById("qtn13_opt2");
    let qtn13_opt3=document.getElementById("qtn13_opt3");
    let qtn13_opt4=document.getElementById("qtn13_opt4");

    let qtn14_opt1=document.getElementById("qtn14_opt1");
    let qtn14_opt2=document.getElementById("qtn14_opt2");
    let qtn14_opt3=document.getElementById("qtn14_opt3");
    let qtn14_opt4=document.getElementById("qtn14_opt4");

    let qtn15_opt1=document.getElementById("qtn15_opt1");
    let qtn15_opt2=document.getElementById("qtn15_opt2");
    let qtn15_opt3=document.getElementById("qtn15_opt3");
    let qtn15_opt4=document.getElementById("qtn15_opt4");

    /********************** Enable and Disable buttons ******************************/
    let qtn1=document.getElementById("question1");
    let qtn15=document.getElementById("question15");
    let prev=document.getElementById("prevbtn");
    let next=document.getElementById("nextbtn");
    if(qtn1.style.display=="block")
    {
        prev.classList.add("disabled");
    }
    else
    {
        prev.classList.remove("disabled");
    }

    if(qtn15.style.display=="block")
    {
        next.classList.add("disabled");
    }
    else
    {
        next.classList.remove("disabled");
    }
    /********************** Enable and Disable buttons ******************************/

    if(qtn1_opt1.checked || qtn1_opt2.checked || qtn1_opt3.checked || qtn1_opt4.checked)
    {
        document.getElementsByClassName("row1_one")[0].classList.remove("bg-info");
        document.getElementsByClassName("row1_one")[0].classList.add("bg-success");
    }
    if(qtn2_opt1.checked || qtn2_opt2.checked || qtn2_opt3.checked || qtn2_opt4.checked)
    {
        document.getElementsByClassName("row1_two")[0].classList.remove("bg-info");
        document.getElementsByClassName("row1_two")[0].classList.add("bg-success");
    }
    if(qtn3_opt1.checked || qtn3_opt2.checked || qtn3_opt3.checked || qtn3_opt4.checked)
    {
        document.getElementsByClassName("row1_three")[0].classList.remove("bg-info");
        document.getElementsByClassName("row1_three")[0].classList.add("bg-success");
    }
    if(qtn4_opt1.checked || qtn4_opt2.checked || qtn4_opt3.checked || qtn4_opt4.checked)
    {
        document.getElementsByClassName("row1_four")[0].classList.remove("bg-info");
        document.getElementsByClassName("row1_four")[0].classList.add("bg-success");
    }
    if(qtn5_opt1.checked || qtn5_opt2.checked || qtn5_opt3.checked || qtn5_opt4.checked)
    {
        document.getElementsByClassName("row1_five")[0].classList.remove("bg-info");
        document.getElementsByClassName("row1_five")[0].classList.add("bg-success");
    }
    if(qtn6_opt1.checked || qtn6_opt2.checked || qtn6_opt3.checked || qtn6_opt4.checked)
    {
        document.getElementsByClassName("row2_six")[0].classList.remove("bg-info");
        document.getElementsByClassName("row2_six")[0].classList.add("bg-success");
    }
    if(qtn7_opt1.checked || qtn7_opt2.checked || qtn7_opt3.checked || qtn7_opt4.checked)
    {
        document.getElementsByClassName("row2_seven")[0].classList.remove("bg-info");
        document.getElementsByClassName("row2_seven")[0].classList.add("bg-success");
    }
    if(qtn8_opt1.checked || qtn8_opt2.checked || qtn8_opt3.checked || qtn8_opt4.checked)
    {
        document.getElementsByClassName("row2_eight")[0].classList.remove("bg-info");
        document.getElementsByClassName("row2_eight")[0].classList.add("bg-success");
    }
    if(qtn9_opt1.checked || qtn9_opt2.checked || qtn9_opt3.checked || qtn9_opt4.checked)
    {
        document.getElementsByClassName("row2_nine")[0].classList.remove("bg-info");
        document.getElementsByClassName("row2_nine")[0].classList.add("bg-success");
    }
    if(qtn10_opt1.checked || qtn10_opt2.checked || qtn10_opt3.checked || qtn10_opt4.checked)
    {
        document.getElementsByClassName("row2_ten")[0].classList.remove("bg-info");
        document.getElementsByClassName("row2_ten")[0].classList.add("bg-success");
    }
    if(qtn11_opt1.checked || qtn11_opt2.checked || qtn11_opt3.checked || qtn11_opt4.checked)
    {
        document.getElementsByClassName("row3_eleven")[0].classList.remove("bg-info");
        document.getElementsByClassName("row3_eleven")[0].classList.add("bg-success");
    }
    if(qtn12_opt1.checked || qtn12_opt2.checked || qtn12_opt3.checked || qtn12_opt4.checked)
    {
        document.getElementsByClassName("row3_twelve")[0].classList.remove("bg-info");
        document.getElementsByClassName("row3_twelve")[0].classList.add("bg-success");
    }
    if(qtn13_opt1.checked || qtn13_opt2.checked || qtn13_opt3.checked || qtn13_opt4.checked)
    {
        document.getElementsByClassName("row3_thirteen")[0].classList.remove("bg-info");
        document.getElementsByClassName("row3_thirteen")[0].classList.add("bg-success");
    }
    if(qtn14_opt1.checked || qtn14_opt2.checked || qtn14_opt3.checked || qtn14_opt4.checked)
    {
        document.getElementsByClassName("row3_fourteen")[0].classList.remove("bg-info");
        document.getElementsByClassName("row3_fourteen")[0].classList.add("bg-success");
    }
    if(qtn15_opt1.checked || qtn15_opt2.checked || qtn15_opt3.checked || qtn15_opt4.checked)
    {
        document.getElementsByClassName("row3_fifteen")[0].classList.remove("bg-info");
        document.getElementsByClassName("row3_fifteen")[0].classList.add("bg-success");
    }
    
}
/****************** For changing bg when option is clicked ***************************/

/****************** For Clearing Options ***************************/
function clear_t()
{
    let qtn1_opt1=document.getElementById("qtn1_opt1");
    let qtn1_opt2=document.getElementById("qtn1_opt2");
    let qtn1_opt3=document.getElementById("qtn1_opt3");
    let qtn1_opt4=document.getElementById("qtn1_opt4");
    
    let qtn2_opt1=document.getElementById("qtn2_opt1");
    let qtn2_opt2=document.getElementById("qtn2_opt2");
    let qtn2_opt3=document.getElementById("qtn2_opt3");
    let qtn2_opt4=document.getElementById("qtn2_opt4");

    let qtn3_opt1=document.getElementById("qtn3_opt1");
    let qtn3_opt2=document.getElementById("qtn3_opt2");
    let qtn3_opt3=document.getElementById("qtn3_opt3");
    let qtn3_opt4=document.getElementById("qtn3_opt4");

    let qtn4_opt1=document.getElementById("qtn4_opt1");
    let qtn4_opt2=document.getElementById("qtn4_opt2");
    let qtn4_opt3=document.getElementById("qtn4_opt3");
    let qtn4_opt4=document.getElementById("qtn4_opt4");

    let qtn5_opt1=document.getElementById("qtn5_opt1");
    let qtn5_opt2=document.getElementById("qtn5_opt2");
    let qtn5_opt3=document.getElementById("qtn5_opt3");
    let qtn5_opt4=document.getElementById("qtn5_opt4");

    let qtn6_opt1=document.getElementById("qtn6_opt1");
    let qtn6_opt2=document.getElementById("qtn6_opt2");
    let qtn6_opt3=document.getElementById("qtn6_opt3");
    let qtn6_opt4=document.getElementById("qtn6_opt4");

    let qtn7_opt1=document.getElementById("qtn7_opt1");
    let qtn7_opt2=document.getElementById("qtn7_opt2");
    let qtn7_opt3=document.getElementById("qtn7_opt3");
    let qtn7_opt4=document.getElementById("qtn7_opt4");

    let qtn8_opt1=document.getElementById("qtn8_opt1");
    let qtn8_opt2=document.getElementById("qtn8_opt2");
    let qtn8_opt3=document.getElementById("qtn8_opt3");
    let qtn8_opt4=document.getElementById("qtn8_opt4");

    let qtn9_opt1=document.getElementById("qtn9_opt1");
    let qtn9_opt2=document.getElementById("qtn9_opt2");
    let qtn9_opt3=document.getElementById("qtn9_opt3");
    let qtn9_opt4=document.getElementById("qtn9_opt4");

    let qtn10_opt1=document.getElementById("qtn10_opt1");
    let qtn10_opt2=document.getElementById("qtn10_opt2");
    let qtn10_opt3=document.getElementById("qtn10_opt3");
    let qtn10_opt4=document.getElementById("qtn10_opt4");

    let qtn11_opt1=document.getElementById("qtn11_opt1");
    let qtn11_opt2=document.getElementById("qtn11_opt2");
    let qtn11_opt3=document.getElementById("qtn11_opt3");
    let qtn11_opt4=document.getElementById("qtn11_opt4");

    let qtn12_opt1=document.getElementById("qtn12_opt1");
    let qtn12_opt2=document.getElementById("qtn12_opt2");
    let qtn12_opt3=document.getElementById("qtn12_opt3");
    let qtn12_opt4=document.getElementById("qtn12_opt4");

    let qtn13_opt1=document.getElementById("qtn13_opt1");
    let qtn13_opt2=document.getElementById("qtn13_opt2");
    let qtn13_opt3=document.getElementById("qtn13_opt3");
    let qtn13_opt4=document.getElementById("qtn13_opt4");

    let qtn14_opt1=document.getElementById("qtn14_opt1");
    let qtn14_opt2=document.getElementById("qtn14_opt2");
    let qtn14_opt3=document.getElementById("qtn14_opt3");
    let qtn14_opt4=document.getElementById("qtn14_opt4");

    let qtn15_opt1=document.getElementById("qtn15_opt1");
    let qtn15_opt2=document.getElementById("qtn15_opt2");
    let qtn15_opt3=document.getElementById("qtn15_opt3");
    let qtn15_opt4=document.getElementById("qtn15_opt4");

    let qtn1=document.getElementById("question1");
    let qtn2=document.getElementById("question2");
    let qtn3=document.getElementById("question3");
    let qtn4=document.getElementById("question4");
    let qtn5=document.getElementById("question5");
    let qtn6=document.getElementById("question6");
    let qtn7=document.getElementById("question7");
    let qtn8=document.getElementById("question8");
    let qtn9=document.getElementById("question9");
    let qtn10=document.getElementById("question10");
    let qtn11=document.getElementById("question11");
    let qtn12=document.getElementById("question12");
    let qtn13=document.getElementById("question13");
    let qtn14=document.getElementById("question14");
    let qtn15=document.getElementById("question15");

    if(qtn1.style.display=="block")
    {
        qtn1_opt1.checked=false;
        qtn1_opt2.checked=false;
        qtn1_opt3.checked=false;
        qtn1_opt4.checked=false;
        document.getElementsByClassName("row1_one")[0].classList.remove("bg-success");
        document.getElementsByClassName("row1_one")[0].classList.add("bg-info");
    }
    else if(qtn2.style.display=="block")
    {
        qtn2_opt1.checked=false;
        qtn2_opt2.checked=false;
        qtn2_opt3.checked=false;
        qtn2_opt4.checked=false;
        document.getElementsByClassName("row1_two")[0].classList.add("bg-info");
        document.getElementsByClassName("row1_two")[0].classList.remove("bg-success");
    }
    else if(qtn3.style.display=="block")
    {
        qtn3_opt1.checked=false;
        qtn3_opt2.checked=false;
        qtn3_opt3.checked=false;
        qtn3_opt4.checked=false;
        document.getElementsByClassName("row1_three")[0].classList.add("bg-info");
        document.getElementsByClassName("row1_three")[0].classList.remove("bg-success");
    }
    else if(qtn4.style.display=="block")
    {
        qtn4_opt1.checked=false;
        qtn4_opt2.checked=false;
        qtn4_opt3.checked=false;
        qtn4_opt4.checked=false;
        document.getElementsByClassName("row1_four")[0].classList.add("bg-info");
        document.getElementsByClassName("row1_four")[0].classList.remove("bg-success");
    }
    else if(qtn5.style.display=="block")
    {
        qtn5_opt1.checked=false;
        qtn5_opt2.checked=false;
        qtn5_opt3.checked=false;
        qtn5_opt4.checked=false;
        document.getElementsByClassName("row1_five")[0].classList.add("bg-info");
        document.getElementsByClassName("row1_five")[0].classList.remove("bg-success");
    }
    else if(qtn6.style.display=="block")
    {
        qtn6_opt1.checked=false;
        qtn6_opt2.checked=false;
        qtn6_opt3.checked=false;
        qtn6_opt4.checked=false;
        document.getElementsByClassName("row2_six")[0].classList.add("bg-info");
        document.getElementsByClassName("row2_six")[0].classList.remove("bg-success");
    }
    else if(qtn7.style.display=="block")
    {
        qtn7_opt1.checked=false;
        qtn7_opt2.checked=false;
        qtn7_opt3.checked=false;
        qtn7_opt4.checked=false;
        document.getElementsByClassName("row2_seven")[0].classList.add("bg-info");
        document.getElementsByClassName("row2_seven")[0].classList.remove("bg-success");
    }
    else if(qtn8.style.display=="block")
    {
        qtn8_opt1.checked=false;
        qtn8_opt2.checked=false;
        qtn8_opt3.checked=false;
        qtn8_opt4.checked=false;
        document.getElementsByClassName("row2_eight")[0].classList.add("bg-info");
        document.getElementsByClassName("row2_eight")[0].classList.remove("bg-success");
    }
    else if(qtn9.style.display=="block")
    {
        qtn9_opt1.checked=false;
        qtn9_opt2.checked=false;
        qtn9_opt3.checked=false;
        qtn9_opt4.checked=false;
        document.getElementsByClassName("row2_nine")[0].classList.add("bg-info");
        document.getElementsByClassName("row2_nine")[0].classList.remove("bg-success");
    }
    else if(qtn10.style.display=="block")
    {
        qtn10_opt1.checked=false;
        qtn10_opt2.checked=false;
        qtn10_opt3.checked=false;
        qtn10_opt4.checked=false;
        document.getElementsByClassName("row2_ten")[0].classList.add("bg-info");
        document.getElementsByClassName("row2_ten")[0].classList.remove("bg-success");
    }
    else if(qtn11.style.display=="block")
    {
        qtn11_opt1.checked=false;
        qtn11_opt2.checked=false;
        qtn11_opt3.checked=false;
        qtn11_opt4.checked=false;
        document.getElementsByClassName("row3_eleven")[0].classList.add("bg-info");
        document.getElementsByClassName("row3_eleven")[0].classList.remove("bg-success");
    }
    else if(qtn12.style.display=="block")
    {
        qtn12_opt1.checked=false;
        qtn12_opt2.checked=false;
        qtn12_opt3.checked=false;
        qtn12_opt4.checked=false;
        document.getElementsByClassName("row3_twelve")[0].classList.add("bg-info");
        document.getElementsByClassName("row3_twelve")[0].classList.remove("bg-success");
    }
    else if(qtn13.style.display=="block")
    {
        qtn13_opt1.checked=false;
        qtn13_opt2.checked=false;
        qtn13_opt3.checked=false;
        qtn13_opt4.checked=false;
        document.getElementsByClassName("row3_thirteen")[0].classList.add("bg-info");
        document.getElementsByClassName("row3_thirteen")[0].classList.remove("bg-success");
    }
    else if(qtn14.style.display=="block")
    {
        qtn14_opt1.checked=false;
        qtn14_opt2.checked=false;
        qtn14_opt3.checked=false;
        qtn14_opt4.checked=false;
        document.getElementsByClassName("row3_fourteen")[0].classList.add("bg-info");
        document.getElementsByClassName("row3_fourteen")[0].classList.remove("bg-success");
    }
    else if(qtn15.style.display=="block")
    {
        qtn15_opt1.checked=false;
        qtn15_opt2.checked=false;
        qtn15_opt3.checked=false;
        qtn15_opt4.checked=false;
        document.getElementsByClassName("row3_fifteen")[0].classList.add("bg-info");
        document.getElementsByClassName("row3_fifteen")[0].classList.remove("bg-success");
    }
}
/****************** For Clearing options ***************************/
function submit1()
{
    let submit1_btn=document.getElementById("submit1_btn");
    submit1_btn.innerHTML="Submitting Process";
    
    setTimeout(submit2,1000);
}
function submit2()
{
    var marks=0;
    let qtn1_opt3=document.getElementById("qtn1_opt3");
    let qtn2_opt3=document.getElementById("qtn2_opt3");
    let qtn3_opt4=document.getElementById("qtn3_opt4");
    let qtn4_opt2=document.getElementById("qtn4_opt2");
    let qtn5_opt3=document.getElementById("qtn5_opt3");
    let qtn6_opt2=document.getElementById("qtn6_opt2");
    let qtn7_opt2=document.getElementById("qtn7_opt2");
    let qtn8_opt1=document.getElementById("qtn8_opt1");
    let qtn9_opt1=document.getElementById("qtn9_opt1");
    let qtn10_opt3=document.getElementById("qtn10_opt3");
    let qtn11_opt2=document.getElementById("qtn11_opt2");
    let qtn12_opt3=document.getElementById("qtn12_opt3");
    let qtn13_opt3=document.getElementById("qtn13_opt3");
    let qtn14_opt1=document.getElementById("qtn14_opt1");
    let qtn15_opt4=document.getElementById("qtn15_opt4");

    /******************* display:none ********************/
    document.getElementById("quiz_qns").style.display="none";
    document.getElementById("time_limit").style.display="none";
    let res=document.getElementById("result");
    res.style.display="block";

    /**************** Reporting Date ***************/
    let res_time=document.getElementById("result_time");
    let dt=new Date();
    let d=dt.getDate();
    let mon=dt.getMonth()+1;
    let yr=dt.getFullYear();
    res_time.innerHTML= d +"-"+ mon+"-"+ yr;

    document.getElementById("quiz_qns").classList.remove("d-flex");
    document.getElementById("quiz_qns").classList.remove("flex-row");

    if(qtn1_opt3.checked==true)
    {
        marks=marks+1;
    }
    if(qtn2_opt3.checked==true)
    {
        marks=marks+1;
    }
    if(qtn3_opt4.checked==true)
    {
        marks=marks+1;
    }
    if(qtn4_opt2.checked==true)
    {
        marks=marks+1;
    }
    if(qtn5_opt3.checked==true)
    {
        marks=marks+1;
    }
    if(qtn6_opt2.checked==true)
    {
        marks=marks+1;
    }
    if(qtn7_opt2.checked==true)
    {
        marks=marks+1;
    }
    if(qtn8_opt1.checked==true)
    {
        marks=marks+1;
    }
    if(qtn9_opt1.checked==true)
    {
        marks=marks+1;
    }
    if(qtn10_opt3.checked==true)
    {
        marks=marks+1;
    }
    if(qtn11_opt2.checked==true)
    {
        marks=marks+1;
    }
    if(qtn12_opt3.checked==true)
    {
        marks=marks+1;
    }
    if(qtn13_opt3.checked==true)
    {
        marks=marks+1;
    }
    if(qtn14_opt1.checked==true)
    {
        marks=marks+1;
    }
    if(qtn15_opt4.checked==true)
    {
        marks=marks+1;
    }
    let score=document.getElementById("scored");
    score.innerHTML=marks;
    if(marks>0)
    {
        let perc1=(marks/15)*100;
        let perc2=((15-marks)/15)*100;
        
        let per1=String(perc1);
        let percentage1=per1.substring(0,4);

        let per2=String(perc2);
        let percentage2=per2.substring(0,4);

        let percent1=document.getElementById("percentage1");
        percent1.innerHTML=percentage1+" "+"%";

        let percent2=document.getElementById("percentage2");
        percent2.innerHTML=percentage1+"%";

        let loss_percent=document.getElementById("loss_percent");
        loss_percent.innerHTML=percentage2+"%";

        let progress_percent1=document.getElementById("progress_percent1");
        progress_percent1.style.width=percentage1+"%";

        let progress_percent2=document.getElementById("progress_percent2");
        progress_percent2.style.width=percentage2+"%";
    }
    else
    {
        let percent1=document.getElementById("percentage1");
        percent1.innerHTML=0+"%";

        let percent2=document.getElementById("percentage2");
        percent2.innerHTML=0+"%";

        let loss_percent=document.getElementById("loss_percent");
        loss_percent.innerHTML=0+"%";

        let progress_percent1=document.getElementById("progress_percent1");
        progress_percent1.style.width=0+"%";

        let progress_percent2=document.getElementById("progress_percent2");
        progress_percent2.style.width=0+"%";
    }
}
