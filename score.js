//setup.html logic
if (window.location.pathname.includes("setup.html")) {
  document.getElementById("startMatch").addEventListener("click",function(){
    const team1 = document.getElementById("team1").value;
    const team2 = document.getElementById("team2").value;
    let tossWinner = document.getElementById("tossWinner").value;
    const tossDecision = document.getElementById("tossDecision").value;
    const maxnoofOvers = document.getElementById("maxNoOfOvers").value;
    

    if(tossWinner === "team1") {
      tossWinner = team1;
    }
    else {
      tossWinner = team2;
    }


    if(!team1 || !team2 || !tossWinner || !tossDecision || !maxnoofOvers) {
      alert("Please fill in all the fields.");
      return;
    }
    function isPositiveInteger(value) {
      const num = Number(value);
      return Number.isInteger(num) && num > 0;
    }
    if(!isPositiveInteger(maxnoofOvers)) {
      alert("Overs should be a positive integer.");
      return;
    }
    let battingFirst = tossDecision === "Bat" ? tossWinner : (tossWinner === team1 ? team2 : team1);
    let bowlingFirst = battingFirst === team1 ? team2 : team1;

    sessionStorage.setItem("battingFirst",battingFirst);
    sessionStorage.setItem("bowlingFirst",bowlingFirst);
    sessionStorage.setItem("inningsNumber","1");
    sessionStorage.setItem("runsbybattingFirst","0");
    sessionStorage.setItem("runsbybowlingFirst","0");
    sessionStorage.setItem("wicketsofbattingFirst","0");
    sessionStorage.setItem("wicketsofbowlingFirst","0");
    sessionStorage.setItem("oversplayedbybattingFirst","0.0");
    sessionStorage.setItem("oversplayedbybowlingFirst","0.0");
    sessionStorage.setItem("maxnoofOvers",Number(maxnoofOvers).toFixed(1));
    sessionStorage.setItem("initialised","false");
    let playersofbattingFirstforbat = [];
    let playersofbowlingFirstforbowl = [];
    let playersofbattingFirstforbowl = [];
    let playersofbowlingFirstforbat = [];
    let playing11ofbattingFirst = [];
    let playing11ofbowlingFirst = [];
    
    sessionStorage.setItem("playersofbattingFirstforbat", JSON.stringify(playersofbattingFirstforbat));
    sessionStorage.setItem("playersofbowlingFirstforbowl", JSON.stringify(playersofbowlingFirstforbowl));
    sessionStorage.setItem("playersofbattingFirstforbowl", JSON.stringify(playersofbattingFirstforbowl));
    sessionStorage.setItem("playersofbowlingFirstforbat", JSON.stringify(playersofbowlingFirstforbat));
    sessionStorage.setItem("playing11ofbattingFirst",JSON.stringify(playing11ofbattingFirst));
    sessionStorage.setItem("playing11ofbowlingFirst",JSON.stringify(playing11ofbowlingFirst));
    sessionStorage.setItem("audioCommentary","True");


    //commentary logic

    const oneRunCommentary = [
      "Taps it into the gap and scampers through for one.",
      "Easy single to rotate the strike.",
      "Soft hands, and they sneak a quick one.",
      "Keeps the scoreboard ticking with a simple run.",
      "Pushes to mid-on and jogs across for a single."
    ];

    const oneRunCommentarymp3Files = [

    ]
    const twoRunCommentary = [
      "Nicely placed, they come back for a comfortable two.",
      "Good running between the wickets, picks up a couple.",
      "Worked into the gap, easy two runs.",
      "Turns it away neatly and races back for two.",
      "Quick legs - they steal two runs there!"
    ];
    const threeRunCommentary = [
      "Good placement and even better running - three runs added.",
      "Chased down near the rope, they take three.",
      "Lovely timing, they'll pick up a quick three.",
      "They push hard and come back for the third!",
      "Three valuable runs - excellent fitness on display."
    ];
    const fourRunCommentary = [
      "Timed to perfection - that's four!",
      "Crashes it through the infield - boundary!",
      "Glorious shot, races away for four runs.",
      "Threaded the gap beautifully - four more.",
      "A gentle push and it speeds away to the fence!"
    ];
    const sixRunCommentary = [
      "That's a massive hit - straight into the stands!",
      "Clears the ropes comfortably - six runs!",
      "What a strike - the ball sails over long-on!",
      "That's gone high and handsome for six!",
      "A brutal hit - and it's a clean six!"
    ];
    const bowledCommentary = [
      "Clean bowled! The stumps are shattered!",
      "Through the gate! What a delivery!",
      "The batter completely missed it - bowled!",
      "Top of off-stump, absolute beauty!",
      "Castled! Timber everywhere!"
    ];
    const caughtCommentary = [
      "Caught! Sharp reflexes from the fielder.",
      "Takes it cleanly at slip - out!",
      "Soft dismissal - straight to the fielder.",
      "Caught in the deep! Excellent running catch!",
      "Pouched safely - batter walks back disappointed."
    ];
    const lbwCommentary = [
      "Given LBW! Plumb in front!",
      "Trapped on the pads - up goes the finger!",
      "No hesitation from the umpire - that's LBW!",
      "Dead straight, no bat involved - out LBW!",
      "Hit right in front - batter has to go!"
    ];
    
    const wideCommentary = [
      "Wide down the leg side - extra run.",
      "Strays outside off - wide called.",
      "Bowler loses his line - wide ball.",
      "Umpire stretches the arms - it's a wide!",
      "Too far outside - wide signaled."
    ];

    const noBallCommentary = [
      "Overstepped! No ball signaled.",
      "Free hit coming up after that no ball!",
      "Big front foot error - no ball!",
      "Oh dear! It's a no ball!",
      "Costly mistake - extra run awarded!"
    ];
    
    
    
    const dotBallCommentary = [
      "Straight to the fielder - no run.",
      "Dot ball - building pressure here.",
      "Good tight bowling, no run scored.",
      "Batter can't find the gap, dot ball.",
      "Defended solidly - nothing off it."
    ];
    
    let commentaryNumber = 0;
    sessionStorage.setItem("commentaryNumber",commentaryNumber);
    sessionStorage.setItem("dotBallCommentary",JSON.stringify(dotBallCommentary));
    sessionStorage.setItem("oneRunCommentary",JSON.stringify(oneRunCommentary));
    sessionStorage.setItem("twoRunCommentary",JSON.stringify(twoRunCommentary));
    sessionStorage.setItem("threeRunCommentary",JSON.stringify(threeRunCommentary));
    sessionStorage.setItem("fourRunCommentary",JSON.stringify(fourRunCommentary));
    sessionStorage.setItem("sixRunCommentary",JSON.stringify(sixRunCommentary));
    sessionStorage.setItem("wideCommentary",JSON.stringify(wideCommentary));
    sessionStorage.setItem("noBallCommentary",JSON.stringify(noBallCommentary));
    sessionStorage.setItem("bowledCommentary",JSON.stringify(bowledCommentary));
    sessionStorage.setItem("lbwCommentary",JSON.stringify(lbwCommentary));
    sessionStorage.setItem("caughtCommentary",JSON.stringify(caughtCommentary));
    sessionStorage.setItem("extrasforBattingFirst","0");
    sessionStorage.setItem("extrasforBowlingFirst","0");
    sessionStorage.setItem("batterForm","False");
    sessionStorage.setItem("bowlerForm","False");
    sessionStorage.setItem("noBall","False");

    let allCommentaryEntries = [];
    sessionStorage.setItem("allCommentaryEntries", JSON.stringify(allCommentaryEntries));
    
    window.location.href = "live.html";

  });
}

