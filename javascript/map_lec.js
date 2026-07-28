//map

const map_a = new Map();
map_a.set(12,23);
map_a.set("dhruba", 232);
map_a.set("vill", "gokulnagar");
map_a.set(12, "gokulnaga");
map_a.set(344343, "promod");


map_a.delete(12);
// console.log(map_a)

const map_b = new Map([
    [34,456],
    ["dhruba", "Roy"]
])

// console.log(map_b);

// for (let [key,value] of map_b)
// {
//     console.log(key, value)
// }

console.log(typeof map_b);