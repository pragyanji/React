const marks = [23,56,10,34]

// for loop
let count = 0
for (let mark of marks){
    mark = mark+1
    marks[count]= mark
    count += 1
}
console.log(marks)

// for each loop
marks.forEach(mark => marks[marks.indexOf(mark)] = mark**2)
console.log('Squared:',marks)

// map function
const new_marks = marks.map(mark => mark/2)
console.log('Halved:',new_marks)


// filter function
const filtered_marks = marks.filter(mark => mark>500)
console.log('Filtered:',filtered_marks)

// reduce function
const sum = marks.reduce((acc,mark) => acc+mark,0)
console.log('Sum:',sum)