//live.html logic
if (window.location.pathname.includes("live.html")) {
      let playersofbattingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbat"));
      let playersofbowlingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbowl"));
      let playersofbattingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbowl"));
      let playersofbowlingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbat"));
      let inningsNumber = sessionStorage.getItem("inningsNumber");
      let battingFirst = sessionStorage.getItem("battingFirst");
      let bowlingFirst = sessionStorage.getItem("bowlingFirst");
      let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
      let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
      let wicketsofbattingFirst = parseFloat(sessionStorage.getItem("wicketsofbattingFirst"));
      let wicketsofbowlingFirst = parseFloat(sessionStorage.getItem("wicketsofbowlingFirst"));
      let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
      let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
      let initialised = sessionStorage.getItem("initialised");
      let playing11ofbattingFirst = JSON.parse(sessionStorage.getItem("playing11ofbattingFirst"));
      let playing11ofbowlingFirst = JSON.parse(sessionStorage.getItem("playing11ofbowlingFirst"));
      updateCommentaryBox();
      showRunRates();

      let winningTeam = sessionStorage.getItem("winningTeam");
      if(winningTeam !== null) {
        disableAllButtons();
      }


      if(initialised === "false") {
        document.getElementById("initialForm").style.display = "block";
        document.getElementById("mainLiveForm").style.display = "none";
        // displayScore();
        // displayBatterTable();
        // displayBowlerTable();

        //there is some problem in displaying info at this stage because the names of striker and all are not given yet
      }
      else {
        document.getElementById("initialForm").style.display = "none";
        document.getElementById("mainLiveForm").style.display = "block";
        displayScore();
        displayBatterTable();
        displayBowlerTable();
      }

      //initialise the players at the start of innings

      document.getElementById("setPlayers").addEventListener("click",function() {

        let strikeBatter = document.getElementById("strikeBatter").value;
        let nonStrikeBatter = document.getElementById("nonStrikeBatter").value;
        let currentbowler = document.getElementById("bowler").value;
        let inningsNumber = sessionStorage.getItem("inningsNumber");
        let playing11ofbattingFirst = JSON.parse(sessionStorage.getItem("playing11ofbattingFirst"));
        let playing11ofbowlingFirst = JSON.parse(sessionStorage.getItem("playing11ofbowlingFirst"));
        let playersofbattingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbat"));
        let playersofbowlingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbowl"));
        let playersofbattingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbowl"));
        let playersofbowlingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbat"));
        sessionStorage.setItem("strikeBatter",strikeBatter);
        sessionStorage.setItem("nonStrikeBatter",nonStrikeBatter);
        sessionStorage.setItem("currentbowler",currentbowler);
        sessionStorage.setItem("maidenPossible", "True");

        if(!strikeBatter || !nonStrikeBatter || !currentbowler ) {
          alert("Please fill in the fields.");
          return;
        }
        if(inningsNumber === "1") {
          playersofbattingFirstforbat.push(strikeBatter);
          playersofbattingFirstforbat.push(nonStrikeBatter);
          playersofbowlingFirstforbowl.push(currentbowler);

          sessionStorage.setItem("playersofbattingFirstforbat", JSON.stringify(playersofbattingFirstforbat));
          sessionStorage.setItem("playersofbowlingFirstforbowl", JSON.stringify(playersofbowlingFirstforbowl));
          initialisePlayer(strikeBatter);
          initialisePlayer(nonStrikeBatter);
          initialisePlayer(currentbowler);

        }
        else if(inningsNumber === "2") {
          playersofbowlingFirstforbat.push(strikeBatter);
          playersofbowlingFirstforbat.push(nonStrikeBatter);
          playersofbattingFirstforbowl.push(currentbowler);

          sessionStorage.setItem("playersofbowlingFirstforbat", JSON.stringify(playersofbowlingFirstforbat));
          sessionStorage.setItem("playersofbattingFirstforbowl", JSON.stringify(playersofbattingFirstforbowl));
          if (!(playersofbowlingFirstforbowl.includes(strikeBatter))) {
            initialisePlayer(strikeBatter);
          }
          if (!(playersofbowlingFirstforbowl.includes(nonStrikeBatter))){
            initialisePlayer(nonStrikeBatter);
          }
          if (!(playersofbattingFirstforbat.includes(currentbowler))) {
            initialisePlayer(currentbowler);
          }
        }
        displayScore();
        displayBatterTable();
        displayBowlerTable();
        sessionStorage.setItem("initialised","true");
        document.getElementById("strikeBatter").value = "";
        document.getElementById("strikeBatter").placeholder="Enter Strike Batter's Name";
        document.getElementById("nonStrikeBatter").value = "";
        document.getElementById("nonStrikeBatter").placeholder="Enter Non Strike Batter's Name";
        document.getElementById("bowler").value = "";
        document.getElementById("bowler").placeholder="Enter New Bowler's Name";
        document.getElementById("initialForm").style.display = "none";
        document.getElementById("mainLiveForm").style.display = "block";
        showRunRates();
      });
      
      //run functions

      document.getElementById("run0").addEventListener("click", () => {
        updateCommentaryBox();
        addRun(0); 
        displayAll(); 
        endofInningsCheck(); 
        endofOverCheck(); 
        addCommentary(0);
        showRunRates();
        updateCommentaryBox();
      });
      document.getElementById("run1").addEventListener("click", () => {
        updateCommentaryBox();
        addRun(1); 
        sessionStorage.setItem("maidenPossible","False");
        displayAll(); 
        endofInningsCheck(); 
        endofOverCheck(); 
        addCommentary(1);
        showRunRates();
        updateCommentaryBox();
        
      });
      document.getElementById("run2").addEventListener("click", () => {
        updateCommentaryBox();
        addRun(2); sessionStorage.setItem("maidenPossible","False"); displayAll(); endofInningsCheck(); endofOverCheck(); addCommentary(2);
        showRunRates(); sessionStorage.setItem("maidenPossible","False"); updateCommentaryBox();
      });
      document.getElementById("run3").addEventListener("click", () => {
        updateCommentaryBox();
        addRun(3); sessionStorage.setItem("maidenPossible","False"); displayAll(); endofInningsCheck(); endofOverCheck(); addCommentary(3);
        showRunRates(); sessionStorage.setItem("maidenPossible","False"); updateCommentaryBox();
      });
      document.getElementById("run4").addEventListener("click", () => {
        updateCommentaryBox();
        addRun(4);  sessionStorage.setItem("maidenPossible","False"); displayAll(); endofInningsCheck(); endofOverCheck(); addCommentary(4);
        showRunRates(); sessionStorage.setItem("maidenPossible","False"); updateCommentaryBox();
      });
      document.getElementById("run6").addEventListener("click", () => { updateCommentaryBox();
        addRun(6);  sessionStorage.setItem("maidenPossible","False"); displayAll(); endofInningsCheck(); endofOverCheck(); addCommentary(6);
        showRunRates(); sessionStorage.setItem("maidenPossible","False"); updateCommentaryBox();
      });

      //wicket button
      document.getElementById("registerWicket").addEventListener("click", () => { updateCommentaryBox();
        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let strikeBatterStats = getStats(strikeBatter);
        let currentbowler = sessionStorage.getItem("currentbowler");


        if (sessionStorage.getItem("noBall") === "False") {
          document.getElementById("wicketTypeForm").style.display = "block";
          disableAllScoringButtons();
          updateCommentaryBox();
         
        }
        else if (sessionStorage.getItem("noBall") === "True" ) {
          alert("It's a free hit! Wicket is not possible.")
        }
      });


      document.getElementById("bowledButton").addEventListener("click",() => {
        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let strikeBatterStats = getStats(strikeBatter);
        let currentbowler = sessionStorage.getItem("currentbowler");
        strikeBatterStats[10] = "b " + currentbowler;
        updatePlayerStats(strikeBatter,strikeBatterStats);
        document.getElementById("wicketTypeForm").style.display = "none";
        
        enableAllScoringButtons();
        registerWicket();
        addCommentary(7);
        
        updateCommentaryBox();
        displayAll(); endofInningsCheck(); endofOverCheck(); 
        showRunRates();
      });
      document.getElementById("lbwButton").addEventListener("click",() => {
        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let strikeBatterStats = getStats(strikeBatter);
        let currentbowler = sessionStorage.getItem("currentbowler");
        strikeBatterStats[10] = "lbw b " + currentbowler;
        updatePlayerStats(strikeBatter,strikeBatterStats);
        document.getElementById("wicketTypeForm").style.display = "none";
        enableAllScoringButtons();
        
        registerWicket();
        addCommentary(10);
        updateCommentaryBox();
        displayAll(); endofInningsCheck(); endofOverCheck(); 
        showRunRates();
       
      });
      document.getElementById("caughtButton").addEventListener("click", () => {
        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let strikeBatterStats = getStats(strikeBatter);
        let currentbowler = sessionStorage.getItem("currentbowler");
        document.getElementById("catchDetails").style.display = "block";
        disableWicketButtons();

        
        updateCommentaryBox();

      });
      document.getElementById("confirmCatch").addEventListener ("click" , () => {
        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let strikeBatterStats = getStats(strikeBatter);
        let currentbowler = sessionStorage.getItem("currentbowler");

        
        catcherName = document.getElementById("fielderName").value;
        if (!catcherName) {
          alert("Please enter the name of player who took the catch!");
          return;
        }
        else {
          strikeBatterStats[10] = "c " + catcherName + " b " + currentbowler;
          updatePlayerStats(strikeBatter,strikeBatterStats);
          document.getElementById("catchDetails").style.display = "none";
          document.getElementById("wicketTypeForm").style.display = "none";
          enableAllScoringButtons();
          enableWicketButtons();

          registerWicket();
          addCommentary(11);
          displayAll(); endofInningsCheck(); endofOverCheck(); 
          showRunRates();
          
        }
        updateCommentaryBox();
        });

        //wide button

      document.getElementById("wide").addEventListener("click", () => {
        updateCommentaryBox();
        wide();
        sessionStorage.setItem("maidenPossible","False");
        displayAll();
        addCommentary(8);
        showRunRates();
        sessionStorage.setItem("maidenPossible","False");
        updateCommentaryBox();
      } );

      //no ball button

      document.getElementById("noBall").addEventListener("click", () =>{
        updateCommentaryBox();

        document.getElementById("noBallInputBox").style.display = "block";
        disableAllScoringButtons();
        sessionStorage.setItem("maidenPossible","False");
        updateCommentaryBox();
      });


      document.getElementById("submitNoBall").addEventListener("click", () => {
        updateCommentaryBox();
        let extraRuns = parseInt(document.getElementById("noBallRuns").value);
        
        if (isNaN(extraRuns)) {
          alert("Please enter a valid number of runs (0-6).");
          return;
        }
      
        noBall(extraRuns);  // We will define this function next
        
        document.getElementById("noBallInputBox").style.display = "none";
        document.getElementById("noBallRuns").value = "";  // Clear input box
        document.getElementById("noBallRuns").selectedIndex = 0;
        enableAllScoringButtons();
        addCommentary(9);
        updateCommentaryBox();
      });


      const audioToggleBtn = document.getElementById("toggleAudioCommentary");

      // Set initial label and style
      function updateAudioButtonLabel() {
        const isAudioOn = sessionStorage.getItem("audioCommentary") === "True";
        audioToggleBtn.textContent = isAudioOn ? "🔊 Audio: ON" : "🔇 Audio: OFF";
        audioToggleBtn.classList.toggle("off", !isAudioOn);
      }
      updateAudioButtonLabel();
      
      // Toggle logic
      audioToggleBtn.addEventListener("click", () => {
        const current = sessionStorage.getItem("audioCommentary");
        const newState = current === "True" ? "False" : "True";
        sessionStorage.setItem("audioCommentary", newState);
        updateAudioButtonLabel();
      });
      

      // to show run rate

      function showRunRates() {
        let playersofbattingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbat"));
        let playersofbowlingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbowl"));
        let playersofbattingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbowl"));
        let playersofbowlingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbat"));
        let inningsNumber = sessionStorage.getItem("inningsNumber");
        let battingFirst = sessionStorage.getItem("battingFirst");
        let bowlingFirst = sessionStorage.getItem("bowlingFirst");
        let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
        let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
        let wicketsofbattingFirst = parseFloat(sessionStorage.getItem("wicketsofbattingFirst"));
        let wicketsofbowlingFirst = parseFloat(sessionStorage.getItem("wicketsofbowlingFirst"));
        let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
        let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
        let initialised = sessionStorage.getItem("initialised");
        let playing11ofbattingFirst = JSON.parse(sessionStorage.getItem("playing11ofbattingFirst"));
        let playing11ofbowlingFirst = JSON.parse(sessionStorage.getItem("playing11ofbowlingFirst"));
        let maxnoofOvers = parseFloat(sessionStorage.getItem("maxnoofOvers"));
        let ballsplayedbyBattingFirst = oversToBalls(oversplayedbybattingFirst);
        let ballsplayedbyBowlingFirst = oversToBalls(oversplayedbybowlingFirst);
        
        if (inningsNumber === "1") {
          let currentRunRate = "0.00";
          document.getElementById("currentRunRate").innerText = "";
          document.getElementById("currentRunRate").innerText = "Current Run Rate is " + currentRunRate +".";
          if (oversplayedbybattingFirst != 0) {
            cRunRate = (runsbybattingFirst/ballsplayedbyBattingFirst)*6;
            currentRunRate = cRunRate.toFixed(2);
            document.getElementById("currentRunRate").innerText = "";
            document.getElementById("currentRunRate").innerText = "Current Run Rate is " + currentRunRate +".";
          }
        }
        else if(inningsNumber === "2") {
          let currentRunRate = "0.00";
          document.getElementById("currentRunRate").innerText = "Current Run Rate is " + currentRunRate +".";
          if (oversplayedbybowlingFirst != 0) {
            cRunRate = (runsbybowlingFirst/ballsplayedbyBowlingFirst)*6;
            currentRunRate = cRunRate.toFixed(2);
            document.getElementById("currentRunRate").innerText = "";
            document.getElementById("currentRunRate").innerText = "Current Run Rate is " + currentRunRate +".";
          }

          rRunRate = ((runsbybattingFirst+1-runsbybowlingFirst)/(6*maxnoofOvers - ballsplayedbyBowlingFirst))*6;
          requiredRunRate = rRunRate.toFixed(2);

          if(oversplayedbybowlingFirst == maxnoofOvers) {
            requiredRunRate = "-";
          }
          document.getElementById("requiredRunRate").innerText = "";
          document.getElementById("requiredRunRate").innerText = "Required Run Rate is " + requiredRunRate +".";

          

        }
      }

      //wide 

      function wide() {
        let playersofbattingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbat"));
        let playersofbowlingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbowl"));
        let playersofbattingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbowl"));
        let playersofbowlingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbat"));
        let inningsNumber = sessionStorage.getItem("inningsNumber");
        let battingFirst = sessionStorage.getItem("battingFirst");
        let bowlingFirst = sessionStorage.getItem("bowlingFirst");
        let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
        let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
        let wicketsofbattingFirst = parseFloat(sessionStorage.getItem("wicketsofbattingFirst"));
        let wicketsofbowlingFirst = parseFloat(sessionStorage.getItem("wicketsofbowlingFirst"));
        let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
        let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
        let initialised = sessionStorage.getItem("initialised");
        let playing11ofbattingFirst = JSON.parse(sessionStorage.getItem("playing11ofbattingFirst"));
        let playing11ofbowlingFirst = JSON.parse(sessionStorage.getItem("playing11ofbowlingFirst"));
        let maxnoofOvers = parseFloat(sessionStorage.getItem("maxnoofOvers"));
        let ballsplayedbyBattingFirst = oversToBalls(oversplayedbybattingFirst);
        let ballsplayedbyBowlingFirst = oversToBalls(oversplayedbybowlingFirst);
        let currentbowler = sessionStorage.getItem("currentbowler");
        let extrasforBattingFirst = parseFloat(sessionStorage.getItem("extrasforBattingFirst"));
        let extrasforBowlingFirst = parseFloat(sessionStorage.getItem("extrasforBowlingFirst"));
        let currentbowlerStats = getStats(currentbowler);
        let oversbowledbyCurrentBowler = parseFloat(currentbowlerStats[5]);
        let ballsbowledbyCurrentBowler = (Math.floor(oversbowledbyCurrentBowler)*6) + ((oversbowledbyCurrentBowler-Math.floor(oversbowledbyCurrentBowler))*10);
        let runsgivenbyCurrentbowler = parseFloat(currentbowlerStats[7]) + 1;
        currentbowlerStats[7] = String(runsgivenbyCurrentbowler);
        updatePlayerStats(currentbowler, currentbowlerStats);
        let economyofCurrentBowler = (parseFloat(currentbowlerStats[7])/ballsbowledbyCurrentBowler)*6;
        currentbowlerStats[9] = economyofCurrentBowler.toFixed(2);
        updatePlayerStats(currentbowler, currentbowlerStats);
        if (inningsNumber === "1") {


          extrasforBattingFirst += 1;
          runsbybattingFirst += 1;
          sessionStorage.setItem("extrasforBattingFirst",String(extrasforBattingFirst));
          sessionStorage.setItem("runsbybattingFirst",String(runsbybattingFirst));

        }

        else if (inningsNumber === "2") {
          extrasforBowlingFirst += 1;
          runsbybowlingFirst += 1;

          sessionStorage.setItem("extrasforBowlingFirst",String(extrasforBowlingFirst));
          sessionStorage.setItem("runsbybowlingFirst", runsbybowlingFirst);
        }


        updatePlayerStats(currentbowler, currentbowlerStats);

        displayAll();


      }
      //function to add runs

      function addRun(value) {
        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let nonStrikeBatter = sessionStorage.getItem("nonStrikeBatter");
        let currentbowler = sessionStorage.getItem("currentbowler");
        let strikeBatterStats = getStats(strikeBatter);
        let nonStrikeBatterStats = getStats(nonStrikeBatter);
        let currentbowlerStats = getStats(currentbowler);
        let inningsNumber = sessionStorage.getItem("inningsNumber");
        sessionStorage.setItem("noBall","False");

        let currentrunsofStriker = parseFloat(strikeBatterStats[0]) + value;
        strikeBatterStats[0] = String(currentrunsofStriker);
        let currentballsofStiker = parseFloat(strikeBatterStats[1]) + 1;
        strikeBatterStats[1] = String(currentballsofStiker);

        if(value == 4) {
          let numberoffoursofStriker = parseFloat(strikeBatterStats[2]) + 1;
          strikeBatterStats[2] = String(numberoffoursofStriker);
        }
        if(value == 6) {
          let numberofsixesofStriker = parseFloat(strikeBatterStats[3]) + 1;
          strikeBatterStats[3] = String(numberofsixesofStriker);
        }
        let strikeRateofStriker = (parseFloat(strikeBatterStats[0])/parseFloat(strikeBatterStats[1]))*100;
        strikeBatterStats[4] = strikeRateofStriker.toFixed(2);

        if(value%2 == 1) {
          sessionStorage.setItem("strikeBatter",nonStrikeBatter);
          sessionStorage.setItem("nonStrikeBatter",strikeBatter);
        }

        let oversbowledbyCurrentBowler = parseFloat(currentbowlerStats[5]);
        let ballsbowledbyCurrentBowler = (Math.floor(oversbowledbyCurrentBowler)*6) + ((oversbowledbyCurrentBowler-Math.floor(oversbowledbyCurrentBowler))*10) +1;
        oversbowledbyCurrentBowler = ((ballsbowledbyCurrentBowler - (ballsbowledbyCurrentBowler%6))/6) + (ballsbowledbyCurrentBowler%6)/10;
        currentbowlerStats[5] = oversbowledbyCurrentBowler.toFixed(1);
        updatePlayerStats(currentbowler, currentbowlerStats);

        let runsgivenbyCurrentbowler = parseFloat(currentbowlerStats[7]) + value;
        currentbowlerStats[7] = String(runsgivenbyCurrentbowler);
        updatePlayerStats(currentbowler, currentbowlerStats);

        let economyofCurrentBowler = (parseFloat(currentbowlerStats[7])/ballsbowledbyCurrentBowler)*6;
        currentbowlerStats[9] = economyofCurrentBowler.toFixed(2);
        updatePlayerStats(currentbowler, currentbowlerStats);

        if(inningsNumber === "1") {
          let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
          let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
          runsbybattingFirst += value;
          let ballsplayedbyBattingFirst = (Math.floor(oversplayedbybattingFirst)*6) + ((oversplayedbybattingFirst-Math.floor(oversplayedbybattingFirst))*10) +1;
          oversplayedbybattingFirst = ((ballsplayedbyBattingFirst - (ballsplayedbyBattingFirst%6))/6) + (ballsplayedbyBattingFirst%6)/10;
          sessionStorage.setItem("runsbybattingFirst",String(runsbybattingFirst));
          sessionStorage.setItem("oversplayedbybattingFirst",oversplayedbybattingFirst.toFixed(1));

        }
        else if(inningsNumber === "2") {
          let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
          let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
          runsbybowlingFirst += value;
          let ballsplayedbyBowlingFirst = (Math.floor(oversplayedbybowlingFirst)*6) + ((oversplayedbybowlingFirst-Math.floor(oversplayedbybowlingFirst))*10) +1;
          oversplayedbybowlingFirst = ((ballsplayedbyBowlingFirst - (ballsplayedbyBowlingFirst%6))/6) + (ballsplayedbyBowlingFirst%6)/10;
          sessionStorage.setItem("runsbybowlingFirst",String(runsbybowlingFirst));
          sessionStorage.setItem("oversplayedbybowlingFirst",oversplayedbybowlingFirst.toFixed(1));

        }



        updatePlayerStats(strikeBatter, strikeBatterStats);
        updatePlayerStats(nonStrikeBatter, nonStrikeBatterStats);
        updatePlayerStats(currentbowler, currentbowlerStats);

        displayAll();

      } 
      

      //noBallFunction 

      function noBall(value) {

        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let nonStrikeBatter = sessionStorage.getItem("nonStrikeBatter");
        let currentbowler = sessionStorage.getItem("currentbowler");
        let strikeBatterStats = getStats(strikeBatter);
        let nonStrikeBatterStats = getStats(nonStrikeBatter);
        let currentbowlerStats = getStats(currentbowler);
        let inningsNumber = sessionStorage.getItem("inningsNumber");
        let extrasforBattingFirst = parseFloat(sessionStorage.getItem("extrasforBattingFirst"));
        let extrasforBowlingFirst = parseFloat(sessionStorage.getItem("extrasforBowlingFirst"));
        

        let currentrunsofStriker = parseFloat(strikeBatterStats[0]) + value;
        strikeBatterStats[0] = String(currentrunsofStriker);
        let currentballsofStiker = parseFloat(strikeBatterStats[1]) + 1;
        strikeBatterStats[1] = String(currentballsofStiker);

        if(value == 4) {
          let numberoffoursofStriker = parseFloat(strikeBatterStats[2]) + 1;
          strikeBatterStats[2] = String(numberoffoursofStriker);
        }
        if(value == 6) {
          let numberofsixesofStriker = parseFloat(strikeBatterStats[3]) + 1;
          strikeBatterStats[3] = String(numberofsixesofStriker);
        }
        let strikeRateofStriker = (parseFloat(strikeBatterStats[0])/parseFloat(strikeBatterStats[1]))*100;
        strikeBatterStats[4] = strikeRateofStriker.toFixed(2);

        if(value%2 == 1) {
          sessionStorage.setItem("strikeBatter",nonStrikeBatter);
          sessionStorage.setItem("nonStrikeBatter",strikeBatter);
        }

        let oversbowledbyCurrentBowler = parseFloat(currentbowlerStats[5]);
        let ballsbowledbyCurrentBowler = (Math.floor(oversbowledbyCurrentBowler)*6) + ((oversbowledbyCurrentBowler-Math.floor(oversbowledbyCurrentBowler))*10);


        let runsgivenbyCurrentbowler = parseFloat(currentbowlerStats[7]) + value + 1;
        currentbowlerStats[7] = String(runsgivenbyCurrentbowler);
        updatePlayerStats(currentbowler, currentbowlerStats);

        let economyofCurrentBowler = (parseFloat(currentbowlerStats[7])/ballsbowledbyCurrentBowler)*6;
        currentbowlerStats[9] = economyofCurrentBowler.toFixed(2);
        updatePlayerStats(currentbowler, currentbowlerStats);

        if(inningsNumber === "1") {
          let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
          let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
          runsbybattingFirst += value + 1;
          let ballsplayedbyBattingFirst = (Math.floor(oversplayedbybattingFirst)*6) + ((oversplayedbybattingFirst-Math.floor(oversplayedbybattingFirst))*10);
          extrasforBattingFirst +=1;
          sessionStorage.setItem("runsbybattingFirst",String(runsbybattingFirst));
          sessionStorage.setItem("extrasforBattingFirst",String(extrasforBattingFirst));

        }
        else if(inningsNumber === "2") {
          let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
          let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
          runsbybowlingFirst += value + 1;
          let ballsplayedbyBowlingFirst = (Math.floor(oversplayedbybowlingFirst)*6) + ((oversplayedbybowlingFirst-Math.floor(oversplayedbybowlingFirst))*10) +1;
          extrasforBowlingFirst +=1;
          sessionStorage.setItem("runsbybowlingFirst",String(runsbybowlingFirst));
          sessionStorage.setItem("extrasforBowlingFirst",String(extrasforBowlingFirst));

        }

        sessionStorage.setItem("noBall","True");

        updatePlayerStats(strikeBatter, strikeBatterStats);
        updatePlayerStats(nonStrikeBatter, nonStrikeBatterStats);
        updatePlayerStats(currentbowler, currentbowlerStats);

        displayAll();


      }


      //overs to balls
      function oversToBalls(overs) {
        let oversPart = Math.floor(overs);      // full completed overs
        let ballsPart = Math.round((overs - oversPart) * 10); // remaining balls (the decimal part ×10)
        return (oversPart * 6) + ballsPart;
      }
      

      // function for a wicket

      function registerWicket() {

        
        
        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let nonStrikeBatter = sessionStorage.getItem("nonStrikeBatter");
        let currentbowler = sessionStorage.getItem("currentbowler");
        let strikeBatterStats = getStats(strikeBatter);
        let nonStrikeBatterStats = getStats(nonStrikeBatter);
        let currentbowlerStats = getStats(currentbowler);
        let inningsNumber = sessionStorage.getItem("inningsNumber");
        let playersofbattingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbat"));
        let playersofbowlingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbat"));

        let wicketsofbattingFirst = parseFloat(sessionStorage.getItem("wicketsofbattingFirst"));
        let wicketsofbowlingFirst = parseFloat(sessionStorage.getItem("wicketsofbowlingFirst"));

        if(inningsNumber === "1") {
          let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
          let ballsplayedbyBattingFirst = (Math.floor(oversplayedbybattingFirst)*6) + ((oversplayedbybattingFirst-Math.floor(oversplayedbybattingFirst))*10) +1;
          oversplayedbybattingFirst = ((ballsplayedbyBattingFirst - (ballsplayedbyBattingFirst%6))/6) + (ballsplayedbyBattingFirst%6)/10;
          sessionStorage.setItem("oversplayedbybattingFirst",oversplayedbybattingFirst.toFixed(1));

          wicketsofbattingFirst++;
          sessionStorage.setItem("wicketsofbattingFirst", String(wicketsofbattingFirst));

        }

        else if(inningsNumber === "2") {
          let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
          let ballsplayedbyBowlingFirst = (Math.floor(oversplayedbybowlingFirst)*6) + ((oversplayedbybowlingFirst-Math.floor(oversplayedbybowlingFirst))*10) +1;
          oversplayedbybowlingFirst = ((ballsplayedbyBowlingFirst - (ballsplayedbyBowlingFirst%6))/6) + (ballsplayedbyBowlingFirst%6)/10;
          sessionStorage.setItem("oversplayedbybowlingFirst",oversplayedbybowlingFirst.toFixed(1));


          wicketsofbowlingFirst++;
          sessionStorage.setItem("wicketsofbowlingFirst", String(wicketsofbowlingFirst));

        }

        let strikeBatterBalls = parseFloat(strikeBatterStats[1]) + 1;
        strikeBatterStats[1] = String(strikeBatterBalls);
        updatePlayerStats(strikeBatter , strikeBatterStats); 
        

        let oversbowledbyCurrentBowler = parseFloat(currentbowlerStats[5]);
        let ballsbowledbyCurrentBowler = (Math.floor(oversbowledbyCurrentBowler)*6) + ((oversbowledbyCurrentBowler-Math.floor(oversbowledbyCurrentBowler))*10) +1;
        oversbowledbyCurrentBowler = ((ballsbowledbyCurrentBowler - (ballsbowledbyCurrentBowler%6))/6) + (ballsbowledbyCurrentBowler%6)/10;
        currentbowlerStats[5] = oversbowledbyCurrentBowler.toFixed(1);
        updatePlayerStats(currentbowler, currentbowlerStats);

        let wicketstakenbyCurrentBowler = parseFloat(currentbowlerStats[8]) + 1;
        currentbowlerStats[8] = String(wicketstakenbyCurrentBowler);
        updatePlayerStats(currentbowler, currentbowlerStats);
        let initialInningsNumber = parseFloat(sessionStorage.getItem("inningsNumber"));
        
        endofInningsCheck();
        let finalInningsNumber = parseFloat(sessionStorage.getItem("inningsNumber"));

        if(finalInningsNumber !== initialInningsNumber) {
          return; // innings has changed! Don't show "new batter" form
        }
        if (sessionStorage.getItem("winningTeam") !== null) {
          // Match is over — don’t show new batter form
          return;
        }
        if (sessionStorage.getItem("initialised") === "false") {
          return;
        }
        
          document.getElementById("mainLiveForm").style.display = "none";
          document.getElementById("changeFormForBatter").style.display = "block";
          sessionStorage.setItem("batterForm","True");
        
        //form for new batter from here

        document.getElementById("changeBatter").addEventListener("click", function() {

          let newBatter = document.getElementById("newBatter").value;
          if(!newBatter) {
            alert("Please fill in the name of new Batter.");
            return;
          }
          if(!(playersofbowlingFirstforbowl.includes(newBatter)) &&  !(playersofbattingFirstforbat.includes(newBatter)) ) {
            initialisePlayer(newBatter);
          }
          if(inningsNumber === "1") {
            playersofbattingFirstforbat.push(newBatter);
            strikeBatter = newBatter;
            strikeBatterStats = getStats(strikeBatter);
            sessionStorage.setItem("strikeBatter",newBatter);
            updatePlayerStats(strikeBatter, strikeBatterStats);
            sessionStorage.setItem("playersofbattingFirstforbat", JSON.stringify(playersofbattingFirstforbat));
          }
          else if(inningsNumber === "2") {
            playersofbowlingFirstforbat.push(newBatter);
            strikeBatter = newBatter;
            strikeBatterStats = getStats(strikeBatter);
            sessionStorage.setItem("strikeBatter",newBatter);
            updatePlayerStats(strikeBatter, strikeBatterStats);
            sessionStorage.setItem("playersofbowlingFirstforbat", JSON.stringify(playersofbowlingFirstforbat));
          }
          
          if(sessionStorage.getItem("bowlerForm") === "False") {
            document.getElementById("mainLiveForm").style.display = "block";
          }
          document.getElementById("changeFormForBatter").style.display = "none";
          sessionStorage.setItem("batterForm","False"); 
          displayAll();

        }, { once: true });
        document.getElementById("newBatter").value = "";
        document.getElementById("newBatter").placeholder="Enter New Batter's Name";
        displayAll();
      }

      //removing alert messages for better UI

      function showMessage(message, nextAction) {
        // 1. Show the message box
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("messageText").innerText = message;
        
        // 2. Disable all scoring buttons
        disableAllScoringButtons();
      
        // 3. Set up Continue button
        document.getElementById("continueButton").onclick = function() {
          document.getElementById("messageBox").style.display = "none";
          enableAllScoringButtons();
          nextAction();  // Execute the action (e.g., move to innings 2)
        }
      }
      
      //function to disable bowled, caught and lbw buttons
      function disableWicketButtons() {
        const wicketButtons = document.querySelectorAll('.wicket-buttons button');
        wicketButtons.forEach(button => {
          button.disabled = true;             // disable the button
          button.style.opacity = "0.5";        // make it look faded
          button.style.cursor = "not-allowed"; // cursor shows it's disabled
        });
      }
      //function to enable them
      function enableWicketButtons() {
        const wicketButtons = document.querySelectorAll('.wicket-buttons button');
        wicketButtons.forEach(button => {
          button.disabled = false;
          button.style.opacity = "1";          // full opacity
          button.style.cursor = "pointer";     // normal pointer
        });
      }
      
      //function to disable scoring buttons and navigation bar
      
      function disableAllScoringButtons() {
        const scoringButtons = document.querySelectorAll(".scoring-buttons button, #registerWicket, #wide, #noBall");
        scoringButtons.forEach(button => {
          button.disabled = true;
        });
      
        const navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach(link => {
          link.style.pointerEvents = "none"; // disable clicking
          link.style.opacity = "0.5";         // make it look disabled
        });
      }
      //function to enable them back
      function enableAllScoringButtons() {
        const scoringButtons = document.querySelectorAll(".scoring-buttons button, #registerWicket, #wide, #noBall");
        scoringButtons.forEach(button => {
          button.disabled = false;
        });
      
        const navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach(link => {
          link.style.pointerEvents = "auto"; // enable clicking again
          link.style.opacity = "1";           // restore normal appearance
        });
      }
      
      
      
      //function to update player data

      function updatePlayerStats(playerName, playerStats) {
        sessionStorage.setItem(playerName + "stats",JSON.stringify(playerStats)); 
      }

      //funtion to set all the values for a player

      function initialisePlayer(playerName) {
        let stats = ["0","0","0","0","0.00","0.0","0","0","0","0.00","not out"];
        sessionStorage.setItem(playerName + "stats",JSON.stringify(stats));  //runs,balls,fours,sixes,strikerate,overs,maidens,runs,wicket,economy,how out
        sessionStorage.setItem(playerName + "initialised","true");
      }
      
      //get stats of players stored in an array

      function getStats(playerName) {

        let boolofPlayerName = sessionStorage.getItem(playerName + "initialised");
        if(boolofPlayerName === "true") {
        let array = JSON.parse(sessionStorage.getItem(playerName+"stats"));
        return array;
        }
        else {
          return "doesnotexist";
        }
      }
      //function to update score display

      function displayScore() {
        let battingFirst = sessionStorage.getItem("battingFirst");
        let bowlingFirst = sessionStorage.getItem("bowlingFirst");
        let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
        let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
        let wicketsofbattingFirst = parseFloat(sessionStorage.getItem("wicketsofbattingFirst"));
        let wicketsofbowlingFirst = parseFloat(sessionStorage.getItem("wicketsofbowlingFirst"));
        let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
        let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
        let inningsNumber = sessionStorage.getItem("inningsNumber");
        if(inningsNumber === "1") {
            let scoreText = `${battingFirst} ${runsbybattingFirst}/${wicketsofbattingFirst} (${sessionStorage.getItem("oversplayedbybattingFirst")}) vs. ${bowlingFirst}`;
            document.getElementById("scoreDisplay").innerText = scoreText;
        }
        else if(inningsNumber === "2") {
            let scoreText = `${bowlingFirst} ${runsbybowlingFirst}/${wicketsofbowlingFirst} (${sessionStorage.getItem("oversplayedbybowlingFirst")}) vs. ${battingFirst} ${runsbybattingFirst}/${wicketsofbattingFirst} (${sessionStorage.getItem("oversplayedbybattingFirst")})`;
            document.getElementById("scoreDisplay").innerText = scoreText;
        }
      }

      //display batters's table

      function displayBatterTable () {
        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let nonStrikeBatter = sessionStorage.getItem("nonStrikeBatter");
        let strikeBatterStats = getStats(strikeBatter);
        let nonStrikeBatterStats = getStats(nonStrikeBatter);
        
        const tableBody = document.getElementById("batterStats");
        tableBody.innerHTML = "";

        const row1 = document.createElement("tr");
        row1.innerHTML = `<td>${strikeBatter} *</td>
                          <td>${strikeBatterStats[0]}</td>          
                          <td>${strikeBatterStats[1]}</td> 
                          <td>${strikeBatterStats[2]}</td>
                          <td>${strikeBatterStats[3]}</td>
                          <td>${strikeBatterStats[4]}</td> `;
        tableBody.appendChild(row1);

        const row2 = document.createElement("tr");
        row2.innerHTML = `<td>${nonStrikeBatter}</td>
                          <td>${nonStrikeBatterStats[0]}</td>          
                          <td>${nonStrikeBatterStats[1]}</td> 
                          <td>${nonStrikeBatterStats[2]}</td>
                          <td>${nonStrikeBatterStats[3]}</td>
                          <td>${nonStrikeBatterStats[4]}</td> `;
        tableBody.appendChild(row2);

      }


      //display bowler's table

      function displayBowlerTable() {

        
        let currentbowler = sessionStorage.getItem("currentbowler");
        let bowlerStats = getStats(currentbowler);

        const tableBody = document.getElementById("bowlerStats");
        tableBody.innerHTML = "";

        const row = document.createElement("tr");
        row.innerHTML = `<td>${currentbowler}</td>
                          <td>${bowlerStats[5]}</td> 
                          <td>${bowlerStats[6]}</td>         
                          <td>${bowlerStats[7]}</td> 
                          <td>${bowlerStats[8]}</td>
                          <td>${bowlerStats[9]}</td> `;
        tableBody.appendChild(row);
      }


      //function to update all variables 

      function updateVariables() {
        //this function was never added because i never had a need of it
        //but it cant be removed from here as i have used it somewhere and i dont know where
        //if i remove the js would stop working

      }

      //function end of innings check
      

      function endofInningsCheck() {
        let inningsNumber = sessionStorage.getItem("inningsNumber");
        let wicketsofbattingFirst = parseFloat(sessionStorage.getItem("wicketsofbattingFirst"));
        let wicketsofbowlingFirst = parseFloat(sessionStorage.getItem("wicketsofbowlingFirst"));
        let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
        let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
        let maxnoofOvers = parseFloat(sessionStorage.getItem("maxnoofOvers"));
        let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
        let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
        let battingFirst = sessionStorage.getItem("battingFirst");
        let bowlingFirst = sessionStorage.getItem("bowlingFirst");
        let currentbowler = sessionStorage.getItem("currentbowler");
        let currentbowlerStats = getStats(currentbowler);

        if (inningsNumber === "1" ) {
          if (wicketsofbattingFirst == 10 || oversplayedbybattingFirst == maxnoofOvers) {

            if (sessionStorage.getItem("maidenPossible") === "True") {

              let maidenOvers = parseFloat(currentbowlerStats[6]);
              maidenOvers += 1;
              currentbowlerStats[6] = String(maidenOvers);
    
              updatePlayerStats(currentbowler,currentbowlerStats);
    
              
            }
            inningsNumber = "2";
            sessionStorage.setItem("inningsNumber", "2");
            showMessage("End of Innings One.", function() {
              inningsNumber = "2";
              sessionStorage.setItem("inningsNumber", "2");
              sessionStorage.setItem("initialised", "false");
              document.getElementById("initialForm").style.display = "block";
              document.getElementById("mainLiveForm").style.display = "none";
            });
          }
        }
        else if (inningsNumber === "2") {
          if (wicketsofbowlingFirst == 10 || oversplayedbybowlingFirst == maxnoofOvers || runsbybowlingFirst > runsbybattingFirst) {

            if (sessionStorage.getItem("maidenPossible") === "True") {

              let maidenOvers = parseFloat(currentbowlerStats[6]);
              maidenOvers += 1;
              currentbowlerStats[6] = String(maidenOvers);
    
              updatePlayerStats(currentbowler,currentbowlerStats);
    
            }
            if (runsbybowlingFirst > runsbybattingFirst) {
              sessionStorage.setItem("winningTeam", bowlingFirst);
              showMessage(bowlingFirst + " won.", function() {
                window.location.href = "summary.html";
              });
            } 
            else if (runsbybattingFirst > runsbybowlingFirst) {
              sessionStorage.setItem("winningTeam", battingFirst);
              showMessage(battingFirst + " won.", function() {
                window.location.href = "summary.html";
              });
            } 
            else {
              sessionStorage.setItem("winningTeam", "Tie");
              showMessage("Match Tied.", function() {
                window.location.href = "summary.html";
              });
            }
          }
        }
        
      }

      //end of over check for change of bowler
      
      function endofOverCheck () {

        let strikeBatter = sessionStorage.getItem("strikeBatter");
        let nonStrikeBatter = sessionStorage.getItem("nonStrikeBatter");
        let oversPlayedbyCurrentBattingTeam = 0;
        let maxnoofOvers = parseFloat(sessionStorage.getItem("maxnoofOvers"));
        let inningsNumber = sessionStorage.getItem("inningsNumber");

        if(inningsNumber === "1") {
          oversPlayedbyCurrentBattingTeam = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
        }
        else if(inningsNumber === "2") {
          oversPlayedbyCurrentBattingTeam = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));

        }
        //i dont remember why had i commented this out and didnt add again :(
        // if(oversPlayedbyCurrentBattingTeam==2) {
        //   inningsNumber = "2";
        //   sessionStorage.setItem("initialised","false");
        //   sessionStorage.setItem("inningsNumber","2");
        //   return;
        // }

        if((oversPlayedbyCurrentBattingTeam*10)%10==0 && oversPlayedbyCurrentBattingTeam!=0 && oversPlayedbyCurrentBattingTeam!=maxnoofOvers) {
          sessionStorage.setItem("strikeBatter",nonStrikeBatter);
          sessionStorage.setItem("nonStrikeBatter",strikeBatter);
          changeofBowler();
        }
        displayAll();
      }

      //change of bowler

      function changeofBowler() {
        let currentbowler = sessionStorage.getItem("currentbowler");
        let currentbowlerStats = getStats(currentbowler);
        let playersofbowlingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbowl"));
        let playersofbattingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbowl"));
        let inningsNumber = sessionStorage.getItem("inningsNumber");

        if (sessionStorage.getItem("maidenPossible") === "True") {

          let maidenOvers = parseFloat(currentbowlerStats[6]);
          maidenOvers += 1;
          currentbowlerStats[6] = String(maidenOvers);

          updatePlayerStats(currentbowler,currentbowlerStats);

        }


        displayAll();

        document.getElementById("mainLiveForm").style.display = "none";
        document.getElementById("changeFormForBowler").style.display = "block";
        sessionStorage.setItem("bowlerForm","True");

        document.getElementById("changeBowler").addEventListener("click", function() {

          let newBowler = document.getElementById("newBowler").value;
          if(!newBowler) {
            alert("Please fill in the name of new Bowler.");
            return;
          }

          
          if(getStats(newBowler) === "doesnotexist") {
            initialisePlayer(newBowler);
          }
         
          if(inningsNumber === "1") {
            playersofbowlingFirstforbowl.push(newBowler);
            currentbowler = newBowler;
            sessionStorage.setItem("maidenPossible","True");
            currentbowlerStats = getStats(currentbowler);
            sessionStorage.setItem("currentbowler",newBowler);
            updatePlayerStats(currentbowler, currentbowlerStats);
            sessionStorage.setItem("playersofbowlingFirstforbowl", JSON.stringify(playersofbowlingFirstforbowl));
          }
          else if(inningsNumber === "2") {
            playersofbattingFirstforbowl.push(newBowler);
            currentbowler = newBowler;
            currentbowlerStats = getStats(currentbowler);
            sessionStorage.setItem("currentbowler",newBowler);
            updatePlayerStats(currentbowler, currentbowlerStats);
            sessionStorage.setItem("playersofbattingFirstforbowl", JSON.stringify(playersofbattingFirstforbowl));
          }
          
          if(sessionStorage.getItem("batterForm") === "False") {
            document.getElementById("mainLiveForm").style.display = "block";
          }
          document.getElementById("changeFormForBowler").style.display = "none";
          sessionStorage.setItem("bowlerForm","False");
          showRunRates();
          displayAll();

        }, { once: true });
        document.getElementById("newBowler").value = "";
        document.getElementById("newBowler").placeholder="Enter New Bowler's Name";
        displayAll();

      }

      //to display everything together

      function displayAll() {
        displayScore();
        displayBatterTable();
        displayBowlerTable();
        delayWithButtonDisable();
      }

      //delay + deactivation of all buttons
      //didnt work as expected, but i cant remove due to same reason again, i have used it somewhere

      function delayWithButtonDisable() {


        // // Disable all buttons
        // const buttons = document.querySelectorAll("button");
        // buttons.forEach(btn => btn.disabled = true);
    
        // // Wait for 0.5 seconds (500 ms)
        // setTimeout(() => {
        //     // Re-enable all buttons
        //     buttons.forEach(btn => btn.disabled = false);
        //     console.log("Delay over, buttons enabled");
        // }, 500); // 500 milliseconds = 0.5 seconds
      }

      // to disable all buttons

      function disableAllButtons() {
        // Get all button elements in the document
        let buttons = document.querySelectorAll('button');

        // Disable each button
        buttons.forEach(button => {
          button.disabled = true;
        });

      }


      // to add commentaary as well as audio commentary

      function addCommentary(runs) {
        let commentaryNumber = parseFloat(sessionStorage.getItem("commentaryNumber"));
        let dotBallCommentary = JSON.parse(sessionStorage.getItem("dotBallCommentary"));
        let oneRunCommentary = JSON.parse(sessionStorage.getItem("oneRunCommentary"));
        let twoRunCommentary = JSON.parse(sessionStorage.getItem("twoRunCommentary"));
        let threeRunCommentary = JSON.parse(sessionStorage.getItem("threeRunCommentary"));
        let fourRunCommentary = JSON.parse(sessionStorage.getItem("fourRunCommentary"));
        let sixRunCommentary = JSON.parse(sessionStorage.getItem("sixRunCommentary"));
        let bowledCommentary = JSON.parse(sessionStorage.getItem("bowledCommentary"));
        let lbwCommentary = JSON.parse(sessionStorage.getItem("lbwCommentary"));
        let caughtCommentary = JSON.parse(sessionStorage.getItem("caughtCommentary"));
        let noBallCommentary = JSON.parse(sessionStorage.getItem("noBallCommentary"));
        let wideCommentary = JSON.parse(sessionStorage.getItem("wideCommentary"));
        let allCommentaryEntries = JSON.parse(sessionStorage.getItem("allCommentaryEntries"));
      
        let oversPlayed = 0;
        let bowlerName = sessionStorage.getItem("currentbowler");
        let batterName = sessionStorage.getItem("strikeBatter");
        let inningsNumber = sessionStorage.getItem("inningsNumber");
      
        if (inningsNumber === "1") {
          oversPlayed = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
        } else {
          oversPlayed = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));
        }
      
        let overPart = Math.floor(oversPlayed);
        let ballPart = Math.round((oversPlayed - overPart) * 10);
        let ballLabel = `${overPart}.${ballPart}`;
      
        let mainAction = "";
      
        if (runs === 0) {
          mainAction = "no run";
        } else if (runs === 1) {
          mainAction = "1 run";
        } else if (runs === 2) {
          mainAction = "2 runs";
        } else if (runs === 3) {
          mainAction = "3 runs";
        } else if (runs === 4) {
          mainAction = "FOUR";
        } else if (runs === 6) {
          mainAction = "SIX";
        } else if (runs === 7) { 
          mainAction = "BOWLED";
        } else if (runs === 8) { 
          mainAction = "Wide Ball";
        }
        else if (runs === 9) { 
          mainAction = "No Ball and a Free Hit on next ball";
        }
        else if (runs === 10) { 
          mainAction = "LBW! OUT";
        }
        else if (runs === 11) { 
          mainAction = "Caught! OUT";
        }
      
        let randomLine = "";
        let commentaryArray = [dotBallCommentary, oneRunCommentary, twoRunCommentary, threeRunCommentary, fourRunCommentary, "null", sixRunCommentary, bowledCommentary,wideCommentary,noBallCommentary,lbwCommentary,caughtCommentary];
        if (runs !== 5) { // 5 isn't used anywhere
          randomLine = commentaryArray[runs][commentaryNumber];
        }
      
        let fullCommentary = `<strong>${ballLabel}</strong> ${bowlerName} to ${batterName}, ${mainAction}<br><em>${randomLine}</em>`;
      
        // Add to commentary list
        allCommentaryEntries.unshift(fullCommentary);
      
       
      
        // Update UI
        updateCommentaryBox();

        if (sessionStorage.getItem("audioCommentary") === "True") {
          let audio;
          if (runs === 0) {
            audio = new Audio("allCommentaries/dotBallCommentary/dotBallCommentary[" + commentaryNumber + "].mp3");
          } else if (runs === 1) {
            audio = new Audio("allCommentaries/oneRunCommentary/oneRunCommentary[" + commentaryNumber + "].mp3");
          } else if (runs === 2) {
            audio = new Audio("allCommentaries/twoRunCommentary/twoRunCommentary[" + commentaryNumber + "].mp3");
          } else if (runs === 3) {
            audio = new Audio("allCommentaries/threeRunCommentary/threeRunCommentary[" + commentaryNumber + "].mp3");
          } else if (runs === 4) {
            audio = new Audio("allCommentaries/fourRunCommentary/fourRunCommentary[" + commentaryNumber + "].mp3");
          } else if (runs === 6) {
            audio = new Audio("allCommentaries/sixRunCommentary/sixRunCommentary[" + commentaryNumber + "].mp3");
          } else if (runs === 7) { 
            audio = new Audio("allCommentaries/bowledCommentary/bowledCommentary[" + commentaryNumber + "].mp3");
          } else if (runs === 8) { 
            audio = new Audio("allCommentaries/wideCommentary/wideCommentary[" + commentaryNumber + "].mp3");
          }
          else if (runs === 9) { 
            audio = new Audio("allCommentaries/noBallCommentary/noBallCommentary[" + commentaryNumber + "].mp3");
          }
          else if (runs === 10) { 
            audio = new Audio("allCommentaries/lbwCommentary/lbwCommentary[" + commentaryNumber + "].mp3");
          }
          else if (runs === 11) { 
            audio = new Audio("allCommentaries/caughtCommentary/caughtCommentary[" + commentaryNumber + "].mp3");
          }

          if(audio) {
          audio.play();
          }
        }
      
        // Update commentary number
        commentaryNumber = (commentaryNumber + 1) % 5;
        sessionStorage.setItem("allCommentaryEntries", JSON.stringify(allCommentaryEntries));

        sessionStorage.setItem("commentaryNumber", commentaryNumber.toString());
      }

      //to update the commentary box
      function updateCommentaryBox() {
        let allCommentaryEntries = JSON.parse(sessionStorage.getItem("allCommentaryEntries"));
        let box = document.getElementById("commentaryBox");
        box.innerHTML = "";
      
        allCommentaryEntries.slice(0, 5).forEach(comment => {
          let entryDiv = document.createElement("div");
          entryDiv.className = "commentary-entry";
          entryDiv.innerHTML = comment;
          box.appendChild(entryDiv);
        });
      }

    
  }

