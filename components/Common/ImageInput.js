import React from 'react'
import { Form, Segment, Image, Icon, Header, FormField } from 'semantic-ui-react'
const ImageInput = ({ isHighlighted, setIsHighlighted, image, setImage, imageData, setImageData, inputRef, handleChange }) => {
  return (
    <>
        <FormField>
            <Segment placeholder basic secondary style={{border: `${imageData ? "": "1px dotted black"}`}}>
                <input 
                    style={{display: "none"}}
                    type="file"
                    accept='image/*'
                    onChange={handleChange}
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
                        console.log(media)
                        setImage(media)
                        setImageData(URL.createObjectURL(media))
                    }}
                >
                {!imageData && <>
                    <Segment color={isHighlighted ? "green" : ""} placeholder basic >
                        <Header icon>
                            <Icon name="file image outline" style={{cursor: "pointer"}} onClick={() => inputRef.current.click()}/>
                            <p>Drag & Drop or Click To Upload Image</p>
                        </Header>
                    </Segment>
                </>}
                {imageData && <>
                    <Segment color="green">
                        <Image src={imageData} size="medium" centered style={{cursor: "pointer"}} onClick={() => inputRef.current.click()}/>
                    </Segment>
                </>}</div>
            </Segment>
        </FormField>
    </>
  )
}

export default ImageInput