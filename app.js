import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js"

const firebaseConfig = {
apiKey: "AIzaSyB1qtn1YB2mHi1l1e5AszBdfqzJufbQzR8",
authDomain: "faer-59f5b.firebaseapp.com",
projectId: "faer-59f5b",
storageBucket: "faer-59f5b.appspot.com",
messagingSenderId: "412197271528",
appId: "1:412197271528:web:a295c76c20a73e8086965d",
measurementId: "G-N3K1Y3DY51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function checking()
        {
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
        }
        
document.getElementById('buttonTest').addEventListener('click',
() => {
  set(ref(database, 'users/' + 2), {
    username: 3,
    hello: 4
  });
})
