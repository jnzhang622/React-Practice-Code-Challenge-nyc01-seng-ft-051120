import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let { sushis, renderFour} = props

  const filter = (arr, renderFour) => {
    return arr.slice(renderFour, renderFour+4)
  }

  return (
    <Fragment>
      <div className="belt">
        {
          filter(sushis, renderFour).map(sushi =>
            <Sushi key={sushi.id} sushi={sushi} eaten={false}/>)
          }
        
        <MoreButton sushis={sushis} moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer