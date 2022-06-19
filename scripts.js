function armstrong(){
                        var x=Number(document.getElementById("Rnum").value);
                        var temp,text,sum=0,c=0;
                        temp=x;
                        i=x;
                        //count the number given
                        while(temp!=0){
                                            c++;
                                            temp=parseInt(temp/10);
                                      }
                        //loop to get last digit and exponent with count then find sum            
                        while(i>0){
                        
                                        num=i%10;
                                        i=parseInt(i/10);
                                        sum+=num**c;
                         
                                  }
                        //to check the sum and entered number same
                        if(sum==x){
                                        text=("Number "+x+" is Armstrong Number");
                                        document.getElementById("Output").innerHTML = text;
                            
                                  }
                                  else{
                                            text=("Number "+x+" is not Armstrong Number");
                                            document.getElementById("Output").innerHTML = text;
                                      }
                     }






function stars() {
                            var val=Number(document.getElementById("num_1").value);
                            var result="";
                            var y="";
                            for(var i=1;i<=val;i++){
                                
                                                        for(var j=1;j<=i;j++){
                                                                                result+=" *  &nbsp;   "
                                                                             }
                                                         result+="<br>";
                                                    }
                            document.getElementById("st_1").innerHTML = result;
                  }
    



function palindrome(){
                            var s=document.getElementById("num_2").value;
                            let text="";
                            var str="";
                           const len=s.length;
                            //loop through reverse string
                            for(let i=len-1;i>=0;i--){
                                                        str=str+s[i];
                                                     }
                                //check if first and last are same
                                if(s == str){
                                                    text=("It is palindrome");
                                                    document.getElementById("result").innerHTML = text;
                                            }
                                 else {
                                                text=("It is not palindrome");
                                                document.getElementById("result").innerHTML = text;
                                                
                                      }
    
                      }







function even_odd(){
                        var num=Number(document.getElementById("Rnum_1").value);
                        if(num%2==0){
                                        text=("It is even number");
                                        document.getElementById("res").innerHTML = text;
                                    }
                        else{
                                text=("It is odd number");
                                document.getElementById("res").innerHTML = text;
                            }
                    }





 function prime(){
                        var prime=[];
                        let k=0;
                        var result=[];
                        var val=Number(document.getElementById("nprime").value);
                    // to get sequence of prime numbers and push it in array.
                        for(var i=0;i<=val;i++){
                                                let flag=0;
                                                for(var j=2;j<i;j++){
                                                                        if(i%j==0){
                                                                                    flag=1;
                                                                                    break;
                                                                                }
                                                                    }
                                                if(i>1 && flag==0){
                                                                    result[k]=i;
                                                                            k++;
                                                                    }
                                                }
                    
                        //sum of prime numbers  
                        let total=0;
                        const len=result.length;
                        
                        for(var z=0;z<len;z++){
                                                total+=result[z]; 
                                              }
                                              document.getElementById("result_p").innerHTML="Sum of  prime numbers " +result+" is "+ total;
                    }

   
   
                 
                 
                 
                 
                 
   function rev(){
                    result="";
                    var val=[];
                    var val=document.getElementById("num_3").value;
                    for(var i=val.length-1;i>=0;i--){
                                                      result=result+val[i];
                                                    }
                     document.getElementById("reverse").innerHTML=result;
                 }

 //To sort three numbers

function sort(){
                  
                  let temp=0;
                  var res=[];
                  var num=Number(document.getElementById("num_4").value);
                  i=num;
                  do{
                               
                               
                                res[temp]=num%10;
                                i=parseInt(i/10);
                                num=i;
                                temp++;
                              }while (i>0);
                  
                              
                                            document.getElementById("result-n").innerHTML=res;

                }
  

  //find the sum of digits


  function sum1(){
                   var num=Number(document.getElementById("num_5").value);
                   sum2(num);
  }
   function sum2(num){        
                  var res=[];
                  let temp=0;
                  i=num;
                  let sum=0;
                  
                  
                                          do{
                                               res[temp]=num%10;
                                               i=parseInt(i/10);
                                                num=i;
                                                temp++;
                                              }while (i>0);
                                                for(k=0;k<res.length;k++){
                                                                             sum=sum+res[k];
                                                                  }     
                                                 
                                                 var num2=parseInt(sum/10);
                                                 if(num2==0){
                                                              var n=sum;
                                                            
                                                              document.getElementById("result-s").innerHTML=n;
                                                            }
                                                   
                                                  else{
                                                          var n=sum;
                                                          sum2(n);
                                                        }
                                                          
                                                            
                              
   }
                  
 

   //find the factorial of number
   function factorial(){
     var val=Number(document.getElementById("num_6").value);
     let product=1;
     for(i=val;i>0;i--){
      product=product*i;
     }
     document.getElementById("result-f").innerHTML=product;
   }





   //find the LCM of number

   function lcm(){
    
    let hcf;
    
    var num1=Number(document.getElementById("num_f").value);
    var num2=Number(document.getElementById("num_s").value);
    
    //looping from 1 to num1 and num2 to find hcf
    for(let i=0;i<=num1 && i<=num2;i++){
     if(num1%i==0 && num2%i==0){
      hcf=i;
     }}
     
     //to find LCM
     let l=(num1*num2)/hcf;
     document.getElementById("result-lcm").innerHTML="LCM of "+num1+" and "+num2+" is "+l;
   }







//find hcf

function hcf(){

  let h;
  var num1=Number(document.getElementById("num1-hcf").value);
  var num2=Number(document.getElementById("num2-hcf").value);

  //loop from num1 to num2 find hcf
  for(let i=0;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
      h=i;
    }
  }

 
 document.getElementById("result-hcf").innerHTML="HCF of "+num1+" and "+num2+" is "+h;


}


  
//find factor

function factor(){
  let temp=0;
  var arr=[];
  // var num1=Number(document.getElementById("num1-fac").value);
  var num2=Number(document.getElementById("num_fac").value);

 
    var i=1;
    for (leti=1;i<=num2;i++){
     
                               if(num2%i==0)   {
                                                  arr[temp]=i;
                                                   temp++;
                                                   
                                                }

                            }
         if(num2<i){
           for(i=num2;i<(Math.abs(num2));i++)
             if(num2%i==0){
                     arr[temp]=i;
                     temp++;
             }
             i++;
      }
        
 document.getElementById("result-fac").innerHTML="Factors of "+num2+" is <br> "+arr;


}



function perfect(){
  var num=Number(document.getElementById("num_perfect").value);
  var arr=[];
  let sum=0;
  let temp=0;
  for(let i=1;i<num;i++){
     if(num%i==0){
      arr[temp]=i;
      temp++;
     }
  }
  
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  
  if(num==sum){
    document.getElementById("result-perfect").innerHTML="Number "+num+" is perfect number ";

  }else {
    document.getElementById("result-perfect").innerHTML="Number "+num+" is not perfect number ";

  }
}





function fibonacci(){
  var num=Number(document.getElementById("num_fib").value);
  var arr=[];
  arr[0]=0;
  arr[1]=1;

  for(let i=2;i<num;i++){
       let j=i-2;
      let k=i-1;
       arr[i]=arr[k]+arr[j];
    
    }
    document.getElementById("result-fib").innerHTML="fibonacci series of "+num+" is <br>"+arr;
    
  }


   




















  