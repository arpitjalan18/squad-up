const data = [];
let idCounter = 10;
const Group1 = {id : 1, host :"Young LaFlame", vibes : "Chill", amount : 3, title : "Geo chapter 7 study grup", goals : "Review Circles", max : 10, zoomlink: "https://zoom.us"}
const Group2 = {id : 2, host : "Peter 69420", vibes : "Focused", amount : 2, title : "Geo homework 3 grind sesh", goals : "Finish all of the hw", max: 10, zoomlink: "https://zoom.us"}
const Group3 = {id : 3, host : "Pk Miki", vibes : "Socializing", amount : 5, title : "Vibing and doing Geometry", goals : "Stay lit, stay winning", max: 10, zoomlink: "https://zoom.us"}
const Group4 = {id : 4, host : "Arpito", vibes : "Focused", amount : 7, title : "Hardcore studying for the final", goals : "Ace the final", max: 10, zoomlink: "https://zoom.us"}

data.push(Group1);
data.push(Group2);
data.push(Group3);
data.push(Group4);
export function getStore(){
   
    return data;
}
export function saveGroup(group){
    idCounter++;
    group.id = idCounter;
    data.push(group);
    return idCounter;
}
export function addOne(id, num){
    for(var i = 0; i < data.length; i++){
        if (id == data[i].id){
            data[i].amount = num;
            break;
        }
    }
}
export function removeOne(id, num){
    for(var i = 0; i < data.length; i++){
        if (id == data[i].id){
            data[i].amount = num;
            break;
        }
    }
}
