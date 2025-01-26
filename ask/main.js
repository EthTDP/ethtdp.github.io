let noClickedCount = 0;

function yesClicked() {
  if(noClickedCount > 7) {
    alert("SUCH A HATER (refresh if you wanna say yes :rolling_eyes:)");
  } else {
    var confirmDate = confirm("HEHE SHE WANTS TO BE MY VALENTINE?? (OK yes, Cancel no)");

    if(confirmDate) {
      window.location.href = "../yippee/yippeee.html";
    } else {
      alert("MEANIE!!");
    }
  }
}


function noClicked() {
  if(noClickedCount === 0)
  {
    alert("are you sure you wanna say no??");
    noClickedCount++;
  } else if(noClickedCount === 1)
  {
    alert("are you REALLY sure you wanna say no??");
    noClickedCount++;
  } else if(noClickedCount === 2)
  {
    alert("ARE YOU REALLY SURE YOU DON'T WANT TO??");
    noClickedCount++;
  } else if(noClickedCount === 3)
  {
    alert("ARE YOU 100% CONFIDENT?");
    noClickedCount++;
  } else if(noClickedCount === 4)
  {
    alert("SAY YES NOW OR I WILL MAKEOUT WITH YOU");
    noClickedCount++;
  } else if(noClickedCount === 5)
  {
    alert("SAY YES");
    noClickedCount++;
  } else if(noClickedCount === 6)
  {
    alert("SAY YES OR NO VALENTINE");
    noClickedCount++;
  } else if(noClickedCount === 7)
  {
    alert("fine no valentine date! WHAT THE HECK HATER!!!!");
    noClickedCount++;
  } else {
    alert("there's no more :( You said no!");
    noClickedCount++;
  }
}


