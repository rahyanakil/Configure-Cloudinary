import { useState } from "react";

const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setImageUrl(data.url); // Set Cloudinary image URL
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ width: "300px" }} />}
    </div>
  );
};

export default UploadImage;
