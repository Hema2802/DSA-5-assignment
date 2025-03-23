

function countStudents(students, sandwiches) {
    let queue = [...students];  
    let i = 0; 
    let count = 0; 

    while (queue.length > 0 && count < queue.length) {
        if (queue[0] === sandwiches[i]) {
            queue.shift(); 
            i++; 
            count = 0; 
        } else {
            queue.push(queue.shift()); 
            count++; 
        }
    }

    return queue.length; 

}
console.log("Number of students who couldn't eat:",countStudents([1,1,0,0], [0,1,0,1])); 



