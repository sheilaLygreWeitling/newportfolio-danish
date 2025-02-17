import React from "react";

const CvPdf = () => {
    const onClickButton = () => {
        const pdfUrl = "onlineprogCV.pdf"
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "onlineprogCV.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    };
    return (
        <div>
            <button onClick={onClickButton} className="underline">
                Download
            </button>
        </div>
    )
}
export default CvPdf;