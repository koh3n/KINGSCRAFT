// input is name
// use function get user

// import get_object from '../util/utils.js'
// import writeToFileFromPresignedUrl from '../util/utils.js'

import UserAccount from '../components/UserAccount.jsx'
import ModelViewer from '../pages/ModelViewer.jsx'

export default function Viewer({name}) {
    return (
        <>
            <div>
                <Star/>
                <Navbar />
                <ModelViewer image={writeToFileFromPresignedUrl(name)} />
            </div>
        </>
    )
} 