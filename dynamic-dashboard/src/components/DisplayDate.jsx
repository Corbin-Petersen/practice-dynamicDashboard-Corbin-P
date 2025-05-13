const DisplayDate = () => {
    return (
        <p>TODAY'S DATE: <b>{ new Date().toLocaleDateString() }</b></p>
    );
}

export default DisplayDate