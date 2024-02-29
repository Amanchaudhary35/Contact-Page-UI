import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/button";
import { RiMessage2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
const[name,setName]= useState("name")
const[email,setEmail]= useState("email")
const[text,setText]= useState("text")


  const onViaSubmit = () => {
    console.log("i am calling");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setName( event.target[0].value);
    setEmail(event.target[1].value)
    setText(event.target[2].value)

    console.log({
      name,email,text,
    });


    // console.log("name" ,event.target[0].value)
    // console.log("email" ,event.target[1].value)
    // console.log("text" ,event.target[2].value)
  };
 
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text=" VIA SUPPORT CHAT"
            icon={<RiMessage2Fill fontSize="24px" />}
          />

          <Button
            onClick={onViaSubmit}
            text=" VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text=" VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name +" " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.png" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
