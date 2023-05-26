import { useState } from 'react'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const plus = <FontAwesomeIcon icon={faPlus} />

const AddCard = () => {

    const [card, setCard] =  useState({
        name: 'new Card',
        attack:1, 
        defense:1,
        abilities: '',
        type: 'creature',
        subtype: '',
        img: 'https://i.postimg.cc/ZnxW3y68/e0b394a9408d3d6b035261c71f34d96f.jpg',
        text: 'mighty',
        fraction: 'black',
        strength: 0,
        intelligence: 0,
        construction: 0,
        rarity: 'rare'
    })
    const [ability, setAbility] = useState('')

    return (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
            <div className="pt-12 2xl:col-start-2 xl:col-start-2 lg:col-start-2">
                <Card  card={card}/>
            </div>
            <div className='mt-8 mb-5' >
                <div className="relative">
                    <input type="text" id="name" className="block px-2.5 pb-0.5 pt-1 w-full text-sm text-gray-800 bg-transparend border-2 border-gray-400 rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-600 focus:bg-white peer" 
                        placeholder=" " onChange={(e) => setCard({...card, name: e.target.value})}
                    />
                    <label htmlFor="name" className="absolute text-sm text-gray-500 duration-150 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white ml-3 px-0.5 peer-focus:ml-3 peer-focus:px-0.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1">Name</label>
                </div>
                <div className="relative mt-3">
                    <input type="text" id="img" className="block px-2.5 pb-0.5 pt-1 w-full text-sm text-gray-800 bg-transparend border-2 border-gray-400 rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-600 focus:bg-white peer" 
                        placeholder=" " onChange={(e) => setCard({...card, img: e.target.value})}
                    />
                    <label htmlFor="img" className="absolute text-sm text-gray-500 duration-150 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white ml-3 px-0.5 peer-focus:ml-3 peer-focus:px-0.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1">Image URL</label>
                </div>
                <div className="border-2 border-gray-400 mt-3 rounded-sm">
                    <div >
                            <select className="w-full pl-3 text-gray-500 text-sm focus:outline-none" name="fractions" id="fraction-select" 
                                onChange={(e) => setCard({...card, fraction: e.target.value})}
                                >
                                <option value="white">Fraction: White</option>
                                <option value="green">Fraction: Green</option>
                                <option value="red">Fraction: Red</option>
                                <option value="black">Fraction: Black</option>
                                <option value="neutral">Fraction: Neutral</option>
                            </select>
                    </div>
                    <div>
                            <select className="w-full text-gray-500 text-sm pl-3 bg-transparent focus:outline-none  border-t-2 border-gray-300" name="strength" id="fraction-select" 
                                onChange={(e) => setCard({...card, strength: Number(e.target.value)})}
                                >
                            {oneToNineOptionsJSX('Strength:')}
                        </select>
                    </div>
                    <div >
                            <select className="w-full text-gray-500 text-sm pl-3 bg-transparent focus:outline-none border-t-2 border-gray-300" name="intelligence" id="intelligence-select" 
                                onChange={(e) => setCard({...card, intelligence: Number(e.target.value)})}
                                >
                            {oneToNineOptionsJSX('Intelligence:')}
                        </select>
                    </div>
                    <div>
                            <select className="w-full pl-3 text-gray-500 text-sm bg-transparent focus:outline-none  border-t-2 border-gray-300" name="construction" id="construction-select" 
                                onChange={(e) => setCard({...card, construction: Number(e.target.value)})}
                                >
                            {oneToNineOptionsJSX('Construction:')}
                        </select>
                    </div>
                    <div>
                            <select className="w-full text-gray-500 text-sm pl-3 bg-transparent focus:outline-none border-t-2 border-gray-300" name="attack" id="attack-select" 
                                onChange={(e) => setCard({...card, attack: Number(e.target.value)})}
                                >
                            {oneToNineOptionsJSX('Attack:')}
                        </select>
                    </div>
                    <div>
                            <select className="w-full text-gray-500 text-sm pl-3 bg-transparent focus:outline-none  border-t-2 border-gray-300" name="defense" id="defense-select" 
                                onChange={(e) => setCard({...card, defense: Number(e.target.value)})}
                                >
                            {oneToNineOptionsJSX('Defense:')}
                        </select>
                    </div>
                </div>
                
                <div className="mt-3 relative">
                    <input type="text" id="subtype" className=" block px-2.5 pb-0.5 pt-1 w-full text-sm text-gray-800 bg-transparend border-2 border-gray-400 rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-600 focus:bg-white peer" 
                        placeholder=" " onChange={(e) => setCard({...card, subtype: e.target.value})}
                    />
                    <label htmlFor="subtype" className="absolute text-sm text-gray-500 duration-150 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white ml-3 px-0.5 peer-focus:ml-3 peer-focus:px-0.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1">Subtype</label>
                </div>
                    
                    <div className="relative inline-flex w-full mt-3">
                        <input type="text" id="abilities" value={ability} className=" block px-2.5 pb-0.5 pt-1 w-full text-sm text-gray-800 bg-transparend border-2 border-gray-400 rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-600 focus:bg-white peer" 
                            placeholder=" " onChange={(e) => {let temp = e.target.value; setAbility(temp)}}
                        />
                        <label htmlFor="abilities" className="absolute text-sm text-gray-500 duration-150 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white ml-3 px-0.5 peer-focus:ml-3 peer-focus:px-0.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1">Abilities</label>
                        <button className="absolute right-0.5 top-0.5 rounded-r-sm bg-white text-gray-600 px-1 hover:text-blue-500" onClick={() =>  setCard({...card, abilities: card.abilities + ability + ',' } ,setAbility('')) }>
                            {plus}
                        </button>
                    </div>
                <div className="mt-3 relative">
                    <input type="text" id="text" className=" block px-2.5 pb-0.5 pt-1 w-full text-sm text-gray-800 bg-transparend border-2 border-gray-400 rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-600 focus:bg-white peer" 
                        placeholder=" " onChange={(e) => setCard({...card, text: e.target.value})}
                    />
                    <label htmlFor="text" className="absolute text-sm text-gray-500 duration-150 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white ml-3 px-0.5 peer-focus:ml-3 peer-focus:px-0.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1">Text</label>
                </div>
                <div>
                    <button className=" bg-blue-950/80 px-2 py-1 text-white rounded-sm mt-3 hover:text-orange-300" onClick={() => addCard(card)}>
                        <a href='/'>Add Card</a>
                    </button>
                </div>
            </div>
        </div>
        
        
    )
    async function addCard(card){
        await axios.post('http://localhost:3001/addcard', card)
    }
    function oneToNineOptionsJSX(prop){
        return (
            <>
                <option value="0">{prop} 0</option>
                <option value="1">{prop} 1</option>
                <option value="2">{prop} 2</option>
                <option value="3">{prop} 3</option>
                <option value="4">{prop} 4</option>
                <option value="5">{prop} 5</option>
                <option value="6">{prop} 6</option>
                <option value="7">{prop} 7</option>
                <option value="8">{prop} 8</option>
                <option value="9">{prop} 9</option>
            </>
           
        )
    }
    
}

export default AddCard;