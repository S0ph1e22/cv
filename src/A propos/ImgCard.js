import '../A propos/ImgCard.css';

function ImgCard({ imageSrc, altText}){
    return(
        <div className='img-card'>
            <img src={imageSrc} alt={altText} className='image' />
        </div>
    )
}

export default ImgCard