"use client";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [imagePicked, setImagePicked] = useState(null);
  const imageInput = useRef();

  function imagePickerHandler(params) {
    imageInput.current.click();
  }

  function imageChangeHandler(event) {
    const file = event.target.files[0];
    if (!file) {
      setImagePicked(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePicked(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!imagePicked && <p>No image selected</p>}
          {imagePicked && <Image src={imagePicked} alt="selected image by user" fill/>}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={imageChangeHandler}
          required
        />
        <button type="button" className={styles.button} onClick={imagePickerHandler}>
          Select an Image
        </button>
      </div>
    </div>
  );
}
