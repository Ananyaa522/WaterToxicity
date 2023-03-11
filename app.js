import { getDatabase } from "firebase/database";
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
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
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
        