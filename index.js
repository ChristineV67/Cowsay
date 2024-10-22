
import "dotenv/config"; 
 // remove this after you've confirmed it is working


    console.log(`Name ${process.env.NAME}`);

    console.log(`Campus ${process.env.CAMPUS}`);

    import * as cowsay from "cowsay"
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

// or cowsay.think()