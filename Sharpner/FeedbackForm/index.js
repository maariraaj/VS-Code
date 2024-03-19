function handleFormSubmit(event){
    event.preventDefault();
    const userDetails={
        username: event.target.username.value,
        ratings: event.target.ratings.value
    };
    axios
        .post("https://crudcrud.com/api/423252a6349d466da2483a243adb516c/feedbacks", userDetails)
        .then((res)=> {
            displayFeedbacksOnScreen(res.data);
            document.getElementById("btn").textContent = "Submit";
        })
        .catch((err)=>console.log(err));

        document.getElementById("username").value="";
        document.getElementById("ratings").value="";
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/423252a6349d466da2483a243adb516c/feedbacks")
        .then((response)=>{
            for(let i=0; i<response.data.length; i++){
                displayFeedbacksOnScreen(response.data[i]);
            }
            updateRatingCounts();
        })
        .catch((error)=>{console.log(error);
        });
})

let m=new Map();
function displayFeedbacksOnScreen(feedbacks){
    const feedbackItem=document.createElement('li');
    feedbackItem.appendChild(document.createTextNode(`Name: ${feedbacks.username} and Ratings: ${feedbacks.ratings} `));

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    feedbackItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    feedbackItem.appendChild(editBtn);

    const feedbackList=document.querySelector('ul');
    feedbackList.appendChild(feedbackItem);

    deleteBtn.addEventListener("click", function(event){
        feedbackList.removeChild(event.target.parentElement);
        axios.delete(`https://crudcrud.com/api/423252a6349d466da2483a243adb516c/feedbacks/${feedbacks._id}`)
          .then(()=>{
            if(m.has(feedbacks.ratings)){
                m.set(feedbacks.ratings, m.get(feedbacks.ratings)-1);
            }
            updateRatingCounts();
          })
          .catch((error)=>console.log(error));

    });

    editBtn.addEventListener("click", function(event){
        feedbackList.removeChild(event.target.parentElement);
        axios.delete(`https://crudcrud.com/api/423252a6349d466da2483a243adb516c/feedbacks/${feedbacks._id}`)
        .then(()=>document.getElementById("btn").textContent = "Edit Rating")
        .catch((err)=>console.log(err));
        document.getElementById("username").value=feedbacks.username;
        document.getElementById("ratings").value=feedbacks.ratings;
        if(m.has(feedbacks.ratings)){
            m.set(feedbacks.ratings, m.get(feedbacks.ratings)-1);
        }else{
            m.delete(feedbacks.ratings);
        }
        updateRatingCounts();
    });

    if(m.has(feedbacks.ratings)){
        m.set(feedbacks.ratings, m.get(feedbacks.ratings)+1);
    }else{
        m.set(feedbacks.ratings, 1);
    }
    updateRatingCounts();
}
function updateRatingCounts() {
    let oneStar = document.getElementById("one");
    let twoStar = document.getElementById("two");
    let threeStar = document.getElementById("three");
    let fourStar = document.getElementById("four");
    let fiveStar = document.getElementById("five");

    oneStar.textContent = m.get("1") || ""; 
    twoStar.textContent = m.get("2") || "";
    threeStar.textContent = m.get("3") || "";
    fourStar.textContent = m.get("4") || "";
    fiveStar.textContent = m.get("5") || "";
}
