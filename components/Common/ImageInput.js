import React from 'react'
import { Form, Segment, Image, Icon, Header, FormField } from 'semantic-ui-react'
const ImageInput = ({ isHighlighted, setIsHighlighted, image, imageData, setImageData, inputRef, handleChange }) => {
  return (
    <>
        <FormField>
            <Segment placeholder basic secondary>
                <input 
                    style={{display: "none"}}
                    type="file"
                    accept='image/*'
                    onChange={handleChange}
                    name="media"
                    ref={inputRef}
                />
            </Segment>
        </FormField>
    </>
  )
}

export default ImageInput