import '../styles/Title.css';

function Title({text, backgroundColor}) {
    const style = {
        backgroundColor: backgroundColor || '#F5F5F5'
    }

    return (
       <h1 className='title' style={style}> {text} </h1>
    )
}

export default Title