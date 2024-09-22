import { useRouteError, useNavigate } from "react-router-dom";
import "./ErrorComponent.css";

function ErrorComponent() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  function handleBack() {
    navigate("/");
  }

  return (
    <div className="error-container">
      <h1 className="error-title">OOPS! {error?.status || "Unknown Error"}</h1>
      <h2 className="error-subtitle">
        {error?.statusText || "Something went wrong!"}
      </h2>
      <h3 className="error-message">
        There seems to be an error! Are you sure this is the correct path?
      </h3>
      {error?.data && <p className="error-details">{error.data}</p>}
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default ErrorComponent;
