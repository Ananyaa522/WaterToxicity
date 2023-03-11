import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js"


const firebaseConfig = {
  apiKey: "AIzaSyBdL4HkhGjX3Sn9s1fTGGcFI7n9Aboc2t4",
  authDomain: "water-toxicity-2.firebaseapp.com",
  projectId: "water-toxicity-2",
  storageBucket: "water-toxicity-2.appspot.com",
  messagingSenderId: "54351314522",
  appId: "1:54351314522:web:3e03a5bb2649eefd1ba263",
  databaseURL:"https://water-toxicity-2-default-rtdb.firebaseio.com/",
  measurementId: "G-ZV4YVXBBDV"
};

//Dont Initialize Analytics , Not Required
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



document.getElementById('pHButton').addEventListener('click',()=>{
  var xValues = [50,60,70,80,90,100,110,120,130,140,150];
  var yValues = [7,8,8,9,9,9,10,11,14,14,15];
  
  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });
})

// document.getElementById('pHButton').addEventListener('click',
// () => {
//   set(ref(database, 'phData/' + 2), {
//     username: 3,
//     hello: 4
//   });
// })
document.getElementById('ppmButton').addEventListener('click',
() => {
  set(ref(database, 'ppmData/' + 2), {
    username: 3,
    hello: 4
  });
})
document.getElementById('algalButton').addEventListener('click',
() => {
  set(ref(database, 'algalData/' + 2), {
    username: 3,
    hello: 4
  });
})

const delFunc = () => {
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      //Add Data into database
      const date = new Date();
      let obj = {
          pH : 7.7,
          PPM : 20,
          Algal : 20
      }
      firebase.database().ref('Readings/'+date).set(obj)

      // import { getDatabase, ref, set } from "firebase/database";
      // function loadData()
      // {
      //   const db = getDatabase();
      //   set(ref(db, 'Readings/' + date), {
      //     pH: 7.7,
      //     PPM: 15,
      //     Algal_value : 20
      //   });
      // }
      // var firebaseRef = firebase.database().ref('Readings/' + date);
      // document.querySelector('#load').addEventListener('load',()=>{
      //   const check = 7;
      //   firebaseRef.push(check)
      // }
      // )
      firebase.database().ref('/Readings').on('value',(snapshot)=>{
        console.log(snapshot.val())
      })
}
        
