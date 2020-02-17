import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBar = ({onChangeHandler}) => {
  return <div className="col-11">
    <Form.Group>
      <Form.Control className="col-md-10 ml-4 text-center" type="email" placeholder="Search by country name..."  onChange={onChangeHandler}/>
    </Form.Group>
  </div>
}

export default SearchBar
