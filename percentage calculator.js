<!DOCTYPE html>
<html lang="en">
<head>

    <title>Calculator</title>
    <script src="./calculator.js" > </script>
</head>
<body>
    <h1> Percentage Calculator </h1>
   
    <form onsubmit="abc(); return false;"> 
<label for="TM"> Enter Total Marks </label>
<input type="number"  id="TM" placeholder="Enter Total Marks Here">
<br><label for="OM"> Enter Obtained Marks </label>
 <input type="number"  id="OM" placeholder="Enter Obtained Marks Here"> <br>
 <button> Calculate</button>
 
    </form>
    <h1 id="change"> Your Result Show Here </h1>
    <script>
        // must make a function for proper work of calculator 
        //call function in foam because button is for click or form is for submit
        function abc(){
             let stm = document.querySelector("#TM").value;
 let som = document.querySelector("#OM").value;
 res = (som/stm) *100
document.querySelector("#change").innerHTML=("you have got" + res +     "%")
        }




    </script>
</body>
</html>
