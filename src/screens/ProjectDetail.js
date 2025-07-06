import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import project images
import mipsAssemblyPhoto1 from '../images/mipsAssemblyPhoto.png';
import mipsAssemblyPhoto2 from '../images/projectDetailsPhoto/mipsAssemblyPhoto_2.png';
import routeaiPhoto1 from '../images/projectDetailsPhoto/routeai_1.png';
import routeaiPhoto2 from '../images/projectDetailsPhoto/routeai_2.png';
import routeaiPhoto3 from '../images/projectDetailsPhoto/routeai_3.png';
import tmsPhoto1 from '../images/projectDetailsPhoto/TMS_1.png';
import tmsPhoto2 from '../images/projectDetailsPhoto/TMS_2.png';
import tmsPhoto3 from '../images/projectDetailsPhoto/TMS_3.png';
import flowpassPhoto1 from '../images/projectDetailsPhoto/flowpass_1.png';
import flowpassPhoto2 from '../images/projectDetailsPhoto/flowpass_2.png';

const ProjectDetail = () => {
  const { projectTitle } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(projectTitle);
  const [language, setLanguage] = React.useState('tr'); // tr veya en
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleGoBack = () => {
    navigate('/');
    // Works kısmına scroll etmek için setTimeout kullanıyoruz
    setTimeout(() => {
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
        // URL'yi güncelle
        window.history.pushState(null, '', '/#works');
      }
    }, 100);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // ESC tuşu ile modal kapatma
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Scroll'u engelle
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset'; // Scroll'u geri aç
    };
  }, [isModalOpen]);

  // Proje detayları
  const projectDetails = {
    'MIPS Assembly Simulator': {
      images: [mipsAssemblyPhoto1, mipsAssemblyPhoto2],
      details: {
        tr: [
          'HTML, CSS ve JavaScript kullanarak geliştirilen bu interaktif IDE, kullanıcının girdiği assembly kodunu çalıştırıp partial instruction memory ve partial data memory\'yi inceleyerek register değerlerini gerçek zamanlı olarak takip etmelerine olanak tanır.',
          'Sistem, kullanıcının girdisini ayrıştırır, her komutu karşılık gelen 32-bit makine koduna dönüştürür ve adım adım yürütümü simüle eder. Aynı zamanda instruction memory ve data memory bölümlerini görselleştirerek, programın bellek kullanımını ve register durumlarını anlık olarak gösterir.',
          'Simülatör, aritmetik, mantıksal, bellek erişimi, karşılaştırma, dallanma ve fonksiyon çağrısı işlemlerini içeren geniş bir MIPS komut türü yelpazesini destekler. Label çözümleme ile kontrol akışı yönetimini sağlarken, kullanıcıların assembly kodlarını yazıp test edebilecekleri kapsamlı bir geliştirme ortamı sunar.',
          'Düşük seviyeli mimari kavramlarını interaktif web arayüzü ile birleştirerek, bu proje MIPS komut yürütümünü ve işlemci davranışını keşfetmek ve anlamak için pratik ve görsel bir yol sağlar. Özellikle eğitim amaçlı kullanım için ideal olan bu IDE, assembly programlama öğrenenlerin kodlarını adım adım inceleyebilmelerine ve bellek yönetimini görsel olarak anlayabilmelerine yardımcı olur.'
        ],
        en: [
          'This interactive IDE, developed using HTML, CSS, and JavaScript, allows users to run their assembly code and examine partial instruction memory and partial data memory to track register values in real-time.',
          'The system parses user input, converts each instruction into its corresponding 32-bit machine code, and simulates execution step by step. It also visualizes instruction memory and data memory sections, showing the program\'s memory usage and register states in real-time.',
          'The simulator supports a wide range of MIPS instruction types—including arithmetic, logical, memory access, comparison, branching, and function call operations. While providing label resolution and control flow handling, it offers a comprehensive development environment where users can write and test their assembly codes.',
          'By bridging low-level architecture concepts with an interactive web interface, this project provides a practical and visual way to explore and understand MIPS instruction execution and processor behavior. This IDE, which is ideal for educational purposes, helps assembly programming learners examine their code step by step and understand memory management visually.'
        ]
      },
      technologies: ['HTML', 'CSS', 'JavaScript', 'MIPS Assembly']
    },
    'RouteAI': {
      images: [routeaiPhoto1, routeaiPhoto2, routeaiPhoto3],
      details: {
        tr: [
          'RouteAI, bireysel ve grup seyahatlerini daha kolay, hızlı ve kişiselleştirilmiş hale getirmek için geliştirilen bir akıllı seyahat rehberi mobil uygulamasıdır. Kullanıcıların konaklama, ulaşım, yeme-içme ve eğlence gibi planlama süreçlerini tek bir platformda birleştirerek, seyahat deneyimini uçtan uca yönetmelerine olanak tanır. Yapay zeka destekli önerilerle seyahat planlarını kişiselleştirirken, zaman ve maliyet açısından da en verimli seçenekleri sunar.',
          'Bu projede Frontend Developer olarak, uygulamanın hem teknik mimarisinde hem de kullanıcı deneyimi tasarımında aktif görev aldım. Projenin tasarımından geliştirme ve test aşamalarına kadar, yalnızca teknik standartları değil aynı zamanda ticari potansiyeli de karşılayacak şekilde kapsamlı analizler yürüttüm.',
          'React Native ve Expo kullanarak geliştirdiğimiz RouteAI; Firebase entegrasyonu ile güvenli kimlik doğrulama ve gerçek zamanlı veritabanı yönetimi sağlıyor. Kullanıcıların uygulamada rahatça dolaşabilmesi için React Navigation kütüphanesini, Stack ve Tab Navigation yapılarıyla birlikte kullandım. Modern ve sade tasarlanan kullanıcı arayüzü sayesinde, seyahat planlama sürecini daha sezgisel ve akıcı bir hale getirdik.',
          'Ayrıca Gemini AI entegrasyonu ile kullanıcılara; tercihlerine ve geçmiş seyahat alışkanlıklarına göre kişiselleştirilmiş seyahat önerileri sunarak uygulamanın değerini artırdım. Bu sayede RouteAI, sadece teknik olarak ölçeklenebilir ve güvenilir bir çözüm olmakla kalmayıp, aynı zamanda kullanıcı ihtiyaçları ve pazar beklentileriyle de güçlü şekilde uyum sağladı.'
        ],
        en: [
          'RouteAI is an intelligent travel guide mobile application developed to make individual and group travels easier, faster, and more personalized. It allows users to manage their travel experience end-to-end by combining planning processes such as accommodation, transportation, dining, and entertainment on a single platform. While personalizing travel plans with AI-powered recommendations, it also offers the most efficient options in terms of time and cost.',
          'As a Frontend Developer in this project, I took an active role in both the technical architecture and user experience design of the application. From the design phase to development and testing phases, I conducted comprehensive analyses to ensure that not only technical standards but also commercial potential were met.',
          'RouteAI, which we developed using React Native and Expo, provides secure authentication and real-time database management through Firebase integration. I used the React Navigation library with Stack and Tab Navigation structures so that users can navigate comfortably in the application. Thanks to the modern and clean user interface design, we made the travel planning process more intuitive and fluid.',
          'Additionally, I increased the value of the application by providing users with personalized travel recommendations based on their preferences and past travel habits through Gemini AI integration. Thus, RouteAI not only became a technically scalable and reliable solution but also strongly aligned with user needs and market expectations.'
        ]
      },
      technologies: ['React Native', 'Expo', 'Firebase', 'Gemini AI', 'React Navigation']
    },
    'Team Management System': {
      images: [tmsPhoto1, tmsPhoto2, tmsPhoto3],
      details: {
        tr: [
          'Projede, React Native ve TypeScript kullanarak hem iOS (Apple Store) hem de Android (Google Play Store) platformlarında yayınlanan, kullanıcı dostu ve tüm cihazlarla uyumlu dinamik bir mobil arayüz geliştirdim. Tasarladığım bu arayüz, mobil cihazlardan masaüstü tarayıcılara kadar farklı çözünürlüklerde sorunsuz bir deneyim sunuyor.',
          'Tekrarlayan durum yönetimi problemlerini çözmek ve uygulama performansını artırmak amacıyla Redux ve Redux Persist kullandım. Bu sayede kullanıcıların verileri uygulamayı kapatıp açtıklarında da kaybolmadan korunurken, veri akışı daha düzenli ve yönetilebilir hale geldi. Ayrıca, API entegrasyonlarını gerçekleştirerek frontend ile backend arasında hızlı, güvenli ve hatasız veri iletişimini sağladım.',
          'Projede güvenliği artırmak için JWT (JSON Web Token) tabanlı kimlik doğrulama ve rol tabanlı erişim kontrolü gibi gelişmiş güvenlik mekanizmalarının uygulanmasına katkıda bulundum. Böylece sistem; farklı kullanıcı rolleri için uygun erişim seviyeleri sunarak daha güvenilir hale geldi.',
          'Geliştirme sürecinde Expo kullandım; bu sayede proje hızlı derlendi, test süreçleri kolaylaştı ve dağıtım süreçleri daha esnek yönetildi. Şu anda, uygulamaya bildirim merkezi ekleyerek kullanıcıların yarışma süreçleriyle ilgili güncellemelerden ve önemli duyurulardan anlık olarak haberdar olmalarını sağlamaya yönelik geliştirmeler üzerinde çalışıyorum.',
          'Sonuç olarak, bu projede yaptığım katkılar; kullanıcı odaklı, güvenli, ölçeklenebilir ve modern bir mobil platformun ortaya çıkmasına yardımcı oldu. Bu sayede ekipler yarışmalara hazırlanırken süreçlerini çok daha verimli ve koordineli bir şekilde yönetebiliyorlar.'
        ],
        en: [
          'In the project, I developed a dynamic mobile interface using React Native and TypeScript that was published on both iOS (Apple Store) and Android (Google Play Store) platforms, user-friendly and compatible with all devices. This interface I designed offers a seamless experience across different resolutions from mobile devices to desktop browsers.',
          'I used Redux and Redux Persist to solve recurring state management problems and increase application performance. This way, users\' data is preserved without loss when they close and open the application, while data flow became more organized and manageable. Additionally, I implemented API integrations to ensure fast, secure, and error-free data communication between frontend and backend.',
          'I contributed to the implementation of advanced security mechanisms such as JWT (JSON Web Token) based authentication and role-based access control to increase security in the project. Thus, the system became more reliable by providing appropriate access levels for different user roles.',
          'I used Expo in the development process; this way the project compiled quickly, testing processes were facilitated, and distribution processes were managed more flexibly. Currently, I am working on developments to add a notification center to the application, enabling users to be instantly informed about updates and important announcements related to competition processes.',
          'As a result, my contributions in this project helped create a user-focused, secure, scalable, and modern mobile platform. This way, teams can manage their processes much more efficiently and coordinated while preparing for competitions.'
        ]
      },
      technologies: ['React Native', 'TypeScript', 'Redux', 'Redux Persist', 'Expo', 'JWT', 'API Integration']
    },
    'FlowPass': {
      images: [flowpassPhoto1, flowpassPhoto2],
      details: {
        tr: [
          'FlowPass, şehir içi toplu taşımada ödeme süreçlerini dönüştüren, blockchain destekli yenilikçi bir mobil uygulamadır. Kullanıcıların stablecoin tabanlı mikro ödemeler yapmasına ve merkeziyetsiz kimlik (DID) sayesinde farklı şehir ve ağlarda tek dijital kimlikle kesintisiz hizmet almasına olanak tanır.',
          'Projenin vizyonu; şehir ulaşım ekosistemine entegre olarak, güvenli, hızlı ve şeffaf ödeme altyapısı sunarken, kullanıcıların kişisel verilerini koruyan ve merkeziyetsiz yapısıyla yeni nesil bir deneyim oluşturmak.',
          'Bu projede, frontend geliştirmeden blokzincir entegrasyonuna kadar aktif rol aldım; kullanıcıların işlemleri hızlı ve kolay bir şekilde gerçekleştirebildiği modern ve kullanıcı dostu bir arayüz tasarladım. FlowPass projesinde; toplu taşımada blokzincir tabanlı mikro ödemelerin güvenli, hızlı ve kullanıcı dostu bir şekilde hayata geçmesini hedefledik. Mobile Developer olarak, React Native ve Expo ile mobil arayüz geliştirdim; kullanıcıların cüzdan bağlayarak stablecoin ile ödeme yapabilmesini sağladım.',
          'Ayrıca WalletConnect entegrasyonu, gerçek zamanlı veri yönetimi için blockchain ve geleneksel API\'lerin entegrasyonu, veri gizliliği ve güvenlik için hibrit escrow modeli, zincirler arası iletişim ve likidite yönetimi gibi konularda projeye teknik katkı sundum. Sonuç olarak FlowPass; şehir ulaşımında modern, güvenli ve merkeziyetsiz bir ödeme deneyimi sunan ölçeklenebilir bir çözüm haline geldi.'
        ],
        en: [
          'FlowPass is an innovative blockchain-powered mobile application that transforms payment processes in urban public transportation. It enables users to make stablecoin-based micro-payments and receive seamless services across different cities and networks with a single digital identity through decentralized identity (DID).',
          'The project\'s vision is to create a next-generation experience by integrating into the urban transportation ecosystem, providing a secure, fast, and transparent payment infrastructure while protecting users\' personal data with its decentralized structure.',
          'In this project, I took an active role from frontend development to blockchain integration; I designed a modern and user-friendly interface where users can perform transactions quickly and easily. In the FlowPass project, we aimed to bring blockchain-based micro-payments in public transportation to life in a secure, fast, and user-friendly way. As a Mobile Developer, I developed the mobile interface with React Native and Expo; I enabled users to make payments with stablecoins by connecting their wallets.',
          'Additionally, I provided technical contributions to the project in areas such as WalletConnect integration, integration of blockchain and traditional APIs for real-time data management, hybrid escrow model for data privacy and security, cross-chain communication and liquidity management. As a result, FlowPass has become a scalable solution that offers a modern, secure, and decentralized payment experience in urban transportation.'
        ]
      },
      technologies: ['React Native', 'Expo', 'Blockchain', 'WalletConnect', 'Stablecoin', 'DID', 'API Integration']
    }
  };

  const project = projectDetails[decodedTitle];

  return (
    <div className="project-detail">
      <div className="container">
        <button onClick={handleGoBack} className="back-button">
          ← Geri Dön
        </button>
        <div className="project-content">
          <div className="language-toggle-container">
            <button 
              className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
              onClick={() => setLanguage('tr')}
            >
              TR
            </button>
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          
          <h1>{decodedTitle}</h1>
          
          {project ? (
            <>
              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <div className="project-images">
                  {project.images.map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`${decodedTitle} - Image ${index + 1}`}
                      className="project-image"
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              )}

              <div className="project-details">
                {(typeof project.details === 'string' 
                  ? [project.details] 
                  : project.details[language]
                ).map((detail, index) => (
                  <p key={index} className="detail-paragraph">{detail}</p>
                ))}
              </div>

              <div className="project-technologies">
                <h3>{language === 'tr' ? 'Kullanılan Teknolojiler' : 'Technologies Used'}</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p>{language === 'tr' ? 'Bu proje hakkında detaylı bilgiler burada yer alacak.' : 'Detailed information about this project will be available here.'}</p>
          )}
        </div>
      </div>

      {/* Modal for Full Image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img 
            src={selectedImage} 
            alt="Full Image"
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail; 