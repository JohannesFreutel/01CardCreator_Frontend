import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandFist } from '@fortawesome/free-solid-svg-icons'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const strengthIcon      = <FontAwesomeIcon icon={faHandFist} />
const intelligenceIcon  = <FontAwesomeIcon icon={faBookBookmark} />
const constructionIcon  = <FontAwesomeIcon icon={faGear} />


const Card = ({card}) => {
    
    if(card.type === 'creature')        return creatureCard()
    if(card.type !=  'creature')        return <div></div>

    function creatureCard () {
        let abilitiesArr = card.abilities.split(',')
        abilitiesArr = abilitiesArr.map(e => e!=''?`[ ${e} ]`:'')
        return (
            <div>
                <div className="rounded-lg h-85 w-60  p-2 border-2 border-gray-900 bg-gray-800">
                    <div className={`${color(card.fraction)} rounded-sm w-full h-full  px-2 relative z-0`}>
                        <div>
                            <h1 className="flex justify-center text-lg ">{card.name}</h1>
                        </div> 
                        <div className="flex flex-col p-1 pb-3 pt-0 rounded-b-full bg-white absolute top-1 left-1 z-10 border-2 border-black  overflow-visible ">
                            {cost(card.strength,'strength')}
                            {cost(card.intelligence,'intelligence')}
                            {cost(card.construction,'construction')}
                        </div>
                        <div className="flex justify-center">
                            <img className="imgSize mt-1 rounded-lg shadow-2xl border-2 border-white rounded-xs" src={card.img} />
                        </div>
                        <div className={`${rarity(card.rarity)} absolute z-10 w-4 h-4 rarityPosition rounded-full border-4 border-gray-900`}></div>
                        <div  className="border-2 border-black  p-1 text-xl  rounded-b-full absolute attackPosition  z-10 bg-white   overflow-visible ">
                            <div className="flex flex-row text-sm font-bold text-gray-900">
                                {swordSVG()}
                                {card.attack}
                            </div>
                            <div className=" flex flex-row text-sm text-gray-900 font-bold">
                                {shieldSVG()}
                                {card.defense}
                            </div>
                        </div>
                        <p className="text-sm ">[ creature - {card.subtype} ]</p>
                        <div className="bg-white text-gray-900 rounded-t-lg">
                            <p className="text-xs truncate">{abilitiesArr}</p>
                            <div className=" italic cardtextfield h-14 text-gray-600 overflow-y-scroll">{card.text}</div>
                        </div>
                    </div>
                </div>  
            </div>
        )
        function swordSVG () {
            return (
                <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    width="25px" height="25px" viewBox="0 0 260 260"  xmlSpace="preserve">
                    <path d="M258,2l-16,48L97.06,181.76l-7.23-11.14l-11.68-7.58L210,18L258,2z M101.029,238.26l11.314-11.314l-31.176-48.02
                        l-48.02-31.176l-11.314,11.314l31.386,31.386l-34.26,37.693c-4.464-0.586-9.138,0.82-12.568,4.249
                        c-5.858,5.858-5.858,15.355,0,21.213c5.858,5.858,15.355,5.858,21.213,0c3.428-3.428,4.834-8.1,4.25-12.562l37.695-34.262
                        L101.029,238.26z"/>
                </svg>
            )
        }
        function shieldSVG () {
            return (
                <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c-1.148 0-3.418-1.362-5.13-3.34C4.44 15.854 3 11.967 3 7a1 1 0 0 1 .629-.929c3.274-1.31 5.88-2.613 7.816-3.903a1 1 0 0 1 1.11 0c1.935 1.29 4.543 2.594 7.816 3.903A1 1 0 0 1 21 7c0 4.968-1.44 8.855-3.87 11.66C15.419 20.637 13.149 22 12 22z" fill="#000000"/></svg>
            )
        }
    }

    function rarity(rarity) {
        return  rarity === 'common' ?   'bg-gray-600':
                rarity === 'rare'   ?   'bg-amber-800':
                rarity === 'super'  ?   'bg-blue-600':
                rarity === 'ultra'  ?   'bg-amber-300':
                ''
    }
    function cost(cost, kind) {
        if(cost === 0 ) return <div></div>
        
        return  kind==='strength'    ?  <div className="pt-1 text-gray-900">{strengthIcon}{card.strength} </div>:
                kind==='intelligence'?  <div className="pt-1 text-gray-900">{intelligenceIcon}{card.intelligence} </div>:  
                kind==='construction'?  <div className="pt-1 text-gray-900">{constructionIcon}{card.construction} </div>:
                <div></div>
    }
    function color(fraction) {
        return  fraction==='black'  ?   'bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 text-gray-200': 
                fraction==='red'    ?   'bg-gradient-to-tr from-rose-700/60 via-pink-800/75 to-rose-900/75 text-gray-200':
                fraction==='green'  ?   'bg-gradient-to-tr from-green-700/75 via-green-800/75 to-emerald-900/75 text-gray-200':
                fraction==='neutral'?   'bg-gradient-to-tr from-stone-700/75 via-stone-800/75 to-stone-900/75 text-gray-200':
                'bg-gradient-to-tr from-stone-100 via-stone-200 to-stone-300'   
    } 
} 



export default Card;