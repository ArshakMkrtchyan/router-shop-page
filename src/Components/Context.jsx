import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export default function Context({ children }) {


    const [products, setProducts] = useState([])
    const [bag, setBag] = useState([])
    const [newBag, setNewBag] = useState([])

    const [name, setname] = useState()
    const [surname, setsurname] = useState()
    const [mail, setmail] = useState()
    const [password, setpassword] = useState()

    function handelclick() {
        localStorage.setItem('User', JSON.stringify({
            name: name,
            surname: surname,
            mail: mail,
            password: password
        }))
        alert('Thank you for login/register')
        setname(' ')
        setsurname(' ')
        setmail(' ')
        setpassword(' ')
    }

    const bagLength = bag.length

    const values = {
        products,
        setProducts,
        bag,
        setBag,
        newBag,
        setNewBag,
        bagLength,
        name,
        setname,
        surname,
        setsurname,
        mail,
        setmail,
        password,
        setpassword,
        handelclick
    }

    return (
        <div>
            <MyContext.Provider value={values}>
                {children}
            </MyContext.Provider>
        </div>
    )
}
