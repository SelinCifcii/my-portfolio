import React from 'react';
import AchievementCard from '../components/AchievementCard';

const Achievements = ({ language }) => {
  const achievements = [
    {
      title: {
        tr: 'Cursor Hackathon 1.liği',
        en: '1st Place at Cursor Hackathon'
      },
      description: {
        tr: 'Eğitim kategorisinde geliştirdiğimiz web uygulamasıyla 1. olduk. Uygulamamız; pomodoro gibi ders çalışma tekniklerini, öğrencileri eşleştiren bir sistemle birleştirerek birlikte çalışmayı teşvik eden ve dakikalık oturumlar başlatılmasını sağlayan bir yapı sunmaktadır.',
        en: 'We won 1st place in the education category with our web application. The platform combines study techniques such as Pomodoro with a student matching system to encourage collaborative studying and enables the creation of timed study sessions.'
      },
      image: require('../images/achievementsPhoto/cursor_hackathon.jpeg'),
      badge: '🥇 1st Place',
      date: '2025',
      path: null
    },
    {
      title: {
        tr: 'Teknofest Finalistliği',
        en: 'Hackathon First Place'
      },
      description: {
        tr: 'Turizm sektörüne yenilikçi çözümler getirmeyi hedefleyen RouteAI projemizle Turizm Teknolojileri kategorisinde finalist olduk.',
        en: 'Finalist in the Tourism Technologies category with our RouteAI project, which aims to bring innovative solutions to the tourism sector.'
      },
      image: require('../images/achievementsPhoto/teknofestPhoto.jpeg'),
      badge: '🏆 Finalist',
      date: '2024',
      path: null
    },
    {
      title: {
        tr: 'Google Oyun ve Uygulama Akademisi Mezuniyeti',
        en: 'Google Game and Application Academy Graduation'
      },
      description: {
        tr: 'Oyun ve Uygulama Akademisi kapsamında 8 ay süren yoğun eğitim programını başarıyla tamamlayarak mezun oldum. Bu süreçte oyun ve uygulama geliştirme alanında kapsamlı bilgi ve pratik deneyim kazandım.',
        en: 'Successfully graduated from the 8-month intensive Game and Application Academy program. Gained comprehensive knowledge and hands-on experience in game and application development during this period.'
      },
      image: require('../images/achievementsPhoto/OUA.png'),
      badge: '🎓 Mezun',
      date: '2024',
      path: null
    },
    {
      title: {
        tr: 'Units Network Blockchain Hackathon - En İyi Sunum ve Fikir Ödülü',
        en: 'Units Network Blockchain Hackathon - Best Presentation and Idea Award'
      },
      description: {
        tr: 'Units Network tarafından düzenlenen blockchain teknolojileri temalı hackathonda, projeler kısmında da bahsettiğim FlowPass uygulaması ile En İyi Sunum ve Fikir ödülünü kazandık. Ayrıca Units token sahibi Sasha Ivanov ile tanışma fırsatı yakaladım.',
        en: 'Won the Best Presentation and Idea Award with the FlowPass application (also mentioned in the projects section) at the blockchain-themed hackathon organized by Units Network. Also had the opportunity to meet Sasha Ivanov, the owner of Units token.'
      },
      image: require('../images/achievementsPhoto/unitsPhoto.jpeg'),
      date: '2025',
      path: null
    },
    {
      title: {
        tr: 'Solution Hackathon – KOSGEB Destekli 3.lük',
        en: 'Solution Hackathon – KOSGEB Supported 3rd Prize'
      },
      description: {
        tr: 'Topluma fayda sağlayacak çözümler geliştirmeye odaklanan, KOSGEB destekli Sosyal İnovasyon Etki Programı (SIA) hackathonunda 3.lük ödülünü kazandık.',
        en: 'Won 3rd Prize at the Social Innovation Impact Program (SIA), a KOSGEB-supported hackathon focused on developing impactful solutions for society.'
      },
      image: require('../images/achievementsPhoto/SIAPhoto.jpeg'),
      badge: '🥉 3rd Prize',
      date: '2024',
      path: null
    },
    {
      title: {
        tr: 'MEVKA - Teknik Danışmanlık ve Mentorluk Desteği Ödülü',
        en: 'MEVKA - Technical Consultancy and Mentoring Support Winner'
      },
      description: {
        tr: 'RouteAI projemiz, yenilikçi yaklaşımı sayesinde Mevlana Kalkınma Ajansı (MEVKA) tarafından teknik danışmanlık ve mentorluk desteği ile ödüllendirildi.',
        en: 'Our RouteAI project was awarded technical consultancy and mentoring support by Mevlana Development Agency (MEVKA) for its innovative approach.'
      },
      image: require('../images/achievementsPhoto/mevkaPhoto.jpeg'),
      badge: '🏅 MEVKA Support',
      date: '2023',
      path: null
    }
  ];

  const sectionTitle = language === 'tr' ? 'Başarılarım' : 'Achievements';

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2>{sectionTitle}</h2>
        <div className="achievements-content">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                data={{
                  ...achievement,
                  title: achievement.title[language],
                  description: achievement.description[language]
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 