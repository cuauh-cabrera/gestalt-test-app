//newUser Class
class newUser {
    constructor(name, age, gender, created, Id) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.created = created;
        this.Id = Id;
    }
}

//Generate unique Id function
generateId = () => {
    return 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnn-nnnn-7nnn-tnnn-nnnnnnnnnnnn'.replace(/[nt]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'n' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

//Get user info
let userName = prompt('Captura tu nombre',).trim().toLocaleLowerCase();
let userAge = prompt('Ingresa tu edad',);
let userGenre = prompt('Indica tu genero: Masculino (M) o Femenino (F)',).trim().toLocaleLowerCase();
let createdAt = new Date();
let uniqueId = generateId();

while (userName === null || userName == undefined || userName.trim() == '') {
    userName = prompt('Por favor captura tu nombre', '');
}

while (userAge === null || userAge == undefined || userAge.trim() === '') {
    userAge = prompt('Por favor captura tu edad', '');
}

while (userGenre === null || userGenre === undefined || userGenre.trim() == '') {
    userGenre = prompt('Por favor captura tu genero: Masculino (M) o Femenino (F)', '');
}

//Stores user profile
const userProfile = new newUser(userName, userAge, userGenre, createdAt, uniqueId);

//Test
confirm('Estas a punto de comenzar el test. Por favor responde a cada pregunta con SI o NO. Da click en "Aceptar" para comenzar');
userProfile["ans1"] = prompt('Soy insensible','').trim().toLocaleLowerCase();
userProfile["ans2"] = prompt('soy feliz como soy','').trim().toLocaleLowerCase();
userProfile["ans3"] = prompt('Cuando algo me disgusta lo digo','').trim().toLocaleLowerCase();
userProfile["ans4"] = prompt('Me molesta que me vean llorar','').trim().toLocaleLowerCase();
userProfile["ans5"] = prompt('Soy emocional pero me aguanto','').trim().toLocaleLowerCase();
userProfile["ans6"] = prompt('Me desagrada hacer lo mismo que los demas','').trim().toLocaleLowerCase();
userProfile["ans7"] = prompt('No puedo dejar de ser como soy','').trim().toLocaleLowerCase();
userProfile["ans8"] = prompt('Evito culpar a los demas si me siento mal','').trim().toLocaleLowerCase();
userProfile["ans9"] = prompt('Siempre termino lo que empiezo','').trim().toLocaleLowerCase();
userProfile["ans10"] = prompt('Me siento culpable si culpo a los demas','').trim().toLocaleLowerCase();
userProfile["ans11"] = prompt('Debo evitar mostrar mi enojo','').trim().toLocaleLowerCase();
userProfile["ans12"] = prompt('Me abstengo de discutir','').trim().toLocaleLowerCase();
userProfile["ans13"] = prompt('Hago lo que los demas quieren aunque me disguste','').trim().toLocaleLowerCase();
userProfile["ans14"] = prompt('Me disgusta pensar, sentir o hacer lo mismo mucho tiempo','').trim().toLocaleLowerCase();
userProfile["ans15"] = prompt('Me gusta aprender cosas nuevas','').trim().toLocaleLowerCase();
userProfile["ans16"] = prompt('Dejo las cosas para despues','').trim().toLocaleLowerCase();
userProfile["ans17"] = prompt('Expreso lo que me molesta','').trim().toLocaleLowerCase();
userProfile["ans18"] = prompt('Evito sentir','').trim().toLocaleLowerCase();
userProfile["ans19"] = prompt('Seria feliz si no fuera por los demas','').trim().toLocaleLowerCase();
userProfile["ans20"] = prompt('Soy constante en mi inconsistencia','').trim().toLocaleLowerCase();
userProfile["ans21"] = prompt('Hago lo que quiero a pesar de que me digan lo contrario','').trim().toLocaleLowerCase();
userProfile["ans22"] = prompt('Siempre estoy de acuerdo con los demas','').trim().toLocaleLowerCase();
userProfile["ans23"] = prompt('Soy capaz de de dejar de tener una idea fija','').trim().toLocaleLowerCase();
userProfile["ans24"] = prompt('Evito enfrentar','').trim().toLocaleLowerCase();
userProfile["ans25"] = prompt('Me disgusta evitar lo inevitable','').trim().toLocaleLowerCase();
userProfile["ans26"] = prompt('Me gusta sentir','').trim().toLocaleLowerCase();
userProfile["ans27"] = prompt('Evito manifestar lo que me molesta','').trim().toLocaleLowerCase();
userProfile["ans28"] = prompt('Evito dejar para manana lo que puedo hacer hoy','').trim().toLocaleLowerCase();
userProfile["ans29"] = prompt('Me abstengo de culpar a los demas de mi fracaso','').trim().toLocaleLowerCase();
userProfile["ans30"] = prompt('A veces dejo las cosas para despues','').trim().toLocaleLowerCase();
userProfile["ans31"] = prompt('Me disgusta que me digan lo que tengo que hacer','').trim().toLocaleLowerCase();
userProfile["ans32"] = prompt('Me es imposible dejar de pensar en lo que ya paso','').trim().toLocaleLowerCase();
userProfile["ans33"] = prompt('Soy como me ensenaron que debe','').trim().toLocaleLowerCase();
userProfile["ans34"] = prompt('Defiendo mis opiniones','').trim().toLocaleLowerCase();
userProfile["ans35"] = prompt('Debo hacer lo que los demas quieren','').trim().toLocaleLowerCase();
userProfile["ans36"] = prompt('Soy sensible','').trim().toLocaleLowerCase();
userProfile["ans37"] = prompt('Me desagrada terminar lo que empiezo','').trim().toLocaleLowerCase();
userProfile["ans38"] = prompt('Expreso lo que me disgusta','').trim().toLocaleLowerCase();
userProfile["ans39"] = prompt('Estaria bien si no fuera por los demas','').trim().toLocaleLowerCase();
userProfile["ans40"] = prompt('Me siento mal cuando me presionan','').trim().toLocaleLowerCase();
confirm('Gracias por responder el cuestionario. Tus respuestas han sido guardadas. Presiona "Aceptar" para terminar');



console.log(userProfile);



