export const getGroups = (students) => {

    // Gives todays date
    const today = new Date().toJSON().slice(0, 10)
    const adate = "2018-04-05"

    let  sorter = (x, y) => {
        if (x.date < y.date)
            return -1;
        if (x.date > y.date)
            return 1;
        return 0;
    }

   let students2 = [

        {id:1, evaluations:[
            {id:1, date: "2018-04-05"},
            { id: 11, date: "2017-04-05" },
            ],
       },

        {
           id: 2, evaluations: [
               { id: 2, date: "2018-04-05" },
               { id: 22, date: "2017-04-05" },
            ]
        }
    ]

    // Array of students with an evaluation, latest first
    let withEval = students2
        .filter(x => x.evaluations.length > 0) 
        .filter( x =>  console.log(   x.evaluations.sort( (a,b) => new Date(b.date) - new Date (a.date) )
            //.filter(y => console.log(y.date === "2018-04-05"  )   )
            // .filter(y => y.date === "2018-04-05").length
            // > 0
        ) 
    )



       // .sort(x => x.evaluations.sort(sorter).reverse() )
    
    // {
    //     students.map(
    //         (student, index) => {

    //             const lastEval = student.evaluations.sort()


    // let sorter = (arr) => {
    //     let sortedArray = arr.sort( (a,b) => b.date - a.date   ) //.sort().reverse()
    //     console.log(JSON.stringify(sortedArray))
    //     return sortedArray
    // }

    let dontEval = withEval
        .filter(x => x.evaluations[0].date === today)
    // console.log("this" + sorted.date  )
    // return sorted.date === today 

    let noEval = students.filter(x => x.evaluations.length === 0)

    let redGroup = withEval
        .filter(x => x.evaluations[x.evaluations.length - 1].grade === "red"
            && x.evaluations[x.evaluations.length - 1].date !== today)

    let yellowGroup = withEval
        .filter(x => x.evaluations[x.evaluations.length - 1].grade === "yelow" && x.evaluations[0].date !== today)

    let greenGroup = withEval
        .filter(x => x.evaluations[x.evaluations.length - 1].grade === "green" && x.evaluations[0].date !== today)

    let test = greenGroup.map(x => x.id)
    let test2 = noEval.map(x => x.name)
    //    let array =  ["2018-03-01", "2018-01-01" ]
    //   console.log( array.sort().reverse )


    // let y = x[0].evaluations[x[0].evaluations.length - 1].date

    //console.log(y)
    console.log("withEval" + JSON.stringify(withEval))
    // console.log("dontEval" + JSON.stringify(dontEval.name))
    // console.log("greens" + JSON.stringify(test))
    // console.log("noEval" + JSON.stringify(test2))

    return {
        red: redGroup.length,
        yellow: yellowGroup.length,
        green: greenGroup.length,
        blank: noEval.length
    }
}