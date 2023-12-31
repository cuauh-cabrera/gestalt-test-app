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

//Valorization categories
class testCat {
    constructor (cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8) {
        this.cat1 = cat1,
        this.cat2 = cat2,
        this.cat3 = cat3,
        this.cat4 = cat4,
        this.cat5 = cat5,
        this.cat6 = cat6,
        this.cat7 = cat7,
        this.cat8 = cat8
    }
}

const fase = new testCat ("Reposo","Sensacion","Formacion de figura","Movilizacion","Accion","Precontacto","Contacto","Poscontacto");
const bloqueo = new testCat ("Retencion","De sencibilizacion","Proyeccion","Introproyeccion","Retroflexion","Deflexion","Confluencia","Fijacion");
const temor = new testCat ("A triunfar","A sufrir","Al castigo","Al rechazo","A propia agresion","A enfrentar","Al abandono","A ser libre");
const mensaje = new testCat("No mereces","No te amaran","Te danaran","Te rechazaran","No actues","No enfrentes","Te dejaran","Estaras solo");
const necesidad = new testCat("Relajacion","Placer","Reconocimiento","Aceptacion","Expresion","Identificacion","Pertenecia","Intendencia");
const noMatch = new testCat ("Fase no determinada","Bloqueo no determinado","Temor no determinado","Mensaje no determinado","Necesidad no determinada");

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
userProfile["fase"] = "";
userProfile["bloqueo"] = "";
userProfile["temor"] = "";
userProfile["mensaje"] = "";
userProfile["necesidad"] = "";

//Test
confirm('Estas a punto de comenzar el test. Por favor responde a cada pregunta con SI o NO. Da click en "Aceptar" para comenzar');
userProfile["ans1"] = prompt('Soy insensible', '').trim().toLocaleLowerCase();
userProfile["ans2"] = prompt('soy feliz como soy', '').trim().toLocaleLowerCase();
userProfile["ans3"] = prompt('Cuando algo me disgusta lo digo', '').trim().toLocaleLowerCase();
userProfile["ans4"] = prompt('Me molesta que me vean llorar', '').trim().toLocaleLowerCase();
userProfile["ans5"] = prompt('Soy emocional pero me aguanto', '').trim().toLocaleLowerCase();
userProfile["ans6"] = prompt('Me desagrada hacer lo mismo que los demas', '').trim().toLocaleLowerCase();
userProfile["ans7"] = prompt('No puedo dejar de ser como soy', '').trim().toLocaleLowerCase();
userProfile["ans8"] = prompt('Evito culpar a los demas si me siento mal', '').trim().toLocaleLowerCase();
userProfile["ans9"] = prompt('Siempre termino lo que empiezo', '').trim().toLocaleLowerCase();
userProfile["ans10"] = prompt('Me siento culpable si culpo a los demas', '').trim().toLocaleLowerCase();
userProfile["ans11"] = prompt('Debo evitar mostrar mi enojo', '').trim().toLocaleLowerCase();
userProfile["ans12"] = prompt('Me abstengo de discutir', '').trim().toLocaleLowerCase();
userProfile["ans13"] = prompt('Hago lo que los demas quieren aunque me disguste', '').trim().toLocaleLowerCase();
userProfile["ans14"] = prompt('Me disgusta pensar, sentir o hacer lo mismo mucho tiempo', '').trim().toLocaleLowerCase();
userProfile["ans15"] = prompt('Me gusta aprender cosas nuevas', '').trim().toLocaleLowerCase();
userProfile["ans16"] = prompt('Dejo las cosas para despues', '').trim().toLocaleLowerCase();
userProfile["ans17"] = prompt('Expreso lo que me molesta', '').trim().toLocaleLowerCase();
userProfile["ans18"] = prompt('Evito sentir', '').trim().toLocaleLowerCase();
userProfile["ans19"] = prompt('Seria feliz si no fuera por los demas', '').trim().toLocaleLowerCase();
userProfile["ans20"] = prompt('Soy constante en mi inconsistencia', '').trim().toLocaleLowerCase();
userProfile["ans21"] = prompt('Hago lo que quiero a pesar de que me digan lo contrario', '').trim().toLocaleLowerCase();
userProfile["ans22"] = prompt('Siempre estoy de acuerdo con los demas', '').trim().toLocaleLowerCase();
userProfile["ans23"] = prompt('Soy capaz de de dejar de tener una idea fija', '').trim().toLocaleLowerCase();
userProfile["ans24"] = prompt('Evito enfrentar', '').trim().toLocaleLowerCase();
userProfile["ans25"] = prompt('Me disgusta evitar lo inevitable', '').trim().toLocaleLowerCase();
userProfile["ans26"] = prompt('Me gusta sentir', '').trim().toLocaleLowerCase();
userProfile["ans27"] = prompt('Evito manifestar lo que me molesta', '').trim().toLocaleLowerCase();
userProfile["ans28"] = prompt('Evito dejar para manana lo que puedo hacer hoy', '').trim().toLocaleLowerCase();
userProfile["ans29"] = prompt('Me abstengo de culpar a los demas de mi fracaso', '').trim().toLocaleLowerCase();
userProfile["ans30"] = prompt('A veces dejo las cosas para despues', '').trim().toLocaleLowerCase();
userProfile["ans31"] = prompt('Me disgusta que me digan lo que tengo que hacer', '').trim().toLocaleLowerCase();
userProfile["ans32"] = prompt('Me es imposible dejar de pensar en lo que ya paso', '').trim().toLocaleLowerCase();
userProfile["ans33"] = prompt('Soy como me ensenaron que debe', '').trim().toLocaleLowerCase();
userProfile["ans34"] = prompt('Defiendo mis opiniones', '').trim().toLocaleLowerCase();
userProfile["ans35"] = prompt('Debo hacer lo que los demas quieren', '').trim().toLocaleLowerCase();
userProfile["ans36"] = prompt('Soy sensible', '').trim().toLocaleLowerCase();
userProfile["ans37"] = prompt('Me desagrada terminar lo que empiezo', '').trim().toLocaleLowerCase();
userProfile["ans38"] = prompt('Expreso lo que me disgusta', '').trim().toLocaleLowerCase();
userProfile["ans39"] = prompt('Estaria bien si no fuera por los demas', '').trim().toLocaleLowerCase();
userProfile["ans40"] = prompt('Me siento mal cuando me presionan', '').trim().toLocaleLowerCase();
confirm('Gracias por responder el cuestionario. Tus respuestas han sido guardadas. Presiona "Aceptar" para terminar');

