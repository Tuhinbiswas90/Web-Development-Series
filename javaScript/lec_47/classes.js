class Human {
    //Properties
    age;  //public
    #wt=67; //private
    ht=180

    constructor(newage, newheight){
        this.age = newage;
        this.ht = newheight;
    }

    //Behaviour
    walking(){
        console.log("I am Walking & My wt is ", this.#wt)
    }

    running(){
        console.log("I am Running")
    }

    get fetchweight(){
        return this.#wt;
    }

    set modifyweifght(val){
        this.#wt=val;
    }
}

let obj = new Human(20,200);
console.log(obj.age)
// obj.walking()
console.log(obj.ht)
console.log(obj.fetchweight)