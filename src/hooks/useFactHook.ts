import { useEffect, useState } from 'react'

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

	const fetchFacts = async () => {
		const url = "https://catfact.ninja/fact"

		await fetch(url)
			.then((response) => response.json())
			.then((data) => setFacts(data.fact));
	}

	useEffect(() => {
		fetchFacts()
	}, [])

	useEffect(() => {

		if ( fact ) {
			setFirstWord( {
				word: fact.split(' ')[0],
				src: `https://cataas.com/cat/says/${fact.split(' ')[0]}`
			} )
		}

	}, [ fact ])
	
	return {
		firstWord
	}
}
