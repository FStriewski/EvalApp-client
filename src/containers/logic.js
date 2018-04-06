
// import students from './StudentListContainer'

// const today = new Date().toJSON().slice(0, 10)
// const sorted = students
//     .filter(student => student.evaluations.length > 0)
//     .map(
//         (student, index) => {
//             console.log("--has an eval" + student.name)

//             student.evaluations = student.evaluations.sort((a, b) => new Date(b.date) - new Date(a.date))
//             return student

//         }
//     )
// const evaluatedToday = sorted.filter(
//     student => student.evaluations[0].date === today
// )

// const notEvaluated = sorted.filter(
//     student => student.evaluations[0].date !== today
// )

// const neverEvaluatedIDs = students
//     .filter(student => student.evaluations.length === 0)
//     .map(student => student.id)

// // don't have an EvalArray -- array of ids
// // const neverEvaluatedIDs = neverEvaluated.map(student =>
// //     student.id
// // )
// // console.log( JSON.stringify( neverEvaluatedIDs )  )
// // console.log( neverEvaluatedIDs[0])

// const histo = (notEvaluated, neverEvaluatedIDs) => {

//     const histogram = {
//         red: [],
//         yellow: [],
//         green: []
//     }

//     // Put non-evaluated students into histogram
//     notEvaluated.map(student => {

//         const grade = student.evaluations[0].grade
//         const id = student.id

//         histogram[grade].push(id)

//     })

//     // Put never-evaluated students into histogram
//     if (neverEvaluatedIDs.length > 0) {
//         histogram["red"] = histogram["red"].concat(neverEvaluatedIDs)
//     }

//     return histogram
// }

// console.log("Output:" + JSON.stringify(histo(notEvaluated, neverEvaluatedIDs)))