import Square from './Square'

export function Board({squares,onClick}){    // value= "X" or "O" or null

    const boardStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 60px)',
        gap: '5px',
        margin: '0 auto',
        placeItems: 'center'
        };

    return (
        <div style = {boardStyle}>
            {squares.map((_,i) => <Square key={i} value = {squares[i]} onClick = {() => onClick(i)} />)}
        </div>
        );
    }