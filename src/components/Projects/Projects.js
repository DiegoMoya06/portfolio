import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import i18n from '../../utils/i18n'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const {t} = useTranslation();
  const [language, setLanguage] = useState(true)
  if (!projects.length) return null

  const changeLanguage = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
    setLanguage(!language);
    console.log(language);
    console.log(t('save'));
    console.log(t('translations.save'));
  }

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>
      <h4>{t('translations.save')}</h4>
      <button type='button' onClick={() => changeLanguage(language ? 'en' : 'de')}>Change Language</button>
      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
