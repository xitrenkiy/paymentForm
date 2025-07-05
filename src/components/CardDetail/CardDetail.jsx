import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { db } from "../../config";
import { doc, deleteDoc } from "firebase/firestore";

import { cardDeleted, cardPrimaryToggle } from "../../store/slices/cardsSlice";

export const CardDetail = ({ toggleModal, id }) => {
	const [isCardNumberClicked, setIsCardNumberClicked] = useState(true);
	const { cards } = useSelector(state => state.cards);
	const dispatch = useDispatch();
	const openedCard = cards.find(card => card.id === id);

	const handleCardNumberClick = () => {
		setIsCardNumberClicked(state => !state)
	}

	const handleClickDeleteButton = useCallback(async (e, id) => {
		try {
			toggleModal();

			await deleteDoc(doc(db, 'cards', id));
			dispatch(cardDeleted(id));
		} catch (error) {
			console.log('Error', e);
		}
	}, [dispatch])

	return (
		<div className='absolute overflow-hidden w-full min-h-[398px] bg-white bottom-0 rounded-xl text-black p-5'>
			<div className='flex justify-between'>
				<h2 className='font-medium'>Card details</h2>
				<button className='cursor-pointer' onClick={toggleModal}>⨉</button>
			</div>

			<>
				<div className="border border-gray-200 w-full min-h-25 rounded-xl mt-5 p-3">
					<div className="flex items-center">
						<img src={openedCard.element} className='w-15 h-15 object-contain' />
						<div className='flex flex-col text-[14px] ml-4 tracking-wide'>
							<div className='font-medium'>{openedCard.name}{openedCard.primary ? <span className='ml-2 bg-gray-200 p-1 rounded-2xl text-[10px] text-blue-500'>Primary</span> : null}</div>
							<div onClick={handleCardNumberClick} className='cursor-pointer text-[11px] opacity-50 mt-1'>{isCardNumberClicked ? openedCard.number : `**** ${openedCard?.number.slice(14)}`}</div>
						</div>
					</div>

					<div className='mt-3'>
						<h2 className='font-light'>Expiry</h2>
						<p className='font-medium'>{openedCard.expire}</p>
					</div>

					<div className='mt-3 flex justify-between'>
						<div>
							<h2 className='font-light'>Country</h2>
							<p className='font-medium'>{openedCard.country}</p>
						</div>
						<div>
							<h2 className='font-light text-right'>CVC</h2>
							<p className='font-medium text-right'>{openedCard.cvc}</p>
						</div>
					</div>
					<div className='mt-2'>
						<h2 className='font-light'>Money</h2>
						<p className='font-medium'>${openedCard.money}</p>
					</div>
				</div>
				<button
					className='cursor-pointer text-red-500 font-bold mt-5'
					onClick={(e) => handleClickDeleteButton(e, openedCard.id)}>
					Delete card
				</button>
				<button
					disabled={openedCard.primary}
					className={`${!openedCard.primary ? 'w-full mt-5 bg-blue-200/70 p-3 transition-color duration-200 rounded-xl cursor-pointer text-blue-500 font-bold hover:bg-blue-500 hover:text-white' : 'w-full mt-5 bg-blue-200/70 p-3 rounded-xl cursor-not-allowed'}`}
					onClick={() => dispatch(cardPrimaryToggle(openedCard.id))}
				>
					{openedCard.primary ? 'You already pinned this card' : 'Set as your primary card'}
				</button>
			</>
		</div>
	)
}