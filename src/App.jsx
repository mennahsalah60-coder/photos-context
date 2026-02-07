import { useContext } from 'react'
import './App.css'
import Photo from './components/photos/photo.jsx'
import image from './components/photos/images/image-icon.svg'
import search from './components/photos/images/search-svgrepo-com.svg'
import PhotosCountainer from './components/PhotosCountainer.jsx'


import { PhotoContext } from './components/PhotosProvider.jsx'

function App() {
  const { photos, query, setQuery, searched, loading, setLoading, handleSubmit } = useContext(PhotoContext)
  const popularItems = ["Nature", "Ocean", "City", "Mountains", "Sky"]


  const popular = (item) => {
    setQuery(item)
    setLoading(true)
    handleSubmit(null, item)
    setLoading(false)
  }

  return (
    <>
      <div className='photos'>
        <div className='title'>
          <img src={image} alt="" />
          <h1>PhotoSearch</h1>
        </div>
        <p>Discover stunning high-quality images</p>
        <section className="search">
          <div className='searchBox'>
            <form onSubmit={handleSubmit}>
              <img src={search} alt="" />
              <input type="text" placeholder="Search for beaytiful photos..." onChange={(e) => setQuery(e.target.value)} value={query} />
              <button type="submit">Search</button>
            </form>
          </div>
        </section>
        <div className="nothing">
          <p>Popular: </p>
          {popularItems.map((item) => (
            <span
              key={item}
              className='box'
              onClick={() => popular(item)
              }
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className='items'>
        {searched && query && (
          <h3 className='item'>"{query}"</h3>
        )}
        {searched && query && (
          <p>{photos.length} photos</p>
        )}
      </div>

      <PhotosCountainer photos={photos} />
      <Photo searched={searched} onPopularClick={popular} loader={loading} />
    </>
  )
}

export default App
