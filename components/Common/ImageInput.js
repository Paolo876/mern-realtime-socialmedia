import React from 'react'
import { Form, Segment, Image, Icon, Header, FormField } from 'semantic-ui-react'
const ImageInput = ({ isHighlighted, setIsHighlighted, image, setImage, imageData, setImageData, inputRef }) => {
  
  const handleChange = (e) => {
    setImage(e.target.files[0])
    setImageData(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <>
        <FormField>
            <Segment placeholder basic secondary style={{border: `${imageData ? "": "1px dotted black"}`}}>
                <input 
                    style={{display: "none"}}
                    type="file"
                    accept='image/*'
                    onChange={ e => handleChange(e)}
                    name="media"
                    ref={inputRef}
                />
                <div
                    onDragOver={(e) => {
                        e.preventDefault()
                        setIsHighlighted(true)
                    }}
                    onDragLeave={(e) => {
                        e.preventDefault()
                        setIsHighlighted(false)
                    }}
                    onDrop={(e) => {
                        e.preventDefault()
                        setIsHighlighted(true)
                        const media = Array.from(e.dataTransfer.files)[0]
                        setImage(media)
                        setImageData(URL.createObjectURL(media))
                    }}
                >
                {!imageData && <>
                    <Segment color={isHighlighted ? "green" : null} placeholder basic >
                        <Header icon>
                            <Icon name="file image outline" style={{cursor: "pointer"}} onClick={() => inputRef.current.click()}/>
                            <p>Drag & Drop or Click To Upload Image</p>
                        </Header>
                    </Segment>
                </>}
                {imageData && <>
                    <Segment color="green" placeholder basic>
                        <Image src={imageData} size="medium" centered style={{cursor: "pointer"}} onClick={() => inputRef.current.click()}/>
                    </Segment>
                </>}</div>
            </Segment>
        </FormField>
    </>
  )
}

export default ImageInput