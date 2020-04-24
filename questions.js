/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

 /********************************string******************************** */
function tailleString(text) {
  var result = text.length;
  return result;
}

function remplaceCar(text){
  var result = text.replace('e',' ');
  return result;
}

function concatString(text,text2){
  var result = text+text2;
  return result;
}

function afficherCar(text,n){
  var result = text.substr(n-1,1);
  return result;
}

function afficherNCar(text,n){
  var result = text.substr(0,n);
  return result;
}

function majusculeString(text){
  var result = text.toUpperCase();
  return result;
}

function SupprEspaceString(text){
  var result =text.trim();
  return result;
}

function IsString(text){
  if (typeof text ==='string'){
    var result = true;
  }
  else{
    var result = false;
  }
  return result;
}

function AfficherExtensionString(text){
  var result = text.slice((text.lastIndexOf('.') - 1 >>> 0) + 2);
  return result;
}

function NombreEspaceString(text){
  var result = text.split(' ').length -1
  return result;
}

function InverseString(text){
  var result = text.split('').reverse().join('');
  return result;
}

function minusculeString(text){
  var result =text.toLowerCase();
  return result;
}

function countDistinctCar(text){
  var tab =text.split('');
  unique = (value,index,self) =>{
    return self.indexOf(value) === index}
  var uniquecar= tab.filter(unique)
    return uniquecar.length;
  }


/*******************************numbers********************************/

function calculPuissance(number1,number2){
  var result = Math.pow(number1,number2);
  return result;
}

function valeurAbsolue(number){
  var result = Math.abs(number)
  return result;
}

function valeurAbsolueArray(tab=[]){
  var result=tab.map(Math.abs,tab);
  return result;
}

function surfaceCercle(number){
  var result = 3.14*Math.pow(number,2);
  var result = Math.ceil(result)
  return result;
}

function hypothenuse(number1,number2){
  var result = Math.pow(number1,2)+Math.pow(number2,2);
  var result = Math.sqrt(result)
  return result;
}

function calculIMC(weigth,height){
  var result = weigth/Math.pow(height,2);
  var result= result.toFixed(2);
  return parseFloat(result)
}

function CreationTableauLangages(){
  var langages = ["Html","CSS","Java","PHP"]
  return langages
}

function CreationTableauNombres(){
  var nombres = [0,1,2,3,4,5]
  return nombres
}

function RemplacementElement(langages){
  langages[2] = "Javascript";
  return langages
}

function AjoutElementLangages(langages){
  langages.push("Ruby","Python")
  return langages
}

function AjoutElementNombres(nombres){
  nombres.unshift(-2,-1)
  return nombres
}

function SuppressionPremierElement(langages){
 langages.shift()
 return langages
}

function SuppressionDernierElement(langages){
  langages.pop()
  return langages
}

function ConversionChaineTableau(reseaux_sociaux_chaine){
  var reseaux_sociaux = reseaux_sociaux_chaine.split(',')
  return reseaux_sociaux
}

function ConversionTableauChaine(langages){
  var langages_chaine = langages.join(',')
  return langages_chaine
}

function TriTableau(reseaux_sociaux){
  reseaux_sociaux.sort()
  return reseaux_sociaux
}
function InversionTableau(langages){
  langages.reverse()
  return langages
}

function TriSpecial(langages){
  langages.sort((a,b) => a.length - b.length);
  return langages
}