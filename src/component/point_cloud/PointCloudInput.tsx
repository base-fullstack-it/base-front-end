// https://stackoverflow.com/questions/62832351/how-to-connect-input-and-three-js-canvas
export default () => {
    const handleChange = (event: { target: { value: any; }; }) => {
        // setMessage(event.target.value);
        //event.target.value gives the value!! it appears you can just pass this up to the canvas then and load it
        console.log('value is:', event.target.value);
    };
    return <input
        id="input"
        type="file"
        onChange={handleChange}
    />
}