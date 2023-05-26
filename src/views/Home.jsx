import CardList from '../components/CardList'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    
    const [cards, setCards] = useState([])
    useEffect(() => {
        const res = axios.get('http://localhost:3001/').then((res) => setCards(JSON.parse(JSON.stringify(res.data))))
    },[])


    return (
        <>
            <Nav />
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center"> 
                <CardList cards={cards}/>
            </div>
        </>
    )
}

export default Home;