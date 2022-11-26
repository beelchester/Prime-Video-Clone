import React from 'react'

interface props{
  image: string
}

const ImageContainer:React.FC<props> = ({image}) => {

  return (
    <div  className=" h-[273px] w-full  "> 
<img src={image} />
</div>
  )
}

export default ImageContainer