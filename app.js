//newUser Class
class addUser {
    constructor(name, age, gender, created) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.created = created;
    }

    generateId = () => {
        return 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnn-nnnn-7nnn-tnnn-nnnnnnnnnnnn'.replace(/[nt]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'n' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}

// Users array
let arrUsers = [];

//Get user info
let userName = prompt('Captura tu nombre',).trim().toLocaleLowerCase();
let userAge = prompt('Ingresa tu edad',);
let userGenre = prompt('Indica tu genero: Masculino (M) o Femenino (F)',).trim().toLocaleLowerCase();
let createdAt = new Date();

while (userName === null || userName == undefined || userName.trim() == '') {
    userName = prompt('Por favor captura tu nombre', '');
}

while (userAge === null || userAge == undefined || userAge.trim() === '') {
    userAge = prompt('Por favor captura tu edad', '');
}

while (userGenre === null || userGenre === undefined || userGenre.trim() == '') {
    userGenre = prompt('Por favor captura tu genero: Masculino (M) o Femenino (F)', '');
}

//Store user's object
const newUser = new addUser(userName, userAge, userGenre, createdAt);
let userId = newUser.generateId();
const userProfile = Object.assign({}, newUser);
userProfile.uniqueId = userId;


//console.log(userProfile);
//console.log(newUser === userProfile);


