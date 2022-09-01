

function mudacor (id){

document.getElementById(id).style.backgroundColor = "darkgrey";
}

function voltacor (id){

    document.getElementById(id).style.backgroundColor = "white";
}
 var i = 0;
function insere (id){

    var contator = i++;
    if(document.getElementById(id).textContent==''){
        if(contator %2){

            document.getElementById(id).append("1")
            document.getElementById(id).style.fontFamily ="bits"
            document.getElementById(id).style.fontSize ="80px"
            document.getElementById(id).style.textAlign ="center"
        }else {
            document.getElementById(id).append("0")
            document.getElementById(id).style.fontFamily ="bits"
            document.getElementById(id).style.fontSize ="80px"
            document.getElementById(id).style.textAlign ="center"
        }
    }
    verifica();
}

function verifica (){

    var bloco1 = document.getElementById("col1").textContent;
    var bloco2 = document.getElementById("col2").textContent;
    var bloco3 = document.getElementById("col3").textContent;
    var bloco4 = document.getElementById("col4").textContent;
    var bloco5 = document.getElementById("col5").textContent;
    var bloco6 = document.getElementById("col6").textContent;
    var bloco7 = document.getElementById("col7").textContent;
    var bloco8 = document.getElementById("col8").textContent;
    var bloco9 = document.getElementById("col9").textContent;


    if(bloco1 == bloco2 & bloco1 == bloco3 & bloco1!== ''){document.getElementById("ganhou").hidden = false
        document.getElementById("container").style.pointerEvents = "none";}
    if(bloco4 == bloco5 & bloco4 == bloco6 & bloco4!== ''){document.getElementById("ganhou").hidden = false
        document.getElementById("container").style.pointerEvents = "none"}
    if(bloco7 == bloco8 & bloco7 == bloco9 & bloco7!== ''){document.getElementById("ganhou").hidden = false
        document.getElementById("container").style.pointerEvents = "none"}
    if(bloco1 == bloco4 & bloco1 == bloco7 & bloco1!== ''){document.getElementById("ganhou").hidden = false
        document.getElementById("container").style.pointerEvents = "none"}
    if(bloco2 == bloco5 & bloco2 == bloco8 & bloco2!== ''){document.getElementById("ganhou").hidden = false
        document.getElementById("container").style.pointerEvents = "none"}
    if(bloco3 == bloco6 & bloco3 == bloco9 & bloco3!== ''){document.getElementById("ganhou").hidden = false
        document.getElementById("container").style.pointerEvents = "none"}
    if(bloco1 == bloco5 & bloco1 == bloco9 & bloco1!== ''){document.getElementById("ganhou").hidden = false
        document.getElementById("container").style.pointerEvents = "none"}
    if(bloco3 == bloco5 & bloco3 == bloco7 & bloco3!== ''){document.getElementById("ganhou").hidden = false
        document.getElementById("container").style.pointerEvents = "none"}
 /*
    switch (bloco1,bloco2,bloco3,bloco4,bloco5,bloco6,bloco7,bloco8,bloco9){
        case bloco1 == bloco2 & bloco1 == bloco3 & bloco1!== '':
            document.getElementById("ganhou").hidden = false
            break;
        debugger;
        case bloco4 == bloco5 & bloco1 == bloco6 & bloco4!== '':
            document.getElementById("ganhou").hidden = false
            break;

        case bloco7 == bloco8 & bloco7 == bloco9 & bloco7!== '':
            document.getElementById("ganhou").hidden = false
            break;
        case bloco1 == bloco4 & bloco1 == bloco7 & bloco1!== '':
            document.getElementById("ganhou").hidden = false
            break
        case bloco2 == bloco5 & bloco1 == bloco8 & bloco2!== '':
            document.getElementById("ganhou").hidden = false
            break
        case bloco3 == bloco6 & bloco1 == bloco9 & bloco3!== '':
            document.getElementById("ganhou").hidden = false
            break
        case bloco1 == bloco5 & bloco1 == bloco9 & bloco1!== '':
            document.getElementById("ganhou").hidden = false
            break
        case bloco3 == bloco5 & bloco3 == bloco7 & bloco3!== '':
            document.getElementById("ganhou").hidden = false
            break
        debugger;
    }
*/
}

function reinicia(){
     document.getElementById("col1").textContent = '';
     document.getElementById("col2").textContent = '';
     document.getElementById("col3").textContent = '';
     document.getElementById("col4").textContent = '';
     document.getElementById("col5").textContent = '';
     document.getElementById("col6").textContent = '';
     document.getElementById("col7").textContent = '';
     document.getElementById("col8").textContent = '';
     document.getElementById("col9").textContent = '';
     document.getElementById("container").style.pointerEvents = "auto";
     document.getElementById("ganhou").hidden = true;
}
