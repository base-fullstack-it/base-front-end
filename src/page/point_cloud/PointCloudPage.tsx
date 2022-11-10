import {PerspectiveCamera} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import {Suspense, useRef, useState} from "react";
import {Mesh} from "three";
import PointCloudInput from "../../component/point_cloud/PointCloudInput";
import PointCloudLoader from "../../component/point_cloud/PointCloudLoader";
import PointCloudIframe from "../../component/point_cloud/PointCloudIframe";

function Cube() {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (!meshRef.current) {
            return;
        }

        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <PerspectiveCamera/>
            <boxGeometry/>
            <meshStandardMaterial color="blue"/>
        </mesh>
    );
}

export default () => {
    const [isVisible, setIsVisible] = useState(false);
    const [url, setUrl] = useState<string | ArrayBuffer>();

    const handleChange = (event: any) => {
        // setMessage(event.target.value);
        //event.target.value gives the value!! it appears you can just pass this up to the canvas then and load it
        // console.log('value is:', event.target.value); //fake path
        const fReader = new FileReader();
        fReader.readAsDataURL(event.target.files[0]);
        fReader.onloadend = function(ev:ProgressEvent<FileReader>){
            if(!ev.target)return;
            if(!ev.target.result) return;
            // var img = document.getElementById("yourImgTag");
            console.log(ev.target.result,"RESULTAAA")
            setUrl(ev.target.result);
            // img.src = event.target.result;
        }
        // console.log('file is:', event.target.files[0]);
        // const file = event.target.files[0];
        // setUrl(file);
        setIsVisible(true);
    };

    return (
        // <>
        //     <input
        //         id="input"
        //         type="file"
        //         onChange={handleChange}
        //     />
        //
        //     <Canvas>
        //         <ambientLight/>
        //         <pointLight position={[10, 10, 10]}/>
        //         <Cube/>
        //         <Suspense fallback={null}>
        //             {isVisible && <PointCloudLoader
        //                 url={url!}
        //             />
        //             }
        //         </Suspense>
        //     </Canvas>
        // </>
        <PointCloudIframe/>
    );
}