export const People = [
    {   id : 0, 
        name:"nico",
        age:18,
        gender:"sda"},  
     {  id: 1,
         name: "dddasdfsdg", 
         age:123,
         gender:"adfds"},
    {  id: 2,
            name: "dgtgdsdg", 
            age:134,
            gender:"a4dds"},
 ]

 export const getById = id => {
     const filteredPerson = People.filter(person => id === person.id);
     return filteredPerson[0];
 }