//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
//   import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js"


  const firebaseConfig = {
  apiKey: "AIzaSyAy1AzJMVjKAyFIhT3RpCaXkwqXjopE3F0",
  authDomain: "water-toxicity-3.firebaseapp.com",
  databaseURL: "https://water-toxicity-3-default-rtdb.firebaseio.com",
  projectId: "water-toxicity-3",
  storageBucket: "water-toxicity-3.appspot.com",
  messagingSenderId: "234849598593",
  appId: "1:234849598593:web:e150e8c841bb1375a4a180",
  measurementId: "G-TGGLGLNYYV",
  databaseURL:"https://water-toxicity-3-default-rtdb.firebaseio.com/"
  
  };
  //firebase.initializeApp(firebaseConfig);
  //Dont Initialize Analytics , Not Required
  const app = firebase.initializeApp(firebaseConfig);
  //const database = app.firestore();
  //------------------------------------------------------------------------------------------------------------
  var database = firebase.database();
  const dbref = firebase.database().ref();
  const dates=[];
  const times=[];
  const pH_array=[];
  const ppm_array =[];
  const algal_array=[];
 
  dbref.child('Readings').on('value',(snapshot)=> {
    snapshot.forEach((dateSnapshot)=>{
      const date_val = dateSnapshot.key;
      dates.push(date_val);
      dateSnapshot.forEach((timeSnapshot)=>{
        const time_val = timeSnapshot.key;
        times.push(time_val);
        const pH_val = timeSnapshot.child('pH').val();
        pH_array.push(pH_val);
        const ppm_val = timeSnapshot.child('ppm').val();
        ppm_array.push(ppm_val);
        const algal_val = timeSnapshot.child('algal').val();
        algal_array.push(algal_val);
      });
    });
  });
  
  console.log(dates);
  console.log(times);
  console.log(pH_array);
  console.log(ppm_array);
  console.log(algal_array);
    //------------------------------------------------------------------------------------------------------------

  //console.log(pH_array.slice(-5));
  //const day = getValue(dates,0);
  
  
    setTimeout(()=>{
      //let table;
      //table+="<thead>";
      let table ="<tr>";
      table+='<th scope="col">Time</th>';
      table+='<th scope="col">pH values</th>';
      table+='<th scope="col">PPM values</th>';
      table+='<th scope="col">Algae growth values</th>';
      table+="</tr>";
      //table+="</thead>";
      let rows=10;
      let index = -1;
      while(rows>0)
      {
        table+="<tr>";
        table+='<td>'+times.at(index)+'</td>';
        table+='<td>'+pH_array.at(index)+'</td>';
        table+='<td>'+ppm_array.at(index)+'</td>';
        table+='<td>'+algal_array.at(index)+'</td>';
        table+="</tr>";
        rows--;
        index--;
      }
      document.getElementById("table").innerHTML=table;
    },1200)
    









  // let tr = document.createElement('tr');
  // let td1 = document.createElement('td');
  // setTimeout(()=>{
  //   td1.innerHTML=dates[0];
  //   console.log(td1.innerHTML);
  //   tr.appendChild(td1);
  // },800);
  
  // for(var i = -1; i<=-10; i--)
  // {
  //     let tr = document.createElement('tr');
  //     let td1 = document.createElement('td');
  //     td1.textContent = dates[-1];
  //     tr.appendChild(td1);
  //     console.log("row1-1");
  //     let td2 = document.createElement('td');
  //     td1.textContent = times[-1];
  //     tr.appendChild(td2);
  //     console.log("row1-2");
  // }
  // function gen_table()
  // {
  //   window.alert("Table check");
  // }
