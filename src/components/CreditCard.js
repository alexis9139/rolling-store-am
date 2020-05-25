import React, { useState } from 'react';
import Cards from 'react-credit-cards';

function App() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <div>
            <Cards>
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}

            </Cards>
            <form>
                <input
                    type="tel"
                    name='number'
                    placeholder="Ingrese el numero de tarjeta"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />

                <input
                    type="text"
                    name='name'
                    placeholder="Nombre"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />

                <input
                    type="text"
                    name='expiry'
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />

                <input
                    type="tel"
                    name='cvc'
                    placeholder="CVC"
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
            </form>
        </div>
    )
}

export default App