//scorecard.html ka logic

if (window.location.pathname.includes("scorecard.html")) {
  let playersofbattingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbat"));
  let playersofbowlingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbowl"));
  let playersofbattingFirstforbowl = JSON.parse(sessionStorage.getItem("playersofbattingFirstforbowl"));
  let playersofbowlingFirstforbat = JSON.parse(sessionStorage.getItem("playersofbowlingFirstforbat"));
  let inningsNumber = sessionStorage.getItem("inningsNumber");
  let battingFirst = sessionStorage.getItem("battingFirst");
  let bowlingFirst = sessionStorage.getItem("bowlingFirst");
  let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
  let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
  let wicketsofbattingFirst = parseFloat(sessionStorage.getItem("wicketsofbattingFirst"));
  let wicketsofbowlingFirst = parseFloat(sessionStorage.getItem("wicketsofbowlingFirst"));
  let oversplayedbybattingFirst = sessionStorage.getItem("oversplayedbybattingFirst");
  let oversplayedbybowlingFirst = sessionStorage.getItem("oversplayedbybowlingFirst");
  let extrasforBattingFirst = parseFloat(sessionStorage.getItem("extrasforBattingFirst"));
  let extrasforBowlingFirst = parseFloat(sessionStorage.getItem("extrasforBowlingFirst"));
  const tableBodyforInnings1Batting = document.getElementById("team1Batting");
  tableBodyforInnings1Batting.innerHTML = "";
  const tableBodyforInnings1Bowling = document.getElementById("team2Bowling");
  tableBodyforInnings1Bowling.innerHTML = "";
  const tableBodyforInnings2Batting = document.getElementById("team2Batting");
  tableBodyforInnings2Batting.innerHTML = "";
  const tableBodyforInnings2Bowling = document.getElementById("team1Bowling");
  tableBodyforInnings2Bowling.innerHTML = "";

   //to display the team scores
  document.getElementById("team1Name").innerText = battingFirst + " " +runsbybattingFirst+"/"+wicketsofbattingFirst +" ("+oversplayedbybattingFirst+") - EXTRAS: " + extrasforBattingFirst;
  document.getElementById("team2Name").innerText = bowlingFirst + " " +runsbybowlingFirst+"/"+wicketsofbowlingFirst +" ("+oversplayedbybowlingFirst+") - EXTRAS: " + extrasforBowlingFirst;
  
  // to display the tables
  for (let i = 0; i < playersofbattingFirstforbat.length; i++) {
    let playerName = playersofbattingFirstforbat[i];
    let playerStats = getStats(playerName);
    

    const row1 = document.createElement("tr");
    row1.innerHTML = `<td>${playerName}</td>
                      <td>${playerStats[10]}</td>
                      <td>${playerStats[0]}</td>          
                      <td>${playerStats[1]}</td> 
                      <td>${playerStats[2]}</td>
                      <td>${playerStats[3]}</td>
                      <td>${playerStats[4]}</td> `;
    tableBodyforInnings1Batting.appendChild(row1);

  }

  for (let i = 0; i < playersofbowlingFirstforbowl.length; i++) {
    let playerName = playersofbowlingFirstforbowl[i];
    let playerStats = getStats(playerName);
    

    const row1 = document.createElement("tr");
    row1.innerHTML = `<td>${playerName}</td>
                      <td>${playerStats[5]}</td>          
                      <td>${playerStats[6]}</td> 
                      <td>${playerStats[7]}</td>
                      <td>${playerStats[8]}</td>
                      <td>${playerStats[9]}</td> `;
    tableBodyforInnings1Bowling.appendChild(row1);

  }

  for (let i = 0; i < playersofbowlingFirstforbat.length; i++) {
    let playerName = playersofbowlingFirstforbat[i];
    let playerStats = getStats(playerName);
    

    const row1 = document.createElement("tr");
    row1.innerHTML = `<td>${playerName}</td>
                      <td>${playerStats[10]}</td>
                      <td>${playerStats[0]}</td>          
                      <td>${playerStats[1]}</td> 
                      <td>${playerStats[2]}</td>
                      <td>${playerStats[3]}</td>
                      <td>${playerStats[4]}</td> `;
    tableBodyforInnings2Batting.appendChild(row1);

  }

  for (let i = 0; i < playersofbattingFirstforbowl.length; i++) {
    let playerName = playersofbattingFirstforbowl[i];
    let playerStats = getStats(playerName);
    

    const row1 = document.createElement("tr");
    row1.innerHTML = `<td>${playerName}</td>
                      <td>${playerStats[5]}</td>          
                      <td>${playerStats[6]}</td> 
                      <td>${playerStats[7]}</td>
                      <td>${playerStats[8]}</td>
                      <td>${playerStats[9]}</td> `;
    tableBodyforInnings2Bowling.appendChild(row1);

  }

// function to get stats of any player

  function getStats(playerName) {

    let boolofPlayerName = sessionStorage.getItem(playerName + "initialised");
    if(boolofPlayerName === "true") {
    let array = JSON.parse(sessionStorage.getItem(playerName+"stats"));
    return array;
    }
    else {
      return "doesnotexist";
    }
  }
  
}

