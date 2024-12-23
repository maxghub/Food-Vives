

const OnClickLink = () =>{
    const openInTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };
    return(
        <a href="#" onClick={()=> openInTab('https://localhost:3000')}>FoodVibes</a>
    );
    
}
export default OnClickLink;