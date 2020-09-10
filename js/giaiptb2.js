function timNghiem(){
    let a1=parseInt(document.getElementById('a').value);
    let b1=parseInt(document.getElementById('b').value);
    let c1=parseInt(document.getElementById('c').value);
    let delta=b1*b1-4*a1*c1;
    if(a1===0){
        alert('Không phải phương trình bậc hai!');
    }
    else
    {
        if(delta==0)
        {
            document.writeln('Phương trình có hai nghiệm bằng nhau là:'+(-b1/(2*a1)));
        }
        else if(delta<0)
        {
            document.writeln('Phương trình vô nghiệm!');
        }
        else
        {
            document.writeln('Phương trình có hai nghiệm là:'+(-b1+Math.sqrt(delta)/(2*a1))+' và '+(-b1-Math.sqrt(delta)/(2*a1)));
        }
    }
}