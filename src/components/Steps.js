import { useState } from "react";
import avatar00 from "../img/avatar00.jpg";
import avatar01 from "../img/avatar01.jpg";
import avatar02 from "../img/avatar02.jpg";
import avatar03 from "../img/avatar03.jpg";
import avatar04 from "../img/avatar04.jpg";
import avatar05 from "../img/avatar05.jpg";
import avatar06 from "../img/avatar06.jpg";
import avatar07 from "../img/avatar07.jpg";
import avatar08 from "../img/avatar08.jpg";
import avatar09 from "../img/avatar09.jpg";

const avatarList = [
  {
    image: avatar00,
    text: "",
  },
  {
    image: avatar01,
    text: "Gerçekten güzel çalışan firma.Kesinlikle tavsiye ederim. Çoğu firmaya göre abartılı paralar alıp işlerini yarım yapmıyorlar.",
  },
  {
    image: avatar02,
    text: "Gerçekten güzel çalışan firma.Kesinlikle tavsiye ederim. Çoğu firmaya göre abartılı paralar alıp işlerini yarım yapmıyorlar.",
  },
  {
    image: avatar03,
    text: "Gerçekten güzel çalışan firma.Kesinlikle tavsiye ederim. Çoğu firmaya göre abartılı paralar alıp işlerini yarım yapmıyorlar.",
  },
  {
    image: avatar04,
    text: "Gerçekten güzel çalışan firma.Kesinlikle tavsiye ederim. Çoğu firmaya göre abartılı paralar alıp işlerini yarım yapmıyorlar.",
  },
  {
    image: avatar05,
    text: "Gerçekten güzel çalışan firma.Kesinlikle tavsiye ederim. Çoğu firmaya göre abartılı paralar alıp işlerini yarım yapmıyorlar.",
  },
  {
    image: avatar06,
    text: "Gerçekten güzel çalışan firma.Kesinlikle tavsiye ederim. ",
  },
  {
    image: avatar07,
    text: `"Gerçekten güzel çalışan firma.Kesinlikle tavsiye ederim. Çoğu firmaya göre abartılı paralar alıp işlerini yarım yapmıyorlar."`,
  },
  {
    image: avatar08,
    text: "Gerçekten güzel çalışan firma.Kesinlikle tavsiye ederim. ",
  },
  {
    image: avatar09,
    text: "",
  },
];

function Steps() {
  const [step, setStep] = useState(2);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 8) setStep((s) => s + 1);
  }

  return (
    <div className="steps">
      <div className="avatar">
        <img
          src={avatarList[step - 1].image}
          className="avatar-img-btn"
          onClick={handlePrevious}
        />
        <img className="avatar-img" src={avatarList[step].image} alt="step" />
        <img
          src={avatarList[step + 1].image}
          className="avatar-img-btn"
          onClick={handleNext}
        />
      </div>

      <p className="message">{avatarList[step].text}</p>
    </div>
  );
}
export default Steps;
