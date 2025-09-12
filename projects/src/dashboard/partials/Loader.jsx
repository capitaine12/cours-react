import loading from '../../assets/loader.gif'

const Loader = () => {

    const style = {
         display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "rgb(2, 2, 90)",

        position: "absolute",
         top: "50%",
         left: '50%',
         transform: 'translate(-50%, -50%)',
        
        }

        return (
            <div style={style}>
            <img  src={loading} />
            <strong>CHARGEMANT...</strong>
            </div>
             
        )
}

export default Loader