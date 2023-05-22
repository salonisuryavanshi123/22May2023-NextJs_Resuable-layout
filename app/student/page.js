import React from 'react'

async function getStudentData(){
    const res = await fetch('https://gorest.co.in/public/v2/users')

    return res.json()
}

export default async function Page() {
    const data = await getStudentData();
  return (
    <section className="col-6 s_tbdr pt-3">
        <h4>Student Route</h4>
        <ul>
            {
                data.map((cv,idx,arr)=>{
                    return <li key={idx}>{cv.name}</li>
                })
            }
        </ul>
    </section>
  )
}
