import { animate, motion } from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index:number) => {
    const totalSteps = 6;  //number of steps
    return totalSteps - index - 2;
}

const Stairs = () => {
    return (
    <>
    {
    /*  render 6 motion divs, each representiong a step of the stairs.
    Each div will have the same animation defined by the stairAnimation object. The delay for each div is calculated dynimically 
    based on its reserved index, creating a staggered effect with decreasing delay for each subsequent step.
    */
    }
    
    {[...Array(6)].map((_, index) => {
        return(
        <motion.div 
        key={index} 
        variants={stairAnimation} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        transition={{
            duration: 0.2,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
        }} 
        className="h-full w-full bg-white relative"
        />
    );
    })}
</>

);

};

export default Stairs;
