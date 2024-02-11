import "../Styles/Contacts.css";
import { getImageUrl } from "../utils/ImgIndex.jsx";
import React from "react";
import { contactsCard as Card } from "../Components/card.jsx";

export default function Contacts() {
  return (
    <section className="flex flex-col py-10 items-center gap-10">
      <h2 className="text-center">Contacts</h2>
      {/* <div>
        <form
          action="mailto:davinash97.work@gmail.com"
          method="post"
          className="grid gap-5 items-center px-5"
        >
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="true"
              autoCapitalize="true"
            />
          </label>
          <label htmlFor="mail">
            <input
              type="mail"
              name="mail"
              id="mail"
              placeholder="Email"
              autoComplete="true"
              required={true}
            />
          </label>
          <label htmlFor="subject">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              autoComplete="false"
            />
          </label>
          <label htmlFor="message">
            <textarea
              style={{ color: "black" }}
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              autoComplete="false"
            />
          </label>
          <div className="flex justify-around">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
      <h4 className="text-center">OR</h4> */}
      <div className="flex gap-10 justify-around contacts">
        <Card
          title="Gmail"
          link="mailto:davinash97.work@gmail.com"
          imgSrc={getImageUrl("gmail")}
        />
        <Card
          title="Telegram"
          link="https://t.me/davinash1997"
          imgSrc={getImageUrl("telegram")}
        />

        <Card
          title="Linkedin"
          link="https://linkedin.com/in/davinash97"
          imgSrc={getImageUrl("linkedin")}
        />
      </div>
    </section>
  );
}
