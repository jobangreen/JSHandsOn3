class Grandparents {
    constructor (name, hair, eyes, vertical){
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
        this.vertical = vertical;
    }

}

    class Parents extends Grandparents{
        constructor (name, hair, eyes, vertical){
            super (name, hair, eyes, vertical);
        }

    }


            class Children extends Parents {
                constructor (name, hair, eyes, vertical){
                    super (name, hair, eyes, vertical);
                }

            }


        

let gpa = new Grandparents("grandpa", "brown", "blue", 12);
let gma = new Grandparents("grandma", "blonde", '"brown"', 14);
let mother = new Parents("mom", "brown", "brown", 15);
let father = new Parents("dad", "brown", "blue", 20);
let myself = new Children("I", "brown", "green", 25);

let familyName = [gpa.name, gma.name, mother.name, father.name, myself.name];
let familyVertical = [gpa.vertical, gma.vertical, mother.vertical, father.vertical, myself.vertical]

let i;
for (i=0; i<familyName.length; i++){
    console.log(familyName[i] + " can jump " + familyVertical[i] + " inches ")
}

