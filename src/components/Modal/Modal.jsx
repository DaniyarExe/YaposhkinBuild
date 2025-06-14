import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Modal = ({ setModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  const [value, setValue] = useState('');
  const [error, setError] = useState('')

  const handleBlur = () => {
    if (!value || !isValidPhoneNumber(value)) {
      setError('Введите корректный номер телефона')
    } else {
      setError('')
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://yaposhkin-franchise.com/api/request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Данные успешно отправлены');
        setModal(false);
      } else {
        console.log('Ошибка при отправке');
      }
    } catch (err) {
      console.error(err);
      console.log('Ошибка сервера');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={() => setModal(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Получить бизнес-план</h2>
          <button className={styles.closeBtn} onClick={() => setModal(false)}>✕</button>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" placeholder="Имя *" onChange={handleChange} required />
          <input type="email" name="email" placeholder="E-mail *" onChange={handleChange} />
          <PhoneInput
            defaultCountry="KG"
            international
            countrySelectProps={{ disabled: true }} 
            value={value}
            onChange={(val) => {
              setValue(val)
              setFormData(prev => ({ ...prev, phone: val }))
            }}
            onBlur={handleBlur}
          />
          <input type="text" name="city" placeholder="Город *" onChange={handleChange} required />
          <button type="submit" className={styles.submitBtn}>Получить бизнес-план</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
