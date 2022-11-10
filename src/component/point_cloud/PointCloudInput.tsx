import { useState } from "react";
import PointCloudLoader from "./PointCloudLoader";

export default () => {
// https://stackoverflow.com/questions/62832351/how-to-connect-input-and-three-js-canvas
//    https://github.com/pmndrs/react-three-fiber/discussions/1157
    const [isVisible, setIsVisible] = useState(false);
    const [url, setUrl] = useState('');

    const handleChange = (event: { target: { value: any; }; }) => {
        // setMessage(event.target.value);
        //event.target.value gives the value!! it appears you can just pass this up to the canvas then and load it
        console.log('value is:', event.target.value);
        setUrl(event.target.value);
        setIsVisible(true);
    };
    return <>
        <input
        id="input"
        type="file"
        onChange={handleChange}
    />
        {isVisible && <PointCloudLoader
            url={url}
        />
        }
    </>
}