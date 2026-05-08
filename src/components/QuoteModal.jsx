"use client";
import { X } from "lucide-react";
import React, { useState, useRef } from "react";
import uploadFiles from "@/utils/cloudinaryUpload";
import sendEmail from "@/utils/emailjs";

function QuoteModal({ open = false, setOpen }) {
  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    service: "",
    height: 0,
    width: 0,
    color: "",
    description: "",
    date: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const fileInputRef = useRef(null);
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setIsSubmitting(true);
      setSubmitMessage("Uploading files...");

      try {
        const uploadResult = await uploadFiles(files);

        if (uploadResult.success) {
          setUploadedFiles((prev) => [...prev, ...uploadResult.uploadedFiles]);
          setSubmitMessage(
            `Successfully uploaded ${uploadResult.uploadedFiles.length} file(s)`,
          );

          if (uploadResult.failedFiles.length > 0) {
            setSubmitMessage(
              (prev) =>
                prev +
                `. ${uploadResult.failedFiles.length} file(s) failed to upload.`,
            );
          }
        } else {
          setSubmitMessage(uploadResult.error || "Failed to upload files");
        }
      } catch (error) {
        setSubmitMessage("Error uploading files");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.service === "Select Service ") {
      setSubmitMessage("Please select a service");
      return;
    }

    if (!formData.fullName || !formData.email || !formData.service) {
      setSubmitMessage("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("Submitting quote request...");

    try {
      const fileUrls = uploadedFiles.map((file) => file.url).join(", ");

      const emailParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        service: formData.service,
        height: formData.height,
        width: formData.width,
        color: formData.color,
        description: formData.description,
        date: formData.date,
        fileUrls: fileUrls || "No files uploaded",
        uploadedFilesCount: uploadedFiles.length,
      };

      const emailResult = await sendEmail(emailParams);

      if (emailResult.success) {
        setSubmitMessage(
          "Quote request submitted successfully! We'll get back to you within 30 minutes.",
        );
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          businessName: "",
          service: "",
          height: 0,
          width: 0,
          color: "",
          description: "",
          date: "",
        });
        setUploadedFiles([]);
        setSelected([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        setTimeout(() => {
          setOpen(false);
          setSubmitMessage("");
        }, 3000);
      } else {
        setSubmitMessage(emailResult.error || "Failed to submit quote request");
      }
    } catch (error) {
      setSubmitMessage("Error submitting quote request");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleService = (service) => {
    if (selected.includes(service)) {
      setSelected(selected.filter((s) => s !== service));
    } else {
      setSelected([...selected, service]);
    }
  };
  const services = [
    "Select Service ",
    "Embroidery Digitizing",
    "Cap Digitizing",
    "3D Puff Digitizing",
    "Jacket Back Digitizing",
    "Vector Art Conversion",
    "Applique Digitizing",
    "Custom Patch Design",
    "Sleeve Digitizing",
    "Bulk / Agency Orders",
    "Other",
  ];
  return open ? (
    <div className="fixed bg-black/50 inset-0 z-999 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl text-primary overflow-scroll h-[90vh]">
        {/* Upper Section */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="main-heading">Get a Free Quote</h1>
            <p className="text-primary/80 text-sm">
              Tell us about your project — we'll reply with a quote in under 30
              minutes.
            </p>
          </div>
          {/* Close Button */}
          <span className="cursor-pointer">
            <X onClick={() => setOpen(false)} />
          </span>
        </div>
        {/*  Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 mt-2 items-center justify-center"
        >
          {/* Full Name */}
          <div className="flex flex-col items-start justify-start gap-y-1">
            <label htmlFor="email" className="text-sm font-body font-semibold">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="border p-2 rounded-2xl"
              required
            />
          </div>
          {/* Email */}
          <div className="flex flex-col items-start justify-start gap-y-1">
            <label htmlFor="email" className="text-sm font-body font-semibold">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-2 rounded-2xl"
              required
            />
          </div>
          {/* Phone Number */}
          <div className="flex flex-col items-start justify-start gap-y-1">
            <label htmlFor="email" className="text-sm font-body font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="border p-2 rounded-2xl"
            />
          </div>
          {/* Business Name */}
          <div className="flex flex-col items-start justify-start gap-y-1">
            <label htmlFor="email" className="text-sm font-body font-semibold">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Business Name"
              className="border p-2 rounded-2xl"
            />
          </div>
          {/* Service */}
          <label
            htmlFor=""
            className="flex flex-col items-start w-full text-sm font-body mb-2 col-span-2 font-semibold"
          >
            Select Services *
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="border  rounded-2xl p-3 mt-2 w-full font-normal"
              required
            >
              {services.map((service, index) => {
                const isChecked = selected.includes(service);

                return (
                  <option key={index} value={service}>
                    {service}
                  </option>
                );
              })}
            </select>
          </label>
          {/* Project Details */}
          <div className="col-span-2 ">
            <h1 className="text-sm text-start font-body mb-2 font-semibold">
              Project Details
            </h1>
            <div className="grid grid-cols-2 gap-2 ">
              {/* Height */}
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="border p-3 rounded-2xl"
                placeholder="Height"
              />
              {/* Width */}
              <input
                type="number"
                name="width"
                value={formData.width}
                onChange={handleInputChange}
                className="border p-3 rounded-2xl"
                placeholder="Width"
              />
              {/* Color */}
              <label
                htmlFor="Color"
                className="flex flex-row items-center gap-x-2"
              >
                Color
                <input
                  onChange={handleInputChange}
                  type="color"
                  name="color"
                  value={formData.color}
                  className="border p-3 rounded-2xl"
                  placeholder="height"
                />
              </label>
              {/* Date */}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border p-3 rounded-2xl"
                placeholder="Date"
              />
            </div>
          </div>
          {/* File Upload */}
          <label
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed 
      border-border bg-secondary/10 px-6 py-10 text-center cursor-pointer 
      transition-all hover:border-accent hover:bg-secondary/50 w-full col-span-2"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 13v8" />
                <path d="M4 14.9A7 7 0 1 1 15.7 8H17.5A4.5 4.5 0 0 1 20 16.2" />
                <path d="M8 17l4-4 4 4" />
              </svg>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold text-foreground">
                Drag & drop files here, or{" "}
                <span className="text-accent">browse</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                PNG, JPG, AI, PDF, EPS • Max 5 files, 25MB each
              </p>
            </div>

            {/* Input */}
            <input
              type="file"
              multiple
              accept=".png,.jpg,.jpeg,.pdf,.ai,.eps"
              className="hidden w-full"
              ref={fileInputRef}
              onChange={handleFileChange}
              disabled={isSubmitting}
            />
          </label>
          {/* Description */}
          <div className="flex flex-col items-start justify-start gap-y-1 col-span-2">
            <label
              htmlFor="description"
              className="text-sm font-body font-semibold"
            >
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border p-3 rounded-2xl w-full"
              placeholder="Description"
              rows="4"
            />
          </div>
          {/* Status Message */}
          {submitMessage && (
            <div
              className={`col-span-2 p-3 rounded-2xl text-center ${
                submitMessage.includes("success") ||
                submitMessage.includes("Successfully")
                  ? "bg-green-100 text-green-800"
                  : submitMessage.includes("Error") ||
                      submitMessage.includes("Failed") ||
                      submitMessage.includes("required")
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
              }`}
            >
              {submitMessage}
            </div>
          )}

          {/* Uploaded Files Display */}
          {uploadedFiles.length > 0 && (
            <div className="col-span-2">
              <h3 className="text-sm font-semibold mb-2">Uploaded Files:</h3>
              <div className="space-y-1">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="text-xs text-gray-600 flex items-center gap-2"
                  >
                    <span>✓</span>
                    <span>{file.fileName}</span>
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-cta col-span-2 text-white px-6 py-3 rounded-2xl font-body font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

export default QuoteModal;
