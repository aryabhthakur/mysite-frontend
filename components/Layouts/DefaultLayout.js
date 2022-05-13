import { FrontPageNav } from "../frontPageNav"
import { motion } from "framer-motion"
export const  DefaultLayout = ({children}) =>{
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    return(<>
    <FrontPageNav></FrontPageNav>
    <motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className=""
    >
    {children}
    </motion.main>
    </>)
}