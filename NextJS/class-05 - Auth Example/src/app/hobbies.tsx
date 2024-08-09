
type HobbiesType = {
    hobbies?: string[]
}

export default function Hobbies({ hobbies }: HobbiesType) {
    return (
        <ul>
            {
                hobbies && hobbies.map((hobby, index) => (
                    <li key={hobby + index}>{hobby}</li>
                ))
            }
        </ul>
    )
}