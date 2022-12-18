import React from 'react'

interface props{
  image: string
}

const ImageContainer:React.FC<props> = ({image}) => {

  return (
    <div  className=" h-[273px] 2xl:h-[335px] w-full  flex justify-center"> 
<img src={image} className="w-[100rem]"/>
</div>
  )
}

export default ImageContainer