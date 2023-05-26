import Card from './Card'

const CardList = ({cards}) => {

    const cardListJSX = cards.map((card) => {
        return (
            <div key={card.name.toString()} className="pt-0.5">
                {<Card card={card}/>}
            </div>
        )
    })

    return (
        <>
            {cardListJSX}
        </>
    )

}

export default CardList;