import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import styles from './DevotionalModal.module.css';

export default function DevotionalModal() {
  const { modalConfig, closeModal } = useModal();
  const { isOpen, type, data } = modalConfig;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData(data || {});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, data]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderContent = () => {
    if (submitted) {
      return (
        <div className={styles.successState}>
          <div className={styles.successOm} aria-hidden="true">ॐ</div>
          <h3 className={styles.successTitle}>
            {type === 'donation' ? 'Divine Gratitude' : 'Devotional Request Received'}
          </h3>
          <p className={styles.successTelugu} lang="te">ధన్యవాదాలు · శుభం భవతు</p>
          <div className={styles.successDivider} aria-hidden="true">✦ ✦ ✦</div>
          <p className={styles.successMessage}>
            Jai Shri Krishna! Your details have been recorded for this <strong>official prototype demonstration</strong>.
          </p>
          <div className={styles.prototypeNotice}>
            <span aria-hidden="true" style={{ color: 'var(--color-red)' }}>✦</span>
            <span>
              In the live release, this connects to the temple’s secure priest coordination or receipt desk. No live transaction was processed.
            </span>
          </div>
          <button className="btn btn--primary" onClick={closeModal} style={{ marginTop: '1rem' }}>
            Back to Temple Website
          </button>
        </div>
      );
    }

    switch (type) {
      case 'seva':
        return (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.modalHeader}>
              <span className={styles.modalOm}>ॐ</span>
              <div>
                <h3 className={styles.modalTitle}>Book Sacred Seva</h3>
                <p className={styles.modalSubtitle}>
                  {formData?.name ? `Selected: ${formData.name}` : 'Reserve auspicious archana & pooja'}
                </p>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label className={styles.label}>Devotee Name (యజమాని పేరు) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Ramanujam"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Contact Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Gotram (గోత్రం)</label>
                <input
                  type="text"
                  placeholder="e.g. Kashyapa / Bharadwaja"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Nakshatram / Rashi</label>
                <input
                  type="text"
                  placeholder="e.g. Rohini / Vrishabha"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Preferred Seva Date *</label>
                <input
                  type="date"
                  required
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Preferred Darshan Session</label>
                <select className={styles.select}>
                  <option>Morning Session (6:00 AM – 12:00 PM)</option>
                  <option>Evening Session (4:00 PM – 8:30 PM)</option>
                  <option>Special Festival Pooja</option>
                </select>
              </div>
            </div>

            <div className={styles.field} style={{ marginTop: '0.75rem' }}>
              <label className={styles.label}>Sankalpam / Family Names for Archana</label>
              <textarea
                rows="2"
                placeholder="Include names of family members participating in the sankalpam..."
                className={styles.textarea}
              />
            </div>

            <div className={styles.actions}>
              <button type="button" className="btn btn--outline" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn--primary">
                Confirm Seva Request →
              </button>
            </div>
          </form>
        );

      case 'donation':
        return (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.modalHeader}>
              <span className={styles.modalOm}>ॐ</span>
              <div>
                <h3 className={styles.modalTitle}>Temple Seva & Annadanam Contribution</h3>
                <p className={styles.modalSubtitle}>Support sacred rituals, free meals & heritage</p>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Select Contribution Category *</label>
              <select className={styles.select} defaultValue={formData?.cause || 'Annadanam'}>
                <option value="Annadanam">Annadanam Seva (Free Meals to Devotees)</option>
                <option value="Nityaseva">Nitya Pooja & Daily Alankaram</option>
                <option value="Janmashtami">Sri Krishna Janmashtami Mahotsavam</option>
                <option value="School">Vedic Cultural School Support</option>
                <option value="General">Temple Maintenance & Conservation</option>
              </select>
            </div>

            <div className={styles.field} style={{ marginTop: '0.75rem' }}>
              <label className={styles.label}>Select Auspicious Offering Amount (₹)</label>
              <div className={styles.amountPills}>
                {['₹501', '₹1,116', '₹2,500', '₹5,100', '₹11,000'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={styles.amountBtn}
                    onClick={() => {}}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.formGrid} style={{ marginTop: '0.75rem' }}>
              <div className={styles.field}>
                <label className={styles.label}>Devotee Name *</label>
                <input type="text" required placeholder="Full Name" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Phone / WhatsApp *</label>
                <input type="tel" required placeholder="+91 XXXXX XXXXX" className={styles.input} />
              </div>
            </div>

            <div className={styles.actions}>
              <button type="button" className="btn btn--outline" onClick={closeModal}>
                Close
              </button>
              <button type="submit" className="btn btn--primary">
                Proceed with Offering (Sample) →
              </button>
            </div>
          </form>
        );

      case 'school':
        return (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.modalHeader}>
              <span className={styles.modalOm}>ॐ</span>
              <div>
                <h3 className={styles.modalTitle}>Vedic Cultural School Admissions</h3>
                <p className={styles.modalSubtitle}>Nurturing youth in Sanskrit, values & classical arts</p>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label className={styles.label}>Student Full Name *</label>
                <input type="text" required placeholder="Child / Student Name" className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Age / Standard *</label>
                <input type="text" required placeholder="e.g. 10 Years / 5th Standard" className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Parent / Guardian Name *</label>
                <input type="text" required placeholder="Parent Name" className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Phone Number *</label>
                <input type="tel" required placeholder="+91 XXXXX XXXXX" className={styles.input} />
              </div>
            </div>

            <div className={styles.field} style={{ marginTop: '0.75rem' }}>
              <label className={styles.label}>Program of Interest</label>
              <select className={styles.select} defaultValue={formData?.program || 'Vedic Studies & Sanskrit'}>
                <option>Vedic Studies & Sanskrit (Saturdays)</option>
                <option>Bhajan & Kirtan Singing (Sundays)</option>
                <option>Traditional Yoga & Wellness (Morning Batch)</option>
                <option>All-Round Cultural Education</option>
              </select>
            </div>

            <div className={styles.actions}>
              <button type="button" className="btn btn--outline" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn--primary">
                Submit Enrolment Enquiry →
              </button>
            </div>
          </form>
        );

      case 'event':
        return (
          <div className={styles.eventView}>
            <div className={styles.modalHeader}>
              <span className={styles.modalOm}>ॐ</span>
              <div>
                <h3 className={styles.modalTitle}>{formData?.name || 'Festival Information'}</h3>
                <p className={styles.modalSubtitle}>{formData?.date || 'Sacred Temple Calendar'}</p>
              </div>
            </div>

            <p className={styles.eventDescription}>
              {formData?.description || 'Grand celebration with special pooja, prasad distribution, and devotional programmes for all devotees.'}
            </p>

            <div className={styles.eventScheduleBox}>
              <h4 className={styles.scheduleTitle}>Auspicious Schedule Highlights:</h4>
              <ul className={styles.scheduleList}>
                <li><strong>05:30 AM:</strong> Mangala Aarti & Suprabhata Seva</li>
                <li><strong>08:30 AM:</strong> Maha Abhishekam with Sacred Panchamrit</li>
                <li><strong>12:30 PM:</strong> Maha Prasadam & Annadanam for all attendees</li>
                <li><strong>07:00 PM:</strong> Divya Bhajan Sandhya & Cultural Recital</li>
                <li><strong>11:30 PM – Midnight:</strong> Janma Mahotsav Aarti & Alankaram Darshan</li>
              </ul>
            </div>

            <div className={styles.actions}>
              <button className="btn btn--outline" onClick={closeModal}>
                Close
              </button>
              <button
                className="btn btn--primary"
                onClick={() => {
                  handleSubmit({ preventDefault: () => {} });
                }}
              >
                Register for Special Darshan Pass
              </button>
            </div>
          </div>
        );

      default:
        return (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.modalHeader}>
              <span className={styles.modalOm}>ॐ</span>
              <div>
                <h3 className={styles.modalTitle}>Temple Enquiry Desk</h3>
                <p className={styles.modalSubtitle}>How may we serve your devotional visit?</p>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label className={styles.label}>Your Name *</label>
                <input type="text" required placeholder="Full Name" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Mobile / Email *</label>
                <input type="text" required placeholder="Contact Info" className={styles.input} />
              </div>
            </div>

            <div className={styles.field} style={{ marginTop: '0.75rem' }}>
              <label className={styles.label}>Your Message / Query *</label>
              <textarea
                rows="3"
                required
                placeholder="Ask about darshan accessibility, special seva timings, or arrangements..."
                className={styles.textarea}
              />
            </div>

            <div className={styles.actions}>
              <button type="button" className="btn btn--outline" onClick={closeModal}>
                Close
              </button>
              <button type="submit" className="btn btn--primary">
                Send Devotional Enquiry →
              </button>
            </div>
          </form>
        );
    }
  };

  return (
    <div className={styles.overlay} onClick={closeModal} role="dialog" aria-modal="true">
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {/* Sacred frame corners */}
        <span className={styles.cornerTL} aria-hidden="true" />
        <span className={styles.cornerTR} aria-hidden="true" />
        <span className={styles.cornerBL} aria-hidden="true" />
        <span className={styles.cornerBR} aria-hidden="true" />

        <button className={styles.closeBtn} onClick={closeModal} aria-label="Close dialog">
          ✕
        </button>

        {renderContent()}
      </div>
    </div>
  );
}
