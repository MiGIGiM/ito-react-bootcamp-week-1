import { useEffect, useState } from 'react';

const useUser = (searchUser) => {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch(`https://api.github.com/users/${searchUser}`)
                .catch(() => setError(true))
                .finally(() => setLoading(false));

            const data = await res.json()

            setUserData(data)
        }

        fetchData()
    }, [searchUser])

    return { userData, loading, error }
}

export default useUser