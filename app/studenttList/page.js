"use client"
const getstudents = async () => {
    let data = await fetch("http://localhost:3000/api/projects");
    data = await data.json();
    if (data.success) {
        return data.result;
    }
    else {
        return { success: false }
    }
}
export default async function page() {
    const students = await getstudents();
    console.log(students);
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
                    <tbody>
                        {
                            students.map((items) => (
                                <tr>
                                    <td>{items.name}</td>
                                    <td>{items.class}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}
