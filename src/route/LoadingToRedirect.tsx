import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MDBModal, MDBModalDialog, MDBModalContent } from "mdb-react-ui-kit";

const LoadingToRedirect = ({redirectString}:{redirectString:string}) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <div className="vh-100 gradient-custom">
      <MDBModal show={true}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <p className="mt-3">Redirecting..</p>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default LoadingToRedirect;
