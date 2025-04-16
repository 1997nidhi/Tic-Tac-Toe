
export default function Square({value, onClick}){    // value= "X" or "O"
      const buttonStyle = {
        width: '60px',
        height: '60px',
        fontSize: '24px',
        fontWeight: 'bold',
        border: '1px solid gray',
        cursor: 'pointer',
        backgroundColor: 'white'
      };
    return (
        <button onClick = {onClick} style = {buttonStyle}>
            {value}
            </button>
        );
    }