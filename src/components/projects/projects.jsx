import React, {useState} from 'react'
import Modal from '../../common/modal/modal'

const Projects = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <h1>Projects</h1>
            <button onClick={() => setModalActive(true)}>Добавить проект</button>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default Projects
