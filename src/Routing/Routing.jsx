import React from 'react'
import Home from '../Pages/Home/Home'

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path = ''  />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
