function print(message) {
    document.writeln(message)
    document.pictureInPictureEnabled = true
}

function myError() {
    try {
        throw new Error("This is my error")
    } catch (e) {
        print(e.message)
    }
}

function divBy0Error() {
    const a = prompt("Enter first number")
    const b = prompt("Enter second number")

    try {
        if (b == 0) {
            throw new Error("Divison by Zero condition happened")
        }
        print(a / b)
    } catch (error) {
        print(error.message)
    } finally {
        print("Finally Completed!")
    }
}

divBy0Error()

{/* <body>
   <script>
       try{
           throw new Error('This is a new error');
       }
       catch(e){
           document.write(e.message);
       }
   </script>
   
   ---
   let n = prompt('Enter first number');
let m = prompt('Enter second number')
try {
if(m == 0){
throw new Error('Cannot divide by zero')
}
document.write(n/m)
}
catch (e) {
document.write(e.message)
}
finally{
document.write(' Common')
-----------
<script>
let a = 15;
let b = 0;

try {
if (b == 0)
throw new Error("divided by zero error ");
else
throw new Error("This is a new error ");
}
catch (e) {
document.write(e.message);
}
finally {
document.write("done with finally");
}
</script>
-----------
GetElementByTAgNAme
<body>
    <p>first para</p>
   <p id="demo">anything</p>
   <script>
       const element=document.getElementsByTagName("p");
       element[2].innerHTML="Helloworld"
   </script>


    
</body>
}

--------
Getelementbyclassname


<body>
    <p>first para</p>
   <p id="demo" class="c1">anything</p>
   <h1 class="c1">ABC</h1>
   <script>
       const element=document.getElementsByClassName("c1");
       element[0].innerHTML="Helloworld"
   </script>


    
</body> */}