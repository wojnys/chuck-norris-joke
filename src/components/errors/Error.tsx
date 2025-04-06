import React from "react";

interface ErrorProps {
    errorMessage: string | null | undefined;
}
const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
    if (!errorMessage) return null;
    return <p className="text-red-500">{errorMessage}</p>;
};

export default Error;
