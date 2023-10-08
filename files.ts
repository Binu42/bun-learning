// const data = "I am loving bun!"

// await Bun.write("output.txt", data)

const file = Bun.file("output.txt")

console.log(await file.text());
console.log(file.size);
console.log(await file.stream());
console.log(await file.arrayBuffer())

