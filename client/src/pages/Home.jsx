import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import state from '../store';
import { CustomButton } from '../components';
import {FcGenericSortingDesc} from 'react-icons/fc';
const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home bgcolor' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
          <div  className={`${snap.ccolor} text-4xl rotate-45 object-contain `}>
          <FcGenericSortingDesc/>
          </div>
           
          </motion.header>
          <motion.div {...headContentAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' /> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gary-600 text-base'>
                create your unique and exclusive shirt with our brand new 3D customiztion tool. <strong>unleash your imagination</strong>{} and define your own style
              </p>
              <CustomButton
              type="filled"
              title = "customize it"
              handleClick = {()=> {state.intro = false}}
              customStyle = "w-fit px-4 py-2.5 font-bold text-sm"

              />
            </motion.div>
           
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home