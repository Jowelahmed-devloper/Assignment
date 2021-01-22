
// CODE FOR KILOMETER TO METER CONVERT

function kilometerToMeter (meter){
    var meter = meter * 1000;
    return meter;
}
// CODE FOR KILOMETER TO END CONVERT

// CODE FOR BUDGET CALCULATOR START HERE

function budgetCalculator(watch, mobile, laptop){
    var wacthPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;

    var wacthPrice = 50*5;
    var mobilePrice = 100*5;
    var laptopPrice = 500*5;
    var total = wacthPrice + mobilePrice + laptopPrice;
    return total;
}
// CODE FOR BUDGET CALCULATOR END HERE



// CODE FOR HOTEL COST START HERE

function hotelCost (totalDays){
    var days = 0;
    if (totalDays <=10){
        days = 10 * 100;
    }
    else if ( totalDays <= 20){
        var first10Days = 10 *100;
        var remainingDays = totalDays -10;
        var second20Days = remainingDays * 80;
        days = first10Days + second20Days;
    }
    else{
        var first10Days = 10*100;
        second20Days = 10 *80;
        var remainingDays = days -20;
        var third10Days = remainingDays * 50;
        days = first10Days + second20Days + third10Days;s

    }
    return days;
}

// CODE FOR HOTEL COST END HERE

// CODE FOR MEGAFRIEND START HERE

var arr = ["Hamza", "jowel", "Jowel Ahmed", "Shagor", "Amit Chandra paul", "Hasibul Hasan"]
function megaFriend(array){
    var length =0;
    var highest;
    for ( var i = 0;  i < arr.length; i++ ){
        if(arr[i].length > length){
            var length = arr[i].length;
            highest = arr[i];
        }
    }
      return highest;
}

// CODE FOR MEGAFRIEND END HERE