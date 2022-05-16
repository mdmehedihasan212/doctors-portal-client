const { useState, useEffect } = require("react")

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {

        const email = user?.user?.email;
        const currentUser = { email: email }
        if (user) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user])

    return [token];
}

export default useToken;