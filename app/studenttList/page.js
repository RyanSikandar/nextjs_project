"use client"
const getstudents=async()=>{

let data = await fetch("")
}
export default function page() {
    return (
        <>
            <style jsx>{`
                table {
                    border-collapse: collapse;
                    width: 100%;
                }
                th, td {
                    padding: 8px;
                    border: 1px solid black;
                }
            `}</style>
            <div>
                Here is the list of students:
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                
                </table>
            </div>
        </>
    )
}
