
const homePageContinue_btn = document.getElementById("homePageContinue_btn")
const homePageNameInput = document.getElementById("homePageNameInput");
const homePage_div = document.getElementById("homePage_div");
const getName_div = document.getElementById("getName_div");


homePageContinue_btn.addEventListener("click" , handleContinueBtn)



const journalingFacts = [
    "Journaling promotes self-reflection and self-awareness.",
    "Journaling helps reduce stress and promotes relaxation.",
    "Journaling provides a safe space for emotional release and catharsis.",
    "Journaling enhances problem-solving skills by organizing thoughts and exploring solutions.",
    "Regular journaling improves creativity and fosters new ideas.",
    "Journaling strengthens memory and improves recall.",
    "Journaling facilitates goal setting and increases commitment to achieving them.",
    "Journaling promotes personal growth and self-improvement.",
    "Journaling enhances communication skills by practicing self-expression.",
    "Journaling improves clarity of thoughts and enhances decision-making abilities.",
    "Journaling helps develop organizational skills and promotes productivity.",
    "Journaling cultivates mindfulness and presence in the present moment.",
    "Journaling assists in regulating moods and emotions.",
    "Journaling facilitates exploration of personal values and beliefs.",
    "Journaling aids in healing from past traumas by providing an outlet for processing emotions.",
    "Journaling promotes gratitude and appreciation for life's blessings.",
    "Journaling helps manage anger by providing a constructive way to express and understand it.",
    "Journaling allows for the release of negative thoughts and promotes a more positive mindset.",
    "Journaling boosts self-confidence and self-esteem.",
    "Journaling strengthens decision-making skills by weighing pros and cons.",
    "Journaling enhances problem-solving abilities by analyzing different perspectives and solutions.",
    "Journaling improves focus and concentration.",
    "Journaling encourages self-discovery and self-expression.",
    "Journaling helps develop empathy and understanding towards oneself and others.",
    "Journaling promotes self-discipline and consistency.",
    "Journaling serves as a record of personal experiences and growth over time.",
    "Journaling allows for tracking progress and celebrating achievements.",
    "Journaling helps develop creativity and imagination.",
    "Journaling fosters a sense of gratitude and appreciation for the small things in life.",
    "Journaling encourages self-acceptance and self-love.",
    "Journaling provides an outlet for exploring and processing complex emotions.",
    "Journaling enhances problem-solving skills by encouraging brainstorming and analysis.",
    "Journaling helps develop self-motivation and resilience.",
    "Journaling provides a space for exploring fears and finding solutions.",
    "Journaling improves communication with oneself and can be used as a tool for self-dialogue.",
    "Journaling promotes self-care and mental well-being.",
    "Journaling helps identify patterns and triggers in behavior and emotions.",
    "Journaling enhances self-expression and creativity in various areas of life.",
    "Journaling fosters a deeper understanding of one's own values, beliefs, and aspirations.",
    "Journaling can be a source of inspiration and a way to capture ideas for future projects.",
    "Journaling encourages introspection and deepens the relationship with oneself.",
    "Journaling serves as a private space for reflection without fear of judgment.",
    "Journaling promotes emotional resilience and coping skills.",
    "Journaling helps manage anxiety and overwhelm by providing a structured outlet for thoughts and worries.",
    "Journaling improves writing skills and encourages self-expression through words.",
    "Journaling can help identify and challenge negative thought patterns.",
    "Journaling encourages self-accountability and personal growth.",
    "Journaling facilitates problem-solving by breaking down complex issues into smaller parts.",
    "Journaling provides a tool for self-assessment and self-reflection.",
    "Journaling is a valuable self-care practice that promotes overall well-being."
];


renderHomePage()



function renderHomePage(){
    if(localStorage.getItem('name')){
       getName_div.classList.add("d-none")  
       homePage_div.innerHTML =
       `
       
                        <h1>Welcome Back, ${localStorage.getItem('name')}.</h1> 
                        <h3>did you know?</h3>
                        <h4>${journalingFacts[getRandomInt(0,journalingFacts.length)]}</h4>
                        <a href="./pages/newEntry.html">
                
                        <button class="btn bg-space text-light m-3 w-75 fs-5 py-3"> New Entry</button>
                        </a>
                        <br>
                        <a href="./pages/pastEntries.html">
                        
                        <button class="btn bg-UV text-light m-3 w-75 fs-5 py-3">View past Entries</button>
                        </a>
                        <br>
                        <a href="./pages/takeAMoment.html">
                        
                        <button class="btn bg-rose text-light m-3 w-75  fs-5 py-3">Take a moment</button>
                        </a>
       `
       homePage_div.classList.remove("d-none")
    }else {
        renderHomePage()
    }
}

function handleContinueBtn(){
    let length = ( homePageNameInput.value).length;
   if(length > 2){
    localStorage.setItem("name", homePageNameInput.value);
   } else {
    alert("name is too short");
   }
    renderHomePage()
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}