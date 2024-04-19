'use client'

import Link from "next/link"
import Image from "next/image"

import './ProfileCourse.css'

export default function ProfileCourse (props) {
  const {
    courses
  } = props

  return (
    <div className="profile-cource">
      <div className="profile-cource__header">
        <h1 className="profile-cource__title">Мои курсы</h1>
        <p className="profile-cource__description">Выберите ваш созданый курс для редактирования</p>
      </div>
      <ul className="profile-cource__list">
        {
          courses.map(item => (
            <li className="profile-cource__list-item" key={item.course_id}>
              <div className="profile-cource__list-image">
              <Image 
                src={'/course.png'}
                alt="course"
                width={320}
                height={140}
              />
              </div>
              <Link href={`./course/${item.course_id}`}>
                <h2 className="profile-cource__list-title">Мой курс</h2>
              </Link>
              <p className="profile-cource__list-description">Описание курса</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}