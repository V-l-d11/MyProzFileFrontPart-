import CircularProgress from '@mui/material/CircularProgress';


const Loader = () => {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems:"center" }}>
        <CircularProgress size={100} />
        </div>
    )
}
export default Loader 