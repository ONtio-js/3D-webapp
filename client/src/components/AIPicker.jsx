import React from 'react'
import CustomButton from './CustomButton';
const AIPicker = ({prompt,setPrompt,generateImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      className= {`aipicker-textarea placeholder:text-cyan-400`}
      rows={5}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder='Ask AI for image generation...'
      />
      <div className='flex flex-wrap gap-3'>
        {generateImg? (
          <CustomButton
          type={'outline'}
          title={'Asking AI...'}
          customStyle={'text-xs'}
          />
        ):(
         <>
          <CustomButton 
          type={'outline'}
          title={'AI Logo'}
          handleClick={()=>handleSubmit('logo')}
          customStyle={'text-xs'}
          />

          <CustomButton 
          type={'filled'}
          title={'AI Full'}
          handleClick={()=>handleSubmit('full')}
          customStyle={'text-xs '}
          />
         </>
        )}
      </div>
    </div>
  )
}

export default AIPicker