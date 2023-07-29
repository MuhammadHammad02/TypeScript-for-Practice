enum Color  {Red, Green, Blue};
var c: Color = Color.Green

console.log(c)

enum Color1 {Red = 1 , Green, Blue};

var colorName: string = Color1[2]

console.log(colorName)

enum Color2 {Red = 1 , Green = 2, Blue = 4}

var colorIndex = Color2["Blue"]

console.log(colorIndex)