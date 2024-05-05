/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [skills, setSkills] = useState([]);

  const descriptions = [
    `My name is {name} and as an adept B2B lead generation expert and digital marketer, I combine proficiency in data entry, copy-paste, and data scraping with advanced skills in MS Excel and MS Office. I specialize in seamlessly converting files and harnessing these skills to drive targeted lead generation campaigns across diverse industries.`,
    `My name is {name} and with a robust skill set encompassing data entry, copy-paste, and data scraping, complemented by expertise in MS Excel and MS Office, I excel as a B2B lead generation specialist and digital marketer. My ability to convert files effortlessly and apply insights gleaned from data mining ensures impactful lead generation strategies.`,
    `My name is {name} and I am a skilled B2B lead generation expert and digital marketer proficient in data entry, copy-paste, and data scraping, with advanced capabilities in MS Excel and MS Office. Leveraging these skills, I craft dynamic lead generation campaigns and seamlessly convert files, driving tangible results for businesses.`,
    `My name is {name} and with extensive expertise in data entry, copy-paste, and data scraping, alongside proficiency in MS Excel and MS Office, I am a seasoned B2B lead generation specialist and digital marketer. My ability to convert files seamlessly and leverage insights from data mining fuels targeted lead generation efforts, delivering measurable outcomes.`,
    `My name is {name} and I bring a comprehensive skill set to the table as a B2B lead generation expert and digital marketer, encompassing data entry, copy-paste, and data scraping, along with advanced proficiency in MS Excel and MS Office. Through adept file conversion and strategic lead generation tactics, I drive meaningful results for businesses.`,
    `My name is {name} and as a seasoned B2B lead generation specialist and digital marketer, I possess a diverse skill set that includes data entry, copy-paste, and data scraping, backed by advanced proficiency in MS Excel and MS Office. My ability to convert files seamlessly and leverage data insights fuels targeted lead generation strategies, enabling businesses to thrive.`,
    `My name is {name} and with a solid foundation in data entry, copy-paste, and data scraping, complemented by advanced skills in MS Excel and MS Office, I excel as a B2B lead generation expert and digital marketer. I leverage these skills to seamlessly convert files and drive impactful lead generation campaigns tailored to business needs.`,
    `My name is {name} and I am a proficient B2B lead generation specialist and digital marketer with expertise in data entry, copy-paste, and data scraping, alongside advanced skills in MS Excel and MS Office. Leveraging these capabilities, I craft dynamic lead generation campaigns and seamlessly convert files to drive business growth, delivering measurable results for my clients.`,
    `Bringing a wealth of experience to the table, my name is {name} and I am a skilled B2B lead generation expert and digital marketer proficient in data entry, copy-paste, and data scraping, with advanced capabilities in MS Excel and MS Office. Through strategic file conversion and targeted lead generation efforts, I drive tangible outcomes, helping businesses achieve their goals.`,
    `With a solid grounding in data entry, copy-paste, and data scraping, bolstered by advanced skills in MS Excel and MS Office, my name is {name} and I am a seasoned B2B lead generation specialist and digital marketer. My expertise in seamlessly converting files and crafting impactful lead generation campaigns drives success for businesses, fostering long-term growth and profitability.`,
    // Add more descriptions here...
    `My name is {name} and as a seasoned B2B lead generation expert and digital marketer, I bring a wealth of expertise to my role, proficient in data entry, copy-paste, and data scraping, complemented by advanced knowledge of MS Excel and MS Office. By converting files effortlessly and deploying strategic lead generation tactics, I drive impactful results.`,
    `My name is {name} and I am a highly skilled B2B lead generation expert and digital marketer, with a strong foundation in data entry, copy-paste, and data scraping, along with advanced proficiency in MS Excel and MS Office. Leveraging these skills, I craft tailored lead generation campaigns that drive business growth and success.`,
    `My name is {name} and I excel as a B2B lead generation specialist and digital marketer, possessing extensive experience in data entry, copy-paste, and data scraping, supported by advanced skills in MS Excel and MS Office. By seamlessly converting files and deploying strategic lead generation tactics, I achieve impactful results.`,
    `With a proven track record in B2B lead generation and digital marketing, my name is {name} and I am proficient in data entry, copy-paste, and data scraping, complemented by advanced skills in MS Excel and MS Office. Through strategic file conversion and targeted lead generation efforts, I drive measurable business success.`,
    `As an experienced B2B lead generation expert and digital marketer, my name is {name} and I possess a diverse skill set that includes data entry, copy-paste, and data scraping, alongside advanced proficiency in MS Excel and MS Office. By converting files seamlessly and leveraging data insights, I drive impactful lead generation strategies.`,
    `My name is {name} and I am a seasoned B2B lead generation specialist and digital marketer, adept at utilizing various digital marketing channels such as email marketing, social media, SEO, and PPC to generate leads. With expertise in data entry, copy-paste, and data scraping, coupled with advanced skills in MS Excel and MS Office, I drive targeted lead generation campaigns across diverse industries.`,
    `With a deep understanding of B2B lead generation and digital marketing, my name is {name} and I specialize in LinkedIn lead generation, e-commerce lead generation, and data mining. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I drive impactful lead generation strategies tailored to meet business objectives.`,
    `My name is {name} and I am an expert in B2B lead generation, possessing a strong background in data entry, copy-paste, and data scraping, coupled with advanced proficiency in MS Excel and MS Office. By seamlessly converting files and harnessing these skills, I drive targeted lead generation campaigns that deliver measurable results.`,
    `As a skilled B2B lead generation specialist and digital marketer, my name is {name} and I excel in leveraging data entry, copy-paste, and data scraping techniques, along with advanced skills in MS Excel and MS Office, to drive targeted lead generation strategies. I specialize in generating high-quality leads that contribute to business growth and success.`,
    `With a focus on data-driven strategies, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I craft tailored lead generation campaigns that resonate with target audiences and drive results.`,
    `My name is {name} and I am a results-driven B2B lead generation expert and digital marketer, adept at data entry, copy-paste, and data scraping. With advanced skills in MS Excel and MS Office, I specialize in converting files seamlessly and deploying targeted lead generation strategies that drive business growth and success.`,
    `With a passion for driving business growth, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I leverage these capabilities to craft tailored lead generation campaigns that deliver tangible results.`,
    `As an innovative B2B lead generation specialist and digital marketer, my name is {name} and I possess a diverse skill set that includes data entry, copy-paste, and data scraping. With advanced proficiency in MS Excel and MS Office, I specialize in converting files seamlessly and driving targeted lead generation strategies that drive business success.`,
    `My name is {name} and I excel as a B2B lead generation expert and digital marketer, leveraging my expertise in data entry, copy-paste, and data scraping, along with advanced skills in MS Excel and MS Office, to drive impactful lead generation strategies. I specialize in crafting tailored campaigns that resonate with target audiences and drive business growth.`,
    `With a focus on delivering measurable results, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I leverage these capabilities to craft dynamic lead generation campaigns that drive business success.`,
    `My name is {name} and I am a seasoned B2B lead generation specialist and digital marketer, proficient in data entry, copy-paste, and data scraping. With advanced skills in MS Excel and MS Office, I specialize in seamlessly converting files and deploying targeted lead generation strategies that drive business growth and success.`,
    `As a forward-thinking B2B lead generation expert and digital marketer, my name is {name} and I possess extensive experience in data entry, copy-paste, and data scraping. With advanced proficiency in MS Excel and MS Office, I specialize in crafting innovative lead generation strategies that drive measurable results for businesses.`,
    `My name is {name} and I excel as a B2B lead generation specialist and digital marketer, leveraging my expertise in data entry, copy-paste, and data scraping, along with advanced skills in MS Excel and MS Office, to drive impactful lead generation strategies. I specialize in crafting tailored campaigns that resonate with target audiences and drive business growth.`,
    `With a focus on delivering measurable results, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I leverage these capabilities to craft dynamic lead generation campaigns that drive business success.`,
    `My name is {name} and I am a seasoned B2B lead generation specialist and digital marketer, proficient in data entry, copy-paste, and data scraping. With advanced skills in MS Excel and MS Office, I specialize in seamlessly converting files and deploying targeted lead generation strategies that drive business growth and success.`,
    `As a forward-thinking B2B lead generation expert and digital marketer, my name is {name} and I possess extensive experience in data entry, copy-paste, and data scraping. With advanced proficiency in MS Excel and MS Office, I specialize in crafting innovative lead generation strategies that drive measurable results for businesses.`,
    `My name is {name} and I excel as a B2B lead generation specialist and digital marketer, leveraging my expertise in data entry, copy-paste, and data scraping, along with advanced skills in MS Excel and MS Office, to drive impactful lead generation strategies. I specialize in crafting tailored campaigns that resonate with target audiences and drive business growth.`,
    `With a focus on delivering measurable results, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I leverage these capabilities to craft dynamic lead generation campaigns that drive business success.`,
    `My name is {name} and I am a seasoned B2B lead generation specialist and digital marketer, proficient in data entry, copy-paste, and data scraping. With advanced skills in MS Excel and MS Office, I specialize in seamlessly converting files and deploying targeted lead generation strategies that drive business growth and success.`,
    `As a forward-thinking B2B lead generation expert and digital marketer, my name is {name} and I possess extensive experience in data entry, copy-paste, and data scraping. With advanced proficiency in MS Excel and MS Office, I specialize in crafting innovative lead generation strategies that drive measurable results for businesses.`,
    `My name is {name} and I excel as a B2B lead generation specialist and digital marketer, leveraging my expertise in data entry, copy-paste, and data scraping, along with advanced skills in MS Excel and MS Office, to drive impactful lead generation strategies. I specialize in crafting tailored campaigns that resonate with target audiences and drive business growth.`,
    `With a focus on delivering measurable results, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I leverage these capabilities to craft dynamic lead generation campaigns that drive business success.`,
    `My name is {name} and I am a seasoned B2B lead generation specialist and digital marketer, proficient in data entry, copy-paste, and data scraping. With advanced skills in MS Excel and MS Office, I specialize in seamlessly converting files and deploying targeted lead generation strategies that drive business growth and success.`,
    `As a forward-thinking B2B lead generation expert and digital marketer, my name is {name} and I possess extensive experience in data entry, copy-paste, and data scraping. With advanced proficiency in MS Excel and MS Office, I specialize in crafting innovative lead generation strategies that drive measurable results for businesses.`,
    `My name is {name} and I excel as a B2B lead generation specialist and digital marketer, leveraging my expertise in data entry, copy-paste, and data scraping, along with advanced skills in MS Excel and MS Office, to drive impactful lead generation strategies. I specialize in crafting tailored campaigns that resonate with target audiences and drive business growth.`,
    `With a focus on delivering measurable results, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I leverage these capabilities to craft dynamic lead generation campaigns that drive business success.`,
    `My name is {name} and I am a seasoned B2B lead generation specialist and digital marketer, proficient in data entry, copy-paste, and data scraping. With advanced skills in MS Excel and MS Office, I specialize in seamlessly converting files and deploying targeted lead generation strategies that drive business growth and success.`,
    `As a forward-thinking B2B lead generation expert and digital marketer, my name is {name} and I possess extensive experience in data entry, copy-paste, and data scraping. With advanced proficiency in MS Excel and MS Office, I specialize in crafting innovative lead generation strategies that drive measurable results for businesses.`,
    `My name is {name} and I excel as a B2B lead generation specialist and digital marketer, leveraging my expertise in data entry, copy-paste, and data scraping, along with advanced skills in MS Excel and MS Office, to drive impactful lead generation strategies. I specialize in crafting tailored campaigns that resonate with target audiences and drive business growth.`,
    `With a focus on delivering measurable results, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I leverage these capabilities to craft dynamic lead generation campaigns that drive business success.`,
    `My name is {name} and I am a seasoned B2B lead generation specialist and digital marketer, proficient in data entry, copy-paste, and data scraping. With advanced skills in MS Excel and MS Office, I specialize in seamlessly converting files and deploying targeted lead generation strategies that drive business growth and success.`,
    `As a forward-thinking B2B lead generation expert and digital marketer, my name is {name} and I possess extensive experience in data entry, copy-paste, and data scraping. With advanced proficiency in MS Excel and MS Office, I specialize in crafting innovative lead generation strategies that drive measurable results for businesses.`,
    `My name is {name} and I excel as a B2B lead generation specialist and digital marketer, leveraging my expertise in data entry, copy-paste, and data scraping, along with advanced skills in MS Excel and MS Office, to drive impactful lead generation strategies. I specialize in crafting tailored campaigns that resonate with target audiences and drive business growth.`,
    `With a focus on delivering measurable results, my name is {name} and I specialize in B2B lead generation and digital marketing. Proficient in data entry, copy-paste, and data scraping, and with advanced skills in MS Excel and MS Office, I leverage these capabilities to craft dynamic lead generation campaigns that drive business success.`,
    `My name is {name} and I am a seasoned B2B lead generation specialist and digital marketer, proficient in data entry, copy-paste, and data scraping. With advanced skills in MS Excel and MS Office, I specialize in seamlessly converting files and deploying targeted lead generation strategies that drive business growth and success.`,
    `As a forward-thinking B2B lead generation expert and digital marketer, my name is {name} and I possess extensive experience in data entry, copy-paste, and data scraping. With advanced proficiency in MS Excel and MS Office, I specialize in crafting innovative lead generation strategies that drive measurable results for businesses.`,
  ];

  const skillsList = [
    "B2B Lead Generation",
    "LinkedIn Lead Generation",
    "E-Commerce Lead Generation",
    "Data Scraping and Data Mining",
    "Bulk Email Finding",
    "Data Entry and Copy Paste",
    "Employee and Business Lead Generation",
    "Google Maps and Web Research",
    "Targeted Lead Generation"
  ];

  const generateRandomDescription = () => {
    if (!name == '') {
      const randomIndex = Math.floor(Math.random() * descriptions.length);
      const randomDescription = descriptions[randomIndex].replace('{name}', name);
      setDescription(randomDescription);
      setSkills(skillsList);
      setIsCopied(false);
    } else {
      alert('Please enter you name')
    }

  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCopyToClipboard = () => {
    const textToCopy = `${description}\n\nMy Skills:\n${skills.join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
  };

  return (
    <div className="App text-center">
      <div className="container">
        <h1 className='text-4xl text-center my-5 font-black'>Welcome to Description Generator</h1>
        <div className="card">
          <div className="input-container">
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Type You Name Here"
              className="input input-bordered input-accent w-full max-w-xs" />
          </div>
          <div>
            <button className="generate-btn btn btn-accent mt-5 mb-5" onClick={generateRandomDescription}>Generate Description</button>
          </div>
          {description && (
            <><div className="result-container">
              <h2 className='text-xl font-semibold ml-2 mr-2'>{name}, Here's Your Description:</h2>
            </div>
              <div className='text-left'>
                <div className="card bg-base-100 shadow-xl m-auto">
                  <div className="card-body">
                    <p>{description}</p>
                    <h2 className="card-title">My Skills:</h2>
                    <ul>
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                    <div className="card-actions justify-start">
                      <button className="copy-btn btn btn-primary my-8" onClick={handleCopyToClipboard}>
                        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                      </button>
                    </div>
                  </div>
                </div>
              </div></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
