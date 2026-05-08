"use client";
import CtaButton from "@/components/CtaButton";
import React, { useState, useRef } from "react";
import {
  Hand,
  Clock,
  CircleCheck,
  Zap,
  RefreshCw,
  Award,
  ShieldCheck,
} from "lucide-react";
import Cta from "@/components/Cta";
import uploadFiles from "@/utils/cloudinaryUpload";
import sendEmail from "@/utils/emailjs";
function page() {
  const [selected, setSelected] = useState([]);
  const [additionalSelected, setAdditionalSelected] = useState([]);
  const [formData, setFormData] = useState({
    requestType: "",
    fullName: "",
    email: "",
    country: "",
    organization: "",
    phone: "",
    contactMethod: "",
    dueDate: "",
    designHeight: "",
    designWidth: "",
    colors: "",
    quantity: "",
    fileFormat: "",
    description: "",
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

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.dueDate ||
      !formData.colors ||
      selected.length === 0
    ) {
      setSubmitMessage(
        "Please fill in all required fields and select at least one service",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("Submitting order request...");

    try {
      const fileUrls = uploadedFiles.map((file) => file.url).join(", ");
      const selectedServices = selected.join(", ");
      const additionalServices = additionalSelected.join(", ");

      const emailParams = {
        requestType: formData.requestType,
        fullName: formData.fullName,
        email: formData.email,
        country: formData.country,
        organization: formData.organization,
        phone: formData.phone,
        contactMethod: formData.contactMethod,
        dueDate: formData.dueDate,
        designHeight: formData.designHeight,
        designWidth: formData.designWidth,
        colors: formData.colors,
        quantity: formData.quantity,
        fileFormat: formData.fileFormat,
        description: formData.description,
        selectedServices: selectedServices,
        additionalServices: additionalServices,
        fileUrls: fileUrls || "No files uploaded",
        uploadedFilesCount: uploadedFiles.length,
      };

      const emailResult = await sendEmail(emailParams);

      if (emailResult.success) {
        setSubmitMessage(
          "Order submitted successfully! We'll get back to you within an hour.",
        );
        // Reset form
        setFormData({
          requestType: "",
          fullName: "",
          email: "",
          country: "",
          organization: "",
          phone: "",
          contactMethod: "",
          dueDate: "",
          designHeight: "",
          designWidth: "",
          colors: "",
          quantity: "",
          fileFormat: "",
          description: "",
        });
        setUploadedFiles([]);
        setSelected([]);
        setAdditionalSelected([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        setTimeout(() => {
          setSubmitMessage("");
        }, 5000);
      } else {
        setSubmitMessage(emailResult.error || "Failed to submit order");
      }
    } catch (error) {
      setSubmitMessage("Error submitting order");
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

  const toggleAdditionalService = (service) => {
    if (additionalSelected.includes(service)) {
      setAdditionalSelected(additionalSelected.filter((s) => s !== service));
    } else {
      setAdditionalSelected([...additionalSelected, service]);
    }
  };

  const services = [
    "Embroidery Digitizing",
    "Cap Digitizing",
    "3D Puff Digitizing",
    "Jacket Back Digitizing",
    "Vector Art Conversion",
    "Applique Digitizing",
    "Custom Patch Design",
    "Sublimation",
    "Sleeve Digitizing",
    "Bulk / Agency Orders",
    "Other",
  ];
  const additionalServices = [
    "Rush Delivery",
    "Multiple File Formats",
    "Logo Cleanup",
    "Vector Recreation",
    "Additional Size Variations",
    "Bulk Pricing Request",
  ];
  const features = [
    {
      icon: Hand,
      heading: "Expert Manual Digitizing",
      description:
        "Hand-punched designs by master digitizers — no auto-conversion shortcuts.",
    },
    {
      icon: Clock,
      heading: "Same Day Delivery",
      description:
        "Standard turnaround in 2–6 hours, with rush options when you need it now.",
    },
    {
      icon: CircleCheck,
      heading: "Machine-Ready Guaranteed",
      description:
        "All major formats — tested, optimized, and ready to load into any machine.",
    },
  ];
  return (
    <div className="mt-24">
      {" "}
      {/* Hero */}
      <section className="flex flex-col items-center padding-container text-center bg-[url(/hero/order.jpg)] bg-cover bg-center relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center">
          <h1 className="text-5xl text-white font-heading font-bold">
            Start Your Digitizing Order Today
          </h1>

          <p className="text-white/80 text-lg font-body mt-4">
            Upload your artwork and receive a fast quote with premium-quality
            embroidery digitizing services.
          </p>

          <p className="text-white/70 text-sm font-body mt-4">
            Fast 2–6 Hour Turnaround • Unlimited Revisions • All Machine Formats
          </p>

          <div className="flex gap-4 font-body">
            <CtaButton className="mt-5">Submit Your Order</CtaButton>
          </div>
        </div>
      </section>
      {/* Order Details */}
      <section className="padding-container bg-white-background flex flex-col items-center">
        <h1 className="main-heading">Order Details</h1>
        <p className="text-base text-primary/80">
          Fill out the form below and we'll get back to you within an hour with
          your quote.
        </p>
        {/* Order Details */}
        <form
          onSubmit={handleSubmit}
          className="bg-white padding-container my-10 rounded-2xl w-full"
        >
          {/* 1 */}
          <div>
            <h1 className="flex gap-x-2 items-center font-bold mb-5">
              <span className="bg-primary text-white  rounded-full w-10 h-10 flex items-center justify-center">
                1
              </span>
              Request Type
            </h1>
            <div className="flex flex-col items-start justify-start gap-y-1">
              <label htmlFor="RequestType" className="text-sm font-body">
                Request For *
              </label>
              <select
                name="requestType"
                value={formData.requestType}
                onChange={handleInputChange}
                className="border p-2 rounded-2xl"
              >
                <option value="Default">Select Request Type</option>
                <option value="Quote">Get A Quote</option>
                <option value="Order">Place An Order</option>
                <option value="Urgent">Urgent Delivery</option>
                <option value="Bulk">Bulk Order Inquiry</option>
                <option value="Existing">Existing Order Revision</option>
              </select>
            </div>
          </div>
          <hr className="my-10 text-primary/20" />
          {/* 2 */}
          <div>
            <h1 className="flex gap-x-2 items-center font-bold mb-5">
              <span className="bg-primary text-white  rounded-full w-10 h-10 flex items-center justify-center">
                2
              </span>
              Customer Details
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
              {/* Col 1 */}
              <div className="flex flex-col gap-y-5">
                {/* Full Name */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="fullName" className="text-sm font-body">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                    required
                  />
                </div>
                {/* Email Address */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="Email" className="text-sm font-body">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                  />
                </div>
                {/* Country */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="country" className="text-sm font-body">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                    required
                  />
                </div>
              </div>
              {/* Col 2 */}
              <div className="flex flex-col gap-y-5">
                {/* Business Organization */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="Organization" className="text-sm font-body">
                    Business / Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                  />
                </div>
                {/* Phone Number * */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="Phone" className="text-sm font-body">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                    required
                  />
                </div>
                {/*  */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="contactMethod" className="text-sm font-body">
                    Preferred Contact Method
                  </label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl w-full bg-primary/5"
                  >
                    <option value="Default">Select Method</option>
                    <option value="Phone">Phone</option>
                    <option value="Whatsapp">Whatsapp</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-10 text-primary/20" />
          {/* 3 */}
          <div>
            <h1 className="flex gap-x-2 items-center font-bold mb-5">
              <span className="bg-primary text-white  rounded-full w-10 h-10 flex items-center justify-center">
                3
              </span>
              Service Selection
            </h1>
            <label htmlFor="" className="text-sm font-body mb-2">
              Select Services *
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service, index) => {
                const isChecked = selected.includes(service);

                return (
                  <label
                    key={index}
                    onClick={() => toggleService(service)}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-all
              ${
                isChecked
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-accent hover:bg-accent/5"
              }`}
                  >
                    {/* Checkbox */}
                    <div
                      className={`h-4 w-4 rounded-sm border flex items-center justify-center
              ${isChecked ? "bg-primary border-primary" : "border-primary"}`}
                    >
                      {isChecked && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </div>

                    {/* Text */}
                    <span className="text-sm font-medium text-foreground">
                      {service}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
          <hr className="my-10 text-primary/20" />
          {/* 4 */}
          <div>
            <h1 className="flex gap-x-2 items-center font-bold mb-5">
              <span className="bg-primary text-white  rounded-full w-10 h-10 flex items-center justify-center">
                4
              </span>
              Project Details
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
              {/* Col 1 */}
              <div className="flex flex-col gap-y-5">
                {/* Due Date */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="DueDate" className="text-sm font-body">
                    Due Date *
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                    required
                  />
                </div>
                {/* Design Height (inches) */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="DesignHeight" className="text-sm font-body">
                    Design Height (inches)
                  </label>
                  <input
                    type="number"
                    name="designHeight"
                    value={formData.designHeight}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                  />
                </div>
                {/* Preferred File Format */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="fileFormat" className="text-sm font-body">
                    Preferred File Format
                  </label>
                  <select
                    name="fileFormat"
                    value={formData.fileFormat}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl w-full bg-primary/5"
                  >
                    <option value="Default">Select File Type</option>
                    {[
                      "DST",
                      "PES",
                      "EXP",
                      "JEF",
                      "VP3",
                      "EMB",
                      "AI",
                      "EPS",
                      "SVG",
                      "PDF",
                      "Others",
                    ].map((f, index) => (
                      <option value={f} key={index}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Col 2 */}
              <div className="flex flex-col gap-y-5">
                {/* Number Of Colors */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="Colors" className="text-sm font-body">
                    Number Of Colors *
                  </label>
                  <input
                    type="text"
                    name="colors"
                    value={formData.colors}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                    required
                  />
                </div>
                {/* Design Width (inches) */}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="DesignWidth" className="text-sm font-body">
                    Design Width (inches)
                  </label>
                  <input
                    type="number"
                    name="designWidth"
                    value={formData.designWidth}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                  />
                </div>
                {/* Quantity / Number Of Pieces*/}
                <div className="flex flex-col items-start justify-start gap-y-1">
                  <label htmlFor="Quantity" className="text-sm font-body">
                    Quantity / Number Of Pieces
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="border p-2 rounded-2xl bg-primary/5 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-10 text-primary/20" />
          {/* 5 */}
          <div>
            <h1 className="flex gap-x-2 items-center font-bold mb-5">
              <span className="bg-primary text-white  rounded-full w-10 h-10 flex items-center justify-center">
                5
              </span>
              Upload Your Design / Logo *
            </h1>
            <label
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed 
      border-border bg-secondary/10 px-6 py-10 text-center cursor-pointer 
      transition-all hover:border-accent hover:bg-secondary/50"
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
                  PNG, JPG, PDF, AI, PSD, SVG • Max 5 files, 25MB each
                </p>
              </div>

              {/* Input */}
              <input
                type="file"
                multiple
                accept=".png,.jpg,.jpeg,.pdf,.ai,.psd,.svg"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
                disabled={isSubmitting}
              />
            </label>
          </div>
          <hr className="my-10 text-primary/20" />
          {/* 6 */}
          <div>
            <h1 className="flex gap-x-2 items-center font-bold mb-5">
              <span className="bg-primary text-white  rounded-full w-10 h-10 flex items-center justify-center">
                6
              </span>
              Describe Your Project *
            </h1>
            <label htmlFor="Description">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full h-32 border-primary border rounded-2xl p-2 hover:border-secondary bg-white-background"
                placeholder="Include stitch requirements, placement, fabric type, deadline, and special instructions."
                required
              ></textarea>
            </label>
          </div>
          <hr className="my-10 text-primary/20" />
          {/* 7 */}
          <div>
            <h1 className="flex gap-x-2 items-center font-bold mb-5">
              <span className="bg-primary text-white  rounded-full w-10 h-10 flex items-center justify-center">
                7
              </span>
              Additional Options
            </h1>
            <div className="grid gap-3 sm:grid-cols-2">
              {additionalServices.map((service, index) => {
                const isChecked = additionalSelected.includes(service);

                return (
                  <label
                    key={index}
                    onClick={() => toggleAdditionalService(service)}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-all
              ${
                isChecked
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-cta hover:bg-cta/5"
              }`}
                  >
                    {/* Checkbox */}
                    <div
                      className={`h-4 w-4 rounded-sm border flex items-center justify-center 
              ${isChecked ? "bg-primary border-primary" : "border-primary "}`}
                    >
                      {isChecked && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </div>

                    {/* Text */}
                    <span className="text-sm font-medium text-foreground">
                      {service}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
          <hr className="my-10 text-primary/20" />
          {/* 8 */}
          <div>
            <h1 className="flex gap-x-2 items-center font-bold mb-5">
              <span className="bg-primary text-white  rounded-full w-10 h-10 flex items-center justify-center">
                8
              </span>
              Verification & Submit
            </h1>
            <div className="bg-gray-background p-10 rounded-2xl">
              <p>reCAPTCHA verification placeholder</p>
            </div>
          </div>
          {/* Status Message */}
          {submitMessage && (
            <div
              className={`mt-5 p-4 rounded-2xl text-center ${
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
            <div className="mt-5">
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
            className="bg-cta mt-5 text-white px-6 py-3 rounded-xl font-body font-semibold hover:bg-cta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Submit Order"}
          </button>
        </form>
      </section>
      {/* Features */}
      <section className="padding-container bg-gray-background grid grid-cols-1 lg:grid-cols-4 justify-items-center ">
        {[
          {
            icon: Zap,
            heading: "Fast Delivery",
          },
          {
            icon: RefreshCw,
            heading: "Unlimited Revisions",
          },
          {
            icon: Award,
            heading: "Premium Quality",
          },
          {
            icon: ShieldCheck,
            heading: "Secure File Upload",
          },
        ].map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div className="flex items-baseline gap-x-2" key={index}>
              <span className="bg-secondary/20 flex items-center justify-center p-2 rounded-full ">
                <Icon size={18} className="text-secondary " />
              </span>
              <p className="text-primary/80">{feature.heading}</p>
            </div>
          );
        })}
      </section>
      {/* Why Us */}
      <section className="bg-white-background flex flex-col items-center py-20">
        <h1 className="main-heading">
          Why Businesses Trust Our Digitizing Experts
        </h1>
        <p className="text-primary/80 text-sm">
          We treat every design like it's our own — pixel-perfect,
          stitch-perfect.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-10 gap-x-10 gap-y-10 mt-10 ">
          {features.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-start text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <span className="bg-secondary/20 flex items-center justify-center p-3 rounded-2xl mb-4">
                  <Icon size={32} className="text-secondary " />
                </span>
                <h2 className="text-xl font-heading font-semibold text-primary">
                  {stat.heading}
                </h2>
                <p className="text-secondary text-start font-body mt-2 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Cta */}
      <Cta
        heading="Need Help Before Ordering?"
        text={
          "Our support team is available 24/7 to guide you through your project"
        }
        button="Call Now"
        contactButton
      />
    </div>
  );
}

export default page;
