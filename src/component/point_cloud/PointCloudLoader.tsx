import {useLoader} from "@react-three/fiber";
import {FileLoader} from "three";
import {useEffect, useState} from "react";
// import {PCDLoader} from "three/examples/jsm/loaders/PCDLoader";


export default ({url}:{url:string | ArrayBuffer}) => {
    // const result = useLoader(PCDLoader,url);
    // fileReader.
    const result = useLoader(FileLoader,"c");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if(!result) return;
        setIsLoaded(true);
        // console.log(result)
        console.log(url,"URL PASSED PROPERLY")

    },[result])
    // return <primitive object={result} />
    return<>
        {
            // isLoaded && <primitive object={result} />
        }
    </>
}