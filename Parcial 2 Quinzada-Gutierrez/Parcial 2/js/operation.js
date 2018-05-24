// Comprobar caracteres únicos
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// Evaluar caracter a caracter
function areIs(str1, str2, str3){
    var len1 = str1.length;
    var character_map = {};
    
    for (var i = 0; i < len1; i++) { 
        if (!character_map[str1[i]]) {   	
            character_map[str1[i]] = str2[i];
            character_map[str2[i]] = str3[i];
            character_map[str3[i]] = str1[i];

        } else if (character_map[str1[i]] !== str2[i] || character_map[str2[i]] !== str3[i] || character_map[str1[i] !== str3[i]]) {
            return false;
        }
    }
    return true;
}

// Comprobar si es isomórfica
function is_Isomorfic(){
    var result = "--";
    try{
        var str1 = cadena1.value.toLowerCase();
        var str2 = cadena2.value.toLowerCase();
        var str3 = cadena3.value.toLowerCase();
        var ls1 = str1.length;
        var ls2 = str2.length;
        var ls3 = str3.length;

        if(str1==="" || str2==="" || str3=== ""){
            result = "Alguna de las cadenas está vacía.";
        }
        else{
            if (!document.getElementById('cadena1').checkValidity() || !document.getElementById('cadena2').checkValidity() || !document.getElementById('cadena3').checkValidity()){
                result = "Ha introducido números y/o caracteres especiales. Utilice letras solamente.";
            }
            else{
                if (ls1 != ls2 || ls3 != ls2 || ls1 != ls3 ){
                    result = "Estas cadenas no son isomórficas: Longitudes diferentes.";
                }
                else{
                    if (str1 == str2 && str2 == str3 && str1 == str3){
                        result = "Estas cadenas son isomórficas: Cadenas iguales."; 
                    }
                    else{
                        var flag = areIs(str1,str2,str3); //Bandera lógica
                        if (flag){
                            result = "Estas cadenas son isomórficas.";
                        }
                        else {
                            result= "Estas cadenas no son isomórficas.";
                        }
                    }
                }
            }
        }
    }
    catch(err){
        result = "Ha ocurrido un error inesperado. "+err.message;
    }
    $("#mymodal").modal("show");
    $("#mbody").html(result);
}

//Problema 3 Palindromo

function convierte(n)
{ 
    var num = (n<1)?"":convierte((n-(n%2))/2)+n%2;
    return num; 
}

function is_Palindromo(){
    var res = "--";
    var numero = nump1.value;
    var numbin = convierte(numero);
    var lon=numero.length;
    var lonbin= numbin.length;
    var flag=true;
    var aux=0;

    for (var i = 0; i < lon ; i++) {
        aux=lon-(i+1);
        if (numero[aux] == numero[i]){
            res= "Es Doblemente Palindromo";
        }
        else{
            // return false;
            res = "No es Doblemente Palindromo";
            flag=false;
            break;
        }
    }
    if (flag){for (var i = 0; i < lonbin ; i++){
        aux=lonbin-(i+1);
        if (numbin[aux] == numbin[i]){
            res = "Es Doblemente Palindromo";
        }
        else {
            // return false;
            res = "No es Doblemente Palindromo";
            break;
        }
    }
    }

    $("#mymodal3").modal("show");
    $("#mbody3").html(res);
    $("#mbody4").html(numbin);
}

//Problema 2 Matriz

function noEsPrimo(content){
    var flag=false;
    if((content%2==0 && content!=2)|| (content%3==0 && content!=3)|| (content%5==0 && content!=5)|| (content%7==0 && content!=7)|| content==1){
        flag = true;
    }
    else{
        flag = false;
    }
    return flag;    
}

function crear_Mat(){
    var num=num1.value;
    var res="<center><table cellpadding='10' border='2px'>";
    var content=0;

    for (var i=0; i<num; i++){
        res=res+"<tr>";
        for (var j=0; j<num; j++){
            if (i==j){
                while (content%23!=0 || content==0){
                    content=Math.floor(Math.random()*100)+ 1;
                }
            }
            else if((num-1-i) == j){
                content=Math.floor(Math.random()*100)+ 1;
                while (noEsPrimo(content)){
                    content=Math.floor(Math.random()*100)+ 1;
                }
            }
            else{
                content=Math.floor(Math.random()*10)+ 1;
            }
            if (num%2!=0){
                if (num/2 - 0.5 == i && num/2 - 0.5 == j){
                    content=23;
                }
            }
            res=res+"<td style='background-color:#eeff00;'>"+content+"</td>";
        }
        res=res+"</tr>";
    }
    res=res+"</table></center>";

    $("#mod2").modal('show');
    $("#matriz").html(res);
}

//Problema 4 Rotaciones

function esPrimo(content){
    var flag=true;
    if((content%2==0 && content!=2)|| (content%3==0 && content!=3)|| (content%5==0 && content!=5)|| (content%7==0 && content!=7)|| content==1){
        flag = false;
    }
    else{
        flag = true;
    }
    return flag;    
}

function verRotacion(){
    var cadena = numR.value;
    var auxiliar = cadena;
    var number=0;
    var result="";

    for (var i=0; i<cadena.length; i++){
        result=result+auxiliar+" ";
        number=Number(auxiliar);
        if (esPrimo(number)){
            result=result+"es primo.<br>";
        }
        else{
            result=result+"no es primo.<br>";
        }//1 9 7
        auxiliar=auxiliar.replace(auxiliar[0],"") + auxiliar[0];
    }


    $("#mod4").modal('show');
    $("#rota").html(result);
}