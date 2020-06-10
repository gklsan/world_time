import React, { useState } from 'react'
import MomentTimezone from 'moment-timezone';
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const TimezoneItem = (props) => {
  const {name, timezones} = props.item;
  const [modalShow, setModalShow] = useState(false)

  const timeZones = () => {
    let hash = {}
    timezones.forEach(tz => {
      const dateTime = MomentTimezone().tz(tz).format('DD-MM-YYYY hh:mm A')
      if(!hash[dateTime]) hash[dateTime] = [];
      hash[dateTime].push(tz)
    })
    return hash
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter text-uppercase">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            Object.keys(timeZones()).map(key => <div key={key}>
              <p>
                <span className="font-weight-bold">{ MomentTimezone().tz(timeZones()[key][0]).format('DD-MM-YYYY hh:mm A ')}</span>
                -
                { timeZones()[key].join(', ') }
              </p>
            </div>)
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className='mt-3'>
      {
        <p className="country_name" onClick={() => setModalShow(true)}>{name}</p>
      }
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default TimezoneItem
