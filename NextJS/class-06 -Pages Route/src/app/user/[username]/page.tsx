"use client";

import { useEffect, useState } from "react";

type UserNameType = {
    params: { username: string }
}

type dbUsersType = {
    name: string,
    rollNum: number,
    subject: string
};


const dbUsers: dbUsersType[] = [
    {
        name: 'haiderali',
        rollNum: 1246,
        subject: "JavaScript"
    },
    {
        name: 'abdullah',
        rollNum: 1247,
        subject: "PHP"
    },
    {
        name: 'muzammil',
        rollNum: 1248,
        subject: "Python"
    },

]

export default function UserName({ params: { username } }: UserNameType) {
    const [user, setUser] = useState<null | dbUsersType>(null)

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        let [userData] = dbUsers.filter(({ name }) => name === username);
        setUser(userData);
    }


    return (
        <>
            {
                user ? (
                    <>
                        <h1>{user.name}</h1>
                        <h1>{user.rollNum}</h1>
                        <h1>{user.subject}</h1>
                    </>

                ) : (
                    <h1>Loading...</h1 >
                )
            }

        </>



    )

}