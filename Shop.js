
//extraire tou les boutons plus... la variables mybt est le tableau qui contient tout les bouttons plus
var Mybt = document.querySelectorAll('.plus')

//extraire tou les champs de la quantité ... la variables Myct est le tableau qui contient tout les champs de la quantité
var Myct = document.querySelectorAll('.count')

//extraire tou les boutons moins... la variables  est le tableau qui contient tout les bouttons moins
var Minus = document.querySelectorAll('.Moin')

var mt = document.querySelector('.Montant')
var Del = document.querySelectorAll('.fas.fa-trash-alt')
var heart = document.querySelectorAll('.far.fa-heart')

mt.textContent ='0'



for(i=0;i<Mybt.length;i++){
Myct[i].textContent = '0'

}


// Parcourir la liste des button plus et button moin et ajouter l evenement click
for(j=0;j < Mybt.length; j++){

  // Ajouter l evenement click
  Mybt[j].addEventListener('click', function(){
     
   var par = this.parentNode
   var Mycount = par.querySelector('.count')
 
  // incrementer la quntite
   var ct = parseInt(Mycount.textContent)
    ct++
    Mycount.textContent = ct
 
    // ajouter le prix au total 
    var part = par.parentNode
    var prix = part.querySelector('.price')
   
    var total = parseInt(mt.textContent)
    total = total + parseInt(prix.textContent)
    mt.textContent = total

  })

    Minus[j].addEventListener('click', function(){
       
     var par = this.parentNode
     var Mycount = par.querySelector('.count')
     
     var ct = parseInt(Mycount.textContent)
     if(ct>0){
      ct--
      Mycount.textContent = ct
     }

     var part = par.parentNode
    var prix = part.querySelector('.price')

     var total = parseInt(mt.textContent)
     if(total>0){
    total = total - parseInt(prix.textContent)
    mt.textContent = total
     }
    
    })

    Del[j].addEventListener('click',function(){
      var par = this.parentNode
      var pr = par.querySelector('.price')
      var nbr = par.querySelector('.count')
      var total = parseInt(mt.textContent)
      total = total - (parseInt(pr.textContent) * parseInt(nbr.textContent))
      mt.textContent = total
      par.remove()
      
    })
    
    heart[j].addEventListener('click', function(){

      this.style.color ="red" ; 

    })
}