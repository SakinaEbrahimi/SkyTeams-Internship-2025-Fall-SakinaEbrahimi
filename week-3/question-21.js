
    // Author: Sakinah Ebrahimi
    // Description: Password Strength checker: A strong password must be
    // at least 8 characters long
    // contain at least one uppercase, one lowercase, and one number
    //input:MYpass12
    //output:Strong
    //input:pass
    //output: weak


function passwordChecker(pass){

    if(pass === null || pass === undefined) throw new Error('invalid input')
    let number = {
        0:'0',
        1:'1',
        2:'2',
        3:'3',
        4:'4',
        5:'5',
        6:'6',
        7:'7',
        8:'8',
        9:'9'
    }
    const lower_case_letters = {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        e: "e",
        f: "f",
        g: "g",
        h: "h",
        i: "i",
        j: "j",
        k: "k",
        l: "l",
        m: "m",
        n: "n",
        o: "o",
        p: "p",
        q: "q",
        r: "r",
        s: "s",
        t: "t",
        u: "u",
        v: "v",
        w: "w",
        x: "x",
        y: "y",
        z: "z"
    }

    const upper_case_letters = {
        A: "A",
        B: "B",
        C: "C",
        D: "D",
        E: "E",
        F: "F",
        G: "G",
        H: "H",
        I: "I",
        J: "J",
        K: "K",
        L: "L",
        M: "M",
        N: "N",
        O: "O",
        P: "P",
        Q: "Q",
        R: "R",
        S: "S",
        T: "T",
        U: "U",
        V: "V",
        W: "W",
        X: "X",
        Y: "Y",
        Z: "Z"
      };
    let is_upper= false
    let is_lower = false
    let is_num = false
    if(pass.length >=8){    
        for(let i=0; i<pass.length; i++){           
            if( pass[i] in upper_case_letters){
               is_upper = true
            }
            if(pass[i] in lower_case_letters ){
                is_lower = true
            }
            if(pass[i] in number){
                is_num = true
            }
            if(is_upper && is_lower && is_num){
                return 'strong'
            }
        }
           return 'weak'
    }else{
        return 'password length must be at least 8 character'
    }

}

module.exports = passwordChecker