//summary.html ka logic

if (window.location.pathname.includes("summary.html")) {

  let winningTeam = sessionStorage.getItem("winningTeam");
  let battingFirst = sessionStorage.getItem("battingFirst");
  let bowlingFirst = sessionStorage.getItem("bowlingFirst");
  let runsbybattingFirst = parseFloat(sessionStorage.getItem("runsbybattingFirst"));
  let runsbybowlingFirst = parseFloat(sessionStorage.getItem("runsbybowlingFirst"));
  let wicketsofbattingFirst = parseFloat(sessionStorage.getItem("wicketsofbattingFirst"));
  let wicketsofbowlingFirst = parseFloat(sessionStorage.getItem("wicketsofbowlingFirst"));
  let maxnoofOvers = parseFloat(sessionStorage.getItem("maxnoofOvers"));
  let oversplayedbybattingFirst = parseFloat(sessionStorage.getItem("oversplayedbybattingFirst"));
  let oversplayedbybowlingFirst = parseFloat(sessionStorage.getItem("oversplayedbybowlingFirst"));

  

  if( winningTeam !== null) {

    if(winningTeam === battingFirst ) {
      let marginOfRuns = runsbybattingFirst - runsbybowlingFirst;
      document.getElementById("result-text").innerHTML = winningTeam + " wins by " + marginOfRuns + " runs!";
    }

    else if(winningTeam === bowlingFirst) {
      let marginOfWickets = 10 - wicketsofbowlingFirst;
      function oversToBalls(overs) {
        let fullOvers = Math.floor(overs);
        let balls = Math.round((overs - fullOvers) * 10); // decimal part ×10 gives extra balls
        return (fullOvers * 6) + balls;
      }
      
      let totalBalls = oversToBalls(maxnoofOvers);
      let ballsBowled = oversToBalls(oversplayedbybowlingFirst);
      let ballsLeft = totalBalls - ballsBowled;
      
      document.getElementById("result-text").innerHTML = winningTeam + " wins by " + marginOfWickets + " wickets (" + ballsLeft + " balls left)!";
    }
    else {
      document.getElementById("result-text").innerHTML = "Match Tied.";
    }
  }
  
  //reset button




  document.getElementById("resetButton").addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "setup.html";
  });
  
}
//to change the theme, not implemented properly yet because some buttons are still remaining blue because of the way i have written css
document.getElementById("themeToggleButton").addEventListener("click", function() {
  const body = document.body;

  if (body.classList.contains("blue-theme")) {
      body.classList.remove("blue-theme");
      body.classList.add("green-theme");
  } else {
      body.classList.remove("green-theme");
      body.classList.add("blue-theme");
  }
});