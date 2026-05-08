// Upload files function
const uploadFiles = async (files) => {
  if (!files || files.length === 0) {
    return { error: "No files provided" };
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_PRESET;

  if (!cloudName || !uploadPreset) {
    return { error: "Missing Cloudinary configuration" };
  }

  const uploadPromises = Array.from(files).map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        success: true,
        url: data.secure_url,
        publicId: data.public_id,
        fileName: file.name,
        fileSize: file.size,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        fileName: file.name,
      };
    }
  });

  const results = await Promise.all(uploadPromises);

  const successfulUploads = results.filter((result) => result.success);
  const failedUploads = results.filter((result) => !result.success);

  return {
    success: successfulUploads.length > 0,
    uploadedFiles: successfulUploads,
    failedFiles: failedUploads,
    totalFiles: files.length,
  };
};

export default uploadFiles;
