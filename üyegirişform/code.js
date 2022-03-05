function üye(){
    let ad,yaş,cinsiyet,sonuc

    ad=document.getElementById("ad").value
    yaş=document.getElementById("yas").value
    cinsiyet=document.getElementById("cinsiyet").value
    sonuc=document.getElementById("sonuç")
     
    if(yaş>=18){
          sonuc.innerHTML="HOŞGELDİNİZ"
          
    }
   else{
          sonuc.innerHTML="YORUM YAZABİLMEK İÇİN +18 OLMANIZ GEREKMEKTEDİR"
   }
}