import GoogleLogin from './components/GoogleLogin'
import UserAccount from './pages/UserAccount'
import './styles/Landing.css'

const Landing = () => {
    return (
        <>
            <img className='grid' src="./grid.png"/>
            <section className='landing'>
                <div className='left-div'>
                <p className='title'>ELEVATE YOUR 3D <br></br> PRINTING CAPABILITIES</p>
                <p className='summary'>To be, or not to be: that is the question: whether 'tis nobler in
                    the mind to suffer the slings and <br /> arrows of outrageous fortune, or 
                    art-ache and the thousand natural shocks that flesh is heir to, 
                    <br/>'tis a consummation of buttplugs </p>
                <div className='button-cont'><UserAccount /> <GoogleLogin /></div>
                </div>

                <div>
                <img className='phoneImg' src="./chess4.png"/>
                </div>
            </section>
        </>
    )
}

export default Landing