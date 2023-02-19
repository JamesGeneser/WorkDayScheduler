// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
    // TODO: Add a listener for click events on the save button. This code should

    //////////////SAVE_BUTTON
    // var saveBtn9 = $("#hour-9 .btn");
    // var saveBtn10 = $("#hour-10 .btn");

    $(".saveBtn").on("click", function () {
        var hour = $(this).parent().attr("id");

        var input = $(this).siblings("textarea").val();


        localStorage.setItem(hour,input);

       



    })

    // saveBtn.click(buttonTester)
    // function buttonTester(){console.log("test button")}

    // var check9 = localStorage.getItem("input-hour-9")
    // console.log(check9)
    


    // use the id in the containing time-block as a key to save the user input in
    // function renderInputContent() {
    //     var textArea9 = $("#hour-9 textarea").val();
    //     console.log(textArea9)
    //     if ((textArea9) !== null) {
    //         textArea9 = localStorage.getItem("hour-9")
    //         console.log(textArea9)
            
    //     }
        
    // }

    // renderInputContent()


    var currentHour = dayjs().hour()

    var numFive = $("#hour-5").attr("id").slice(5)
    console.log(numFive)

    $(".time-block").each(function(){
        var timeBlock = $(this).attr("id").slice(5)
        console.log(timeBlock)
        
        if (timeBlock == currentHour){
            this.removeAttribute("class")
            this.setAttribute("class","present")
            console.log(this)
        }


   
     })
    





    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  