////////////   Test evaluation //////////////

//Valorization contrasts
if (userProfile["ans9"] === "si" || userProfile["ans16"] === "no" || userProfile["ans28"] === "si" || userProfile["ans37"] === "no") {

    userProfile["fase"] = fase["cat1"];
    userProfile["bloqueo"] = bloqueo["cat1"];
    userProfile["temor"] = temor["cat1"];
    userProfile["mensaje"] = mensaje["cat1"];
    userProfile["necesidad"] = necesidad["cat1"];

} else if (userProfile["ans1"] === "no" || userProfile["ans18"] === "no" || userProfile["ans26"] === "si" || userProfile["ans36"] === "no") {
    
    userProfile["fase"] = fase["cat2"];
    userProfile["bloqueo"] = bloqueo["cat2"];
    userProfile["temor"] = temor["cat2"];
    userProfile["mensaje"] = mensaje["cat2"];
    userProfile["necesidad"] = necesidad["cat2"];

} else if (userProfile["ans8"] === "si" || userProfile["ans19"] === "no" || userProfile["ans29"] === "si" || userProfile["ans39"] === "no") {

    userProfile["fase"] = fase["cat3"];
    userProfile["bloqueo"] = bloqueo["cat3"];
    userProfile["temor"] = temor["cat3"];
    userProfile["mensaje"] = mensaje["cat3"];
    userProfile["necesidad"] = necesidad["cat3"];

} else if (userProfile["ans2"] === "si" || userProfile["ans11"] === "no" || userProfile["ans21"] === "si" || userProfile["ans33"] === "no") {

    userProfile["fase"] = fase["cat4"];
    userProfile["bloqueo"] = bloqueo["cat4"];
    userProfile["temor"] = temor["cat4"];
    userProfile["mensaje"] = mensaje["cat4"];
    userProfile["necesidad"] = necesidad["cat4"];

} else if (userProfile["ans4"] === "no" || userProfile["ans17"] === "si" || userProfile["ans27"] === "no" || userProfile["ans38"] === "si") {

    userProfile["fase"] = fase["cat5"];
    userProfile["bloqueo"] = bloqueo["cat5"];
    userProfile["temor"] = temor["cat5"];
    userProfile["mensaje"] = mensaje["cat5"];
    userProfile["necesidad"] = necesidad["cat5"];

} else if (userProfile["ans3"] === "si" || userProfile["ans12"] === "no" || userProfile["ans24"] === "no" || userProfile["ans34"] === "si") {

    userProfile["fase"] = fase["cat6"];
    userProfile["bloqueo"] = bloqueo["cat6"];
    userProfile["temor"] = temor["cat6"];
    userProfile["mensaje"] = mensaje["cat6"];
    userProfile["necesidad"] = necesidad["cat6"];

} else if (userProfile["ans6"] === "si" || userProfile["ans13"] === "no" || userProfile["ans22"] === "no" || userProfile["ans31"] === "si") {

    userProfile["fase"] = fase["cat7"];
    userProfile["bloqueo"] = bloqueo["cat7"];
    userProfile["temor"] = temor["cat7"];
    userProfile["mensaje"] = mensaje["cat7"];
    userProfile["necesidad"] = necesidad["cat7"];

} else if (userProfile["ans7"] === "no" || userProfile["ans14"] === "si" || userProfile["ans23"] === "si" || userProfile["ans32"] === "no") {


    userProfile["fase"] = fase["cat8"];
    userProfile["bloqueo"] = bloqueo["cat8"];
    userProfile["temor"] = temor["cat8"];
    userProfile["mensaje"] = mensaje["cat8"];
    userProfile["necesidad"] = necesidad["cat8"];

} else {
    
    userProfile["fase"] = noMatch["cat1"];
    userProfile["bloqueo"] = noMatch["cat2"];
    userProfile["temor"] = noMatch["cat3"];
    userProfile["mensaje"] = noMatch["cat4"];
    userProfile["necesidad"] = noMatch["cat5"];
}


console.log(userProfile);









