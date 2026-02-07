import '../App.css'

export default function PhotosCountainer({ photos }) {
    return (
        <div className='photo'>
            {photos.map((photo, index) => (
                <a href={photo.src.original}
                    target='_blank'
                    key={photo.id}
                    className='img'
                >
                    <img src={photo.src.medium} style={{ animationDelay: `${index * 0.15}s` }} alt="" />
                    <div className='des'>
                        <h1>
                            {photo.photographer
                                .split(/\s+/)  //like array
                                .map(word => word[0])
                                .slice(0, 2)
                                .join("")
                                .toUpperCase()}
                        </h1>
                        <div>
                            <h3
                                id={photo.id}
                            >{photo.photographer}</h3>
                            <p>{photo.alt}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
