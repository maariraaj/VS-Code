function api(){

    const taskInput=document.getElementById("taskInput");
    const addTask=document.getElementById("addTask");

    addTask.addEventListener("click", function(){
        const taskValue=taskInput.value.trim();
       // console.log("Entered task value!!!", taskValue);

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${taskValue}`)
        .then((res) => res.json())
        .then((data) => {

            // console.log(data);
           // console.log(data.message);  //error message-----------
            console.log(data[0].meanings[0].definitions[0].definition);
            console.log(data[0].meanings[1].definitions[0].definition);
           
            const nounMean = data[0].meanings[0].definitions[0].definition;
            //const verbMean = data[0].meanings[1].definitions[0].definition;
           // const nounName =  data[0].meanings[0].partsOfSpeech;
           let arr = [], arr1 = [];
           arr.unshift(nounMean);
          // arr1.unshift(verbMean);
           

           const mainPage = document.getElementById("mainCon");
           const main = document.createElement("div");
           main.setAttribute("class", "col-lg-4 col-md-6 col-sm-12");
           mainPage.appendChild(main);

            for(i=0; i<arr.length; i++){
                main.innerHTML = `
                <div class="card m-3 c-card p-3 c-card bg-dark text-white" id="card">
                <div class="card-body">
                <h5>${taskValue}</h5>
                <p class="card-text text-center h5">${arr[i]}</p>
                </br>
                </div>
                </div>`;
            }

        //    main.innerHTML = `
        //         <div class="card m-3 c-card p-3 c-card bg-dark text-white" id="card">
        //         <div class="card-body">
        //         <p class="card-text text-center h5">${nounMean}</p>
        //         </br>
        //         <p class="card-text text-center h5">${verbMean}</p>
        //         </div>
        //         </div>`;

                taskInput.value="";

        })
        .catch(err => {
           //let error1 = err.message;
            alert("No Definitions Found!!!");
            //alert(err.message)
        })
       // const data = res.json();
        //console.log(res);
    });
 }

api();