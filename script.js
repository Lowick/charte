function remplaceBouton(){
    document.getElementById("demo").innerHTML = Math.floor(Math.random() * 18);
    let myArray = ['bayram barbu','samir s amuse','thomas têtu','melina marrante','fabrice fabulous','loic l ancien','gary gourmant','loic le jeune','alexandre amusant','quentin qui est la','lydie locasse','nisrine nouvelle','maxime maboule','remi raleur','jérôme joyeux','nicolas nabot','guillaume gogol','samra survivante'];
    let rand = Math.floor(Math.random()*myArray.length);
    let rValue = myArray[rand];
    document.getElementById("demo").innerHTML = rValue;
    setTimeout(reinitialiserBouton, 3000); 
  }

  function reinitialiserBouton(){
    document.getElementById("demo").innerHTML = "Random apprenant";
  }