// }
//  dbref.once('value').then((snapshot)=>{
//   const data = snapshot.val();
//   console.log(data);
//  })
//   .catch((error)=>{
//     console.error(error)
//   });
// dbref.on('value',(snapshot)=> {
//   snapshot.forEach((dateSnapshot)=>{
//     const date_val = dateSnapshot.key;
//     dates.push(date_val);
//     dateSnapshot.forEach((timeSnapshot)=>{
//       const time_val = timeSnapshot.key;
//       times.push(time_val);
//       const pH_val = timeSnapshot.child('pH').val();
//       pH_array.push(pH_val);
//       const ppm_val = timeSnapshot.child('ppm').val();
//       ppm_array.push(pH_val);
//       const algal_val = timeSnapshot.child('algal').val();
//       algal_array.push(pH_val);
//     });
//   });
// });
// dbref.child('Readings').on('value',(snapshot)=>{
//   snapshot.forEach((childSnapshot)=>{
//     const date_val = childSnapshot.key;
//     //console.log(date_val);
//      dates.push(date_val);
//      console.log(dates);
//     childSnapshot.forEach((subSnapshot)=>{
//       const time_val = subSnapshot.key;
//       times.push(time_val);
//       //console.log(times);
//     });
//     console.log(times);
//   });
// });
//console.log(algal_array);

  function load_pH()
  {
    //getData();
    showDiv();
    checking(times,pH_array,"#DC3545","pH values ---->");
  }

  function load_ppm()
  {
    showDiv();
    checking(times,ppm_array,"#FFC107","PPM values ---->");
  }

  function load_algal()
  {
    showDiv();
    checking(times,algal_array,"#198754", "Algae growth values ---->");
  }

  function showDiv() {
    document.getElementById('chart_div').style.display = "flex";
 }

  function checking(time_arr, field_arr,fill_color, label_str)
 {
  const ctx = document.getElementById("myChart").getContext('2d');
  const ch = new Chart(ctx, {
    type: "bar",
    data: {
      labels: time_arr.slice(-10),
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: fill_color,//"rgba(0,0,255,1.0)",
        borderColor: fill_color,
        data: field_arr.slice(-10)
      }]
    },
    options: {
      legend: {display: false},
      scales: {
         xAxes: [{
          scaleLabel:{
            display: true,
            labelString: "Time ------>",
            fontSize: chart_font()
          }
         }],
         yAxes: [{
          scaleLabel:{
            display: true,
            labelString: label_str,
            
            fontSize: chart_font(),
            beginAtZero: true
          }
         }],
      }
    }
  });
}

function chart_font()
{
  if(innerWidth>440)
    return 20;
  else
    return 12;
}


  function load()
  {
    const date = new Date();
    const offset = 330*60*1000;
    const ist = new Date(date.getTime()+offset).toISOString();
    const ist_date = ist.substring(0,10);
    const ist_time = ist.substring(11,19);
    var data = {
      pH: generateRandom(6,13),
      ppm:generateRandom(20,50),
      algal:generateRandom(20,40)
    };
    database.ref("Readings/"+ist_date+"/"+ist_time).set(data);
  }
  

  function generateRandom(min, max) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
  }
//   document.getElementById('ppmButton').addEventListener('click',
// () => {
//   set(ref(database, 'ppmData/' + 2), {
//     username: 3,
//     hello: 4
//   });
// })
  // var data = {
  //   ph:123,
  //   ppm:456,
  //   algal:789
  // };
  // const ref = database.ref("https://water-toxicity-3-default-rtdb.firebaseio.com/");
  // database.ref("messages").set(data);
   

// }

//   const ref = database.ref("https://water-toxicity-3-default-rtdb.firebaseio.com/")
//   ref.on("value",(snapshot)=>{
//     console.log(snapshot.val());
//   });

// document.getElementById('pHButton').addEventListener('click',()=>{
//   var xValues = [50,60,70,80,90,100,110,120,130,140,150];
//   var yValues = [7,8,8,9,9,9,10,11,14,14,15];
  
//   new Chart("myChart", {
//     type: "line",
//     data: {
//       labels: xValues,
//       datasets: [{
//         fill: false,
//         lineTension: 0,
//         backgroundColor: "rgba(0,0,255,1.0)",
//         borderColor: "rgba(0,0,255,0.1)",
//         data: yValues
//       }]
//     },
//     options: {
//       legend: {display: false},
//       scales: {
//         yAxes: [{ticks: {min: 6, max:16}}],
//       }
//     }
//   });
// })

// document.getElementById('pHButton').addEventListener('click',
// () => {
//   set(ref(database, 'phData/' + 2), {
//     username: 3,
//     hello: 4
//   });
// })
// function load()
// {
//   set(ref(database, 'ppmData/' + 2), {
//     username: 3,
//     hello: 4
//   });
// }

// document.getElementById('algalButton').addEventListener('click',
// () => {
//   set(ref(database, 'algalData/' + 2), {
//     username: 3,
//     hello: 4
//   });
// })

// const delFunc = () => {
//       // Your web app's Firebase configuration
//       // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//       //Add Data into database
//       const date = new Date();
//       let obj = {
//           pH : 7.7,
//           PPM : 20,
//           Algal : 20
//       }
//       firebase.database().ref('Readings/'+date).set(obj)

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
//       firebase.database().ref('/Readings').on('value',(snapshot)=>{
//         console.log(snapshot.val())
//       })
// }



