import { useEffect, useState } from 'react'
import { fetchFacts, getImageFromApi } from '../services/fact';

interface FactHookState {
	fact: string;
	firstWord: {
		src: string;
		word: string;
	};
}

export const useFactHook = () => {

	const [fact, setFacts] = useState<FactHookState["fact"]>('')
	const [firstWord, setFirstWord] = useState<FactHookState["firstWord"]>({ src: '', word: '' })

	useEffect(() => {
		fetchFacts().then(setFacts)
	}, [])

	useEffect(() => {

		if ( fact ) {

			getImageFromApi(fact)
				.then(res => 
					{ 
						let url = res;
						setFirstWord( {
							word: fact.split(' ')[0],
							src: `https://cataas.com/${url}`
						} )
		 			}
				)

		}

	}, [ fact ])

	const setFactFromApi = ( newFact: string ) => {
		setFacts(newFact)
	}
	
	return {
		firstWord,
		setFactFromApi
	}
}
