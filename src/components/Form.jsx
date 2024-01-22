import React, { useState } from 'react';
import "./Form.css";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    residence: '',
    phoneNumber: '',
    addToWhatsAppGroup: false,
    email: '',
    visitedZenic: '',
    agreeToPayFee: false,
    favoriteWinterAthlete: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to Google Sheets or Excel
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Zenican veteraanit ry - jäsenhakemus</h2>
      <label>
        Nimi *
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Syntymäaika *
        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
      </label>
      <label>
        Asuinpaikka *
        <input type="text" name="residence" value={formData.residence} onChange={handleChange} required />
      </label>
      <label>
        Puhelinnumero *
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </label>
      <label>
        Haluan tulla lisätyksi yhdistyksen yhteiseen WhatsApp-ryhmään *
        <select name="addToWhatsAppGroup" value={formData.addToWhatsAppGroup} onChange={handleChange} required>
          <option value="true">Kyllä</option>
          <option value="false">Ei tarvitse</option>
        </select>
      </label>
      <label>
        Sähköpostiosoite *
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Oletko käynyt Zenicassa? *
        <select name="visitedZenic" value={formData.visitedZenic} onChange={handleChange} required>
          <option value="yes-return">Kyllä, ja haluaisin päästä sinne pian uudelleen</option>
          <option value="not-yet-but-want">En vielä, mutta haaveilen siitä päivittäin</option>
        </select>
      </label>
      <label>
        Sitoudun maksamaan 10€ jäsenmaksun vuodelle 2024 *
        <input type="checkbox" name="agreeToPayFee" checked={formData.agreeToPayFee} onChange={handleChange} required />
      </label>
      <label>
        BONUS: Kuka on suosikkisi 2000-luvun alun talviurheilijoista?
        <input type="text" name="favoriteWinterAthlete" value={formData.favoriteWinterAthlete} onChange={handleChange} />
      </label>
      <button type="submit">Lähetä hakemus</button>
    </form>
  );
}

export default MembershipForm;
