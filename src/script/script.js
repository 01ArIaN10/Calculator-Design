var html = '',Clear = false, disp = document.getElementById('disp'), theam = 'light';
function evelate(fn){
    return new Function('return ' + fn)();
}
function sub(content){
    html += content
    if (Clear){
        html = content
        disp.style.paddingTop = '2rem';
        disp.style.fontSize = '20px';
        Clear = false
    }
    if (content == 'CE'){
        html = '0'
        Clear = true
    }
    if (content == '='){
        html = html.replaceAll('×','*')
        html = html.replaceAll('÷','/')
        try{
            html = evelate(html.slice(0,html.length-1));
        }
        catch{
            html = 'Error';
        }
        if (html== undefined){
            html = 'Error';
        }
        disp.style.paddingTop = '1.275rem';
        disp.style.fontSize = '30px';
        Clear = true
    }
    disp.innerHTML = html;
}
function ChangeTheam(){
    if (theam == 'light'){
        document.getElementById('Theam').href = 'style/dark.css';
        document.getElementById('iconTheam').innerHTML = 'light_mode';
        theam = 'dark';
    }
    else{
        document.getElementById('Theam').href = 'style/light.css';
        document.getElementById('iconTheam').innerHTML = 'dark_mode';
        theam = 'light';
    }
    
}
