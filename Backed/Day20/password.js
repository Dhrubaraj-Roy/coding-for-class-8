const bcrypt = require("bcrypt");
const password = "Dhruba123@";




async function  hasing() {
    //create salt Separately 
    // const  slat = await bcrypt.genSalt(10);
    // console.log(slat);
    // const hashpass = await bcrypt.hash(password,slat);

    //Direct creation of salt is used here in  this function
    const hashpass = await bcrypt.hash(password,10);
    console.log(hashpass);

    //Compare the hash password
    const ans = await bcrypt.compare(password,hashpass);
    console.log(ans);

}

hasing()


