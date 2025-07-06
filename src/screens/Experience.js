import React, { useState, useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = ({ language }) => {
  const experiences = [
    {
      title: language === 'tr' ? 'Mobil Uygulama Geliştirici' : 'Mobile Application Developer',
      company: language === 'tr' ? 'KAPSÜL Teknoloji Platformu' : 'KAPSUL Technology',
      url: 'https://www.kapsul.org.tr/',
      range: language === 'tr' ? 'Ocak 2024 - Halen Devam Ediyor - Konya TÜRKİYE' : 'Jan 2024 - Present - Konya TURKEY',
      description: language === 'tr' ? [
        'React Native, Expo SDK ve TypeScript kullanarak kurumsal seviyede mobil uygulama geliştirdim, çoklu kullanıcı türleri için rol tabanlı erişim kontrolü uyguladım',
        'Redux Toolkit ve Redux Persist kullanarak ölçeklenebilir state yönetimi çözümü tasarladım, 20+ ekran ve 30+ API entegrasyonu arasında karmaşık uygulama durumunu yönettim',
        'Şu anda mesai takip mobil uygulaması geliştiriyorum, çalışan verimliliği izleme için kapsamlı çalışma saatleri yönetimi, zaman takibi ve raporlama özellikleri uyguluyorum',
        'Kapsül TYS uygulamasını keşfedin:',
        'https://play.google.com/store/apps/details?id=com.kapsul.teammanagementmobile',
        'https://apps.apple.com/tr/app/kaps%C3%BCl-tys/id6741678020?l=tr'
      ] : [
        'Built enterprise-level mobile application using React Native, Expo SDK, and TypeScript, implementing role-based access control for multiple user types',
        'Architected scalable state management solution using Redux Toolkit and Redux Persist, managing complex application state across 20+ screens and 30+ API integrations',
        'Currently developing overtime tracking mobile application, implementing comprehensive work hours management, time tracking, and reporting features for employee productivity monitoring',
        'Explore the Kapsül TYS app:',
        'https://play.google.com/store/apps/details?id=com.kapsul.teammanagementmobile',
        'https://apps.apple.com/tr/app/kaps%C3%BCl-tys/id6741678020?l=tr'
      ]
    },
    {
      title: language === 'tr' ? 'Bilgisayar Mühendisi' : 'Computer Engineer',
      company: language === 'tr' ? 'Konya Bilim Merkezi' : 'Konya Science Center',
      url: 'https://konyabilimmerkezi.com/',
      range: language === 'tr' ? 'Ocak 2024 - Şubat 2024 - Konya TÜRKİYE' : 'January 2024 - February 2024 - Konya TURKEY',
      description: language === 'tr' ? [
        'Konya Bilim Merkezi\'nde Proje Asistanı olarak çalıştım, yapay zeka ile ilgili projelere katkıda bulundum',
        'Bu süreçte yapay zeka alanındaki bilgi ve deneyimimi geliştirme fırsatı buldum',
        'Bilim merkezinde geçirdiğim süre boyunca sosyal becerilerimi geliştirme ve ekip çalışmasının önemini daha derinden anlama fırsatı yakaladım'
      ] : [
        'Worked as a Project Assistant at Konya Science Center, contributing to projects related to artificial intelligence',
        'This experience helped me enhance my knowledge and expertise in the field of AI',
        'During my time at the science center, I improved my social skills and gained a deeper understanding of the importance of teamwork'
      ]
    },
    {
      title: language === 'tr' ? 'Bilgisayar Mühendisliği Stajyeri' : 'Computer Engineering Intern',
      company: language === 'tr' ? 'İçişleri Bakanlığı' : 'Ministry of the Interior',
      url: 'https://www.icisleri.gov.tr/',
      range: language === 'tr' ? 'Temmuz 2024 - Eylül 2024 - Ankara TÜRKİYE' : 'July 2024 - September 2024 - Ankara TURKEY',
      description: language === 'tr' ? [
        'İçişleri Bakanlığı\'nda staj tamamladım, kurumsal IT altyapısı, mesajlaşma sistemleri (RabbitMQ, Kafka) ve çeşitli veritabanı teknolojileri (PostgreSQL, Redis, Neo4J, Elasticsearch) konularında deneyim kazandım',
        'Siber güvenlik uygulamaları, sistem optimizasyonu hakkında bilgi edindim ve hükümet sistemleri mimarisi içinde anomali tespit projelerine katıldım'
      ] : [
        'Completed internship at Ministry of Interior, gaining experience with enterprise IT infrastructure, messaging systems (RabbitMQ, Kafka), and various database technologies (PostgreSQL, Redis, Neo4J, Elasticsearch)',
        'Learned about cybersecurity practices, system optimization, and participated in anomaly detection projects within government systems architecture'
      ]
    },
    {
      title: language === 'tr' ? 'Bilgisayar Mühendisliği Stajyeri' : 'Computer Engineering Intern',
      company: language === 'tr' ? 'SEDSAN Simülatör ve Havacılık' : 'SEDSAN Simulator and Aviation',
      url: 'https://www.sedsan.com.tr/',
      range: language === 'tr' ? 'Haziran 2023 - Eylül 2023 - Ankara TÜRKİYE' : 'June 2023 - September 2023 - Ankara TURKEY',
      description: language === 'tr' ? [
        'C# ve MVC mimarisi kullanarak uçuş simülasyon ortamları için uçak kokpit simülasyon panel arayüzü geliştirdime fırsatı yakaladım',
        'Çeşitli veritabanı teknolojileri konularında deneyim kazandım'
      ] : [
        'Developed aircraft cockpit simulation panel interface using C# and MVC architecture for flight simulation environments',
        'Gained experience with various database technologies'
      ]
    }
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case 'ArrowDown': {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <h2>{language === 'tr' ? 'Deneyimlerim' : 'Experience'}</h2>

      <div className="inner">
        <div className="experience-tab-list" role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
          {experiences.map((experience, i) => {
            const { company } = experience;
            return (
              <button
                key={i}
                className={`experience-tab-button ${activeTabId === i ? 'is-active' : ''}`}
                onClick={() => setActiveTabId(i)}
                ref={el => (tabs.current[i] = el)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? '0' : '-1'}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}>
                <span>{company}</span>
              </button>
            );
          })}
          <div 
            className="experience-highlight" 
            style={{ '--active-tab-id': activeTabId }}
          />
        </div>

        <div className="experience-tab-panels">
          {experiences.map((experience, i) => {
            const { title, url, company, range, description } = experience;

            return (
              <div
                key={i}
                className={`experience-tab-panel ${activeTabId === i ? 'is-active' : ''}`}
                id={`panel-${i}`}
                role="tabpanel"
                tabIndex={activeTabId === i ? '0' : '-1'}
                aria-labelledby={`tab-${i}`}
                aria-hidden={activeTabId !== i}
                hidden={activeTabId !== i}>
                <h3>
                  <span>{title}</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a href={url} className="inline-link" target="_blank" rel="noopener noreferrer">
                      {company}
                    </a>
                  </span>
                </h3>

                <p className="range">{range}</p>

                <ul>
                  {description.map((item, index) => {
                    // Check if the item contains a URL
                    if (item.includes('https://')) {
                      const urlMatch = item.match(/(https?:\/\/[^\s]+)/);
                      if (urlMatch) {
                        const url = urlMatch[1];
                        const text = item.replace(url, '').trim();
                        
                        // Check if it's a store link and create appropriate link text
                        let linkText = url;
                        if (url.includes('play.google.com')) {
                          linkText = 'Google Play Store';
                        } else if (url.includes('apps.apple.com')) {
                          linkText = 'App Store';
                        }
                        
                        return (
                          <li key={index}>
                            {text} <a href={url} target="_blank" rel="noopener noreferrer">{linkText} ↗</a>
                          </li>
                        );
                      }
                    }
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience; 