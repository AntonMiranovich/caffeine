import style from './slider.module.scss';
import leftArrow from './assets/leftArrow.png';
import rightArrow from './assets/rightArrow.png';
import { useEffect, useState } from 'react';

function Slider() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      theContentsOfTheReview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut veniam eveniet placeat quod, quaerat officia debitis nulla sit molestiae non repudiandae ducimus natus, ut ipsum, incidunt sint iste! Deserunt itaque dolorem magnam delectus velit. Rerum praesentium in quibusdam eaque harum sed beatae, culpa saepe alias architecto iusto? Temporibus iste voluptatem in itaque unde at fugiat? Ipsa ipsum id reprehenderit.',
      jobTitle: 'Project Manager',
      name: 'Jonny Thomas'
    },
    {
      id: 2,
      theContentsOfTheReview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda, veritatis, ad maiores officiis quo distinctio repellendus illum aut tenetur vero mollitia fugiat ratione sint sit accusamus, rerum enim at dolores asperiores quae est minus. Excepturi soluta voluptates cupiditate mollitia nihil natus, quisquam maiores autem inventore sapiente? At, iste quas?',
      jobTitle: 'Dev JS',
      name: 'Anton Miranovich'
    },
    {
      id: 3,
      theContentsOfTheReview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ad harum ullam cupiditate amet sit quaerat fugiat, eveniet aliquid dignissimos ipsa earum cumque! Accusamus distinctio nihil totam voluptatum unde quasi, aperiam sequi, necessitatibus reprehenderit, aliquam odit! Deserunt amet voluptatibus optio repellat accusamus itaque odit at debitis quas reprehenderit, id mollitia eligendi consectetur ullam nihil minus.',
      jobTitle: 'Tester',
      name: 'Mark Smith'
    },
    {
      id: 4,
      theContentsOfTheReview: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magnam, delectus eveniet velit asperiores sit odit. Error tempora corporis temporibus quidem est adipisci nihil odit exercitationem molestias. Voluptatem cumque delectus molestias ea eaque officiis incidunt perferendis rerum similique accusantium sit, ut quam ducimus tenetur dicta repudiandae animi! Reprehenderit voluptas nobis porro. Incidunt placeat amet, adipisci unde maxime dolore!',
      jobTitle: 'Dev TS',
      name: 'Jon Jons'
    },
    {
      id: 5,
      theContentsOfTheReview: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Saepe exercitationem molestias commodi minima amet quam dolorum temporibus libero culpa magni, vel veniam pariatur a, et nesciunt recusandae doloribus odit omnis quaerat deserunt adipisci qui ratione. Sapiente unde aut possimus vitae. Quisquam doloribus minima totam recusandae perferendis porro deserunt vero.',
      jobTitle: 'Dev C++',
      name: 'Jon Kan'
    },
  ])

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const lastIndex = reviews.length - 1
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex)
    } else if (currentIndex > lastIndex) {
      setCurrentIndex(0)
    }
  }, [currentIndex, reviews.length])

  useEffect(() => {
    const slider = setInterval(() => setCurrentIndex(currentIndex + 1), 5000)
    return () => {
      clearInterval(slider)
    }
  }, [currentIndex])


  return (
    <div className={style.wrapper}>
      <div className={style.leftArrow} onClick={() => setCurrentIndex(currentIndex - 1)}>
        <img src={leftArrow} alt="leftArrow" />
      </div>

      <div className={style.wrapperReviews}>
        {reviews.map((person, personIndex) => {

          let position = style.nextSlide
          if (personIndex == currentIndex) {
            position = style.activSlide
          }

          if (personIndex == currentIndex - 1 || currentIndex == 0 && personIndex == reviews.length - 1) {
            position = style.lastSlide
          }

          return <article className={position} key={person.id}>
            <p>{person.theContentsOfTheReview}</p>
            <div>
              <h3>{person.jobTitle}</h3>
              <p>{person.name}</p>
            </div>
          </article>
        })}

        <div className={style.indicator}>
          <p>{currentIndex + 1} from {reviews.length}</p>
        </div>
      </div>


      <div className={style.rightArrow} onClick={() => setCurrentIndex(currentIndex + 1)}>
        <img src={rightArrow} alt="rightArrow" />
      </div>
    </div>
  );
}

export default Slider;
