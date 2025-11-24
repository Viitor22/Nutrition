import {BounceLoader} from 'react-spinners'

const Loader = () => {
    return(
        <div className="min-h-[360px] flex items-center justify-center">
            <BounceLoader color="rgba(145 65% 45%)"/>
        </div>
    )
}

export default Loader