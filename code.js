function change(){
    let c = document.getElementById("selector").value;
    
    document.getElementById("colorselector").style.backgroundColor = c;

}
function idk() {
        var a = document.getElementById("n1").value;
        var b = document.getElementById("n2").value;
        x = [a,b];
        x.sort();
        var hcf 
        var r
        if(x[1]%x[0]==0){
            hcf = x[0];
            
        }else{
            r = x[1] % x[0];
            while(r!=0){
                x[1] = x[0];
                x[0] = r;
                r = x[1] % x[0];
            hcf = x[0];
            
            }
        }
        var lcm = (a*b)/hcf;
        
        document.getElementById("inp2").innerHTML = "<pre style='font-size:30px;'>LCM: "+lcm+"<br>"+"HCF: "+hcf+"<br><br></pre>";

        }