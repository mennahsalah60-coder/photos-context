import { createContext, useState } from "react"

export const PhotoContext = createContext()

export default function PhotosProvider({ children }) {
    const [photos, setPhotos] = useState([])
    const [query, setQuery] = useState('')
    const [searched, setSearched] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e, item) => {
        if (e) e.preventDefault() //form
        const searchItem = item || query
        if (!searchItem.trim()) return

        setLoading(true)
        fetch(`https://api.pexels.com/v1/search?query=${searchItem}`, {
            headers: {
                Authorization: "n2XVmftWLbw7nqlHCVG8OfA3vcwX9qcUsZPrDD8qVXybpImmD9IafTLR"
            },
        })
            .then(res => res.json())
            .then(data => {
                setPhotos(data.photos || [])
                setSearched(true)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }
    return (
        <PhotoContext.Provider value={{
            photos, setPhotos,
            query, setQuery,
            searched, setSearched,
            loading, setLoading,
            handleSubmit
        }}>
            {children}
        </PhotoContext.Provider>
    )
}
