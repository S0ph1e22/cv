import '../A propos/ImgCard.css';

function ImgCard({ imageSrc, altText, width, height}){

      const style = {};

    if (width) style.width = width;
    if (height) style.height = height;

    return(
        <div className='img-card'>
            <img src={imageSrc} alt={altText} style={style} className='image' />
        </div>
    )
}

export default ImgCard