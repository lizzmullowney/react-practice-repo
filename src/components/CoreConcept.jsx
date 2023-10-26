
import componentsImg from '../assets/components.png'

import { CORE_CONCEPTS } from '../data.js';


function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default CoreConcept;