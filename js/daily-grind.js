//alert("can you see this?");

/*


    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    Pic - the src of the coffee
    alt - the alt tag for the coffee pic
    desc - a description of the coffee
    day - the day of the week for the coffee
    name - the name of the coffee
    color - the color associated with the coffee

*/





let myDate = new Date();
let myDay = myDate.getDay();
let today = "";


switch(myDay){

    case 0:
        today = "sunday";
    break;

    case 1:
        today = "Monday";
    break;

    default:
        today = "Somthing went wrong";
}

let coffee = {
    name: "Bubble Tea",
    pic: "images/bubble-TextTrack.jpg",
    alt: "a picture of a bubble tea",
    color: "pink",
    day: "Tuesday",
    desc: "I like me some Bubble Tea!",
};


console.log(coffee);