import React, { useState } from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { translations } from "../data/translations";
// import CV from "../data/Peace Jinadu-Paul Resume.pdf";
import MyPhoto from "../images/MyPhoto.jpeg";
import ProfilePhotos from '../components/ProfilePhotos';

const HeroSection = ({ nav, handleNav, language }) => {
	const t = translations[language] || translations.tr;
	
	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: "linear" });
	};

	const scrollToWorks = () => {
		scroll.scrollTo(document.getElementById('works').offsetTop - 80, { smooth: "linear" });
	};

	const scrollToContact = () => {
		scroll.scrollTo(document.getElementById('contact').offsetTop - 80, { smooth: "linear" });
	};

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	window.addEventListener("scroll", toggleVisible);

	const heroVariants = {
		hidden: {
			opacity: 0,
			y: "-50%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const photoVariants = {
		hidden: {
			opacity: 0,
			x: "-30%",
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				duration: 1.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className='hero-section' name='home' id='home'>
			<div className='hero-overlay'></div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className={visible ? "to-top-icon show" : "to-top-icon hide"}
				onClick={scrollToTop}>
				<AiOutlineArrowUp />
			</motion.div>
			<div className="hero-container">
				<div className="hero-content-wrapper">
					<motion.div
						variants={heroVariants}
						initial='hidden'
						whileInView='visible'
						className='hero-content'>
						<p className='hero-intro'>
							{language === 'tr' ? 'Merhaba, benim adım' : 'Hi, my name is'}
						</p>
						<h1 className='hero-name'>
							Selin Çifci.
						</h1>
						<h2 className='hero-tagline'>
							{language === 'tr' ? 'Mobil uygulamalar geliştiriyorum.' : 'I build things for Mobile Apps.'}
						</h2>
						<p className='hero-description'>
							{language === 'tr' 
								? 'Frontend geliştirici olarak, kullanıcı dostu ve erişilebilir dijital deneyimler oluşturmaya odaklanıyorum. Şu anda React Native ve modern web teknolojileri ile mobil uygulamalar geliştiriyorum.'
								: 'I\'m a frontend developer specializing in building accessible, human-centered digital experiences. Currently, I\'m focused on building mobile applications with React Native and modern web technologies.'
							}
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
